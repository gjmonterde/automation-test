const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it(
    "Fj_TestScheme_10_0011_step_42: Validation Error 「お借入内容調整実施済みのため、融資条件項目は変更できません。」" +
      '"The loan terms and conditions cannot be changed because the loan details have been adjusted." is displayed ' +
      "and cannot be saved",
    async () => {
      const stepNum = "42"; // ★ 新環境適用' New Env Implementation

      // Go to BA record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.ba_obj,
        test_data.testData.ba_id
      );

      // Screenshot
      const highlights12_2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar12_2 = await $(".//header[@id='oneHeader']");
      const tabheader12_2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar12_2, tabheader12_2, highlights12_2],
          fullPageScrollTimeout: 1000,
        }
      );

      // click Edit button
      await $(".//button[@name='" + test_data.testData.edit_btn + "']").click();
      await browser.pause(10000);

      // ★ 新環境適用' New Env Implementation
      // Dialog box
      const dialog = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );

      // Edit 支店名
      // Set 支店名 field
      // ★ 新環境適用' New Env Implementation
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
        test_data.testData.ba_branch_name_value2
      );
      await new_branch_name_lbl.click();
      await browser.pause(1000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );
      await browser.pause(5000);

      // click Save button
      await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
      await browser.pause(5000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3"
      );

      // click Cancel button
      await $(
        ".//button[@name='" + test_data.testData.cancel_edit_btn + "']"
      ).click();
      await browser.pause(5000);
    }
  );
}
