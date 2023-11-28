const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_36: The bank award status should be Enforced OK", async () => {
    const stepNum = "36"; // ★ 新環境適用' New Env Implementation

    // Go to 3rd INI related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    // Press approve modal button
    await browser.pause(5000);
    await $(
      ".//button[@name='" + test_data.testData.initial_chk_accept + "']"
    ).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Click 承認 button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.approve_confirm +
        "')]"
    );
    await approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await approve_confirm_btn.click();

    // Press approve button in modal
    await util.Toast_Message();

    // Screenshot - toast message
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(1000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - updated page without toast message
    const headerBar_ini = await $(".//header[@id='oneHeader']");
    const tabheader_ini = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar_ini, tabheader_ini],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to EXM related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.exm_scroll);

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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);
  });
}
