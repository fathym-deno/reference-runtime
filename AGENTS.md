---
FrontmatterVersion: 1
DocumentType: Guide
Title: Reference Runtime Agents Guide
Summary: Guardrails for collaborating on the Fathym reference runtime pod.
Created: 2025-11-20
Updated: 2025-11-20
Owners:
  - fathym
References:
  - Label: Project README
    Path: ./README.md
  - Label: Project Guide
    Path: ./GUIDE.md
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

# AGENTS: Reference Runtime

Guardrails for humans and AI collaborating on the Fathym reference runtime pod.

## Core Guardrails

1. **Stay scoped.** Keep runtime work inside `projects/ref-arch/reference-runtime/` unless explicitly coordinating with another pod; link cross-pod changes.
2. **Frontmatter required.** Every Markdown doc uses frontmatter and document-relative references back to parent guides.
3. **Runtime only.** Reserve this pod for runtime-level concerns (deno-kv, fluent, oauth, workers/services, tailwind utils); keep generic utilities in `@fathym/common`.
4. **Provenance and contracts.** Capture upstream sources and API contracts in `UPSTREAM.md` or docs; avoid silent breaking changes and document migrations.
5. **Cross-pod awareness.** When changes impact CLIs, DFS, or product runtimes, reference their Instruction Documents and note dependencies in both directions.

## Communication

- Declare intent before editing; summarize outcomes and next steps in the project README or a small log.
- Keep links relative; record prompts or scripts used when shaping runtime features or workflows.
