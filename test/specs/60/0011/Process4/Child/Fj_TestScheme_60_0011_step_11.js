const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_60_0011-4");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_11: Return to the 申込詳細画面 application detail screen and the registered 銀行口座　bank account is displayed in the 振込先一覧 transfer destination list.", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Repeat based on the number of times in the ba_new_record_no_value variable
    // Current value = 2 (will add 2 new BA records)
    // Please make sure there are variables and values assigned in test_info file if adding more than 2 new records
    let ssno = 0;
    for (var i = 0; i < test_data.testData.ba_new_record_no_value; i++) {
      // Go to My Page Application record screen
      await parent.Open_MyPage_APP_Record();

      // Click New BA button
      const new_btn = await $("button=" + test_data.testData.new_btn);
      await new_btn.scrollIntoView({ block: "center" });
      await new_btn.waitForClickable({ timeout: 10000 });
      await new_btn.click();
      await browser.pause(3000);

      // ★ 新環境適用' New Env Implementation
      const next_btn = await $("button=" + test_data.testData.mypage_next_btn);
      await next_btn.waitForClickable({ timeout: 10000 });
      await next_btn.click();
      await browser.pause(3000);

      // Full page modal
      await util.modal_fullpage_mypage();

      // Input BA information
      // 金融機関名(選択)
      const fin_inst = await $(
        "label=" + test_data.testData.finc_insti_name_lbl
      ).getAttribute("for");
      await $(".//button[@id='" + fin_inst + "']").click();
      const fin_inst_ctrl = await $(
        ".//button[@id='" + fin_inst + "']"
      ).getAttribute("aria-controls");
      await $(".//div[@id='" + fin_inst_ctrl + "']")
        .$("span=" + test_data.testData.finc_insti_name_val)
        .click();
      await browser.pause(500);

      // 支店名
      const branch = await $(
        "label=" + test_data.testData.new_branch_name_label
      ).getAttribute("for");
      await $(".//input[@id='" + branch + "']").setValue(
        eval("test_data.testData.branch_name" + (i + 1))
      );
      await browser.pause(500);

      // ★ 新環境適用' New Env Implementation
      // New Branch Account No
      const branch_acc_input = await $(
        ".//*[@class='" +
          test_data.testData.branch_acc_class +
          " slds-form-element']"
      ).$(".//input[@class='slds-input']");

      await branch_acc_input.setValue(test_data.testData.branch_acc);
      await browser.pause(500);

      // New Account Type
      const acc_type_lbl = await $(
        ".//label[contains(.,'" + test_data.testData.bank_acc_type_lbl + "')]"
      );
      await acc_type_lbl.waitForClickable({ timeout: 5000 });
      await acc_type_lbl.click();
      await browser.pause(1000);
      await $(
        ".//span[@title='" + test_data.testData.bank_acc_type + "']"
      ).click();
      await browser.pause(500);

      // New Bank Name
      const bank_name_input = await $(
        ".//*[@class='" +
          test_data.testData.bank_name_class +
          " slds-form-element']"
      ).$(".//input[@class='slds-input']");

      await bank_name_input.setValue(test_data.testData.bank_name);
      await browser.pause(500);

      // New Bank Account Name
      const bank_account_name_input = await $(
        ".//*[@class='" +
          test_data.testData.bank_acc_name_class +
          " slds-form-element']"
      ).$(".//input[@class='slds-input']");

      await bank_account_name_input.setValue(test_data.testData.bank_acc_name);
      await browser.pause(1000);

      // New Amount
      await $(
        ".//input[@class='" + test_data.testData.bank_amount_class + "']"
      ).setValue(test_data.testData.bank_amount);
      await browser.pause(500);

      ssno = ssno + 1;
      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Go to next screen
      const next_screen = await $(
        ".//button[@label='" + test_data.testData.confirm_scr_btn + "']"
      );
      await next_screen.waitForClickable({ timeout: 5000 });
      await next_screen.click();
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Full page modal
      await util.modal_fullpage_mypage();

      ssno = ssno + 1;
      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Submit BA
      const submit_btn = await $(
        ".//button[@type='" + test_data.testData.submit_btn + "']"
      );
      await submit_btn.waitForClickable({ timeout: 30000 });
      await submit_btn.click();

      // To determine if the toast shows up
      await util.Toast_Message();

      ssno = ssno + 1;
      // Take screenshot - toast
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      ssno = ssno + 1;
      // Screenshot - BA record
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Go to My Page Application record screen
      await parent.Open_MyPage_APP_Record();

      ssno = ssno + 1;
      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
    }
  });
}
