const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0007-6");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0007_step_25: The 保証審査詳細 warranty examination details status is「承認待ち」", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    // Go to GUD record
    await parent.Open_Record_URL(
      user_info.object.gud_obj,
      test_data.testData.gud3_id
    );

    // Screenshot - before updating
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [
          headerBar_before,
          tabheader_before,
          highlights_before,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Go to 諾否判定
    await $(
      ".//span[contains(.,'" + test_data.testData.accept_or_reject_label + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    // Click the pencil icon
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.accept_or_reject_label +
        " の編集']"
    );
    await edit.scrollIntoView({ block: "center" });
    await edit.click();
    await browser.pause(1000);

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    // Set 諾否判定 picklist
    const accept_or_reject_picklist = await $(
      "label=" + test_data.testData.accept_or_reject_label
    );
    await accept_or_reject_picklist.waitForClickable({ timeout: 10000 });
    await accept_or_reject_picklist.click();
    await browser.pause(3000);
    const accept_or_reject_val = await $(
      "//span[@title='" + test_data.testData.accept_or_reject_val + "']"
    );
    await accept_or_reject_val.scrollIntoView();
    await accept_or_reject_val.waitForClickable({ timeout: 10000 });
    await accept_or_reject_val.click();
    await browser.pause(3000);

    // Set 保証審査結果 picklist
    const guarantee_chk_result = await $(
      "label=" + test_data.testData.guarantee_chk_result_label
    );
    await guarantee_chk_result.waitForClickable({ timeout: 10000 });
    await guarantee_chk_result.click();
    await browser.pause(3000);
    const guarantee_chk_result_val = await $(
      "//span[@title='" + test_data.testData.guarantee_chk_result_val + "']"
    );
    await guarantee_chk_result_val.scrollIntoView();
    await guarantee_chk_result_val.waitForClickable({ timeout: 10000 });
    await guarantee_chk_result_val.click();
    await browser.pause(3000);

    // Set 通知日 field
    await $(
      "//label[contains(.,'" +
        test_data.testData.guarantee_approval_date_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.guarantee_approval_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.guarantee_approval_date);
    await browser.pause(3000);

    // Set 保証番号 field
    await $(
      "//label[contains(.,'" + test_data.testData.guarantee_no_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.guarantee_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.guarantee_no_val);
    await browser.pause(3000);

    // Set 保証条件 field
    await $(
      "//label[contains(.,'" +
        test_data.testData.guarantee_condition_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.guarantee_condition_lbl +
        "']/@for]"
    ).setValue(test_data.testData.guarantee_condition_val);
    await browser.pause(3000);

    // Set 保証額 field
    await $(
      "//label[contains(.,'" + test_data.testData.guarantee_amount_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.guarantee_amount_lbl +
        "']/@for]"
    ).setValue(test_data.testData.guarantee_amount_val);
    await browser.pause(3000);

    // Set 保証有効期限 field
    await $(
      "//label[contains(.,'" + test_data.testData.guarantee_exp_date_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.guarantee_exp_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.guarantee_exp_date_val);
    await browser.pause(3000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    // Screenshot - during updating
    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_during = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [
          headerBar_during,
          tabheader_during,
          highlights_during,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - after updating
    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [
          headerBar_after,
          tabheader_after,
          highlights_after,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    // Click 確認 button
    const gud_confirm_btn = await $(
      "//button[@name='" +
        test_data.testData.guarantee_chk_confirm_btn_api +
        "']"
    );
    await gud_confirm_btn.waitForClickable({ timeout: 10000 });
    await gud_confirm_btn.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4"
    );

    // Click 確認 button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const guarantee_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await guarantee_confirm_btn.waitForClickable({ timeout: 10000 });
    await guarantee_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(3000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - updated page without toast message
    const headerBar_gud = await $(".//header[@id='oneHeader']");
    const tabheader_gud = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_gud = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar_gud, tabheader_gud, highlights_gud],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to APP record
    await parent.Open_Record_URL(
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
