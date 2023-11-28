const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0007_step_18: The 保証審査詳細warranty examination details status is「実施済OK」Performed OK", async () => {
    const stepNum = "18"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Scroll to Approval History Header
    await $("span=" + test_data.testData.approval_history_header).$(
      function () {
        this.scrollIntoView();
      }
    );
    await browser.pause(3000);

    // Open Actions
    const actions = await $(
      ".//div[@data-aura-class='forceRelatedListCardHeader'][contains(., '" +
        test_data.testData.approval_history_header +
        "')]"
    )
      .$(".//div[@class='actionsContainer']")
      .$(".//div[@data-aura-class='forceDeferredDropDownAction']/a");
    await actions.waitForClickable({ timeout: 20000 });
    await actions.click();
    await browser.pause(1000);

    // Click Approve Action
    await $(".//a[@title='" + test_data.testData.approve_btn + "']").click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );

    // Click Approve button
    await $("button=" + test_data.testData.approve_btn).click();

    // Toast
    await util.Toast_Message();

    await browser.pause(2000);
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Go to GUA Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gua_obj,
      test_data.testData.gua_id
    );

    // Screenshot
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
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
  });
}
