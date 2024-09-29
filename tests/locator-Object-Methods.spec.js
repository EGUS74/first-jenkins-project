import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
  });
  test("Checks radio buttons and checkbox are checked", async ({ page }) => {
    // Your test steps go here
    let checkboxesLink = await page.locator("text='Checkboxes'");
    checkboxesLink.click();
    let checkboxes1 = await page.locator("#box1");
    await checkboxes1.check();
    let checkboxes2 = await page.locator("#box3");
    await checkboxes2.check();
  });

  test("Unchecks radio button and checkboxes if checked", async ({ page }) => {
    // Your test steps go here
  });

  test("3", async ({ page }) => {
    // Your test steps go here
  });
});

