const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-1");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_02: 最終確認(条件確認) final confirmation (condition confirmation) shall be made", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "2";

    // ★ 新環境適用' New Env Implementation
    // Go to CNT record
    await parent.Go_to_CNT();

    // Screenshot
    const highlights_tab1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_tab1 = await $(".//header[@id='oneHeader']");
    const tabheader_tab1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_tab1, tabheader_tab1, highlights_tab1],
        fullPageScrollTimeout: 1000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to 申込 Page
    await parent.Go_to_APP();

    await util.Application_Record_Scrolling(2);

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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to WebNotif related list
    await parent.Go_to_WNT_list();

    // Screenshot - お知らせ related list screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to WNT(1) record
    await parent.Go_to_WNT(test_data.testData.wnt_id);

    // Screenshot - WNT 条件確認 record
    const highlights_tab2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_tab2 = await $(".//header[@id='oneHeader']");
    const tabheader_tab2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_tab2, tabheader_tab2, highlights_tab2],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to WNT(2) record
    await parent.Go_to_WNT(test_data.testData.wnt2_id);

    // Screenshot - WNT 払込先口座登録 record
    const highlights_tab3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_tab3 = await $(".//header[@id='oneHeader']");
    const tabheader_tab3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar_tab3, tabheader_tab3, highlights_tab3],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to MailNotif related list
    await parent.Go_to_MNT_list();

    // Screenshot - メール通知 related list screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-6"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to MNT(1) record
    await parent.Go_to_WNT(test_data.testData.mnt_id);

    // Screenshot - MNT 条件確認 record
    const highlights_tab4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_tab4 = await $(".//header[@id='oneHeader']");
    const tabheader_tab4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar_tab4, tabheader_tab4, highlights_tab4],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to MNT(2) record
    await parent.Go_to_WNT(test_data.testData.mnt2_id);

    // Screenshot - MNT 払込先口座登録 record
    const highlights_tab5 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_tab5 = await $(".//header[@id='oneHeader']");
    const tabheader_tab5 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-8",
      {
        hideAfterFirstScroll: [headerBar_tab5, tabheader_tab5, highlights_tab5],
      }
    );
  });
}
