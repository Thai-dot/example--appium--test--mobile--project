//const { default: driver } = require('appium-android-driver/build/lib/driver');
const { assert } = require("chai");
const InstanceURLPage = require("../pageobjects/instanceURLPage");
const MainPage = require("../pageobjects/mainPage");

const LoginPage = require("../pageobjects/loginPage");
const expect = require("chai").expect;
const xlsx = require("node-xlsx");
//password = k@4W7JCdVe

const data_parse = xlsx.parse("test.xlsx");
const { data } = data_parse[0];

const data_driven = data.flat();

const test_Intansce_array = [
  "truongbao-trials78.orangehrmlive.com",
  "https://orangehrmlive.com",
  "https://truongbao-trials77.com",
  "https://truongbao-trials77.orangehrmlive",
  "abcxyz.orangehrmlive.com",
  "https://truongbao-trials77.orangehrmlive.com",
];



function testcase1(){
  describe("Main test suite", async () => {
    for(let x of data_driven){
    it(`check correct instance url`, async () => {
        let textResult = "";

          await InstanceURLPage.textFieldIntance.clearValue();
          await InstanceURLPage.textFieldIntance.addValue(x);
          textResult = await InstanceURLPage.textFieldIntance.getText();

          await InstanceURLPage.ContinueBtn.click();

            await assert.equal(textResult,"https://truongbao-trials77.orangehrmlive.com")
           

    });
  }

});

}

testcase1();
