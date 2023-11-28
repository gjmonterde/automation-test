const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-12.09");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_30_0011_step_68: Validation Error 「お借入内容調整実施済みのため、融資条件項目は変更できません。」" +
      "The loan terms and conditions cannot be changed because the loan details have been adjusted. is displayed and cannot be saved",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "68";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "uic") {
        // Login as tantou
        await parent.Login_as_tantou();
      }

      // ★ 新環境適用' New Env Implementation
      // Go to App record
      await parent.Go_to_APP();

      // Scroll to view - 銀行口座 related list
      await util.Scroll_to_related_list(test_data.testData.ba_header);

      // Click Record actions
      await $(
        ".//lst-template-list-item-factory[contains(., '" +
          test_data.testData.ba_name +
          "')]"
      )
        .$(".//*[@slot='rowLevelActions']")
        .click();
      await browser.pause(3000);

      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );

      // Click Edit
      await $("a[title='" + test_data.testData.edit_title + "']").click();
      await browser.pause(3000);

      // Dialog box
      const dialog = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );

      // ★ 新環境適用' New Env Implementation
      // Edit record
      // 支店名
      const branchname = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.new_branch_name_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.new_branch_name_label +
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
        test_data.testData.ba_branch_name_value2
      );
      await browser.pause(1000);
      await branchname.click();
      await browser.pause(1000);

      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // Save record
      await $(
        ".//button[@name='" + test_data.testData.save_edit_btn + "']"
      ).click();
      await browser.pause(5000);

      // Screenshot - Error
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
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
      await browser.pause(2000);
    }
  );
}
