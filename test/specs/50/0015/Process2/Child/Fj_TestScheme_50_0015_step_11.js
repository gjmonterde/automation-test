const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0015-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0015_step_11: A message receipt notification appears on the CL", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Login to My Page
    await parent.Login_as_Tantou1();

    // Go to Account record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Click on Notifications
    await $(
      ".//button[@class='slds-button slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action forceHeaderButton']"
    ).click();
    await browser.pause(6000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Click on the notification
    const notification = await $(
      ".//span[contains(text(), '" +
        test_data.testData.account_name +
        "様からコメントがあります。')]"
    );
    await notification.click();
    await browser.pause(5000);
    browser.keys(["Escape"]);
    await browser.pause(2000);

    // Click on the show more comments button
    const show_more_comments = await $(
      ".//button[contains(text(), '" +
        test_data.testData.show_more_comments_button +
        "')]"
    );
    await show_more_comments.click();
    browser.keys(["Escape"]);
    await browser.pause(5000);

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
