const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_93: Check the 最終確認(契約同意)詳細画面final confirmation (agreement) detail screen and 申込詳細画面 application detail screen", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "93";

    // Go to AGR record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.agr_obj,
      test_data.testData.agr_id
    );

    // Screenshot - 最終確認 screen
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 1000,
        disableCSSAnimation: true,
      }
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 1000,
        disableCSSAnimation: true,
      }
    );

    // Go to WebNotif related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_wnt_rel
    );

    // Screenshot - お知らせ related list screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to WNT(1) record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.wnt_obj,
      test_data.testData.wnt_id
    );

    // Screenshot - WNT 契約同意承認待ち record
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to MailNotif related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_mnt_rel
    );

    // Screenshot - メール通知 related list screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // Go to MNT(1) record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.mnt_obj,
      test_data.testData.mnt_id
    );

    // Screenshot - MNT 契約同意承認待ち record
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
  });
}
