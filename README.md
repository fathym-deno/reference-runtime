---
FrontmatterVersion: 1
DocumentType: Guide
Title: Fathym Reference Runtime (@fathym/runtime)
Summary: Runtime layer for Fathym (deno-kv, fluent, oauth, workers/services, tailwind-oriented utils).
Created: 2025-11-20
Updated: 2025-11-20
Owners:
  - fathym
References:
  - Label: Projects: Ref-Arch README
      Path: ../README.md
  - Label: Projects: Ref-Arch AGENTS
      Path: ../AGENTS.md
  - Label: Projects: Ref-Arch Guide
      Path: ../GUIDE.md
  - Label: Root README
    Path: ../../../README.md
  - Label: Root Agents Guide
    Path: ../../../AGENTS.md
  - Label: Root Workspace Guide
    Path: ../../../WORKSPACE_GUIDE.md
---

# Fathym Reference Runtime (@fathym/runtime)

Runtime-focused utilities layered on top of `@fathym/common`: deno-kv helpers, fluent interfaces, OAuth/JWT helpers, worker/service primitives, and tailwind-focused utils.

- **Goal:** host runtime-level building blocks while keeping `@fathym/common` lean.
- **Outputs:** runtime library exports, build/test tasks, and integration docs for downstream runtimes and CLIs.
- **Code location:** `projects/ref-arch/reference-runtime/`.

## Current Status

- Modules moved here from `@fathym/common`: `deno-kv`, `fluent`, `oauth`, `services`, `workers`, and tailwind-oriented utils.
- Entry point `mod.ts` exports runtime modules via `src/.exports.ts`; tasks defined in `deno.jsonc`.
- Adjust imports in downstream packages to target `@fathym/runtime` for runtime helpers.

## How to Work in This Pod

1. Review parent Instruction Documents (`../README.md`, `../AGENTS.md`, `../GUIDE.md`).
2. Declare intent before editing; summarize outcomes and open questions in this README.
3. Keep links relative; record prompt/script usage in References when applicable.
4. Update `UPSTREAM.md` if vendoring or pinning external sources.
