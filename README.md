<div align="center">

# OneSkill: One to Manage Them All

**The "App Store" for your AI Agent.**  
Discover, install, and map thousands of new capabilities instantly with one click.

[![](https://img.shields.io/npm/v/oneskill?color=brightgreen)](https://www.npmjs.com/package/oneskill)
[![](https://img.shields.io/npm/l/oneskill)](LICENSE)

[**English**](README.md) | [**中文指南**](README_CN.md)

</div>

---

## 💡 Why OneSkill?

Your AI Agent is strong, but it can be even stronger.

**OneSkill** is the bridge connecting your Agent to the massive [OpenSkills](https://github.com/Starttoaster/openskills) ecosystem (which can be complex to navigate and install manually). By installing just this one tool, your Agent gains the ability to evolve itself: **discover new skills, install them more easily, and support a wide range of tools like Codex, Gemini, and more.**

No more manual file downloads or configuration edits. Everything is automated.

## 🚀 Core Value

*   **Massive Skill Library**: Instantly connect to thousands of community-maintained Skills (Web browsing, Database management, Code auditing, Cloud infrastructure ops, etc.).
*   **One-Click Installation**: A single command handles downloading, dependency resolution, and environment configuration.
*   **Perfect Gemini Adaptation**: Developed the `map` feature for Gemini CLI, automatically injecting Skills downloaded via OpenSkills into Gemini's path.

---

## ⚡️ Quick Experience

### Step 1: Install OneSkill (Once only)

```bash
# Install the core tool
npx openskills install xu-xiang/oneskill --global

# (Only required for Gemini users) Map OneSkill itself to .gemini
npx oneskill map --target gemini --global
```

### Step 2: Unlock Infinite Possibilities

Once installed, simply ask your Agent (Claude Code, Codex, Gemini-cli, etc.) to find and recommend suitable skills or use natural language to have it check for a skill to solve the problem at hand. OneSkill will handle the rest.

#### Scenario Demo: Autonomous Evolution in Chat

You don't even need to leave the chat window. Just tell your Agent what you need, and let OneSkill do the heavy lifting.

The following real chat record shows how an Agent instantly gains **FastAPI development capabilities** via OneSkill:

```text
> Find me a production-ready template for FastAPI. I want to build a project quickly.

✦ Sure, I'll use oneskill to search for relevant Skills.

  ╭── Shell: npx oneskill search "fastapi template" ───────────────────────────╮
  │                                                                            │
  │ {                                                                          │
  │   "items": [
  │     {
  │       "slug": "wshobson-fastapi-templates",                                │
  │       "description": "Production-ready FastAPI project structures...",     │
  │       "repository": "wshobson/agents",                                     │
  │       "stars": 23027                                                       │
  │     }
  │   ]
  │ }
  ╰────────────────────────────────────────────────────────────────────────────╯

✦ Found `wshobson-fastapi-templates` in the `wshobson/agents` repository.
  This is a very popular Skill (23k+ stars) that provides a production-grade project structure. Would you like me to install it for you?

> Yes, install it.

✦ Installing and configuring for Gemini...

  ╭── Shell: npx openskills install wshobson/agents && npx oneskill map ───────╮
  │                                                                            │
  │ ✔ Repository cloned                                                        │
  │ Found 140 skill(s)                                                         │
  │                                                                            │
  │ ? Select skills to install: (Press <space> to select, <i> to invert)       │
  │ ❯ ◉ fastapi-templates                                                      │
  │   ◯ architecture-patterns                                                  │
  │   ◯ api-design-principles                                                  │
  │   ↓ Scroll down for more...                                                │
  │                                                                            │
  │ [Agent Action]: Selected 'fastapi-templates' and confirmed                 │
  │                                                                            │
  │ ✅ Installed: fastapi-templates                                            │
  │                                                                            │
  │ [Auto-trigger mapping]                                                     │
  │ ✔ Mapped 1 skills to Gemini CLI configuration.                             │
  ╰────────────────────────────────────────────────────────────────────────────╯

✦ Installation complete! I have learned `fastapi-templates`.
  Now you can ask me: "How do I use this template to create a new project with async mode?"
```

**💥 Result**: The Agent automatically completed the search, download, filtering, and environment configuration without you having to type a single command.

---

## 📖 Command Reference (Generally, you should use natural language in AI tools; no manual execution required)

### 1. 🔍 Discovery (`search`)
Don't know what to install? Let OneSkill help you find it.
```bash
npx oneskill search "web browser"        # Search for web browsing related skills
npx oneskill search "database" --sort stars  # Search for the most popular database skills
```

### 2. ⬇️ Installation (`openskills install`)
Use the standard OpenSkills command for downloads.
```bash
npx openskills install <repository-name>
# Example: npx openskills install anthropics/skills
```

### 3. 🔌 Environment Mapping (`map`)
**Required for Gemini users ONLY**
```bash
npx oneskill map --target gemini
# If the skill was installed globally, remember to add --global
# npx oneskill map --target gemini --global
```

### 4. 📋 View Installed (`list`)
```bash
npx openskill list
```

---

<div align="center">
  <sub>Built with ❤️ by the OneSkill Community</sub>
</div>
