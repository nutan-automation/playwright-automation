import * as dotenv from 'dotenv';
dotenv.config();

import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

setup('global login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto(process.env.BASE_URL!);

  await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
  );

  // Wait for the logged-in page
  await page.waitForURL('**/inventory.html');

  await page.context().storageState({
    path: 'auth/user.json'
  });

});