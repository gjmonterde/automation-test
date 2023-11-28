const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0011_step_15: The bank account 支店名 branch name and  口座番号account number can be changed", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Go to BA Page
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

    // Edit
    const ba_status_edit = await $(
      ".//button[@title='" +
        test_data.testData.ba_status_edit_title +
        " の編集']"
    );
    await ba_status_edit.waitForClickable({ timeout: 10000 });
    await ba_status_edit.click();
    await browser.pause(3000);

    // 支店名
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.new_branch_name_label + "')]"
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
        test_data.testData.new_branch_name_label +
        "']/@for]"
    ).setValue(test_data.testData.ba_branch_name_value);
    await browser.pause(3000);

    // 口座番号
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.new_account_number1_label +
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
        test_data.testData.new_account_number1_label +
        "']/@for]"
    ).setValue(test_data.testData.ba_account_no_value);
    await browser.pause(3000);

    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Screenshot
    const highlights15_2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar15_2 = await $(".//header[@id='oneHeader']");
    const tabheader15_2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.cre_save +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "record-body-container"
      ).offsetheight;
      this.style.marginTop = height - this.offsetHeight + "px";
      this.style.position = "static";
    });
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar15_2, tabheader15_2, highlights15_2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Save
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights15_3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar15_3 = await $(".//header[@id='oneHeader']");
    const tabheader15_3 = await $(
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
        "-3",
      {
        hideAfterFirstScroll: [headerBar15_3, tabheader15_3, highlights15_3],
        fullPageScrollTimeout: 1000,
      }
    );
  });
}
