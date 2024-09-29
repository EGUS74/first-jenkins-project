import { test } from '@playwright/test';

test('Searching Youtube', async ({ page }) => {
  // Your test steps go here
  await page.goto('https://www.youtube.com/');
  // await page.waitForTimeout(3000);

  // await page.locator('#search-icon');
  let searchBox =  await page.locator("//input[@id='search']");
  await searchBox.click();
  await searchBox.fill('Mo Salah latest goal');
  // await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');

});