const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_17: Press the 「削除」Delete button", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "17";

    // Get Bank Info
    await parent.Get_BankAccount();

    // Go to BA record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    // The sub screen is displayed and the delete operation is possible.
    // click Delete button
    await $(
      ".//button[@name='" + test_data.testData.delete_ba_api + "']"
    ).click();
    await browser.pause(5000);

    // Screenshot - 銀行口座を削除 screen
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Confirm Delete
    await $("button=" + test_data.testData.confirm_btn).click();

    // Toast screenshot
    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 案件詳細 tab
    await util.Application_Record_Scrolling(2);

    // After deleting, check. Go to the 申込詳細画面 application detail screen. (CL Originate)
    // Screenshot - 申込 Screen
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Target 銀行口座 bank account has been deleted and stored in your organization's Recycle Bin (confirmed by your system administrator)
    // Logout as tantou1
    await parent.Logout();

    // Login to org - admin
    await parent.Login_as_Admin();

    // Screenshot - ごみ箱 Screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to 組織のごみ箱 list view
    await $("span=" + test_data.testData.my_bin_listview).click();
    await $("span=" + test_data.testData.org_bin_listview).click();
    await browser.pause(3000);

    // Screenshot -  ごみ箱 Screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
