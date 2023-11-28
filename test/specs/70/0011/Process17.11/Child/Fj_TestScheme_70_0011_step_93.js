const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0011-17.11"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0011_step_93: Validation Error 「お借入内容調整実施済みのため、融資条件項目は変更できません。」" +
      "The loan terms and conditions cannot be changed because the loan details have been adjusted. is displayed and cannot be saved",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "93";

      // Go to App record
      await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

      // Scroll to view - 銀行口座 related list
      await util.Scroll_to_related_list(test_data.testData.ba_header); // ★ 新環境適用' New Env Implementation

      // Click Record actions
      const record_actions = await $(
        ".//lst-template-list-item-factory[contains(., '" +
          test_data.testData.ba_name +
          "')]"
      ).$(".//*[@slot='rowLevelActions']");
      await record_actions.waitForClickable({ timeout: 30000 });
      await record_actions.click();
      await browser.pause(5000);

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

      // Click Edit
      const edit_btn = await $(
        "a[title='" + test_data.testData.ba_edit_title + "']"
      );
      await edit_btn.waitForClickable({ timeout: 30000 });
      await edit_btn.click();
      await browser.pause(5000);

      // ★ 新環境適用' New Env Implementation
      // Dialog box
      const dialog = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );

      // Edit record
      // 支店名
      // ★ 新環境適用' New Env Implementation
      const branchname = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_branch_name_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_branch_name_lbl +
            "')]"
        );
      await branchname.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const branchnameid = await branchname.getAttribute("for");
      await $(".//input[@id='" + branchnameid + "']").setValue(
        test_data.testData.ba_branch_name_val3
      );
      await browser.pause(1000);
      await branchname.click();
      await browser.pause(1000);

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

      // Save record
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(5000);

      // Screenshot - Error
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3"
      );

      // Cancel Edit
      await $(
        ".//button[@name='" + test_data.testData.sf_canceledit_btn + "']"
      ).click();
      await browser.pause(5000);
    }
  );
}
