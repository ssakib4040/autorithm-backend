# Husky Configuration

This project uses Husky for Git hooks to ensure code quality and consistency.

## Git Hooks

### Pre-commit Hook
Runs before each commit:
- ✅ ESLint - Checks code quality
- ✅ Jest Tests - Runs test suite in CI mode

### Pre-push Hook
Runs before pushing to remote:
- ✅ Full Test Suite with Coverage
- ✅ Build - Ensures production build succeeds

### Commit Message Hook
Validates commit message format:
- ✅ Follows Conventional Commits specification

## Commit Message Format

All commit messages must follow this format:

```
type(scope): subject
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semi-colons, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `perf` - Performance improvements
- `ci` - CI/CD changes
- `build` - Build system changes
- `revert` - Revert previous commit

### Examples

✅ Good commit messages:
```
feat(auth): add user registration endpoint
fix(products): resolve pagination bug
docs(readme): update API documentation
test(orders): add integration tests for payment flow
chore(deps): update dependencies
```

❌ Bad commit messages:
```
updated files
fixed bug
WIP
asdfasdf
```

## Bypassing Hooks (Not Recommended)

In rare cases, you can skip hooks:

```bash
# Skip pre-commit hook
git commit --no-verify -m "message"

# Skip pre-push hook
git push --no-verify
```

⚠️ **Warning**: Only use `--no-verify` in emergencies. Skipping hooks can introduce bugs.

## Manual Validation

Run all checks manually:

```bash
# Run linting
yarn lint

# Run linting with auto-fix
yarn lint:fix

# Run tests
yarn test

# Run tests in CI mode with coverage
yarn test:ci

# Run all validations (lint + test + build)
yarn validate
```

## Troubleshooting

### Hook not executing
```bash
# Reinstall husky
yarn prepare
chmod +x .husky/*
```

### Tests failing
```bash
# Run tests locally
yarn test:watch

# Check specific test file
yarn test path/to/test.ts
```

### Build failing
```bash
# Run build locally
yarn build

# Check for TypeScript errors
npx tsc --noEmit
```
