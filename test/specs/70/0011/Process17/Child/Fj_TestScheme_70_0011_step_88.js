const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0011-17");

export default async function suite() {
  it("Fj_TestScheme_70_0011_step_88: The 「確定する」Confirm button cannot be pressed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "88";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to app record
    await parent.Go_to_App_record();

    // Open detail btn
    const btn = await $(
      ".//button[@title='" + test_data.testData.mypage_app_detail_btn + "']"
    );
    await btn.waitForClickable({ timeout: 30000 });
    await btn.click();
    await browser.pause(10000);

    // Screenshot - MyPage APP record
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to loan adjustment
    await parent.Go_to_Loan_Adjustment();

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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
