const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0009-3");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_21: メール通知.送信要否　Email notification. Send required =送信しない Do not send", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "21";

    // Go to App Record
    await parent.Open_APP_Record(); // ★ 新環境適用' New Env Implementation

    // Screenshot - App Record
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Get MNT, WNT record
    await parent.Get_WNT_MNT_Records(); // ★ 新環境適用' New Env Implementation

    // Go to MNT record
    await parent.Open_MNT_Record(); // ★ 新環境適用' New Env Implementation

    // Screenshot - MNT record
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to WNT record
    await parent.Open_WNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - WNT record
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
  });
}
