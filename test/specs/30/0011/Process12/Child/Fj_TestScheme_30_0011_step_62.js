const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-12");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_62: The 「確定する」Confirm button cannot be pressed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "62";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Assign value to mypage_url
    test_data.testData.mypage_url =
      user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id;

    if ((await browser.getUrl()) != test_data.testData.mypage_url) {
      // Go to My Page Application record
      await browser.url(test_data.testData.mypage_url);
      await $("span=" + test_data.testData.app_name).waitForExist({
        timeout: 30000,
      });
    }

    // Screenshot - My Page App record page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to Loan Adjustment Screen
    await parent.Go_to_Loan_Adjustment();

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
        "-2"
    );
  });
}
