const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-8");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_34: 「確定する」 Confirm button cannot be pressed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "34";

    // Go to Loan Adjustment screen
    await parent.Go_to_Loan();

    // Screenshot - お借入れ内容調整（ご確定済み） Screen (top)
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
