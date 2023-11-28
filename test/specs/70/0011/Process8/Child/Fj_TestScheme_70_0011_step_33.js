const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0011-8");

export default async function suite() {
  it("Fj_TestScheme_70_0011_step_33: The 申込 application status on My Page must be 「ご契約手続き」Subscription", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "33";

    if ((await browser.getUrl()) == test_data.testData.mypage_url) {
      // Go to Loan adjustment
      await parent.Go_to_Loan_Adjustment();

      // Change to the お借入内容調整画面 borrowing details adjustment screen
      // Switch frame
      const form_frame = await browser.$(".//iframe[@data-id='childVf']");
      await browser.pause(5000);
      await browser.switchToFrame(form_frame);

      // Change values
      const input1 = await $(".//input[@id='page:pb1:form1:input1']");
      await input1.click();
      var inp1 = await input1.getValue();
      await browser.execute((val) => {
        val.value = null;
      }, input1);
      if (
        test_data.testData.mypage_borrow_amount_val === "" ||
        test_data.testData.mypage_borrow_amount_val >= inp1
      ) {
        test_data.testData.mypage_borrow_amount_val = Math.floor(inp1 / 2);
      }
      await input1.setValue(test_data.testData.mypage_borrow_amount_val);

      // 毎月の返済日
      await $(".//select[@id='page:pb1:form1:input3']").selectByAttribute(
        "value",
        test_data.testData.mypage_repayment_date_val1
      );

      // ご融資希望日
      // ***NOTE: date format will be affected by client locale settings***
      await $(".//input[@id='page:pb1:form1:datePicker']").setValue(
        test_data.testData.mypage_loan_date_value
      );
      await browser.pause(5000);
      await $(
        "td=" + test_data.testData.mypage_loan_terms_and_conditions_lbl
      ).click();

      // Click 内容確認へ button
      const btn = await $(
        ".//input[@value='" +
          test_data.testData.mypage_loan_adjustment_confirm_btn +
          "']"
      );
      await btn.click();
      await browser.pause(10000);
      await browser.switchToParentFrame();
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

    // Click 確定する button
    const confirm_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.switchToFrame(confirm_frame);
    await $(
      ".//input[@value='" + test_data.testData.mypage_submit_btn + "']"
    ).click();
    await browser.pause(10000);

    // Go to My Page Application record screen
    test_data.testData.mypage_url =
      user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id;
    await browser.url(test_data.testData.mypage_url); // ★ 新環境適用' New Env Implementation
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 50000,
    });

    // Screenshot
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
