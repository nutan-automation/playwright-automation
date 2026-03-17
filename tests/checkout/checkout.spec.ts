import { test } from '@base/BaseTest';
import { checkoutData } from '@data/checkoutData';

checkoutData.forEach((data, index) => {

test(`Checkout Test - Dataset ${index + 1}`, async ({ inventoryPage, checkoutPage, page }) => {

   console.log(`Checkout Test Running for dataset ${index + 1}`);

   await page.goto('/inventory.html');

   await inventoryPage.isInventoryPageVisible();
   await inventoryPage.addProductToCart();
   await inventoryPage.openCart();

   await checkoutPage.startCheckout();

   await checkoutPage.fillCheckoutDetails(
      data.firstName,
      data.lastName,
      data.postalCode
   );

   await checkoutPage.continueCheckout();
   await checkoutPage.finishCheckout();

   await checkoutPage.verifyOrderSuccess();

});

});