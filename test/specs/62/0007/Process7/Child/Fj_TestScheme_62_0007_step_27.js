const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const util = require("../../../../../pageobjects/utility.js");
const parent = require("../Parent/Fj_TestScheme_62_0007-7");

export default async function suite() {
  it("Fj_TestScheme_62_0007_step_27: The 保証審査詳細 warranty examination details status is 「実施済OK」Performed OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "27";

    // Cick Notification button
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );

    // Click Notification record
    const gud_name = await $(
      ".//span[contains(text(), '" + test_data.testData.gud_name + "')]"
    );
    await gud_name.waitForClickable({ timeout: 30000 });
    await gud_name.click();
    await browser.pause(10000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2"
    );

    // Go to GUD Record
    await parent.Go_to_GUD();

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Scroll to Approval History Header
    await util.Scroll_to_related_list(
      test_data.testData.approval_history_header
    );

    // Open Actions
    const actions = await $(
      ".//div[@data-aura-class='forceRelatedListCardHeader'][contains(., '" +
        test_data.testData.approval_history_header +
        "')]/div/div[@class='actionsContainer']/div[@data-aura-class='forceDeferredDropDownAction']/a"
    );
    await actions.waitForClickable({ timeout: 30000 });
    await actions.click();
    await browser.pause(2000);

    // Click Approve Action
    const approve_act = await $(
      ".//a[@title='" + test_data.testData.approve_btn + "']"
    );
    await approve_act.waitForClickable({ timeout: 30000 });
    await approve_act.click();
    await browser.pause(5000);

    // Enter comment
    await $("textarea").setValue(test_data.testData.gud_approve_comment_value);
    await browser.pause(2000);

    // Screenshot - Comment Approval
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4"
    );

    // Click Approve button
    const approve_btn = await $("button=" + test_data.testData.approve_btn);
    await approve_btn.waitForClickable({ timeout: 30000 });
    await approve_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.pause(1000);
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to GUA Record
    await parent.Go_to_GUA();

    // Screenshot
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
  });
}
