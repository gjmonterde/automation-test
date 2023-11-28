const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0011-16"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0011_step_78: Validation Error 「お借入内容調整実施済みのため、融資条件項目は変更できません。」 " +
      "The loan terms and conditions cannot be changed because the loan details have been adjusted. " +
      "is displayed and cannot be saved",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "78";

      // Go to App Record
      await parent.Open_APP_Record();

      // Open 案件詳細 tab
      await parent.Switch_App_Tab(3);

      // Edit
      const edit_btn = await $(
        "//button[@title='" +
          test_data.testData.app_loan_amt_max_edit_btn +
          "']"
      );
      await browser.pause(5000);
      await edit_btn.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation;
      await edit_btn.waitForClickable({ timeout: 5000 });
      await edit_btn.click();
      await browser.pause(5000);

      // 融資額(調整上限)
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" +
          test_data.testData.app_loan_amt_upper_limit_lbl +
          "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.app_loan_amt_upper_limit_lbl +
          "']/@for]"
      ).setValue(test_data.testData.app_loan_amt_upper_limit_val);
      await browser.pause(1000);
      await browser.keys(["Escape"]);
      await browser.pause(2000);

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );

      await browser.pause(5000);

      // Click save button
      const save_edit_btn = await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await save_edit_btn.waitForClickable({ timeout: 5000 });
      await save_edit_btn.click();
      await browser.pause(10000);

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // Click Cancel button
      const cancel_edit_btn = await $(
        ".//button[@name='" + test_data.testData.sf_canceledit_btn + "']"
      );
      await cancel_edit_btn.waitForClickable({ timeout: 5000 });
      await cancel_edit_btn.click();
      await browser.pause(5000);
    }
  );
}
