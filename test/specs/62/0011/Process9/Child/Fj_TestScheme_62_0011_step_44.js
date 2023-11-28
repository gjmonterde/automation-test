const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0011-9");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0011_step_44: Validation Error 「お借入内容調整実施済みのため、融資条件項目は変更できません。」" +
      "The loan terms and conditions cannot be changed because the loan details have been adjusted." +
      "is displayed and cannot be saved",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "44";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "uic") {
        // Login as tantou
        await parent.Login_as_tantou();
      }

      // Go to BA Page
      await parent.Go_to_BA();

      // Edit
      const ba_status_edit = await $(
        ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
      );
      await ba_status_edit.scrollIntoView({ block: "center" });
      await ba_status_edit.waitForClickable({ timeout: 30000 });
      await ba_status_edit.click();
      await browser.pause(3000);

      // 口座番号
      // ★ 新環境適用' New Env Implementation
      const acctno = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_account_number_label +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.ba_account_number_label +
          "')]"
      );
      await acctno.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const accountnoid = await acctno.getAttribute("for");
      await $(".//input[@id='" + accountnoid + "']").setValue(
        test_data.testData.ba_account_number_value_err
      );
      await browser.pause(1000);
      await acctno.click();
      await browser.pause(1000);

      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(10000);

      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // Cancel
      await $("button=" + test_data.testData.cancel_btn).click();
      await browser.pause(5000);
    }
  );
}
