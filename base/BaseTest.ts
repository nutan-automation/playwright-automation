import * as dotenv from 'dotenv';
dotenv.config();

import { CheckoutPage } from '../pages/CheckoutPage';
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {

    const inventoryPage = new InventoryPage(page);

    // Open the application
    await page.goto(process.env.BASE_URL!);

    // If login page appears → perform login
    if (await page.locator('[data-test="login-button"]').isVisible()) {

      await page.fill('[data-test="username"]', process.env.SAUCE_USERNAME!);
      await page.fill('[data-test="password"]', process.env.SAUCE_PASSWORD!);
      await page.click('[data-test="login-button"]');

    }

    // Ensure inventory page is loaded
    await page.waitForSelector('.inventory_list');

    await use(inventoryPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  }

});

export { expect };