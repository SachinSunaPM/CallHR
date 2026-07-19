# Development workflow

This document explains the simple Git workflow we will use while building CallHR.

## Common Git words

### Repository

A repository, often called a repo, is the project folder and its saved history. It lets the team track changes safely over time.

### Branch

A branch is a separate line of work. It lets someone make a change without changing the main version of the project immediately.

### Commit

A commit is a saved checkpoint of changes in Git. A good commit has a short message that explains what changed.

### Push

To push means to send commits from your computer to the shared remote repository, such as GitHub.

### Pull

To pull means to bring the newest shared changes from the remote repository onto your computer.

### Pull request

A pull request is a request to review changes from one branch before adding them to another branch. It gives other people a chance to check the work.

### Merge

To merge means to combine approved changes from one branch into another branch, usually into the main branch.

## Our phase-by-phase workflow

We will build CallHR in small approved phases. Each phase should have one clear goal.

1. Read the approved plan for the current phase.
2. Create or use a branch for that phase when the project workflow calls for it.
3. Make only the changes needed for that phase.
4. Keep changes small and explain them in plain language.
5. Run the checks and tests that apply to the phase.
6. Review the changed files and open a pull request when the work is ready for review.
7. Merge only after the review is approved.

## Testing before merging

Every phase must be tested before it is merged. Testing means checking that the phase's changes work as expected and do not create obvious problems. The exact checks will depend on the phase. For documentation-only work, this can include checking the Git diff for formatting problems and reviewing the changed files.
