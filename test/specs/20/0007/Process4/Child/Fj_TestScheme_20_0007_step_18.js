const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0007-4");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0007_step_18: The 保証審査詳細 warranty examination details status is 「実施済OK」Performed OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_as_shinsa();
    }

    // Go to 申込 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Click on Notifications
    await $(
      ".//button[@class='slds-button slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action forceHeaderButton']"
    ).click();
    await browser.pause(10000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    await $(
      "//span[contains(.,'保証審査詳細ID: " +
        test_data.testData.gud2_name +
        "')]"
    ).click();
    await browser.pause(10000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot of approval page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Go to GUD2
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud2_id
    );

    // Take screenshot
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Approve
    const header = await $(
      "//div[@class='listWrapper'][contains(., '" +
        test_data.testData.approval_history_header +
        "')]"
    );
    await header.$(function () {
      this.scrollIntoView({ block: "center" });
    });
    await header
      .$(".//*[@data-aura-class='forceDeferredDropDownAction']")
      .click();
    await browser.pause(1000);
    await $(".//a[@title='" + test_data.testData.approve_btn + "']").click();
    await browser.pause(1000);
    await $(
      "//textarea[@class='inputTextArea cuf-messageTextArea textarea']"
    ).setValue(test_data.testData.approval_msg);
    await browser.pause(1000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4"
    );

    await $(
      ".//button[@class='slds-button slds-button--neutral modal-button-left actionButton uiButton--default uiButton--brand uiButton']"
    ).click();

    // Toast message screenshot
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot
    const highlights5 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
      }
    );

    // Logout
    await parent.Logout();

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }

    // Go to its related 保証審査 Detail Screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gua_obj,
      test_data.testData.gua_id
    );

    // Take screenshot
    const highlights6 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar6 = await $(".//header[@id='oneHeader']");
    const tabheader6 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
      }
    );
  });
}
