const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-6");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_27: Go to the 申込詳細画面 application detail screen of My Page", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "27";

    // Login
    await parent.Login_to_MyPage();

    if ((await browser.getUrl()) === test_data.testData.mypage_url) {
      // Go to loan adjustment
      await parent.Go_to_Loan_Adjustment();

      // Change to the お借入内容調整画面 borrowing details adjustment screen
      // Switch frame
      const form_frame = await browser.$(".//iframe[@data-id='childVf']");
      await browser.pause(3000);
      await browser.switchToFrame(form_frame);

      // Change values
      // 金額
      // NOTE: change 金額 value in test_info
      if (test_data.testData.mypage_borrow_amount_value_27 != "") {
        const input1 = await $(".//input[@id='page:pb1:form1:input1']");
        await input1.click();
        await browser.execute((val) => {
          val.value = null;
        }, input1);
        await input1.setValue(test_data.testData.mypage_borrow_amount_value_27);
      }

      // 期間
      // NOTE: change 期間 value in test_info
      if (test_data.testData.mypage_duration_value_27 != "") {
        const input2 = await $(".//input[@id='page:pb1:form1:input2']");
        await input2.click();
        await browser.execute((val) => {
          val.value = null;
        }, input2);
        await input2.setValue(test_data.testData.mypage_duration_value_27);
      }

      if (await $(".//select[@id='page:pb1:form1:input3']").isExisting()) {
        // 毎月の返済日
        await $(".//select[@id='page:pb1:form1:input3']").selectByAttribute(
          "value",
          test_data.testData.mypage_repayment_date_value_27
        );
      }

      // Toggle Bonus
      if (await $(".//input[@id='page:pb1:form1:useBonus']").isExisting()) {
        const toggle_status = await $(
          ".//input[@id='page:pb1:form1:useBonus']"
        ).getAttribute(test_data.testData.isChecked);
        if (
          toggle_status != test_data.testData.isChecked &&
          test_data.testData.mypage_loan_bonus_use_toggle_27 ==
            test_data.testData.isTrue
        ) {
          // 半年ごと増額返済(ボーナス返済)
          await $(
            ".//label[contains(., '" +
              test_data.testData.mypage_bonus_use_lbl +
              "')]"
          ).click();
          await browser.pause(2000);
        }

        // 増額返済月
        await $(".//select[@id='page:pb1:form1:bonusOne']").selectByAttribute(
          "value",
          test_data.testData.mypage_repayment_month_value_27
        );

        // 増額返済割合
        await $(".//select[@id='page:pb1:form1:bonusTwo']").selectByAttribute(
          "value",
          test_data.testData.mypage_repayment_ratio_value_27
        );
      }

      // ご融資希望日
      // ***NOTE: date format will be affected by client locale settings***
      await $(".//input[@id='page:pb1:form1:datePicker']").setValue(
        test_data.testData.mypage_loan_date_value_27
      );
      await browser.pause(5000);
      await $(
        "td=" + test_data.testData.mypage_loan_terms_and_conditions_lbl
      ).click();
      await browser.switchToParentFrame();

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
      await browser.pause(7000);
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
        test_data.testData.spec00 +
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
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 50000,
    });

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
