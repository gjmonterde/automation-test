const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");

export default async function suite() {
  it("Fj_TestScheme_63-1_0011_step_116: The application status on My Page must be「ご契約手続き」", async () => {
    const stepNum = "116"; // ★ 新環境適用' New Env Implementation

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Click the お借入れ内容調整
    const loan_details_adjustment_btn = await $(
      ".//button[contains(text(), '" +
        test_data.testData.loan_details_adjustment_btn +
        "')]"
    );
    await loan_details_adjustment_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await loan_details_adjustment_btn.click();
    await browser.pause(3000);

    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Scroll to view
    await $("td=" + test_data.testData.mypage_borrow_amount_header).$(
      function () {
        this.scrollIntoView();
      }
    );

    // Change values
    // 万円
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
      test_data.testData.mypage_borrow_amount_value = Math.floor(inp1 - 10);
    }
    await input1.setValue(test_data.testData.mypage_borrow_amount_value);

    // Scroll to view
    await $("td=" + test_data.testData.loan_date_mypage_header).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });

    // ***NOTE: date format will be affected by client locale settings***
    await $(
      ".//input[@id='" + test_data.testData.datepicker_id_mypage + "']"
    ).setValue(test_data.testData.mypage_loan_date_value_final);
    await $(
      "td=" + test_data.testData.terms_and_conditions_mypage_header
    ).click();
    await browser.pause(5000);

    // Click 内容確認へ button
    const btn1 = await $(
      ".//input[@value='" +
        test_data.testData.mypage_confirmation_page_btn +
        "']"
    );
    await btn1.click();
    await browser.pause(3000);

    // Click 確定する button
    const btn2 = await $(
      ".//input[@value='" + test_data.testData.determine_button + "']"
    );
    await btn2.click();
    await browser.pause(3000);
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
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(30000);

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
