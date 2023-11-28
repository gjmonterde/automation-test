const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const parent = require("../Parent/Fj_TestScheme_00_0011-4.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0011_step_16: The sub screen is displayed and the　削除操作 delete operation is possible", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }

    // Go to BA record
    await parent.Go_to_BA(); // ★ 新環境適用' New Env Implementation

    // The sub screen is displayed and the delete operation is possible.
    // click Delete button
    await $(
      ".//button[@name='" + test_data.testData.api_ba_delete_btn + "']"
    ).click();
    await browser.pause(2000);

    // Screenshot - 銀行口座を削除 screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();
    await browser.pause(2000);
    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // After deleting, check. Go to the 申込詳細画面 application detail screen. (CL Originate)
    // Screenshot - 申込 Screen
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
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Target 銀行口座 bank account has been deleted and stored in your organization's Recycle Bin (confirmed by your system administrator)
    // Logout as tantou1
    await parent.Logout();

    // Login to org - admin
    await parent.Login_as_admin();

    // Screenshot - ごみ箱 Screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to 組織のごみ箱 list view
    await $("span=" + test_data.testData.my_bin_listview).click();
    await $("span=" + test_data.testData.org_bin_listview).click();
    await browser.pause(5000);

    // Screenshot -  ごみ箱 Screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5"
    );

    // Logout as admin
    await parent.Logout();
  });
}
