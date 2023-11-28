const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_33: The 申込 application status on My Page must be「ご契約手続き」", async () => {
    const stepNum = "33"; // ★ 新環境適用' New Env Implementation

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Click on loan adjustment details button
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

    // Change to the お借入内容調整画面 borrowing details adjustment screen
    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Scroll to view
    await $(
      "td=" + test_data.testData.mypage_borrow_amount_header
    ).scrollIntoView();

    // Scroll to view
    await $("td=" + test_data.testData.loan_date_mypage_header).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    // Change values
    // ***NOTE: date format will be affected by client locale settings***
    await $(
      ".//input[@id='" + test_data.testData.datepicker_id_mypage + "']"
    ).setValue(test_data.testData.mypage_loan_date_value);
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
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Click 確定する button
    const confirm_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.switchToFrame(confirm_frame);
    await $(
      ".//input[@value='" + test_data.testData.mypage_determine_btn + "']"
    ).click();
    await browser.pause(40000);

    // Go to MyPage app record
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
  });
}
