import {expect, test } from '@playwright/test';

test.describe('group name', () => {
    //create beforeEach hook
     test. beforeAll( async () => {
        // Your setup steps go here
        console.log('executing beforeAll hook');
    });
    test.afterAll(async ()=> {
        // Your teardown steps go here
        console.log('executing afterAll hook');
    });
    test.beforeEach(async () => {
        // Your setup steps go here
        console.log('executing beforeEach hook');
    });
    test.afterEach(async () => {
        // Your teardown steps go here
        console.log('executing afterEach hook');
    });
    

    test('test case 1 name', async ({ page }) => {
        // Your test steps go here
        console.log('test 1 executed successfully');
    });

    test('test case 2 name', async ({ page }) => {
        // Your test steps go here
        console.log('test 2 executed successfully');
    });

    test('test case 3 name', async ({ page }) => {
        // Your test steps go here
        console.log('test 3 executed successfully');
    });
})