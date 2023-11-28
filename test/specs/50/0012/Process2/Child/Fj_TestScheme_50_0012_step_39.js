const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0012-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0012_step_39: CSV is downloaded", async () => {
    const stepNum = "39"; // ★ 新環境適用' New Env Implementation

    // Go to downloads url
    await browser.url(test_data.testData.downloads_url);
    await browser.pause(5000);

    // Go to Applications list view
    await browser.newWindow(user_info.userInformation.var_sf_recent_list_view);
    await browser.pause(5000);

    // Click checkbox of Application
    await $("//a[@title='" + test_data.testData.app_name + "']")
      .$("../../../td[2]/span")
      .click();
    await browser.pause(5000);

    // Screenshot - Recent applications list view
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Click slip output button
    await $(
      "//div[@title='" + test_data.testData.slip_output_btn + "']"
    ).click();
    await browser.pause(10000);

    // Screenshot - slip output screen
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(10000);

    // Switch to downloads url
    await browser.switchWindow(test_data.testData.downloads_url);
    await browser.pause(5000);

    // Screenshot - downloads screen
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(10000);

    // Switch to Salesforce window
    await browser.switchWindow("genesis__Applications__c | Salesforce");
    await browser.pause(5000);

    // Click Return button
    const accessibility_title_frame = await browser.$(
      './/iframe[@title="accessibility title"]'
    );
    await accessibility_title_frame.waitForDisplayed({ timeout: 10000 });
    await browser.switchToFrame(accessibility_title_frame);

    const return_btn = await $(
      "//input[@value='" + test_data.testData.return_btn + "']"
    );
    await return_btn.waitForDisplayed({ timeout: 30000 });
    await return_btn.click();
    await browser.pause(10000);

    // Screenshot - All list view
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(5000);

    // Login as admin user
    await parent.Login_as_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0012_39 + "'" + test_data.testData.app_name + "'"
    );

    // Take screenshot for Dev Console
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
