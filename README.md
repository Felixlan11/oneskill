# OneSkill

OneSkill is a discovery and orchestration skill for AI coding agents. It helps agents search for skills, iterate on queries, and then use OpenSkills for installation. For Gemini, OneSkill adds a directory mapping step so installed skills are visible to Gemini CLI.

Inspired by OpenSkills: universal SKILL.md compatibility, agent-first workflows, and progressive disclosure.

## What Is OneSkill

- Discovery layer for skills (search + query refinement).
- Orchestration guidance for OpenSkills installs.
- Gemini mapping to `.gemini/skills`.

## Quick Start (Gemini)

```bash
npx oneskill search "nuclei"
```

```bash
npx openskills install <slug-or-repo>
```

```bash
npx oneskill map --target gemini
```

## Install OneSkill as a Skill (Recommended Global)

```bash
npx openskills install <oneskill-repo-or-slug> --global
```

```bash
npx oneskill map --target gemini --global
```

## Quick Start (Other Agents)

```bash
npx oneskill search "<query>"
npx openskills install <slug-or-repo>
```

## Why OneSkill

- Agent-native flow: search, refine, confirm, then install with OpenSkills.
- Gemini support: maps OpenSkills installs into `.gemini/skills`.
- Minimal surface area: keep installs/updates in OpenSkills to avoid drift.

## How It Works

1. Search the Skills Directory registry with OneSkill.
2. Agent refines the query if needed and chooses a skill.
3. Install using OpenSkills (keeps full OpenSkills behavior intact).
4. If using Gemini, map installed skills into `.gemini/skills`.

## Commands

- `search <query>`: Query the registry and return Agent-friendly JSON.
- `search` options: `--category <slug>` `--limit <n>` `--offset <n>` `--sort <votes|recent|stars>`
- `info <slug>`: Fetch skill details and safety signals.
- `list`: Forward to openskills list.
- `doctor`: Report detected root and mapped paths.
- `sync`: Forward to openskills sync (AGENTS.md).
- `map`: Map installed skills into Gemini directory (uses openskills install locations).

## OpenSkills Compatibility

OpenSkills is the installer and runtime loader for SKILL.md. It writes the skills list into `AGENTS.md`, so any agent that can read `AGENTS.md` can load skills. OneSkill only adds search + Gemini mapping.

- Default installs are project-local in `./.claude/skills` (or `./.agent/skills` with `--universal`).
- Use `--global` for `~/.claude/skills`.

## Mapping (Gemini)

Map skills installed by OpenSkills into Gemini's directory:

```bash
npx oneskill map --target gemini
```

Use `--global` to map global installs and `--universal` for `.agent/skills`.

## Logs

- Logs: `ROOT/.oneskill/logs/*.jsonl`

## Safety Defaults

- No interactive prompts; agents must confirm intent before installing.
- Mapping conflicts are blocked unless `--force-map` is provided.

## Requirements

Node.js >= 20.6.0
