const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0008-1");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0008_step_06: Check the memo and attached file in the related list", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // ★ 新環境適用' New Env Implementation
    // Go to app record page
    await parent.Go_to_App();

    await util.Application_Record_Scrolling(2);

    // Save App Record Page Full Screen - Q2 Origination
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [app_headerBar, app_tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to STT record
    await parent.Go_to_STT();

    // Screenshot - STT Screen
    const stt_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const stt_headerBar = await $(".//header[@id='oneHeader']");
    const stt_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [stt_headerBar, stt_tabheader, stt_highlights],
      }
    );
  });
}
