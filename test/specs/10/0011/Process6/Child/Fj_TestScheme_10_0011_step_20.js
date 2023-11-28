const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0011-6");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_10_0011_step_20: The upper limit of the slider of 「お借入れ金額をお決めください」" +
      '"Please determine the amount of loan" must match the value of  、申込.融資額(調整上限)"Application ' +
      'amount (adjustment limit)"',
    async () => {
      const stepNum = "20"; // ★ 新環境適用' New Env Implementation

      if ((await browser.getUrl()) === test_data.testData.mypage_url) {
        // Go to loan adjustment
        await parent.Go_to_Loan_Adjustment();
      }

      // Screenshot
      await $(".//iframe[@data-id='childVf']").$(function () {
        var height = this.contentWindow.document.body.offsetHeight;
        var body = document.getElementsByClassName("body")[0];
        var footer = document.getElementsByClassName("footer")[0];
        this.style.height = height + 50 + "px";
        body.style.height = height + footer.offsetHeight + 50 + "px";
        footer.style = "margin-bottom: 50px";
      });
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // Switch to Salesforce
      await parent.Login_to_Salesforce();

      // Go to 告知画面 tab
      await util.Application_Record_Scrolling(3);

      // Screenshot
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
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
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

      // Go to MyPage
      await browser.url(test_data.testData.mypage_url); // ★ 新環境適用' New Env Implementation
      await browser.pause(2000);
    }
  );
}
