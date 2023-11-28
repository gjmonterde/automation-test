const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0011-17");

export default function suite() {
  it("Fj_TestScheme_10_0011_step_91: Check boxes and 「契約に同意する」Accept contract buttons are not displayed", async () => {
    const stepNum = "91"; // ★ 新環境適用' New Env Implementation

    if ((await browser.getUrl()) === test_data.testData.mypage_url) {
      // Go to contract details
      await parent.Go_to_Contract();
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
        "-1"
    );
  });
}
