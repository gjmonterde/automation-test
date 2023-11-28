const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0007_step_18: The 保証審査詳細 warranty examination details status is 「実施済OK」Performed OK", async () => {
    const stepNum = "18"; // ★ 新環境適用' New Env Implementation

    // Click Show More Actions dropdown from 承認履歴 related list
    await $(
      ".//div[@data-aura-class='forceRelatedListCardHeader'][contains(., '" +
        test_data.testData.history_header +
        "')]/div/div[@class='actionsContainer']/div[@data-aura-class='forceDeferredDropDownAction']/a"
    ).click();

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );

    // Select 承認 option
    await $(
      ".//a[@title='" + test_data.testData.approve_confirm + "']"
    ).click();
    await browser.pause(5000);

    // Input approval comment
    await $(
      "//textarea[@class='inputTextArea cuf-messageTextArea textarea']"
    ).setValue(test_data.testData.approval_msg);
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    await $(
      ".//button[@class='slds-button slds-button--neutral modal-button-left actionButton uiButton--default uiButton--brand uiButton']"
    ).click();

    // Toast message screenshot
    await util.Toast_Message();
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3"
    );

    // Go to GUD record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud_id2
    );

    // Take screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    await browser.pause(5000);

    // Go to its related 保証審査 Detail Screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gua_obj,
      test_data.testData.gua_id
    );

    // Take screenshot
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );
  });
}
