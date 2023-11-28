const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-15");

export default function suite() {
  it(
    "Fj_TestScheme_30_0011_step_79: 毎回の元利金返済額 amount of each principal and interest repayment, 第１回返済日 first repayment date, " +
      "and 第２回以降返済日 second and subsequent repayment dates shall be indicated",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "79";

      if ((await browser.getUrl()) == test_data.testData.mypage_url) {
        // Go to contract
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
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
