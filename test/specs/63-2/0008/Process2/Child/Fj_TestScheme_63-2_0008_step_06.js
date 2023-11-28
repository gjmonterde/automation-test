const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0008-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0008_step_06: The linkage data is set for 反社照会 anti-social inquiry", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Go to ASC Record
    await parent.Open_Record_URL(
      user_info.object.asc_obj,
      test_data.testData.asc_id
    );

    const highlights_asc = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_asc = await $(".//header[@id='oneHeader']");
    const tabheader_asc = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [highlights_asc, headerBar_asc, tabheader_asc],
      }
    );
    await browser.pause(5000);

    // Go to APP record
    await parent.Open_Record_URL(
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

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
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
