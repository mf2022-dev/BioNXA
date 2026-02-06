# 🛠️ Quality Assurance Tools Guide

## Overview
This document describes all QA tools installed to ensure code quality, prevent bugs, and maintain standards.

---

## 🔍 **Installed QA Tools**

### 1. **ESLint** - Code Quality & Style Enforcement
**Purpose:** Catches bugs, enforces coding standards, identifies problematic patterns

**Configuration:** `.eslintrc.json`

**Usage:**
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

**What it checks:**
- TypeScript errors
- React best practices
- Unused variables
- Missing dependencies in hooks
- Console.log statements (warns)

---

### 2. **Prettier** - Code Formatting
**Purpose:** Automatic code formatting for consistent style

**Configuration:** `.prettierrc.json`

**Usage:**
```bash
npm run format        # Format all files
npm run format:check  # Check formatting
```

**Standards:**
- Single quotes
- No semicolons
- 100 character line width
- 2 spaces indentation

---

### 3. **TypeScript** - Type Safety
**Purpose:** Compile-time type checking

**Configuration:** `tsconfig.json`

**Usage:**
```bash
npm run type-check    # Check types without building
```

**Benefits:**
- Catch type errors before runtime
- Better IDE autocomplete
- Safer refactoring

---

### 4. **Husky** - Git Hooks
**Purpose:** Runs checks automatically before commits

**Configuration:** `.husky/` directory

**What it does:**
- Runs linting before commit
- Runs formatting before commit
- Validates commit messages

**Prevents:**
- Committing broken code
- Committing unformatted code
- Bad commit messages

---

### 5. **lint-staged** - Pre-commit File Checker
**Purpose:** Only checks files being committed (faster)

**Configuration:** `.lintstagedrc.json`

**Runs on commit:**
1. ESLint on JS/TS files
2. Prettier on all staged files
3. Auto-fixes when possible

---

### 6. **Commitlint** - Commit Message Standards
**Purpose:** Enforces conventional commit format

**Configuration:** `commitlint.config.js`

**Valid commit types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting)
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance

**Example:**
```bash
git commit -m "feat(auth): add OAuth support"
git commit -m "fix(dashboard): resolve redirect loop"
```

---

### 7. **Jest** - Unit Testing Framework
**Purpose:** Test individual functions and components

**Configuration:** `jest.config.js`

**Usage:**
```bash
npm test              # Run tests in watch mode
npm run test:ci       # Run once with coverage
```

**What to test:**
- Utility functions
- Component rendering
- User interactions
- Edge cases

**Example test:**
```typescript
import { isSupabaseConfigured } from '@/lib/supabase'

describe('Supabase', () => {
  it('should detect configuration', () => {
    expect(typeof isSupabaseConfigured).toBe('boolean')
  })
})
```

---

### 8. **React Testing Library** - Component Testing
**Purpose:** Test React components like users interact with them

**Usage:**
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('button click', async () => {
  render(<Button>Click me</Button>)
  await userEvent.click(screen.getByRole('button'))
  expect(screen.getByText('Clicked')).toBeInTheDocument()
})
```

---

### 9. **GitHub Actions** - CI/CD Pipeline
**Purpose:** Automated testing on every push/PR

**Configuration:** `.github/workflows/ci.yml`

**Pipeline steps:**
1. Install dependencies
2. Run ESLint
3. Run Prettier check
4. Run TypeScript check
5. Run all tests with coverage
6. Build project
7. Upload artifacts

**Triggers:**
- Every push to `main` or `genspark_ai_developer`
- Every pull request to `main`

**Benefits:**
- Catches issues before merge
- Ensures build succeeds
- Tracks code coverage

---

## 📋 **QA Workflow**

### Before You Code
```bash
npm run dev           # Start development server
```

### While Coding
- VS Code will show ESLint warnings in real-time
- Prettier will format on save (if configured in VS Code)

### Before Committing
```bash
npm run validate      # Run all checks
```

**What happens automatically:**
1. Git hook runs lint-staged
2. ESLint checks your code
3. Prettier formats your code
4. If errors: commit blocked
5. If success: commit proceeds

### Before Creating PR
```bash
npm run test:ci       # Run full test suite
npm run build         # Ensure build works
```

### After Creating PR
- GitHub Actions automatically runs full CI/CD
- PR cannot merge if CI fails
- Review coverage report

---

## 🎯 **Quality Standards**

### Code Quality Metrics
- **ESLint:** 0 errors
- **TypeScript:** 0 type errors
- **Test Coverage:** >80% (goal)
- **Build:** Success

### Commit Standards
- Use conventional commits
- Write descriptive messages
- Keep commits atomic (one feature/fix per commit)

### PR Standards
- All CI checks passing
- Code reviewed by at least 1 person
- Tests added for new features
- Documentation updated

---

## 🚀 **Quick Commands**

```bash
# Development
npm run dev                    # Start dev server

# Quality Checks
npm run lint                   # Check code quality
npm run format                 # Format code
npm run type-check            # Check types
npm run validate              # Run all checks

# Testing
npm test                       # Run tests (watch)
npm run test:ci               # Run tests once
npm run test:e2e              # Run E2E tests

# Build
npm run build                  # Production build
```

---

## 🐛 **Troubleshooting**

### "Husky hooks not working"
```bash
npx husky install
```

### "ESLint errors after pull"
```bash
npm run lint:fix
```

### "Prettier conflicts with ESLint"
- Both are configured to work together
- Run `npm run format` followed by `npm run lint:fix`

### "Tests failing on CI but passing locally"
```bash
npm run test:ci              # Run in CI mode locally
```

---

## 📚 **Additional Resources**

- **ESLint:** https://eslint.org/docs/latest/
- **Prettier:** https://prettier.io/docs/en/
- **Jest:** https://jestjs.io/docs/getting-started
- **Testing Library:** https://testing-library.com/docs/react-testing-library/intro/
- **Conventional Commits:** https://www.conventionalcommits.org/

---

## 🎓 **Best Practices**

1. **Write tests first** (TDD when possible)
2. **Run `npm run validate`** before pushing
3. **Fix linting warnings** immediately
4. **Keep test coverage high**
5. **Use meaningful commit messages**
6. **Review your own PR** before requesting reviews
7. **Never commit broken code**
8. **Update tests when changing code**

---

## ✅ **Success Checklist**

Before considering a feature "done":
- [ ] Code passes ESLint
- [ ] Code is formatted with Prettier
- [ ] TypeScript compiles without errors
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] CI/CD pipeline passes
- [ ] PR created with descriptive title/description

---

**Last Updated:** 2026-02-06  
**Maintained By:** Development Team
