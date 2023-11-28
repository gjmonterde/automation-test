const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_10_0009_step_12: An error message is displayed and cannot be updated", async () => {
    const stepNum = "12"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    // Modify 融資額(調整上限)
    await $(
      "//button[@title='" + test_data.testData.app_adj_loanamt + "']"
    ).click();
    await browser.pause(5000);

    // Set 融資額(調整上限) field
    await $(
      "//label[contains(.,'" + test_data.testData.loan_upper_field + "')]"
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
        test_data.testData.loan_upper_field +
        "']/@for]"
    ).setValue(test_data.testData.app_adj_value);
    await browser.pause(3000);

    // Click 保存 button
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);

    // Click 融資額(調整上限) link inside error pop up to check message
    $(
      "//a[contains(., '" + test_data.testData.loan_upper_field + "')]"
    ).click();
    await browser.pause(5000);

    // Click error icon to make pop up error visible again
    $(
      "//button[@class='footer-button page-error-button slds-button slds-button_icon-error slds-m-right_small']"
    ).click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );

    // Cancel Edit
    await $(
      ".//button[@name='" + test_data.testData.cancel_edit_btn + "']"
    ).click();
    await browser.pause(5000);
  });
}
