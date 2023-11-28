const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0007-7"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0007_step_27: The 保証審査詳細 warranty examination details status is「実施済OK」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "27";

    // Go to GUA record detail screen
    await parent.Open_GUA_Record(); // ★ 新環境適用' New Env Implementation

    // Go to GUD record detail screen
    await parent.Open_GUD_Record(); // ★ 新環境適用' New Env Implementation

    // Click Notification button
    // ★ 新環境適用' New Env Implementation
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(10000);

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    await $(
      "//span[contains(.,'保証審査詳細ID: " +
        test_data.testData.gud_name +
        "')]"
    ).click();
    await browser.pause(6000);

    // Deselect
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(3);
    await browser.pause(1000);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
      test_data.testData.gud_process_approval_comment
    );
    await browser.pause(5000);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(4);
    await browser.pause(1000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3"
    );

    // Click 承認 button
    const approve_confirm_btn = await $(
      "button=" + test_data.testData.approve_btn
    ); // ★ 新環境適用' New Env Implementation
    await approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await approve_confirm_btn.click();

    // To determine if it approves
    const approve_message = await $(
      ".//span[contains(.,'" + test_data.testData.approved_text + "')]"
    );
    await approve_message.waitForExist({ timeout: 30000 });
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
        test_data.testData.spec00 +
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

    // Go to GUD record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_GUD_Record();

    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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

    // Go to GUA record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_GUA_Record();

    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );
    await browser.pause(2000);
  });
}
