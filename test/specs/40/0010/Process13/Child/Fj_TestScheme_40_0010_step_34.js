const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_40_0010_step_34: Can be able to update 実行方法＝「自動実行」", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Edit
    const execution_method_edit_btn = await $(
      "//button[@title='" +
        test_data.testData.app_execution_method_edit_btn +
        "']"
    );
    await browser.pause(2000);
    // ★ 新環境適用' New Env Implementation
    await execution_method_edit_btn.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await execution_method_edit_btn.waitForClickable({ timeout: 10000 });
    await execution_method_edit_btn.click();
    await browser.pause(3000);

    // Click 実行方法 label
    const execution_method_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.app_execution_method_lbl +
        "')]"
    );
    await execution_method_lbl.click();

    // Select 実行方法 picklist field value
    const execution_method_val = await $(
      "//span[@title='" + test_data.testData.app_execution_method_value + "']"
    );
    await execution_method_val.waitForClickable({ timeout: 10000 });
    await execution_method_val.click();
    await browser.pause(3000);

    // Click " + test_data.testData.save_btn + " button
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 10000 });
    await save_edit_btn.click();
    await browser.pause(30000);

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
