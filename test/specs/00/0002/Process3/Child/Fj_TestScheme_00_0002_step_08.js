const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
const parent = require("../Parent/Fj_TestScheme_00_0002-3");

export default function suite() {
  it("Fj_TestScheme_00_0002_step_08: 処理 processing status of the application is「本人確認実施待ち」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    // Go to APP record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_APP();

    const headerBar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to VER-1 record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_VER();

    // Go to RDC of VER1 page
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_RDC();

    const headerBar_rdc = await $(".//header[@id='oneHeader']");
    const tabheader_rdc = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_rdc = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_rdc, tabheader_rdc, highlights_rdc],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // View 1st attached file
    await util.View_images(1); // ★ 新環境適用' New Env Implementation

    // Wait for image to load
    const loaded_image1 = await $(".//img[@class='pageImg']");
    const isExisting1 = await loaded_image1.waitForExist({ timeout: 20000 });

    if (isExisting1 === test_data.testData.isTrue) {
      // Take screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0002 +
          "_" +
          stepNum +
          "-3"
      );
    }

    // Click close button
    await $(
      "//button[@title='" + test_data.testData.close_btn_img + "']"
    ).click();
    await browser.pause(2000);
  });
}
