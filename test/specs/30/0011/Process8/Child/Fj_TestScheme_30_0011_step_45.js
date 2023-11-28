const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-8");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_45: The お申込み application status on My Page must be 「ご融資条件ご確定」 Finalized Loan Terms", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "45";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // if not yet on My Page お借入れ内容調整（内容確認） screen
    if ((await browser.getUrl()) === test_data.testData.mypage_url) {
      // Go to Loan Adjustment Screen
      await parent.Go_to_Loan_Adjustment();

      // Change to the お借入内容調整画面 borrowing details adjustment screen
      // Switch frame
      const form_frame = await browser.$(".//iframe[@data-id='childVf']");
      await browser.pause(3000);
      await browser.switchToFrame(form_frame);

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
        test_data.testData.mypage_borrow_amount_value = Math.floor(inp1 / 2);
      }
      await input1.setValue(test_data.testData.mypage_borrow_amount_value);
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

      // Scroll
      await $(
        "div=" + test_data.testData.mypage_refund_amount_header
      ).scrollIntoView();

      // Change values
      // ***NOTE: date format will be affected by machine locale settings***
      await $(".//input[@id='page:pb1:form1:datePicker']").setValue(
        test_data.testData.mypage_loan_date_value
      );
      await $("td=以下をご融資の条件とさせていただきます").click();
      await browser.pause(3000);
      await browser.switchToParentFrame();

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
    }

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
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
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
      ".//input[@value='" + test_data.testData.mypage_determine_btn + "']"
    ).click();
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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
