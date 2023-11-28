const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0010-13");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0010_step_33: The 実行方法＝ is updatable to「自動実行」", async () => {
    const stepNum = "33"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await parent.Open_APP_Record();

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Edit 第三電話番号_元帳 -- pencil
    const execution_method_edit = await $(
      ".//button[@title='" + test_data.testData.execution_method_edit + "']"
    );
    await execution_method_edit.scrollIntoView();
    await execution_method_edit.waitForClickable({
      timeout: 10000,
    });
    await execution_method_edit.click();
    await browser.pause(5000);

    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    // Click 実行方法 label
    const execution_method_label = await $(
      ".//label[contains(., '" +
        test_data.testData.execution_method_label +
        "')]"
    );
    await execution_method_label.waitForClickable({
      timeout: 10000,
    });
    await execution_method_label.click();
    await browser.pause(3000);

    // Select 実行方法 picklist value
    const execution_method_value = await $(
      ".//span[@title='" + test_data.testData.execution_method_value + "']"
    );
    await execution_method_value.scrollIntoView();
    await execution_method_value.waitForClickable({
      timeout: 10000,
    });
    await execution_method_value.click();
    await browser.pause(5000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );
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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(10000);

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
