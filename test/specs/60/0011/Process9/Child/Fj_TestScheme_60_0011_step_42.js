const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_60_0011_step_42: Validation Error 'The loan terms and conditions cannot be changed because the loan details have been adjusted.'" +
      " is displayed and cannot be saved.",
    async () => {
      const stepNum = "42"; // ★ 新環境適用' New Env Implementation

      // Go to BA1 record detail page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.ba_obj,
        test_data.testData.ba1_id
      );

      // Screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // Take screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(3000);

      // Click the edit button
      const edit_btn = await $(
        ".//button[@name='" + test_data.testData.edit_btn + "']"
      );
      await edit_btn.waitForClickable({ timeout: 10000 });
      await edit_btn.click();
      await browser.pause(2000);

      // Dialog box
      const dialog = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );

      // Full modal
      await util.modal_fullpage();
      await browser.pause(3000);

      // 支店名(普通銀行) field
      const new_branch_name_ordinary_bank_label = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.new_branch_name_ordinary_bank_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.new_branch_name_ordinary_bank_label +
            "')]"
        );
      await new_branch_name_ordinary_bank_label.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const new_branch_name_ordinary_bank_label_id =
        await new_branch_name_ordinary_bank_label.getAttribute("for");
      await $(
        ".//input[@id='" + new_branch_name_ordinary_bank_label_id + "']"
      ).setValue(test_data.testData.branch_name3);
      await new_branch_name_ordinary_bank_label.click();
      await browser.pause(1000);

      // 支店名 field
      const new_branch_name_lbl = await dialog
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
      await new_branch_name_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const new_branch_name_id = await new_branch_name_lbl.getAttribute("for");
      await $(".//input[@id='" + new_branch_name_id + "']").setValue(
        test_data.testData.branch_name3
      );
      await new_branch_name_lbl.click();
      await browser.pause(1000);

      // Take screenshot
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // Take screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(3000);

      // Click save button
      const save_edit_btn = await $(
        ".//button[@name='" + test_data.testData.save_edit_btn + "']"
      );
      await save_edit_btn.waitForClickable({ timeout: 5000 });
      await save_edit_btn.click();
      await browser.pause(2000);

      // Take screenshot
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // Take screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(3000);

      // Click cancel button
      const cancel_btn = await $(
        ".//button[@name='" + test_data.testData.cancel_edit_btn + "']"
      );
      await cancel_btn.waitForClickable({ timeout: 5000 });
      await cancel_btn.click();
      await browser.pause(2000);
    }
  );
}
