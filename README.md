# Playwright Automation Project

This project contains automated tests for a web application using Playwright.

## Description

The project is set up to run end-to-end tests for various features of the application, including:

- User login (valid and invalid credentials)
- UI controls (dropdowns, radio buttons, checkboxes)
- Handling multiple browser windows

The tests are written in JavaScript using the Playwright test runner.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Playwright_Automation
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the tests

To run the Playwright tests, use the following command:

```bash
npx playwright test
```

This will run all the tests in the `tests` directory.

To run the tests in headed mode, use:

```bash
npx playwright test --headed
```

To view the HTML report after the tests have run, use:

```bash
npx playwright show-report
```

## Project Structure

```
Playwright_Automation/
├── e2e/
│   └── example.spec.js  # Example tests
├── node_modules/
├── playwright-report/     # HTML report directory
├── test-results/          # Test results directory
├── tests/
│   ├── UIBasictest.spec.js
│   ├── UserLogin.spec.js
│   └── windowHandling.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js # Playwright configuration
└── README.md
```