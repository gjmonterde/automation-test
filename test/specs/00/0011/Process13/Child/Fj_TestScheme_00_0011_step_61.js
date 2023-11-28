const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-13");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_61: Application information shall be displayed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "61";

    if (test_data.testData.logged_status != "mypage") {
      // Login to mypage
      await parent.Login_to_MyPage();
    }

    // Go to APP
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Go to contract
    await parent.Go_to_Contract();

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
        "-1"
    );
  });
}
