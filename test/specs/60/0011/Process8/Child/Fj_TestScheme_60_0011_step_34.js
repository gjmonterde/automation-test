const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0011-8");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_34: Each item displays the same value as the confirmation screen and cannot be edited", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    // Go to mypage application detail page
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot - My Page App record page
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Go to Loan Adjustment Screen
    await parent.Go_to_Loan_Adjustment();
    await browser.pause(5000);

    // Change to the お借入内容調整画面 borrowing details adjustment screen
    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(5000);
    await browser.switchToFrame(form_frame);
    await browser.pause(5000);

    await browser.execute(() => {
      const acc = document.getElementsByClassName("slds-accordion__summary")[1];
      acc.click();
    });
    await browser.pause(5000);

    // Switch frame
    await browser.switchToParentFrame();

    // Screenshot - Loan Adjustment Screen
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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
