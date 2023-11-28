const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0011-21");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_110: 最終確認 final review status changes to「実施済OK」Performed OK", async () => {
    const stepNum = "110"; // ★ 新環境適用' New Env Implementation

    // Login as shinsa1
    await parent.Login_as_Shinsa1();

    // Click Notification button
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Click Notification record
    const agr2 = await $(
      ".//span[contains(.,'最終確認ID: " + test_data.testData.agr2_name + "')]"
    );
    await agr2.waitForClickable({ timeout: 10000 });
    await agr2.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
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
    await browser.pause(8000);
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to CNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cnt_obj,
      test_data.testData.cnt_id
    );

    // Screenshot
    await util.Scroll_to_related_list(test_data.testData.asc_header);

    const highlights_tab1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_tab1 = await $(".//header[@id='oneHeader']");
    const tabheader_tab1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
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

    // Go to 申込 Page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0011_110 + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-7"
    );
    await browser.pause(6000);

    // Go to fj_Borrowing_Status__c field from Object Manager
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        "setup/ObjectManager/" +
        test_data.testData.obj_mgr_app_id +
        "/FieldsAndRelationships/" +
        test_data.testData.obj_mng_brw_id +
        "/view"
    );
    await browser.pause(30000);

    const users_frame = await browser.$(
      './/iframe[@title="Application カスタム項目: 借入ステータス ~ Salesforce - Enterprise Edition"]'
    );
    await browser.pause(5000);
    await browser.switchToFrame(users_frame);
    await $(".//th[contains(.,'実行準備中')]").scrollIntoView({
      block: "center",
    });
    await browser.switchToParentFrame();
    await browser.pause(5000);

    // Screenshot - Object manager
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-8"
    );

    // Login as shinsa1
    await parent.Login_as_Shinsa1();

    // Query notifications
    await parent.Get_Notif();

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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-9"
    );

    // Go to WNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.wnt_obj,
      test_data.testData.wnt1_id
    );

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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-10",
      {
        hideAfterFirstScroll: [headerBar_tab2, tabheader_tab2, highlights_tab2],
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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-11"
    );

    // Go to MNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.mnt_obj,
      test_data.testData.mnt1_id
    );

    // Screenshot - MNT record
    const highlights_tab4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_tab4 = await $(".//header[@id='oneHeader']");
    const tabheader_tab4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-12",
      {
        hideAfterFirstScroll: [headerBar_tab4, tabheader_tab4, highlights_tab4],
      }
    );
  });
}
