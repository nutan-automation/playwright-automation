import { test } from '@base/BaseTest';

test('Inventory validation', async ({ inventoryPage }) => {
  await inventoryPage.isInventoryPageVisible();
});