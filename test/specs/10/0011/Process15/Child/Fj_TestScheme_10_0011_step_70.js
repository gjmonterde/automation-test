const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default function suite() {
  it(
    "Fj_TestScheme_10_0011_step_70: 毎回の元利金返済額 amount of each principal and interest repayment, " +
      "第１回返済日 first repayment date, and 第２回以降返済日 second and subsequent repayment dates shall be indicated",
    async () => {
      const stepNum = "70"; // ★ 新環境適用' New Env Implementation

      // ★ 新環境適用' New Env Implementation
      if ((await browser.getUrl()) != test_data.testData.mypage_url) {
        await browser.url(test_data.testData.mypage_url);
        await browser.pause(8000);

        // Click the 「ご契約内容確認」"Confirm contract" button.
        await $(
          "button=" + test_data.testData.mypage_contract_details_btn
        ).click();
        await browser.pause(10000);
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
    }
  );
}
