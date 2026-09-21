# test-private-package-npm

Consumer probe for Endor Labs **GitHub App** + **Google Artifact Registry** private npm resolution.

- Depends on `@tgowan-endor/helloworld-npm@1.1.0` published to `gowan-sandbox` / `endor-probe-npm`
- Tenant path: `endor-solutions-tgowan.gh_personal`
- **No secrets in this repo** — registry auth is the tenant `PackageManager` (GAR auth provider)
- Do not put `.npmrc` tokens here; GH App scans inject credentials from Endor

Scan success here validates that the PackageManager GAR integration can resolve the private coordinate during agentless scans.
