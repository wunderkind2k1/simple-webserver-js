# Changelog

Notable changes to this demo app. Use it as a reference for wiring BeforeProd preview deployments into a JS/Next.js repo.

## [Unreleased]

### Changed
- Deploy workflow requests `pull-requests: write` so the BeforeProd action can write the preview URL into the PR body
- Cleanup workflow requests `pull-requests: read` to read that URL when the PR closes

## [0.1.0] - 2024-12-19

### Added
- Minimal Next.js app used as a BeforeProd preview-deployment example
- PR workflows for deploy and cleanup via `beforeprod-com/preview-deployment-action`
