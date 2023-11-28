const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-9");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_42: Validation Error 「お借入内容調整実施済みのため、融資条件項目は変更できません。」 is displayed and cannot be saved", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "42";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }

    // Go to BA record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    // Edit 口座番号
    await $(
      ".//button[@title='" + test_data.testData.edit_app_btn + "']"
    ).click();
    await browser.pause(3000);
    const accountno = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.account_number_label +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.account_number_label + "')]"
    );
    await accountno.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    const acctno_id = await accountno.getAttribute("for");
    await $(".//input[@id='" + acctno_id + "']").setValue(
      test_data.testData.edit_bank_acct_no_value
    );
    await $("label=" + test_data.testData.edit_phone_label).click();

    // Save
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Cancel Edit
    await $(
      ".//button[@name='" + test_data.testData.sf_canceledit_btn + "']"
    ).click();
    await browser.pause(5000);
  });
}
