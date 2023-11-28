const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0010_step_29: Amount of the loan can be renewed to a value smaller than the amount of the loan", async () => {
    const stepNum = "29"; // ★ 新環境適用' New Env Implementation

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(3);

    const loan_amount_button = await $(
      ".//button[@title='" + test_data.testData.app_adj_loanamt + "']"
    );
    await loan_amount_button.click();
    await browser.pause(3000);

    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(5000);

    await $(
      ".//label[contains(.,'" + test_data.testData.loan_upper_field + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.loan_upper_field +
        "']/@for]"
    ).setValue(test_data.testData.loan_amount_value);
    await browser.pause(3000);

    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Save
    const save_btn = $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);

    await browser.refresh();

    await browser.pause(15000);

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(3);

    const app_headerBar = await $(".//header[@id='oneHeader']");
    const app_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [app_headerBar, app_tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    await browser.pause(5000);
  });
}
