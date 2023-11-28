const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0011_step_93: The 最終確認 final confirmation status of the 最終確認(契約同意) final confirmation (agreement) changes to「承認待ち」", async () => {
    const stepNum = "93"; // ★ 新環境適用' New Env Implementation

    // Go to AGR record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.agr_obj,
      test_data.testData.agr2_id
    );

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
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to MNT related list record
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
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);

    // Go to WNT related list record
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
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);

    // Go to MNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.mnt_obj,
      test_data.testData.mnt1_id
    );

    const highlights_mnt = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_mnt = await $(".//header[@id='oneHeader']");
    const tabheader_mnt = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [highlights_mnt, headerBar_mnt, tabheader_mnt],
      }
    );
    await browser.pause(2000);

    // Go to WNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.wnt_obj,
      test_data.testData.wnt1_id
    );

    const highlights_wnt = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_wnt = await $(".//header[@id='oneHeader']");
    const tabheader_wnt = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [highlights_wnt, headerBar_wnt, tabheader_wnt],
      }
    );
    await browser.pause(2000);
  });
}
