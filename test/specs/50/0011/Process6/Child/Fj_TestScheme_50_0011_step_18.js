const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");

export default function suite() {
  it("Fj_TestScheme_50_0011_step_18: Change to the お借入内容調整画面 borrowing details adjustment screen", async () => {
    const stepNum = "18"; // ★ 新環境適用' New Env Implementation

    // Switch to My Page
    await browser.switchWindow(user_info.userInformation.var_sf_siteurl);

    // Click the 「お借入内容調整」 "Loan details adjustment" button.
    await $(
      "button=" + test_data.testData.mypage_borrowing_details_btn
    ).click();
    await browser.pause(10000);

    // Change to the お借入内容調整画面 borrowing details adjustment screen
    // Screenshot - My Page お借入れ内容調整 screen
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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
