import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  globalSetup: require.resolve('./tests/auth.setup'),

  retries: 1, 

 use: {
  baseURL: process.env.BASE_URL,
  storageState: 'auth/user.json',
  headless: true,

  screenshot: 'only-on-failure', // 📸 auto screenshot
  video: 'retain-on-failure',    // 🎥 optional but powerful
},
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});