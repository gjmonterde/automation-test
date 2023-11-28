const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-12");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_59: The values at the time of 申込 application registration are indicated in the following items", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "59";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    const url =
      user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id;

    if (test_data.testData.mypage_url != url) {
      // Go to My Page Application record
      test_data.testData.mypage_url = url;
      await browser.url(test_data.testData.mypage_url);
      await $("span=" + test_data.testData.app_name).waitForExist({
        timeout: 30000,
      });
    }
    if ((await browser.getUrl()) == test_data.testData.mypage_url) {
      // Go to Loan Adjustment Screen
      await parent.Go_to_Loan_Adjustment();
    }

    // Screenshot - Loan Adjustment Screen
    await $(".//iframe[@data-id='childVf']").$(function () {
      var height = this.contentWindow.document.body.offsetHeight;
      var body = document.getElementsByClassName("body")[0];
      var footer = document.getElementsByClassName("footer")[0];
      this.style.height = height + 50 + "px";
      body.style.height = height + footer.offsetHeight + 50 + "px";
      footer.style = "margin-bottom: 50px";
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // login to salesforce
    await parent.Login_to_Salesforce();

    // Screenshot - Application 告知画面 tab
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
        "-2",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
