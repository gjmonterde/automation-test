const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0002-7");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_30_0002_step_21: 処理 processing status of the application is「本人確認実施待ち」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "21";

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

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to RDC of VER1 page
    await parent.Go_to_RDC();

    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // View the new attached file
    await util.View_images(1);

    // Wait for image to load
    const loaded_image2 = await $(".//img[@class='pageImg']");
    const isExisting2 = await loaded_image2.waitForExist({ timeout: 20000 });

    if (isExisting2 === true) {
      // Take screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
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
