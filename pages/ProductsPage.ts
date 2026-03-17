import { Page, Locator } from '@playwright/test';

export class ProductsPage {

  readonly page: Page;
  readonly addToCartBtn: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locator for first product Add to Cart button
    this.addToCartBtn = page.locator('.inventory_item button').first();

    // Locator for cart badge count
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  // Action → Add product to cart
  async addFirstProductToCart() {
    await this.addToCartBtn.click();
  }

  // Get cart count
  async getCartCount() {
    return await this.cartBadge.textContent();
  }
}
