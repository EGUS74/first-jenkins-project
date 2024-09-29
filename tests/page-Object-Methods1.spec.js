import { test, expect } from '@playwright/test';

test('Gets the Ttitle of the page', async ({ page }) => {
  // go to the https://practice.cydeo.com/ page
    await page.goto('https://practice.cydeo.com/');
    // await page.waitForTimeout(3000);

  // wait for 3 seconds
    // await page.waitForTimeout(3000);

  // get the title of the page
  const title = await page.title();
  console.log('Page Title:', title);
  expect(title).toBe('Practice');
});

test('Gets the current URL of the page', async ({ page }) => {
  // Your test steps go here
  let currentURL = page.url();
  console.log(currentURL);
});

test('Sets the window size of the test page', async ({ page }) => {
  // Your test steps go here
  await page.setViewportSize({ width: 1280, height: 800 });
});