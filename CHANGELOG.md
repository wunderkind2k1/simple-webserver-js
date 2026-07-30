# Changelog

Notable changes to this demo app. Use it as a reference for wiring BeforeProd preview deployments into a JS/Next.js repo.

## [Unreleased]

### Changed
- Deploy workflow requests `pull-requests: write` so the BeforeProd action can write the preview URL into the PR body
- Cleanup workflow requests `pull-requests: read` to read that URL when the PR closes
- Workflows use Node 24–compatible GitHub Actions (`checkout@v7`, `setup-node@v7`)
- App stack updated to Next.js 16, React 19, ESLint 9, and Node 24 in CI
- Removed unused `upload-artifact` step from the deploy workflow

## [0.1.0] - 2024-12-19

### Added
- Minimal Next.js app used as a BeforeProd preview-deployment example
- PR workflows for deploy and cleanup via `beforeprod-com/preview-deployment-action`
