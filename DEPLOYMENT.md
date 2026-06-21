# Deploying Tree Lane to cPanel (bestcom)

This document explains how the Tree Lane site is deployed, the mistakes we hit
while setting it up, how each was fixed, and a short checklist for doing it
again on another site.

---

## 1. How it works (architecture)

Tree Lane is a **Next.js app running as a Node.js application** under cPanel's
Phusion Passenger. It is **not** a static export — it has a server-side API
route (`/api/tour`) that powers the tour-request form, so it must run as a live
Node process.

Deployment is **fully automated** with GitHub Actions:

```
git push origin main
        │
        ▼
GitHub Actions (.github/workflows/deploy.yml)
  1. npm install
  2. npm run build         → produces .next/standalone (self-contained server)
  3. stage a deploy/ bundle (standalone + public + static + Passenger app.js)
  4. tar + scp the bundle to the server over SSH
  5. untar into ~/treelane and touch tmp/restart.txt
        │
        ▼
cPanel Passenger restarts the app → https://treelaneafh.com serves the new build
```

You never deploy by hand. **Edit → commit → `git push` → live in ~2 minutes.**

---

## 2. The environment (real values)

| Thing | Value |
|---|---|
| Host (cPanel server) | `server1.bestcomtz.com` (203.161.33.18) — provider **bestcom** |
| SSH port | **22** (6646 is closed on this host) |
| SSH user | `treelane` |
| Deploy key | passphraseless ed25519 at `~/.ssh/treelane_deploy` (local) |
| App directory on server | `~/treelane` (= `/home/treelane/treelane`) |
| cPanel Node app "Application root" | `treelane` |
| cPanel Node app "Startup file" | `app.js` |
| Live URL | https://treelaneafh.com |
| GitHub repo | github.com/matabapersonal/treelane |

> ⚠️ **bestcom is the host — not duhosting.** `simba.duhosting.tz:6646` is a
> *different* server (it hosts SavaPath). Same provider family, different box.
> Don't reuse SavaPath's host/port for Tree Lane.

---

## 3. Code configuration

### `next.config.ts`
```ts
const nextConfig: NextConfig = {
  output: "standalone",        // self-contained server.js + slim node_modules
  images: { unoptimized: true } // cPanel has no image-optimization service
};
```

### GitHub secrets (repo → Settings → Secrets and variables → Actions)
| Secret | Value |
|---|---|
| `SSH_HOST` | `server1.bestcomtz.com` |
| `SSH_USER` | `treelane` |
| `SSH_PRIVATE_KEY` | full contents of `~/.ssh/treelane_deploy` (passphraseless) |

### The workflow
See `.github/workflows/deploy.yml`. Key details:
- Uses **`npm install`** (not `npm ci`) — see Mistake #1.
- Copies `public/` and `.next/static/` into the bundle manually — standalone
  output does **not** include them.
- Generates a Passenger `app.js` that `require()`s `server.js` with crash
  logging to `~/treelane/crash.log`.
- `scp -P 22` + `ssh -p 22` to `treelane@server1.bestcomtz.com`, target dir
  `treelane`.

---

## 4. One-time setup (already done — for reference / next site)

1. **cPanel → Setup Node.js App → Create Application**
   - Application root: `treelane`
   - Startup file: `app.js`
   - Mode: Production, newest Node version.
2. **Generate a passphraseless deploy key locally** (cPanel forces a passphrase,
   which CI can't use — so generate on your Mac instead):
   ```bash
   ssh-keygen -t ed25519 -f ~/.ssh/treelane_deploy -N "" -C "treelane-deploy"
   ```
3. **Authorize the public key on the server** — cPanel → SSH Access → Manage SSH
   Keys → Import Key → paste `~/.ssh/treelane_deploy.pub` → **Authorize**.
   (Or paste it into `/home/treelane/.ssh/authorized_keys`, perms `.ssh`=700,
   file=600.)
4. **Add the 3 GitHub secrets** above (CLI: `gh secret set SSH_HOST -b "..."`).
5. **Push to `main`** to trigger the first deploy.

---

## 5. What we did wrong, and how we fixed it

A log of every wall we hit, so the next person doesn't repeat them.

### Mistake #1 — `npm ci` failed: "lock file out of sync"
**Symptom:** the deploy failed at *Install dependencies* with
`Missing: @emnapi/* from lock file`.
**Cause:** Tailwind v4's native packages (lightningcss/oxide, `@emnapi`) have
**platform-specific optional dependencies**. A `package-lock.json` generated on
macOS doesn't perfectly match what the Linux CI runner expects, and `npm ci` is
strict about exact matches.
**Fix:** changed the workflow from `npm ci` to `npm install --no-audit --no-fund`,
which resolves dependencies per-platform.

### Mistake #2 — wrong SSH host (the big one)
**Symptom:** deploy reached the SSH step but got `Permission denied (publickey)`;
local tests with the (correct) key were also rejected, even after the key showed
**"authorized"** in cPanel.
**Cause:** we guessed the host as `simba.duhosting.tz:6646` from the Mac's
`known_hosts`. **That is SavaPath's server, a different box.** The key was
correctly authorized on bestcom's `server1.bestcomtz.com`, so the *other* server
rejected it. We were knocking on the wrong door.
**How we found it:** the cPanel File Manager URL showed
`server1.bestcomtz.com:2083`.
**Fix:** set `SSH_HOST=server1.bestcomtz.com`.

### Mistake #3 — wrong SSH port
**Symptom:** connecting to bestcom on 6646 timed out.
**Cause:** assumed port 6646 (it's what SavaPath's *different* host uses).
**Fix:** a port scan showed bestcom has **22 open, 6646 closed**. Set the
workflow to port 22. (This matched the user's memory that "22 worked.")

### Mistake #4 — temporary IP ban during testing
**Symptom:** after a few failed `ssh` attempts, the host stopped responding even
to a port check.
**Cause:** cPanel's brute-force protection (cPHulk) temporarily blocked the
testing IP after repeated auth failures.
**Fix:** wait a few minutes for the block to clear; use
`-o IdentitiesOnly=yes` so ssh offers only the deploy key (avoids
"Too many authentication failures" from agent keys).

### Non-issue we initially suspected
We briefly thought SSH might be disabled at the host level and that we'd need to
contact support. **Not the case** — it was purely the wrong host + port. No
support ticket was needed.

### Key fact confirmed
- `output: "standalone"` does **not** bundle `public/` or `.next/static/` — the
  workflow must copy them in, or the site loads with no CSS/images.

---

## 6. Summary — what to do

### To deploy a change (the normal case)
```bash
# edit files...
git add -A
git commit -m "your change"
git push origin main
```
Watch it: GitHub repo → **Actions** tab (or `gh run watch`). Done in ~2 min.

### To verify a deploy
- Visit https://treelaneafh.com
- Check the tour form backend is alive:
  ```bash
  curl -s -o /dev/null -w "%{http_code}\n" -X POST \
    https://treelaneafh.com/api/tour -H "Content-Type: application/json" -d '{}'
  # 422 = running (validation). 404 = app not running.
  ```

### If a deploy goes red
1. Open the failed run in the **Actions** tab and read the failing step.
2. `npm` errors → dependency/lockfile issue.
3. SSH errors (`Permission denied` / timeout) → check the 3 secrets and that the
   key is still authorized on the server.

### If the site is blank or 500 after a green deploy
SSH in and read the crash log:
```bash
ssh -i ~/.ssh/treelane_deploy -p 22 -o IdentitiesOnly=yes \
  treelane@server1.bestcomtz.com "tail -30 ~/treelane/crash.log"
```

### Golden rules for setting this up on a new site
1. **Find the real host first** — it's in the cPanel browser URL
   (`https://THE-REAL-HOST:2083/...`). Don't guess from `known_hosts`.
2. **Find the real port** — `nc -z -G5 HOST 22` / `nc -z -G5 HOST 6646`.
3. Generate the deploy key **locally** (passphraseless); only import the
   **public** half into cPanel and **authorize** it.
4. The cPanel Node app **Application root** must equal the workflow's remote dir.
5. Copy `public/` + `.next/static/` into the standalone bundle.
6. Use `npm install` if the project has platform-specific native deps.
