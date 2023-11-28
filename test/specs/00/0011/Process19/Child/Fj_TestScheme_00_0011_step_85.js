const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-19");

export default async function suite() {
  it("Fj_TestScheme_00_0011_step_85: The 最終確認ステータス final review status changes to実施済みOK Performed OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "85";

    // Click Notification
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(5000);

    // Click Notification record
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .waitForClickable({ timeout: 10000 });
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .click();
    await browser.pause(4000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Click approve button
    await $(".//a[@title='" + test_data.testData.approve_btn + "']").click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Approve button
    await $("button=" + test_data.testData.approve_btn).click();
    await $("span=" + test_data.testData.approved_text).waitForExist({
      timeout: 40000,
    });

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // Get Notif
    await parent.Get_Notif(); // ★ 新環境適用' New Env Implementation

    // Go to AGR record
    await parent.Go_to_AGR(); // ★ 新環境適用' New Env Implementation

    // Screenshot - AGR Record
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
        "-4",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Go to CNT record
    await parent.Go_to_CNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot
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
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to App record
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Screenshot - Application record
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
        "-6",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Go to WebNotif related list
    await parent.Go_to_WNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - お知らせ related list screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-7"
    );

    // Go to WNT record
    await parent.Go_to_WNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - WNT record
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-8",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );

    // Go to MailNotif related list
    await parent.Go_to_MNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - メール通知 related list screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-9"
    );

    // Go to MNT record
    await parent.Go_to_MNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - MNT record
    const highlights5 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-10",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
      }
    );
  });
}
