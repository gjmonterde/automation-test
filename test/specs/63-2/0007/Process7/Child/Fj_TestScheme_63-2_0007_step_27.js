const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0007-7");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0007_step_27: The 保証審査詳細 warranty examination details status is「実施済OK」", async () => {
    const stepNum = "27"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL(
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
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    const notif = await $(
      "//span[contains(.,'保証審査詳細ID: " +
        test_data.testData.gud3_name +
        "')]"
    );
    await notif.waitForDisplayed({
      timeout: 30000,
    });
    await notif.click();
    await browser.pause(10000);

    // Deselect
    await util.Deselect_fields(8);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);

    // Click 承認 button
    const process_instance_approve = await $(
      "//li[@data-target-selection-name='" +
        test_data.testData.process_instance_approve_api +
        "']"
    );
    await process_instance_approve.waitForClickable({ timeout: 10000 });
    await process_instance_approve.click();
    await browser.pause(5000);

    // Input approval comment
    const approval_comment = await $(
      "//textarea[@class='inputTextArea cuf-messageTextArea textarea']"
    );
    await approval_comment.waitForExist({ timeout: 10000 });
    await approval_comment.setValue(
      test_data.testData.process_approval_comment
    );
    await browser.pause(5000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(4);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3"
    );

    // Click 承認 button
    const approve_confirm_btn = await $(
      "//button[@class='slds-button slds-button--neutral modal-button-left actionButton uiButton--default uiButton--brand uiButton']"
    );
    await approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await approve_confirm_btn.click();

    // To determine if it approves
    const approve_message = await $(
      ".//span[contains(.,'" + test_data.testData.approve_status + "')]"
    );
    await approve_message.waitForExist({ timeout: 60000 });
    await browser.pause(10000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
    await browser.pause(2000);

    // Go to GUD record
    await parent.Open_Record_URL(
      user_info.object.gud_obj,
      test_data.testData.gud3_id
    );

    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
    await browser.pause(2000);

    // Go to GUA record
    await parent.Open_Record_URL(
      user_info.object.gua_obj,
      test_data.testData.gua_id
    );

    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );
    await browser.pause(2000);
  });
}
