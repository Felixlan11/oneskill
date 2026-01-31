---
name: oneskill
description: Discover skills, iterate on queries, and automate skill installations for any environment.
---

# OneSkill Meta-Manager

Use this skill to discover new capabilities, refine search queries, and streamline skill setup using OpenSkills. This provides a unified way to expand your environment's features.

## When to Use

- When a user asks for capabilities you do not currently have.
- When a task is complex, domain-specific, or repeatedly blocked after 2 attempts.
- When a better skill likely exists (e.g., web browsing, GitHub integration, database management, cloud infrastructure).

## Workflow

1. Search the registry:
   - Run: `npx oneskill search "<query>" [options]`
   - Supported options: `--category`, `--limit`, `--offset`, `--sort`.
   - Examples:
     - `npx oneskill search "browser" --sort stars`
     - `npx oneskill search "" --category database --limit 5`
2. Analyze results:
   - Pick the best match.
   - Record BOTH `slug` and `repository`.
   - Treat `slug` as a registry ID / skill selector label, NOT an OpenSkills install source.
3. Confirm with the user:
   - Explain what the skill does and where it comes from.
4. Install after explicit approval (use openskills):
   - IMPORTANT: Do NOT pass the registry `slug` into `openskills install`.
   - Use the `repository` field from `oneskill search` results as the install source:
     - Run: `npx openskills install <repository>` (e.g., `wshobson/agents`)
   - If the repo contains many skills, install without `-y` and select ONLY the needed skill(s) in the picker (by skill name/slug).
5. Handle environment-specific setup:
   - **Gemini CLI Users:** `openskills` does not automatically configure Gemini. You MUST run the mapping command after installation:
     - `npx oneskill map --target gemini` (add `--global` if installed globally)
6. Apply the new skill to finish the original request.

## OpenSkills Basics

- `npx openskills install <source> [options]`  # Install from GitHub, local path, or private repo
- `npx openskills sync [-y] [-o <path>]`       # Update AGENTS.md (or custom output)
- `npx openskills list`                        # Show installed skills
- `npx openskills read <name>`                 # Load skill (for agents)
- `npx openskills update [name...]`            # Update installed skills (default: all)
- `npx openskills manage`                      # Remove skills (interactive)
- `npx openskills remove <name>`               # Remove specific skill

Examples:
- `npx openskills install anthropics/skills`
- `npx openskills sync`

Defaults: Installs are project-local (`./.claude/skills`, or `./.agent/skills` with `--universal`). Use `--global` for `~/.claude/skills`.

## Safety Reminders

- Do not install without explicit user confirmation.
- Avoid `--force-map` unless the user agrees to overwrite an existing target.
- Use openskills for installation/updates; OneSkill only searches and maps for Gemini.
- For Gemini, run `npx oneskill map --target gemini` after installs.
- Default install/map is project-local, same as openskills; use `--global` for global installs.
- When installing OneSkill itself, recommend `--global` so it is available across projects.
