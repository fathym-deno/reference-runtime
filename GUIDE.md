---
FrontmatterVersion: 1
DocumentType: Guide
Title: Reference Runtime Guide
Summary: Playbook for designing and maintaining the Fathym reference runtime (@fathym/runtime).
Created: 2025-11-20
Updated: 2025-11-20
Owners:
  - fathym
References:
  - Label: Project README
    Path: ./README.md
  - Label: Project Agents Guide
    Path: ./AGENTS.md
  - Label: Projects: Ref-Arch README
      Path: ../README.md
  - Label: Projects: Ref-Arch Guide
      Path: ../GUIDE.md
  - Label: Root Workspace Guide
    Path: ../../../WORKSPACE_GUIDE.md
---

# Reference Runtime Guide

Use this playbook to keep Fathym runtime work predictable and discoverable.

## Current Focus

- Lift runtime-level helpers out of `@fathym/common` into `@fathym/runtime` (deno-kv, fluent, oauth, workers/services, tailwind utils).
- Keep dependency direction clean: `@fathym/common` → `@fathym/runtime` → DFS/CLI/product runtimes.
- Document how downstream runtimes and CLIs should import runtime helpers.

## Workflow

1. **Align scope** in [`README.md`](./README.md): record intended changes (module moves, new runtime helpers, breaking changes).
2. **Design contracts**: capture runtime APIs (e.g., oauth helpers, deno-kv utilities) in docs with frontmatter and references to upstream assumptions.
3. **Capture provenance**: note external packages and version pins in `UPSTREAM.md` when vendoring or binding to third-party tooling.
4. **Validate behavior**: keep unit/integration tests for key runtime flows (oauth, kv, workers) under `tests/` and wire them into `deno.jsonc` tasks.
5. **Coordinate with dependents**: when changing runtime contracts, link and notify dependent pods (CLI, DFS, product runtimes) and add migration notes.

## Verification

- Ensure Instruction Documents stay in sync with exported modules and dependency rules.
- When workspace tasks exist, also run: `deno task prompts:verify-frontmatter`, `deno task link:verify`, `deno task workspace:check`.
