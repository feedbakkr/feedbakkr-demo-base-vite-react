# Security

`feedbakkr-demo-base-vite-react` follows the [Feedbakkr org dependency-scanning
policy][org-policy]. This is a demo / reference project — not deployed.

[org-policy]: https://github.com/feedbakkr/feedbakkr/blob/main/docs/security-dependency-scanning.md

## Workflows

- **`security-pr.yml`** — runs `pnpm audit --audit-level high` on every PR
  against `master`. **Blocking.**
- **`security-scheduled.yml`** — nightly (05:30 UTC) + `workflow_dispatch`.
  Runs `pnpm audit --audit-level moderate` plus OSV-Scanner. Reporting-only.

## Local scans

```bash
pnpm run security:audit
pnpm run security:scan:full        # audit:moderate + osv-scanner
```

Install osv-scanner locally (macOS): `brew install osv-scanner`.

## Snapshot at rollout

No high advisories. PR audit blocking from day one.
