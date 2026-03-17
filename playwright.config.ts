import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  retries: 1,
  reporter: [
  ['list'],
  ['html'],
  ['allure-playwright']
],

  use: {
    baseURL: process.env.BASE_URL,
    storageState: 'auth/user.json',   // 👈 apply session globally
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 500
    }
  },

  projects: [
    {
      name: 'setup',
      testMatch: 'auth/auth.setup.ts'
    },

    {
      name: 'chromium',
      use: { browserName: 'chromium' },
      dependencies: ['setup']
    },

    {
      name: 'firefox',
      use: { browserName: 'firefox' },
      dependencies: ['setup']
    },

    {
      name: 'webkit',
      use: { browserName: 'webkit' },
      dependencies: ['setup']
    }
  ]
});