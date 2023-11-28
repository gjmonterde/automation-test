const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0011-17");

export default async function suite() {
  it("Fj_TestScheme_70_0011_step_86: The confirmation screen is displayed and the input value is reflected", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "86";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }
    // Go to app record
    await parent.Go_to_App_record();

    // Go to loan adjustment
    await parent.Go_to_Loan_Adjustment();

    // Change to the お借入内容調整画面 borrowing details adjustment screen
    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(5000);
    await browser.switchToFrame(form_frame);

    // Change values

    // 毎月の返済日
    await $(".//select[@id='page:pb1:form1:input3']").selectByAttribute(
      "value",
      test_data.testData.mypage_repayment_date_val2
    );

    // ご融資希望日
    // ***NOTE: date format will be affected by client locale settings***
    await $(".//input[@id='page:pb1:form1:datePicker']").setValue(
      test_data.testData.mypage_loan_date_value2
    );
    await browser.pause(5000);
    await $(
      "td=" + test_data.testData.mypage_loan_terms_and_conditions_lbl
    ).click();
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Switch frame
    const form_frame2 = await browser.$(".//iframe[@data-id='childVf']");
    await browser.switchToFrame(form_frame2);

    // Click 内容確認へ button
    const btn = await $(
      ".//input[@value='" +
        test_data.testData.mypage_loan_adjustment_confirm_btn +
        "']"
    );
    await btn.click();
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
