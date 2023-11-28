const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0012-2");

export default async function suite() {
  it("Fj_TestScheme_70_0012_step_43: The 処理  processing status of the application is 「完了」Completed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "43";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }

    // Go to App Record
    await parent.Open_APP_Record();

    // Open 告知画面 tab
    await parent.Switch_App_Tab(2);

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Get Notification records
    await parent.Get_Notif();

    // Go to WebNotif related list
    await parent.Go_to_WNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - お知らせ related list screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );

    // Go to WNT record
    await parent.Go_to_WNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - WNT record
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to MailNotif related list
    await parent.Go_to_MNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - メール通知 related list screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to MNT record
    await parent.Go_to_MNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - MNT
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
  });
}
