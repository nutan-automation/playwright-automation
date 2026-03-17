import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await test.step('Navigate to login page', async () => {
    await page.goto('https://www.saucedemo.com/');
  });

  await test.step('Enter username and password', async () => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
  });

  await test.step('Click login button', async () => {
    await page.click('#login-button');
  });

  await test.step('Verify user is logged in', async () => {
   await expect(page.locator('.inventory_list')).toBeVisible();
  });

});