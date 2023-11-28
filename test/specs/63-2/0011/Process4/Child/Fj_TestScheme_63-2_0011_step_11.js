const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_11: The sub screen opens and you can enter and save 振込先情報 transfer destination information", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Repeat based on the number of times in the ba_new_record_no_value variable
    // Current value = 2 (will add 2 new BA records)
    // Please make sure there are variables and values assigned in test_info file if adding more than 2 new records
    let save_ssno = 1;
    for (var i = 0; i < test_data.testData.ba_new_record_no_value; i++) {
      // Go to My Page APP record screen
      await browser.url(
        user_info.userInformation.var_sf_siteurl +
          "/s/application-detail?id=" +
          test_data.testData.app_id
      );
      await browser.pause(10000);

      // Click new button - BA record
      const new_btn = await $(
        ".//button[contains(text(), '" + test_data.testData.new_btn + "')]"
      );
      await new_btn.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await new_btn.click();
      await browser.pause(3000);

      // ★ 新環境適用' New Env Implementation
      const next_btn = await $("button=" + test_data.testData.mypage_next_btn);
      await next_btn.waitForClickable({ timeout: 10000 });
      await next_btn.click();
      await browser.pause(3000);

      // Modal full page
      await util.modal_fullpage_mypage();

      // 金融機関名(選択)
      const financial_institution_name_optional_label = await $(
        "label=" + test_data.testData.financial_institution_name_optional_label
      ).getAttribute("for");
      await $(
        ".//button[@id='" + financial_institution_name_optional_label + "']"
      ).click();
      const financial_institution_name_optional_label_ctrl = await $(
        ".//button[@id='" + financial_institution_name_optional_label + "']"
      ).getAttribute("aria-controls");
      await $(
        ".//div[@id='" + financial_institution_name_optional_label_ctrl + "']"
      )
        .$(
          "span=" +
            eval(
              "test_data.testData.financial_institution_name_optional_value" +
                (i + 1)
            )
        )
        .click();
      await browser.pause(500);

      // 支店名
      const branch_name_label = await $(
        "label=" + test_data.testData.branch_name_label
      ).getAttribute("for");
      await $(".//input[@id='" + branch_name_label + "']").setValue(
        eval("test_data.testData.branch_name_value" + (i + 1))
      );
      await browser.pause(500);

      // 預金種類
      const deposit_type_label = await $(
        "label=" + test_data.testData.deposit_type_label
      ).getAttribute("for");
      await $(".//button[@id='" + deposit_type_label + "']").click();
      await $(
        "span=" + eval("test_data.testData.deposit_type_value" + (i + 1))
      ).click();
      await browser.pause(500);

      // 口座番号
      const account_number_label = await $(
        "label=" + test_data.testData.account_number_label
      ).getAttribute("for");
      await $(".//input[@id='" + account_number_label + "']").setValue(
        eval("test_data.testData.account_number_value" + (i + 1))
      );
      await browser.pause(500);

      // お受取人お名前
      const recipient_name_label = await $(
        "label=" + test_data.testData.recipient_name_label
      ).getAttribute("for");
      await $(".//input[@id='" + recipient_name_label + "']").setValue(
        eval("test_data.testData.recipient_name_value" + (i + 1))
      );
      await browser.pause(500);

      // お受取人カタカナ
      const recipient_katakana_label = await $(
        "label=" + test_data.testData.recipient_katakana_label
      ).getAttribute("for");
      await $(".//input[@id='" + recipient_katakana_label + "']").setValue(
        eval("test_data.testData.recipient_katakana_value" + (i + 1))
      );
      await browser.pause(500);

      // 振込金額(円)
      await $(".//input[@class='slds-input BankAmount']").setValue(
        eval("test_data.testData.transfer_amount_value" + (i + 1))
      );
      await browser.pause(500);

      // Deselect the hover/selected fields
      await util.Deselect_fields(2);

      // For screenshot
      if (i == 0) {
        save_ssno = save_ssno;
      } else {
        save_ssno = save_ssno + 1;
      }

      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          save_ssno
      );
      await browser.pause(3000);

      // Click 確認画面へ
      const confirmation_screen_button = await $(
        ".//button[contains(text(), '" +
          test_data.testData.confirmation_screen_button +
          "')]"
      );
      await confirmation_screen_button.click();
      await browser.pause(3000);

      // Modal full page
      await util.modal_fullpage_mypage();

      save_ssno = save_ssno + 1; // 2
      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          save_ssno
      );
      await browser.pause(3000);

      // Click 確定する
      const determine_button = await $(
        ".//button[contains(text(), '" +
          test_data.testData.determine_button +
          "')]"
      );
      await determine_button.click();
      await browser.pause(5000);

      // To determine if the toast shows up
      await util.Toast_Message();
      await browser.pause(1000);

      save_ssno = save_ssno + 1;
      // Screenshot - with toast message
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          save_ssno
      );
      await browser.pause(2000);
      await browser.refresh();
      await browser.pause(10000);

      save_ssno = save_ssno + 1;
      // Screenshot - without toast message
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          save_ssno
      );
      await browser.pause(2000);

      // Go to My Page APP record screen
      await browser.url(
        user_info.userInformation.var_sf_siteurl +
          "/s/application-detail?id=" +
          test_data.testData.app_id
      );
      await browser.pause(10000);

      save_ssno = save_ssno + 1;
      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          save_ssno
      );
      await browser.pause(2000);
    }
  });
}
