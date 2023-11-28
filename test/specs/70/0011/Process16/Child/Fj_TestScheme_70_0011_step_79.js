const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0011-16");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0011_step_79: The 申込.処理 processing status is changed to 「条件確認登録待ち」 " +
      "Waiting for condition confirmation registration",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "79";

      // Go to App Record
      await parent.Open_APP_Record();

      // Open 案件詳細 tab
      await parent.Switch_App_Tab(3);

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
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to App Record
      await parent.Open_APP_Record();

      // Open 案件詳細 tab
      await parent.Switch_App_Tab(3);

      // Scroll into view reconfirmation btn
      const recon_btn = await $(
        "button=" + test_data.testData.reconfirmation_txt
      );
      await recon_btn.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation;

      // Click reconfirmation btn
      await recon_btn.click();
      await browser.pause(5000);

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
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

      // To determine if the toast shows up
      // ★ 新環境適用' New Env Implementation
      await util.Toast_Message();
      await browser.pause(1000);

      // Take screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3"
      );

      // Go to App Record
      await parent.Open_APP_Record();

      // Open 案件詳細 tab
      await parent.Switch_App_Tab(2);

      // Screenshot - Application
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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Get Notif record
      await parent.Get_Notif();

      // Go to WebNotif related list
      await parent.Go_to_WNT_Rel(); // ★ 新環境適用' New Env Implementation

      // Screenshot - お知らせ related list screen
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-5"
      );

      // Go to WNT record
      await parent.Go_to_WNT(); // ★ 新環境適用' New Env Implementation

      // Screenshot - WNT record
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
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-6",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
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
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-7"
      );

      // Go to MNT record
      await parent.Go_to_MNT(); // ★ 新環境適用' New Env Implementation

      // Screenshot - MNT record
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
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-8",
        {
          hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        }
      );
    }
  );
}
