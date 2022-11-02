//const { default: driver } = require('appium-android-driver/build/lib/driver');
const InstanceURLPage = require('../pageobjects/instanceURLPage');
const expect = require('chai').expect;
//const driver = require('../driver');


describe('InstanceURLPage -', async () => {
    it('click text filed',  async() => {
        try {

        await InstanceURLPage.textFieldIntance.click();


        await InstanceURLPage.textFieldIntance.addValue("abcxyz.orangehrmlive.com");

         let textResult = await InstanceURLPage.textFieldIntance.getText(); 

        await InstanceURLPage.ContinueBtn.click();

        await InstanceURLPage.textFieldIntance.clearValue();

        await InstanceURLPage.textFieldIntance.addValue("https://truongbao-trials77.orangehrmlive.com");

        textResult = await InstanceURLPage.textFieldIntance.getText(); 

        await InstanceURLPage.ContinueBtn.click();
        
        await driver.setImplicitWaitTimeout(5000);
        await expect(textResult).equal("https://truongbao-trials77.orangehrmlive.com");

        } catch (error) {
        console.log(error)
        }
        
        
        //make click ok button
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    })

});


