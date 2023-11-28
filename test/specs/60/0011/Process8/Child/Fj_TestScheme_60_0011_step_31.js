const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0011-8");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_31: The confirmation screen is displayed and the input value is reflected", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to Loan Adjustment Screen
    await parent.Go_to_Loan_Adjustment();

    // Change to the お借入内容調整画面 borrowing details adjustment screen
    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);
    const interest_rate_arw = await $(".//details[@class='slds-accordion']");
    await interest_rate_arw.scrollIntoView({ block: "center" });
    await interest_rate_arw.waitForClickable({ timeout: 5000 });
    await interest_rate_arw.click();
    await browser.pause(2000);

    // Scroll to view
    await $(
      "td=" + test_data.testData.mypage_borrow_amount_header
    ).scrollIntoView();

    // Change values
    await browser.pause(3000);
    const input1 = await $(".//input[@id='page:pb1:form1:input1']");
    await input1.click();
    var inp1 = await input1.getValue();
    await browser.execute((val) => {
      val.value = null;
    }, input1);
    if (
      test_data.testData.mypage_borrow_amount_value === "" ||
      test_data.testData.mypage_borrow_amount_value >= inp1
    ) {
      test_data.testData.mypage_borrow_amount_value = Math.floor(inp1 - 50);
    }
    await input1.setValue(test_data.testData.mypage_borrow_amount_value);

    // Change values
    // ***NOTE: date format will be affected by machine locale settings***
    await $(".//input[@id='page:pb1:form1:datePicker']").setValue(
      test_data.testData.mypage_loan_date_value
    );
    await $("td=" + test_data.testData.mypage_date_value).click();
    await browser.pause(3000);
    await browser.switchToParentFrame();

    // Screenshot - My Page お借入れ内容調整 screen
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
        "-1"
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
    await btn1.click();
    await browser.pause(10000);

    // Screenshot - My Page お借入れ内容調整（内容確認） screen
    await browser.switchToParentFrame();
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
