const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0011-8");

export default function suite() {
  it("Fj_TestScheme_10_0011_step_30: The 確認画面 confirmation screen is displayed and the input value is reflected", async () => {
    const stepNum = "30"; // ★ 新環境適用' New Env Implementation

    if ((await browser.getUrl()) === test_data.testData.mypage_url) {
      // Go to loan adjustment
      await parent.Go_to_Loan_Adjustment();
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

    // Change to the お借入内容調整画面 borrowing details adjustment screen
    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Scroll to view
    // ★ 新環境適用' New Env Implementation
    await $("td=" + test_data.testData.mypage_borrow_amount_header).$(
      function () {
        this.scrollIntoView();
      }
    );

    // Change values
    await $(".//select[@id='page:pb1:form1:input3']").selectByAttribute(
      "value",
      test_data.testData.mypage_repayment_date_value
    );
    await $(".//select[@id='page:pb1:form1:bonusOne']").selectByAttribute(
      "value",
      test_data.testData.mypage_repayment_month_value
    );
    await $(".//select[@id='page:pb1:form1:bonusTwo']").selectByAttribute(
      "value",
      test_data.testData.mypage_repayment_ratio_value
    );
    await $("div=" + test_data.testData.mypage_refund_amount_header).click();

    // Change values
    // ***NOTE: date format will be affected by client locale settings***
    await $(".//input[@id='page:pb1:form1:datePicker']").setValue(
      test_data.testData.mypage_loan_date_value
    );
    await $("td=" + test_data.testData.mypage_td).click();
    await browser.pause(5000);
    await browser.switchToParentFrame();

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
        "-2"
    );

    // Switch frame
    const form_frame2 = await browser.$(".//iframe[@data-id='childVf']");
    await browser.switchToFrame(form_frame2);

    // Click 内容確認へ button
    const btn1 = await $(
      ".//input[@value='" +
        test_data.testData.mypage_confirmation_page_btn +
        "']"
    );
    //await btn1.scrollIntoView();
    await btn1.click();
    await browser.pause(10000);
    await browser.switchToParentFrame();

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
        "-3"
    );
  });
}
