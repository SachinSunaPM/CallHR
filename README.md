# CallHR

CallHR is a planned web application for private, one-to-one communication between people who have chosen to connect with each other. The MVP (Minimum Viable Product, the smallest useful first version) will focus on audio calls and connected users.

## Current project status

CallHR is in the planning and documentation stage. It is not yet an application, and it is not ready for real users or production use.

## Phase 1A commands

This phase adds a small browser frontend and backend health check. Install the project packages, then run the checks with:

```sh
npm install
npm run typecheck
npm run test
npm run build
```

To start the frontend and backend together during local development, run `npm run dev`. The backend listens on `http://localhost:3000` by default, and the frontend uses the address Vite displays in the terminal.

## Planned MVP features

The first version of CallHR is planned to include:

- A web-only experience that works in a browser.
- One-to-one connections between users.
- Audio-only calls. Video calls are not part of the MVP.
- Messaging between users who are connected.
- File sharing between users who are connected.
- Scheduling between users who are connected.
- Privacy and security protections designed before features are built.

Users must be connected before they can message, share files, schedule, or call each other.

## Features outside the MVP

These ideas are not part of the first version:

- Mobile apps.
- Group chats or group calls.
- Video calls.
- Public profiles or open messaging with strangers.
- Recording audio calls.

## Beginner-friendly development workflow

We will build CallHR one approved phase at a time. For each phase:

1. Read the approved plan and work only on that phase.
2. Make small changes that are easy for someone else to review.
3. Explain technical words in simple language.
4. Test the changes that apply to the phase.
5. Review the changed files before asking for a merge.

See [the development workflow](docs/development-workflow.md) for explanations of common Git words and the phase-by-phase process.

## Important warning

This project is not production-ready. Do not use it to handle real private conversations, sensitive files, passwords, or other important personal information until its security design, implementation, and testing are complete.

## License

CallHR is licensed under the [Apache License 2.0](LICENSE).
