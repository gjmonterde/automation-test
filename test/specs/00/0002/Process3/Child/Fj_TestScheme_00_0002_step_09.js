const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
const parent = require("../Parent/Fj_TestScheme_00_0002-3");

export default function suite() {
  it("Fj_TestScheme_00_0002_step_09: 徴求書類 Requested document status is「未提出」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "9";

    // Go to VER-1 record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_VER();

    // Go to RDC of VER1 page
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_RDC();

    // Click pencil icon beside 不備理由 picklist field
    const defect_reason_edit_btn = await $(
      "//button[@title='" + test_data.testData.defect_reason_edit_btn + "']"
    );
    await browser.pause(5000);
    await defect_reason_edit_btn.waitForClickable({ timeout: 10000 });
    await defect_reason_edit_btn.click();
    await browser.pause(3000);

    // Click 不備理由 label
    const rdc_defect_reason_lbl = await $(
      "//label[contains(., '" + test_data.testData.rdc_defect_reason_lbl + "')]"
    );
    await rdc_defect_reason_lbl.click();

    // Select 不備理由 picklist field value
    const defect_reason_val = await $(
      "//span[@title='" + test_data.testData.defect_reason_val + "']"
    );
    await defect_reason_val.waitForClickable({ timeout: 10000 });
    await defect_reason_val.click();
    await browser.pause(5000);

    const edit_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const edit_headerBar = await $(".//header[@id='oneHeader']");
    const edit_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "record-body-container"
      ).offsetheight;
      this.style.marginTop = height - this.offsetHeight + "px";
      this.style.position = "static";
    });

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [edit_highlights, edit_headerBar, edit_tabheader],
      }
    );
    await browser.pause(3000);

    // Click 保存 button
    const save_btn = $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(5000);

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Click 不備 button
    const reject_btn = await $(
      "//button[@name='" + test_data.testData.required_docu_reject_api + "']"
    );
    await reject_btn.click();
    await browser.pause(5000);

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click 不備 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const reject_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.reject_confirm_btn +
        "')]"
    );
    await reject_confirm_btn.waitForClickable({ timeout: 10000 });
    await reject_confirm_btn.click();
    await browser.pause(3000);

    // To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();

    // Take screenshot - with toast message
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);

    await browser.refresh();
    await browser.pause(10000);

    const headerBar_rdc = await $(".//header[@id='oneHeader']");
    const tabheader_rdc = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_rdc = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Take screenshot - updated page without toast message
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_rdc, tabheader_rdc, highlights_rdc],
      }
    );

    // Go to APP record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_APP();

    const headerbar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
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

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerbar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
