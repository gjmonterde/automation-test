const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0011-8");

export default function suite() {
  it(
    "Fj_TestScheme_10_0011_step_28: The upper limit of 融資額 the loan amount slider matches the value of the" +
      "融資額(調整上限) loan amount (maximum adjustment)",
    async () => {
      const stepNum = "28"; // ★ 新環境適用' New Env Implementation

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
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
