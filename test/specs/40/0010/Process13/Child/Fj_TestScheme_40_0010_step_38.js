const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_40_0010_step_38: Values can be set and saved for the following items: 全店顧客番号＝* Any value", async () => {
    const stepNum = "38"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 実行画面 tab
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
    await browser.pause(2000);
    await edit_btn.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await edit_btn.waitForClickable({ timeout: 10000 });
    await edit_btn.click();
    await browser.pause(3000);

    // 全店顧客番号 = Any value
    // ★ 新環境適用' New Env Implementation
    await $("//label[contains(.,'" + test_data.testData.cif_no_field + "')]").$(
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
        test_data.testData.cif_no_field +
        "']/@for]"
    ).setValue(test_data.testData.app_cif_no_value);
    await browser.pause(3000);

    // 顧客番号再取得連携ステータス＝「手動照会済み」
    // Click 顧客番号再取得連携ステータス label
    const status_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.app_cif_linkage_status_lbl +
        "')]"
    );

    // ★ 新環境適用' New Env Implementation
    await status_lbl.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await status_lbl.click();

    // Select 顧客番号再取得連携ステータス value
    const status_val = await $(
      "//span[@title='" + test_data.testData.app_cif_linkage_status_value + "']"
    );
    await status_val.waitForClickable({ timeout: 10000 });
    await status_val.click();
    await browser.pause(2000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );

    // Click " + test_data.testData.save_btn + " button
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 10000 });
    await save_edit_btn.click();
    await browser.pause(30000);
  });
}
