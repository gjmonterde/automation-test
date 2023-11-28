const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0010-13");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0010_step_33: 実行方法 field value should be edited to 自動実行", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "33";

    // ★ 新環境適用' New Env Implementation
    // Go to APP
    await parent.Go_to_APP();

    await util.Application_Record_Scrolling(4);

    const app_headerBar1 = await $(".//header[@id='oneHeader']");
    const app_tabheader1 = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [app_headerBar1, app_tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click pencil icon beside 実行方法 picklist field
    const execution_method_edit_btn = await $(
      "//button[@title='" + test_data.testData.execution_method_edit_btn + "']"
    );
    await browser.pause(5000);
    await execution_method_edit_btn.waitForClickable({ timeout: 5000 });
    await execution_method_edit_btn.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Click 実行方法 label
    const execution_method_lbl = await $(
      "//label[contains(., '" + test_data.testData.execution_method_lbl + "')]"
    );
    await execution_method_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await execution_method_lbl.click();

    // Select 実行方法 picklist field value
    const execution_method_val = await $(
      "//span[@title='" + test_data.testData.execution_method_val + "']"
    );
    await execution_method_val.waitForClickable({ timeout: 5000 });
    await execution_method_val.click();
    await browser.pause(5000);

    // Screenshot - edit page
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var middle = document.getElementsByClassName("col main-col slds-col");
      var height = middle.offsetHeight;
      this.style = "height:" + height + "px!important";
    });
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "col main-col slds-col"
      ).offsetHeight;
      this.style.marginTop = height + this.height + "px";
      (this.style.marginBottom = "-100px"), (this.style.position = "static");
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click 保存 button
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 5000 });
    await save_edit_btn.click();
    await browser.pause(10000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Go to tab 4
    await util.Application_Record_Scrolling(4);

    const app_headerBar2 = await $(".//header[@id='oneHeader']");
    const app_tabheader2 = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [app_headerBar2, app_tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
