const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0011-8");

export default function suite() {
  it(
    "Fj_TestScheme_40_0011_step_33:「ご契約内容確認」Confirm contract details button is displayed on the " +
      "申込詳細画面 application detail screen of My Page",
    async () => {
      const stepNum = "33"; // ★ 新環境適用' New Env Implementation

      if ((await browser.getUrl()) === test_data.testData.mypage_url) {
        // Go to loan adjustment
        await parent.Go_to_Loan_Adjustment();

        // Change to the お借入内容調整画面 borrowing details adjustment screen
        // Switch frame
        const form_frame = await browser.$(".//iframe[@data-id='childVf']");
        await browser.pause(3000);
        await browser.switchToFrame(form_frame);

        // Change values
        // 毎月の返済日
        await $(".//select[@id='page:pb1:form1:input3']").selectByAttribute(
          "value",
          test_data.testData.mypage_repayment_date_value
        );

        // 半年ごと増額返済(ボーナス返済)
        await $(
          ".//label[contains(., '" +
            test_data.testData.mypage_bonus_repayment_lbl +
            "')]"
        ).click();
        await browser.pause(2000);

        // 増額返済月
        await $(".//select[@id='page:pb1:form1:bonusOne']").selectByAttribute(
          "value",
          test_data.testData.mypage_repayment_month_value
        );

        // 増額返済割合
        await $(".//select[@id='page:pb1:form1:bonusTwo']").selectByAttribute(
          "value",
          test_data.testData.mypage_repayment_ratio_value
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
        await browser.pause(8000);
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
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
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

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );
    }
  );
}
