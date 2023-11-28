const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0002_step_06: 徴求書類 Requested document status is「銀行提出済」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // Go to APP list view
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(3000);

    // Go to My Page APP record screen
    await $(
      "//a[@title='/s/application-detail?id=" +
        test_data.testData.app_id +
        "']/parent::*"
    ).click();
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Go to My Page RDC record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/required-document-detail?id=" +
        test_data.testData.rdc1_id_of_ver1
    );
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
    await browser.refresh();
    await browser.pause(10000);

    // Upload file
    const remoteFilePath = await browser.uploadFile(
      user_info.userInformation.var_file_Path1
    );
    await $(
      ".//input[@class='slds-file-selector__input slds-assistive-text']"
    ).addValue(remoteFilePath);

    // Wait for button to be clickable
    // ★ 新環境適用' New Env Implementation
    const btn = await $("button=" + test_data.testData.completion_btn);
    await btn.waitForClickable({ timeout: 50000 });

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    // Click 完了
    // ★ 新環境適用' New Env Implementation
    await btn.click();

    // To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();

    //Take screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(2000);
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(3000);

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-6"
    );
    await browser.pause(2000);
  });
}
