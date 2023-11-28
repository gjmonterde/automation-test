const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-5");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_17: Change to the　お借入内容調整画面 borrowing details adjustment screen", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "17";

    // Login
    await parent.Login_to_MyPage();

    // Go to APP
    await parent.Go_to_MyPage_APP(); // ★ 新環境適用' New Env Implementation
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

    // Go to loan adjustment
    await parent.Go_to_Loan_Adjustment(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    await $(".//iframe[@data-id='childVf']").$(function () {
      var height = this.contentWindow.document.body.offsetHeight;
      var body = document.getElementsByClassName("body")[0];
      var footer = document.getElementsByClassName("footer")[0];
      this.style.height = height + 50 + "px";
      body.style.height = height + footer.offsetHeight + 50 + "px";
      footer.style = "margin-bottom: 50px";
    });
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
