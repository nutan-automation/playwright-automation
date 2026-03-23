import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);

  // Navigate to login page
  await page.goto(process.env.BASE_URL!);

  // Debug logs (temporary)
  console.log('USERNAME:', process.env.SAUCE_USERNAME);
  console.log('PASSWORD:', process.env.SAUCE_PASSWORD);

  // Perform login
  await loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );

  // Wait for successful login (VERY IMPORTANT)
  await page.waitForURL('**/inventory.html');

  // Save storage state
  await page.context().storageState({
    path: 'auth/user.json',
  });

  await browser.close();
}

export default globalSetup;