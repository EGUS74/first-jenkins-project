import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
//   test.beforeAll(async ({ page }) => {
//     // Your setup steps go here
//   });

  test.beforeEach(async ({ page }) => {
    // Your setup steps for each test go here
    await page. goto('https://practice.cydeo.com/');
  });

  test('Getting the title of the page', async ({ page }) => {
    // Your test steps go here
    const title = await page.title();
    console.log('Page Title:', title);
  });

  test('Getting the current URL of the page', async ({ page }) => {
    // Your test steps go here
    const currentURL  = await page.url();
  });


//   test.afterEach(async ({ page }) => {
//     // Your teardown steps for each test go here
//     // await page.close();
//     await page.goto.waitForTimeout(3000);
//     console.log('Test completed');
//   });

//   test.afterAll(async ({ page }) => {
//     // Your teardown steps go here
//     // await page.close();
//     await page.goto.waitForTimeout(3000);
//     console.log('Test group completed');
//   });
});