const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0012-2");

export default function suite() {
  it("Fj_TestScheme_00_0012_step_36: Successful save for borrowing status", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "36";

    // Login to tantou1 user
    await parent.Login_as_tantou1();

    // Go to App Record
    await parent.Open_APP_Record(4);

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
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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

    // Open 実行画面 tab
    await parent.Open_APP_Record(4);

    const main_col = await $(
      "//flexipage-component2[@data-target-selection-name='flexipage_tabset']"
    );

    const run_registration_section = await main_col.$(
      "//h3[contains(., '" + test_data.testData.run_registration_section + "')]"
    );

    await run_registration_section.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    await browser.pause(5000);

    const borrowing_status_edit_btn = await $(
      "//button[@title='" + test_data.testData.borrowing_status_edit_btn + "']"
    );
    await borrowing_status_edit_btn.waitForClickable({ timeout: 10000 });
    await borrowing_status_edit_btn.click();
    await browser.pause(2000);

    await $(
      "//label[contains(.,'" +
        test_data.testData.app_borrowing_status_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
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

    // 借入ステータス
    const borrowing_status_label = await $(
      "label=" + test_data.testData.app_borrowing_status_label
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

    // 取扱番号(口座番号)
    // ★ 新環境適用' New Env Implementation

    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.app_handling_number_label +
        "']/@for]"
    ).setValue(test_data.testData.handling_number_value);
    await browser.pause(2000);

    // Screenshot during edit
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click Save button
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);

    // Open 実行画面 tab
    await parent.Open_APP_Record(4); // ★ 新環境適用' New Env Implementation

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
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
