import { Page, expect, Locator } from '@playwright/test';

export class InventoryPage {

  private inventoryList: Locator;
  private addToCartButton: Locator;
  private cartIcon: Locator;

  constructor(private page: Page) {

    this.inventoryList = page.locator('.inventory_list');

    this.addToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async isInventoryPageVisible() {
  await expect(this.page.locator('.inventory_list')).toBeVisible();
}

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}