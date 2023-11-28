const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0012_step_41: Successful save for borrowing status", async () => {
    const stepNum = "41"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Open 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot of App record - 実行画面 tab before editing
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

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

    // Open 実行画面 tab
    await util.Application_Record_Scrolling(4);

    const main_col = await $(
      "//flexipage-component2[@data-target-selection-name='flexipage_tabset']"
    );

    const run_registration_section = await main_col.$(
      "//h3[contains(., '" + test_data.testData.run_registration_section + "')]"
    );

    await run_registration_section.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    const borrowing_status_edit_btn = await $(
      "//button[@title='" + test_data.testData.borrowing_status_edit_btn + "']"
    );
    await borrowing_status_edit_btn.waitForClickable({ timeout: 10000 });
    await borrowing_status_edit_btn.click();
    await browser.pause(2000);

    await $(
      "//label[contains(.,'" + test_data.testData.borrowing_status_label + "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center",
    });
    await browser.pause(5000);

    // Sticky footer in modal
    const footer = $(
      "//div[@class='record-page-decorator has-footer']//records-form-footer[@class='slds-docked-form-footer']"
    );

    // Set footer's styling from absolute to static to prevent interception
    // when targeting next element
    await footer.$(function () {
      this.style.position = "static";
    });

    const borrowing_status_label = await $(
      "label=" + test_data.testData.borrowing_status_label
    );
    await borrowing_status_label.waitForDisplayed({ timeout: 10000 });
    await borrowing_status_label.click();
    await browser.pause(2000);

    const borrowing_status_dropdown = await $(
      "//span[@title='" + test_data.testData.borrowing_status_dropdown + "']"
    );
    await borrowing_status_dropdown.waitForClickable({ timeout: 10000 });
    await borrowing_status_dropdown.click();
    await browser.pause(2000);

    const handling_number_label = await $(
      "label=" + test_data.testData.handling_number_label
    );
    await handling_number_label.click();
    await browser.pause(2000);

    await $(
      ".//label[contains(.,'" + test_data.testData.handling_number_label + "')]"
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
        test_data.testData.handling_number_label +
        "']/@for]"
    ).setValue(test_data.testData.handling_number_value);
    await browser.pause(3000);

    // Screenshot during edit
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click Save button
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);

    await browser.refresh();
    await browser.pause(10000);

    // Open 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot after editing
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

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
