const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_00_0011-3");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_12: The sub screen opens and you can enter and save the振込先情報 transfer destination information", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "12";

    if (test_data.testData.logged_status != "mypage") {
      await parent.Login_to_MyPage();
    }

    // Repeat based on the number of times in the ba_new_record_no_value variable
    // Current value = 3 (will add 3 new BA records)
    // Please make sure there are variables and values assigned in test_info file if adding more than 3 new records
    let ssno = 0;
    for (var i = 0; i < test_data.testData.ba_new_record_no_value; i++) {
      // Click New BA button
      const new_btn = await $("button=" + test_data.testData.mypage_ba_new_btn);
      await new_btn.scrollIntoView({ block: "center" });
      await new_btn.waitForClickable({ timeout: 5000 });
      await new_btn.click();
      await browser.pause(3000);

      // Fullpage modal
      await util.modal_fullpage_mypage();

      // ★ 新環境適用' New Env Implementation
      ssno = ssno + 1;
      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // ★ 新環境適用' New Env Implementation
      const next_btn = await $("button=" + test_data.testData.mypage_next_btn);
      await next_btn.waitForClickable({ timeout: 10000 });
      await next_btn.click();
      await browser.pause(3000);

      // Full page modal
      await util.modal_fullpage_mypage();

      // ★ 新環境適用' New Env Implementation
      ssno = ssno + 1;
      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Input BA information
      // 金融機関名(選択)
      const fin_inst = await $(
        "label=" + test_data.testData.ba_input_fin_inst_lbl
      ).getAttribute("for");
      await $(".//button[@id='" + fin_inst + "']").click();
      const fin_inst_ctrl = await $(
        ".//button[@id='" + fin_inst + "']"
      ).getAttribute("aria-controls");
      await $(".//div[@id='" + fin_inst_ctrl + "']")
        .$("span=" + eval("test_data.testData.ba_fin_inst_" + (i + 1)))
        .click();
      await browser.pause(500);

      // 支店名
      const branch = await $(
        "label=" + test_data.testData.ba_input_branch_name_lbl
      ).getAttribute("for");
      await $(".//input[@id='" + branch + "']").setValue(
        eval("test_data.testData.ba_branch_name_" + (i + 1))
      );
      await browser.pause(500);

      // 預金種類
      const acct_type = await $(
        "label=" + test_data.testData.ba_input_acct_type_lbl
      ).getAttribute("for");
      await $(".//button[@id='" + acct_type + "']").click();
      await $(
        "span=" + eval("test_data.testData.ba_deposit_type_" + (i + 1))
      ).click();
      await browser.pause(500);

      // 口座番号
      const acct_no = await $(
        "label=" + test_data.testData.ba_input_acct_no_lbl
      ).getAttribute("for");
      await $(".//input[@id='" + acct_no + "']").setValue(
        eval("test_data.testData.ba_acct_no_" + (i + 1))
      );
      await browser.pause(500);

      // お受取人お名前
      const rcp_name = await $(
        "label=" + test_data.testData.ba_input_rcp_name_lbl
      ).getAttribute("for");
      await $(".//input[@id='" + rcp_name + "']").setValue(
        eval("test_data.testData.ba_recipient_name_" + (i + 1))
      );
      await browser.pause(500);

      // お受取人カタカナ
      const rcp_name_kana = await $(
        "label=" + test_data.testData.ba_input_rcp_name_kana_lbl
      ).getAttribute("for");
      await $(".//input[@id='" + rcp_name_kana + "']").setValue(
        eval("test_data.testData.ba_recipient_name_kana_" + (i + 1))
      );
      await browser.pause(500);

      // 振込金額(円)
      await $(".//input[@class='slds-input BankAmount']").setValue(
        eval("test_data.testData.ba_transfer_amount_" + (i + 1))
      );

      ssno = ssno + 1;
      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot + "00_0011_12-" + ssno
      );

      // Confirm
      const confirmation_btn = await $(
        "button=" + test_data.testData.mypage_confirmation_btn
      );
      await confirmation_btn.scrollIntoView({ block: "center" });
      await confirmation_btn.click();
      await browser.pause(5000);

      // Fullpage modal
      await util.modal_fullpage_mypage();

      // ★ 新環境適用' New Env Implementation
      ssno = ssno + 1;
      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Save
      const save_btn = await $(
        "button=" + test_data.testData.mypage_submit_btn
      );
      await save_btn.scrollIntoView({ block: "center" });
      await save_btn.click();

      // TOAST
      const toast = await $(
        ".//div[@class='toastContainer slds-notify_container slds-is-relative']"
      );
      //To determine if the toast shows up
      await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1;
      // Take screenshot - toast
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [toast],
        }
      );

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      ssno = ssno + 1;
      // Screenshot - BA record
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Go to My Page Application record screen
      await browser.url(
        user_info.userInformation.var_sf_siteurl +
          "/s/application-detail?id=" +
          test_data.testData.app_id
      );
      await $("span=" + test_data.testData.app_name).waitForExist({
        timeout: 30000,
      });
    }

    ssno = ssno + 1;
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        ssno
    );
  });
}
