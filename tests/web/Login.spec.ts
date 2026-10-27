import {test,expect} from '@playwright/test';
import  {validLoginData} from '../../test-data/testData';
import { LoginPage } from '../../Pages/LoginPage';

test('Verify valid login', async({page})=>
{
    const loginPage=new LoginPage(page);

    await page.goto('https://practice.expandtesting.com/login');
    
    await loginPage.login(validLoginData.username,validLoginData.password);

    await expect(page).toHaveURL('https://practice.expandtesting.com/secure');


}
)
test('Navigation', async({page})=>
{
const loginPage=new LoginPage(page);
await page.goto('https://practice.expandtesting.com/login');
}
);


