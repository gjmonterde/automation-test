const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_40_0011_step_42: Validation Error「お借入内容調整実施済みのため、融資条件項目は変更できません。」" +
      '"The loan terms and conditions cannot be changed because the loan details have been adjusted" is displayed and ' +
      "cannot be saved",
    async () => {
      const stepNum = "42"; // ★ 新環境適用' New Env Implementation

      // Go to BA Page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.ba_obj,
        test_data.testData.ba_id
      );

      // Edit
      const ba_status_edit = await $(
        ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
      );
      // ★ 新環境適用' New Env Implementation
      await ba_status_edit.$(function () {
        this.scrollIntoView({
          block: "center",
        });
      });
      await ba_status_edit.waitForClickable({ timeout: 10000 });
      await ba_status_edit.click();
      await browser.pause(3000);

      // 支店名
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" +
          test_data.testData.ba_branch_name_field +
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
        "*//input[@id=//label[normalize-space(.)='" +
          "*" +
          test_data.testData.ba_branch_name_field +
          "']/@for]"
      ).setValue(test_data.testData.ba_branch_name_value_err);
      await browser.pause(2000);
      await browser.keys(["Escape"]);
      await browser.pause(3000);

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(10000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );

      // Cancel
      await $("button=" + test_data.testData.cancel_btn).click();
      await browser.pause(5000);
    }
  );
}
