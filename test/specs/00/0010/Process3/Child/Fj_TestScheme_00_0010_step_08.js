const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0010_step_08: Requested document status is 'Not Submitted'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    // ★ 新環境適用' New Env Implementation
    // Target 1st record (Change value if needed)
    let record_no = 0;
    // Go to RDC2 Record
    await parent.Open_RDC_Record(test_data.testData.rdc_id_arr[record_no]);

    // Click pencil icon beside 不備理由 picklist field
    const defect_reason_edit_btn = await $(
      "//button[@title='" + test_data.testData.defect_reason_edit_btn + "']"
    );
    await browser.pause(5000);
    await defect_reason_edit_btn.waitForClickable({ timeout: 10000 });
    await defect_reason_edit_btn.click();
    await browser.pause(5000);

    // Click 不備理由 label
    const rdc_defect_reason_lbl = await $(
      "//label[contains(., '" + test_data.testData.rdc_defect_reason_lbl + "')]"
    );
    await rdc_defect_reason_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    await rdc_defect_reason_lbl.click();

    // Select 不備理由 picklist field value
    const defect_reason_val = await $(
      "//span[@title='" + test_data.testData.defect_reason_val + "']"
    );
    await defect_reason_val.waitForClickable({ timeout: 10000 });
    await defect_reason_val.click();
    await browser.pause(5000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Deselect the hover/selected fields
    await util.Deselect_fields(3); // ★ 新環境適用' New Env Implementation

    const edit_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const edit_headerBar = await $(".//header[@id='oneHeader']");
    const edit_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
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

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [edit_highlights, edit_headerBar, edit_tabheader],
      }
    );
    await browser.pause(5000);

    // Click 保存 button
    const save_btn = $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    ); // ★ 新環境適用' New Env Implementation
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    ); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Click 不備 button
    const reject_btn = await $(
      "//button[@name='" + test_data.testData.required_docu_reject_api + "']"
    );
    await reject_btn.waitForClickable({ timeout: 10000 });
    await reject_btn.click();
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
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

    await browser.pause(5000);

    // To determine if the toast shows up
    await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(2000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    ); // ★ 新環境適用' New Env Implementation
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    ); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
    await browser.pause(2000);
  });
}
