const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0012-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0012_step_42: The 処理 processing status of the application is「完了」", async () => {
    const stepNum = "42"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Open_APP_Record();

    // Switch to 実行画面 tab
    await parent.Switch_App_Tab(4);

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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 5000,
      }
    );
    await browser.pause(2000);

    // Go to MNT list Record
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_mnt_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);

    // Go to WNT list Record
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_wnt_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(3000);

    // Get WNT and MNT records
    await parent.Get_MNT_WNT_Record();

    // Go to MNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.mnt_obj,
      test_data.testData.mnt1_id
    );

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
    await browser.pause(3000);

    // Go to WNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.wnt_obj,
      test_data.testData.wnt1_id
    );

    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
    await browser.pause(2000);
  });
}
