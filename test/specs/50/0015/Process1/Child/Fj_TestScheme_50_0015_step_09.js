const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0015-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0015_step_09: It is notified by the message reception CL", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

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
    await browser.pause(10000);

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
    await browser.keys(["Escape"]);
    await browser.pause(2000);

    // Deselect
    const deselect_notif = await $(
      "//div[@class='entityNameTitle slds-line-height--reset']"
    );
    await deselect_notif.click();
    await browser.pause(1000);

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights1 = await $(
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
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Click chatter textbox
    await util.Chatter_textbox(test_data.testData.mypage_textbox_value2);

    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights2 = await $(
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
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll
    await $(".//a[contains(., 'Chatter')]").$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    for (var i = 0; i < 3; i++) {
      await browser.keys(["Tab"]);
    }
    await browser.keys(["Enter"]);
    await browser.pause(10000);
    await browser.keys(["Escape"]);
    await browser.pause(2000);

    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights3 = await $(
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
        "-4",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
