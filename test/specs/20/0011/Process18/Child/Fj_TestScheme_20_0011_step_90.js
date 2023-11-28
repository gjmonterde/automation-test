const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_90: お申込み application status of My Page is 「ご融資準備中」Preparing for Loan", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "90";

    // Screenshot - My Page お借入れ内容調整（内容確認） screen
    await $(".//iframe[@data-id='childVf']").$(function () {
      var height = this.contentWindow.document.body.offsetHeight;
      var body = document.getElementsByClassName("body")[0];
      var footer = document.getElementsByClassName("footer")[0];
      this.style.height = height + 50 + "px";
      body.style.height = height + footer.offsetHeight + 50 + "px";
      footer.style = "margin-bottom: 50px";
    });

    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Scroll to view
    const agree_btn = await $(
      ".//input[@value='" + test_data.testData.mypage_accept_contract_btn + "']"
    );

    await agree_btn.click();

    // Screenshot - My Page ご契約内容　同意確認 screen (click agree button)
    await browser.switchToParentFrame();
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(30000);

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 30000,
    });

    // Screenshot - Application record
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
