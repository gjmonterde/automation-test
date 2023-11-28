const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0010_step_34: Verify if execution method can be updated", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    await browser.refresh();

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

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
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [app_headerBar, app_tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    await $("body").$(function () {
      this.scrollIntoView();
    });
    await browser.pause(5000);

    // Click Edit on execution method button
    const execution_method_edit = await $(
      ".//button[@title='" + test_data.testData.execution_method_edit_btn + "']"
    );
    await execution_method_edit.click();
    await browser.pause(5000);

    // Select picklist
    const execution_method_picklist = await $(
      "//button[@aria-label='" +
        test_data.testData.execution_method_picklist_lbl +
        "']"
    );
    await execution_method_picklist.click();
    await browser.pause(5000);

    // Select value in the picklist
    await $(
      ".//lightning-base-combobox-item[@data-value='" +
        test_data.testData.execution_method_picklist_value +
        "']"
    ).click();
    await browser.pause(5000);

    // Save
    const save_btn = $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);

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
  });
}
