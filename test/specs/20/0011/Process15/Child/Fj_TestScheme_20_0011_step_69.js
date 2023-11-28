const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-15");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_69: Switch to the契約同意画面  contract agreement screen", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "69";

    // Screenshot - My Page 申込詳細画面 screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Click the 「ご契約内容確認」"Confirm contract" button.
    await parent.Go_to_Contract();

    // Check the 契約同意画面 contract agreement screen
    // Screenshot - My Page ご契約内容　同意確認 screen
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
        "-2"
    );
  });
}
