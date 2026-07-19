# CallHR project rules

These rules guide future Codex work in this repository.

## Scope and workflow

- Work on only one approved phase at a time.
- Stop and explain the situation if the approved plan needs to change.
- Do not change unrelated files.
- Prefer small changes that are easy to review.
- Run relevant checks before saying a task is complete.
- List every changed file after completing a task.
- Do not commit or push unless the user explicitly asks.

## Clear communication

- Explain technical terms in simple language for beginners.
- Say what changed, why it changed, and what checks were run.

## Security, privacy, and accessibility

- Do not invent custom encryption. Encryption is a way to protect information by making it unreadable without the correct key.
- Use established, maintained security libraries instead of building security features from scratch.
- Never place passwords, API keys, tokens, email credentials, or private keys in Git.
- Protect accessibility, security, and user privacy in every change.

## MVP boundaries

- The MVP is web-only, one-to-one, audio-only, and connection-based.
- Users must be connected before messaging, file sharing, scheduling, or calling.
