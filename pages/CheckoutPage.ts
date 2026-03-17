import { Page, expect, Locator } from '@playwright/test';

export class CheckoutPage {

  private checkoutButton: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private postalCodeInput: Locator;
  private continueButton: Locator;
  private finishButton: Locator;
  private successMessage: Locator;
  private errorMessage: Locator;

  constructor(private page: Page) {

    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Start Checkout
  async startCheckout() {
    await this.checkoutButton.click();
  }

  // Fill Checkout Details
  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  // Continue
  async continueCheckout() {
    await this.continueButton.click();
  }

  // Finish
  async finishCheckout() {
    await this.finishButton.click();
  }

  // Verify Success
  async verifyOrderSuccess() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }

  // Verify Error (For Negative Tests)
  async verifyErrorMessage(expectedMessage: string) {
    await expect(this.errorMessage).toContainText(expectedMessage);
  }
}