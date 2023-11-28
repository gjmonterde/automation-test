const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0011_step_42: Validation Error 「お借入内容調整実施済みのため、融資条件項目は変更できません。」" +
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
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 1000,
        }
      );

      // Click Edit button
      await $(".//button[@name='" + test_data.testData.edit_btn + "']").click();
      await browser.pause(5000);

      // Edit 支店名
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" +
          test_data.testData.new_branch_name_value +
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
        "//input[@id=//label[normalize-space(.)='" +
          "*" +
          test_data.testData.new_branch_name_value +
          "']/@for]"
      ).setValue(test_data.testData.ba_branch_name_value3);
      await browser.pause(3000);

      await $(
        "label=" + "*" + test_data.testData.new_branch_name_value
      ).click();
      await browser.pause(1000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // click Save button
      await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
      await browser.pause(10000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3"
      );

      // click Cancel button
      await $(
        ".//button[@name='" + test_data.testData.cancel_btn + "']"
      ).click();
      await browser.pause(5000);
    }
  );
}
