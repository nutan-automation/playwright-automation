import { test, expect } from '@base/BaseTest';

test('Checkout should fail if first name is empty', async ({ inventoryPage, checkoutPage }) => {

  await inventoryPage.isInventoryPageVisible();
  await inventoryPage.addProductToCart();
  await inventoryPage.openCart();

  await checkoutPage.startCheckout();

  // Empty first name
await checkoutPage.fillCheckoutDetails(
  '',
  '',
  '411001'
);

  await checkoutPage.continueCheckout();

  await checkoutPage.verifyErrorMessage('Error: First Name is required');
});