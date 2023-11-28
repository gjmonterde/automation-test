const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-11");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_53: The 申込.処理  processing status is changed to 「条件確認登録待ち」Waiting for condition confirmation registration", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "53";

    // ★ 新環境適用' New Env Implementation
    // Go to App record
    await parent.Go_to_APP();

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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Scroll into view reconfirmation btn
    const recon_btn = await $(
      "button=" + test_data.testData.reconfirmation_text
    );
    await recon_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });

    // Click reconfirmation btn
    await recon_btn.click();
    await browser.pause(3000);

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

    // Click OK (reconfirmation)
    await $(
      "button[type='" + test_data.testData.submit_type_btn + "']"
    ).click();

    // TOAST
    const toast = await $(
      ".//div[@class='toastContainer slds-notify_container slds-is-relative']"
    );
    //To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [toast],
      }
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - Application
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
        "-4",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Get Notif record
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
        "-5"
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
        "-6",
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
        "-7"
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
        "-8",
      {
        hideAfterFirstScroll: [headerBar_tab4, tabheader_tab4, highlights_tab4],
      }
    );
  });
}
