# 🛠️ Quality Assurance Tools Guide

## Overview
This document outlines all QA tools configured for the BioNXA Learning Platform to ensure code quality, prevent bugs, and maintain high standards.

---

## 🔍 **1. ESLint - Code Quality**

### What it does:
- Catches common JavaScript/TypeScript errors
- Enforces code style consistency
- Identifies problematic patterns

### How to use:
```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Configuration:
- File: `.eslintrc.json`
- Rules: Strict TypeScript, React best practices
- Plugins: TypeScript, React, React Hooks

---

## 💅 **2. Prettier - Code Formatting**

### What it does:
- Auto-formats code for consistency
- Removes style debates from code reviews
- Integrates with ESLint

### How to use:
```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### Configuration:
- File: `.prettierrc.json`
- Settings: Single quotes, no semicolons, 100 char width

---

## 🧪 **3. Jest - Unit Testing**

### What it does:
- Tests individual functions and components
- Measures code coverage
- Catches regressions early

### How to use:
```bash
# Run tests in watch mode
npm run test

# Run all tests once (CI mode)
npm run test:ci

# Run with coverage report
npm run test:ci
```

### Configuration:
- File: `jest.config.js`
- Setup: `jest.setup.js`
- Tests location: `__tests__/`
- Coverage threshold: 50% (branches, functions, lines, statements)

### Example Test:
```typescript
// __tests__/lib/supabase.test.ts
import { isSupabaseConfigured } from '@/lib/supabase'

describe('Supabase Client', () => {
  it('should be configured', () => {
    expect(typeof isSupabaseConfigured).toBe('boolean')
  })
})
```

---

## 🎭 **4. Playwright - E2E Testing**

### What it does:
- Tests complete user workflows
- Validates UI across browsers
- Screenshots on failures

### How to use:
```bash
# Run E2E tests
npm run test:e2e

# Run with UI (interactive)
npm run test:e2e:ui

# Run specific test
npx playwright test e2e/homepage.spec.ts
```

### Configuration:
- File: `playwright.config.ts`
- Tests location: `e2e/`
- Browsers: Chromium, Mobile Chrome
- Auto-starts dev server

### Example Test:
```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/en')
  await expect(page).toHaveTitle(/BioNXA/)
})
```

---

## 🪝 **5. Husky - Git Hooks**

### What it does:
- Runs checks before commits
- Prevents bad code from being committed
- Auto-fixes issues when possible

### How it works:
- Automatically runs on `git commit`
- Uses `lint-staged` to check only changed files
- Blocks commit if checks fail

### Configuration:
- Directory: `.husky/`
- Config: `.lintstagedrc.json`
- Hooks: pre-commit (lint + format)

---

## 🚀 **6. GitHub Actions - CI/CD**

### What it does:
- Runs all tests on every push
- Validates builds
- Security audits
- Automated deployment checks

### Workflow Jobs:
1. **Lint & Type Check** - ESLint + TypeScript validation
2. **Unit Tests** - Jest with coverage upload
3. **E2E Tests** - Playwright automated browser testing
4. **Build Check** - Ensures production build succeeds
5. **Security Audit** - npm audit for vulnerabilities

### Configuration:
- File: `.github/workflows/ci.yml`
- Triggers: Push to main/dev branches, Pull Requests
- Reports: Coverage, test results, build artifacts

---

## 📊 **7. TypeScript Strict Mode**

### What it does:
- Catches type errors at compile time
- Enforces strict null checks
- Prevents `any` type abuse

### How to use:
```bash
# Check types
npm run type-check

# During development (automatic)
# TypeScript errors show in your IDE
```

### Configuration:
- File: `tsconfig.json`
- Mode: Strict enabled
- Integration: VS Code, WebStorm, etc.

---

## 🔐 **8. Security Tools**

### npm audit
```bash
# Check for vulnerabilities
npm audit

# Auto-fix (be careful!)
npm audit fix

# Fix with breaking changes
npm audit fix --force
```

### Dependabot (GitHub)
- Automatically creates PRs for dependency updates
- Security vulnerability alerts
- Configured in: `.github/dependabot.yml` (optional)

---

## 📈 **9. Code Coverage**

### What it tracks:
- Lines covered by tests
- Branches tested
- Functions tested
- Statements executed

### How to view:
```bash
# Run tests with coverage
npm run test:ci

# Open HTML report
open coverage/lcov-report/index.html
```

### Thresholds:
- Branches: 50%
- Functions: 50%
- Lines: 50%
- Statements: 50%

---

## 🎯 **10. Running All Checks**

### Before committing:
```bash
# Run everything
npm run validate
```

This runs:
1. ESLint
2. TypeScript type checking
3. Jest unit tests with coverage

### Before deploying:
```bash
# Full test suite
npm run test:all
```

This runs:
1. ESLint
2. Jest unit tests
3. Playwright E2E tests

---

## 🔄 **Development Workflow**

### Daily Development:
1. Make changes to code
2. Tests run automatically in watch mode (optional)
3. On `git commit`: Husky runs lint + format
4. Push to GitHub: CI/CD pipeline runs all checks

### Pre-deployment:
1. Run `npm run validate` locally
2. Run `npm run test:e2e` to verify E2E
3. Push to branch
4. Wait for GitHub Actions to pass
5. Merge PR (all checks must be green)

---

## 📋 **Quick Commands Reference**

| Task | Command |
|------|---------|
| Lint code | `npm run lint` |
| Fix lint issues | `npm run lint:fix` |
| Format code | `npm run format` |
| Run unit tests | `npm run test` |
| Run E2E tests | `npm run test:e2e` |
| Type check | `npm run type-check` |
| Run all checks | `npm run validate` |
| Full test suite | `npm run test:all` |
| View coverage | `open coverage/lcov-report/index.html` |

---

## 🚨 **Common Issues & Solutions**

### Issue: Lint errors on commit
**Solution:** Run `npm run lint:fix` before committing

### Issue: Tests failing in CI but passing locally
**Solution:** Run `npm run test:ci` locally to match CI environment

### Issue: E2E tests timing out
**Solution:** Increase timeout in `playwright.config.ts` or check server startup

### Issue: Husky hooks not running
**Solution:** Run `npx husky install` to reinstall hooks

### Issue: Type errors in tests
**Solution:** Check `tsconfig.json` includes test files

---

## 📚 **Additional Resources**

- ESLint: https://eslint.org/docs/latest/
- Prettier: https://prettier.io/docs/en/
- Jest: https://jestjs.io/docs/getting-started
- Playwright: https://playwright.dev/docs/intro
- Husky: https://typicode.github.io/husky/
- GitHub Actions: https://docs.github.com/en/actions

---

## ✅ **Maintenance Checklist**

### Weekly:
- [ ] Review and fix any deprecation warnings
- [ ] Check for outdated packages (`npm outdated`)
- [ ] Review test coverage reports

### Monthly:
- [ ] Update dependencies (`npm update`)
- [ ] Review and update ESLint rules
- [ ] Add tests for new features
- [ ] Update this documentation

### Before Major Releases:
- [ ] Run full test suite
- [ ] Manual QA testing
- [ ] Security audit
- [ ] Performance testing
- [ ] Accessibility audit

---

**Last Updated:** 2026-02-06  
**Maintained By:** Development Team
