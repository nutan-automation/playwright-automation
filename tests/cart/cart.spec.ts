import { test } from '@base/BaseTest';
import { expect } from '@playwright/test';

test('@smoke Add product to cart', async ({ inventoryPage, page }) => {

  await page.goto('/inventory.html');

  await inventoryPage.isInventoryPageVisible();
  await inventoryPage.addProductToCart();
  await inventoryPage.openCart();

  await expect(page).toHaveURL(/cart/);
});