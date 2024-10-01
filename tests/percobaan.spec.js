// const { test, expect } = require('@playwright/test');
const { test, expect } = require('./fixtures');

test('example test', async ({ page, extensionId }) => {

    // await page.goto('https://protocol.carv.io/airdrop?utm_campaign=aidrop-51-&utm_source=twitter');
    // await page.goto(`chrome-extension://${extensionId}/home.html`);

    await page.goto(`chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html`);
    // await expect(page.locator('body')).toHaveText('MetaMask');


    // Melakukan tindakan yang diperlukan di halaman tersebut
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByTestId('rk-wallet-option-metaMask').click();
    // await new Promise(resolve => setTimeout(resolve, 10000));
//   await page.goto('chrome://extensions/');
//   await expect(page.locator('body')).toHaveText('Extensfions');
// chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#onboarding/welcome
});


// import { test, expect } from './fixtures';

// test('example', async ({ page }) => {
//   await page.goto('https://example.com');
//   await expect(page.locator('body')).toHaveText('M');
// });

// test('popup page', async ({ page, extensionId }) => {
//   await page.goto(`chrome-extension://${extensionId}/popup.html`);
//   await expect(page.locator('body')).toHaveText('my-extension popup');
// });

