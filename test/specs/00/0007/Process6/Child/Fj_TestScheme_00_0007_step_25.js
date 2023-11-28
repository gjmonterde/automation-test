const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-6"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0007_step_25: The 保証審査詳細 warranty examination details status is「承認待ち」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "25";

    // Go to GUA record detail screen
    await parent.Open_GUA_Record(); // ★ 新環境適用' New Env Implementation

    // Go to GUD record detail screen
    await parent.Open_GUD_Record(); // ★ 新環境適用' New Env Implementation

    // Screenshot - before updating
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Go to 諾否判定
    await $(".//span[contains(.,'" + test_data.testData.gud_decision_lbl + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    ); // ★ 新環境適用' New Env Implementation
    await browser.pause(3000);

    // Click the pencil icon
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.acceptance_judgement_edit_btn +
        "']"
    );
    await edit.scrollIntoView({ block: "center" });
    await edit.click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 諾否判定
    await $("//label[contains(.,'" + test_data.testData.gud_decision_lbl + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await $("label=" + test_data.testData.gud_decision_lbl).click();
    await browser.pause(5000);
    await $("//span[@title='" + test_data.testData.gud_decision + "']").click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // 保証審査結果
    await $(
      "//label[contains(.,'" + test_data.testData.gud_review_result_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("label=" + test_data.testData.gud_review_result_lbl).click();
    await browser.pause(5000);
    await $(
      "//span[@title='" + test_data.testData.gud_guarantee_chk_result_val + "']"
    ).click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    //通知日
    await $(
      "//label[contains(.,'" + test_data.testData.gud_guarantee_date_lbl + "')]"
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
        test_data.testData.gud_guarantee_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_approval_date);

    // ★ 新環境適用' New Env Implementation
    //保証番号
    await $(
      "//label[contains(.,'" + test_data.testData.gud_guarantee_no_lbl + "')]"
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
        test_data.testData.gud_guarantee_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_no_val);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    //保証条件
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud_guarantee_condition_lbl +
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
        test_data.testData.gud_guarantee_condition_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_condition_val);

    // ★ 新環境適用' New Env Implementation
    //保証額
    test_data.testData.gud_approved_amount =
      parseInt(test_data.testData.gud_approved_amount) - 100;
    await $(
      "//label[contains(.,'" + test_data.testData.guarantee_amt_lbl + "')]"
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
        test_data.testData.guarantee_amt_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_approved_amount);

    // ★ 新環境適用' New Env Implementation
    // Set 保証有効期限 field
    await $(
      "//label[contains(.,'" + test_data.testData.gud_exp_date_lbl + "')]"
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
        test_data.testData.gud_exp_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_exp_date_val);

    // ★ 新環境適用' New Env Implementation
    // Set 審査結果基準利率(%) field
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud_result_based_interest_lbl +
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
        test_data.testData.gud_result_based_interest_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_result_based_interest_val);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Deselect the hover/selected fields
    await util.Deselect_fields(3); // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
      "//button[@name='" + test_data.testData.guarantee_confirm_api + "']"
    );
    await gud_confirm_btn.waitForClickable({ timeout: 10000 });
    await gud_confirm_btn.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

    // Screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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

    // Go to APP record detail screen
    await parent.Open_APP_Record(); // ★ 新環境適用' New Env Implementation

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
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
