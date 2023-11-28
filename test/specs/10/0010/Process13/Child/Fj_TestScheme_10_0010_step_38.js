const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0010_step_38: Manual Setup: Customer Number", async () => {
    const stepNum = "38"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // ★ 新環境適用' New Env Implementation
    await $("span=" + test_data.testData.submission_data_section).$(
      function () {
        this.scrollIntoView();
      }
    );
    await browser.pause(5000);
    await $("span=" + test_data.testData.execution_result_section).$(
      function () {
        this.scrollIntoView();
      }
    );
    await browser.pause(5000);

    // Click pencil icon beside 全店顧客番号
    const edit_btn = await $(
      "//button[@title='" + test_data.testData.app_cif_no_edit_btn + "']"
    );
    await browser.pause(5000);
    await edit_btn.scrollIntoView({ block: "center" });
    await edit_btn.waitForClickable({ timeout: 10000 });
    await edit_btn.click();
    await browser.pause(5000);

    // 全店顧客番号 = Any value
    // ★ 新環境適用' New Env Implementation
    await $("//label[contains(.,'" + test_data.testData.cif_no_label + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.cif_no_label +
        "']/@for]"
    ).setValue(test_data.testData.fj_CifNo_value);
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // 顧客番号再取得連携ステータス＝「手動照会済み」
    // Click 顧客番号再取得連携ステータス label
    const status_lbl = await $(
      ".//div[@data-target-selection-name='" +
        test_data.testData.api_app_customeledgerstatus_field +
        "']"
    ).$("label=" + test_data.testData.app_cif_linkage_status_lbl);
    await status_lbl.scrollIntoView();
    await status_lbl.waitForClickable({ timeout: 10000 });
    await status_lbl.click();

    // Select 顧客番号再取得連携ステータス value
    const status_val = await $(
      "//span[@title='" + test_data.testData.app_cif_linkage_status_val + "']"
    );
    await status_val.waitForClickable({ timeout: 10000 });
    await status_val.click();
    await browser.pause(2000);
    await browser.keys(["Escape"]);
    await browser.pause(5000);

    // Take screenshot before saving
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Save
    const save_btn = $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);

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
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);
  });
}
