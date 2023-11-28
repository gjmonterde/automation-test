const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-4");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_30: A 子画面sub-screen is displayed and re-scoring operation is possible.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "30";

    // Open EXS record
    await parent.Open_EXS_Record();

    // Click スコアリング再実施 button
    const reexecute_scoring_btn = await $(
      "//button[@name='" + test_data.testData.reexecute_scoring_btn_api + "']"
    );
    await reexecute_scoring_btn.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await reexecute_scoring_btn.click();
    await browser.pause(5000);

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // Click OK button
    const reexecute_confirm_btn = await $(
      ".//button[contains(text(), '" +
        test_data.testData.reexecute_confirm +
        "')]"
    );
    await reexecute_confirm_btn.waitForClickable({ timeout: 5000 });
    await reexecute_confirm_btn.click();
    await browser.pause(5000);

    // To determine if the toast shows up
    await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

    // Take screenshot - with toast message
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );

    await browser.refresh();
    await browser.pause(10000); // ★ 新環境適用' New Env Implementation

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
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

    // Take screenshot - updated page without toast message
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
