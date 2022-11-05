//const { default: driver } = require('appium-android-driver/build/lib/driver');
const { assert } = require("chai");
const InstanceURLPage = require("../pageobjects/instanceURLPage");
const MainPage = require("../pageobjects/mainPage");

const LoginPage = require("../pageobjects/loginPage");
const expect = require("chai").expect;
const xlsx = require("node-xlsx");
//password = k@4W7JCdVe

const data_parse = xlsx.parse("test.xlsx");
const {data} =data_parse[0];

const data_driven = data.flat();

const test_Intansce_array = [
  "https://truongbao-trials77.com",
  "https://truongbao-trials77.orangehrmlive",
  "abcxyz.orangehrmlive.com",
  "truongbao-trials77.orangehrmlive.com",
  "https://truongbao-trials77.orangehrmlive.com",
];

function testcase1(val){
  describe("Main test suite", async () => {
    it("check correct instance url", async () => {
      try {
        let textResult = "";
        for (let x of data_driven) {
          await InstanceURLPage.textFieldIntance.clearValue();
          await InstanceURLPage.textFieldIntance.addValue(x);
          await InstanceURLPage.ContinueBtn.click();

          //assert.equal(textResult,"https://truongbao-trials77.orangehrmlive.com")
        }

        textResult = await InstanceURLPage.textFieldIntance.getText();
        //await driver.setImplicitWaitTimeout(10000);
        await expect(textResult).equal(
          "https://truongbao-trials77.orangehrmlive.com"
        );
        //done();
      } catch (error) {
        console.log(error);
      }
    });

  //   let options = { capabilities: {
  //     platformName: 'Android',
  //     "appium:appPackage": "com.orangehrm.enterprise",
  //     "appium:appActivity": "com.orangehrm.enterprise.MainActivity",
  //     "appium:udid": "3300cecab274b3f9",
  //     "appium:noReset":true,
  //     "appium:deviceName":"SM A510F",
  //     "appium:automationName	": "uiautomator2",
  //     "browserName":"",
  //   }};

  // const client = await driver.newSession(options);
  // let driver = await wd.promiseChainRemote({
  //   host: "127.0.0.1",
  //   port: 4723,
  // });
  // let desiredCaps = {
  //   platformName: "Android",
  //   "appium:appPackage": "com.orangehrm.enterprise",
  //   "appium:appActivity": "com.orangehrm.enterprise.MainActivity",
  //   "appium:udid": "3300cecab274b3f9",
  //   "appium:noReset": true,
  //   "appium:deviceName": "SM A510F",
  //   "appium:automationName	": "uiautomator2",
  //   browserName: "",
  // };
  // await driver.init(desiredCaps);


  // it("main page test", async () => {
  //   //await driver.setImplicitWaitTimeout(10000);
  //   await InstanceURLPage.textFieldIntance.clearValue();
  //   await InstanceURLPage.textFieldIntance.addValue(
  //     "https://truongbao-trials77.orangehrmlive.com"
  //   );
  //   await InstanceURLPage.ContinueBtn.click();

  //   await LoginPage.usernameTextField.clearValue();
  //   await LoginPage.usernameTextField.addValue("Admin");
  //   await LoginPage.passwordTextField.clearValue();
  //   await LoginPage.passwordTextField.addValue("k@4W7JCdVe");
  //   await LoginPage.loginBtn.click();

  //   await driver.touchAtion({ action: "tap", x: 85, y: 151 });
  // });

});

}



