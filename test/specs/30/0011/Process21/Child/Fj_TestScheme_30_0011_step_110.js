const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-21");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_110: 最終確認 final review status changes to 「実施済OK」Performed OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "110";

    // Click Notification button
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Click Notification record
    await $(
      ".//span[contains(text(), '" + test_data.testData.agr2_name + "')]"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//span[contains(text(), '" + test_data.testData.agr2_name + "')]"
    ).click();
    await browser.pause(10000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Click approve button
    await $(".//a[@title='" + test_data.testData.approve_btn + "']").click();
    await browser.pause(5000);

    // Enter comment
    await $("textarea").setValue(test_data.testData.approve_comment_value);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // Click Approve button
    await $("button=" + test_data.testData.approve_btn).click();
    await $("span=" + test_data.testData.approved_text).waitForExist({
      timeout: 60000,
    });
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to CNT record
    await parent.Go_to_CNT();

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
        "-5",
      {
        hideAfterFirstScroll: [headerBar_tab1, tabheader_tab1, highlights_tab1],
        fullPageScrollTimeout: 1000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to 申込 Page
    await parent.Go_to_APP();

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
        "-7",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(5000);

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot - Application 実行画面 tab
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
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
        "-6",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // query notifications
    await parent.Get_Notif();

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
        "-8"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to WNT(1) record
    await parent.Go_to_WNT();

    // Screenshot - WNT record
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
        "-9",
      {
        hideAfterFirstScroll: [headerBar_tab2, tabheader_tab2, highlights_tab2],
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
        "-10"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to MNT(1) record
    await parent.Go_to_MNT();

    // Screenshot - MNT record
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
        "-11",
      {
        hideAfterFirstScroll: [headerBar_tab4, tabheader_tab4, highlights_tab4],
      }
    );
  });
}
