const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0012-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0012_step_41: Successful save for borrowing status", async () => {
    const stepNum = "41"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
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

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        disableCSSAnimation: true,
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Click pencil icon
    await $(
      ".//span[@title='" + test_data.testData.registration_section + "']"
    ).$(function () {
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
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Footer
    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    const borrowing_status_label = await $(
      "label=" + test_data.testData.borrowing_status_label
    );
    await borrowing_status_label.waitForDisplayed({ timeout: 5000 });
    await borrowing_status_label.click();
    await browser.pause(2000);

    const borrowing_status_dropdown = await $(
      "//span[@title='" + test_data.testData.borrowing_status_dropdown + "']"
    );
    await borrowing_status_dropdown.waitForClickable({ timeout: 5000 });
    await borrowing_status_dropdown.click();
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
    await browser.keys(["Escape"]);
    await browser.pause(2000);

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
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar2, tabheader2],
        disableCSSAnimation: true,
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Click Save button
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

    // Screenshot after editing
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

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        disableCSSAnimation: true,
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);
  });
}
