const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0011_step_11: The sub screen opens and you can enter and save 振込先情報 transfer destination information", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(15000);

    // Click New button in BA section
    const mypage_new_ba_btn = await $(
      "button=" + test_data.testData.mypage_new_ba_btn
    );
    await browser.pause(5000);
    await mypage_new_ba_btn.waitForClickable({
      timeout: 10000,
    });
    await mypage_new_ba_btn.click();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    const next_btn = await $("button=" + test_data.testData.mypage_next_btn);
    await next_btn.waitForClickable({ timeout: 10000 });
    await next_btn.click();
    await browser.pause(3000);

    // Full page modal
    await util.modal_fullpage_mypage();

    // Input BA1 information
    // 金融機関名(選択)
    const fin_inst_1 = await $(
      "label=" + test_data.testData.ba_input_fin_inst_lbl
    ).getAttribute("for");
    await $(".//button[@id='" + fin_inst_1 + "']").click();
    const fin_inst_ctrl1 = await $(
      ".//button[@id='" + fin_inst_1 + "']"
    ).getAttribute("aria-controls");
    await $(".//div[@id='" + fin_inst_ctrl1 + "']")
      .$("span=" + test_data.testData.ba1_fin_inst)
      .scrollIntoView({
        block: "center",
      });
    await $(".//div[@id='" + fin_inst_ctrl1 + "']")
      .$("span=" + test_data.testData.ba1_fin_inst)
      .click();
    await browser.pause(1000);

    // 支店名
    const branch1 = await $(
      "label=" + test_data.testData.ba_input_branch_name_lbl
    ).getAttribute("for");
    await $(".//input[@id='" + branch1 + "']").setValue(
      test_data.testData.ba1_branch_name
    );
    await browser.pause(1000);

    // 預金種類
    const acct_type_1 = await $(
      "label=" + test_data.testData.ba_input_acct_type_lbl
    ).getAttribute("for");
    await $(".//button[@id='" + acct_type_1 + "']").click();
    await $("span=" + test_data.testData.ba1_deposit_type).scrollIntoView({
      block: "center",
    });
    await $("span=" + test_data.testData.ba1_deposit_type).click();
    await browser.pause(1000);

    // 口座番号
    const acct_no_1 = await $(
      "label=" + test_data.testData.ba_input_acct_no_lbl
    ).getAttribute("for");
    await $(".//input[@id='" + acct_no_1 + "']").setValue(
      test_data.testData.ba1_acct_no
    );
    await browser.pause(1000);

    // お受取人お名前
    const rcp_name_1 = await $(
      "label=" + test_data.testData.ba_input_rcp_name_lbl
    ).getAttribute("for");
    await $(".//input[@id='" + rcp_name_1 + "']").setValue(
      test_data.testData.ba1_recipient_name
    );
    await browser.pause(1000);

    // お受取人カタカナ
    const rcp_name_kana_1 = await $(
      "label=" + test_data.testData.ba_input_rcp_name_kana_lbl
    ).getAttribute("for");
    await $(".//input[@id='" + rcp_name_kana_1 + "']").setValue(
      test_data.testData.ba1_recipient_name_kana
    );
    await browser.pause(1000);

    // 振込金額(円)
    await $(".//input[@class='slds-input BankAmount']").setValue(
      test_data.testData.ba1_transfer_amount
    );

    // Screenshot - BA Form
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Save BA1
    const confirmation_btn1 = await $(
      "button=" + test_data.testData.confirmation_btn
    );
    await confirmation_btn1.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await confirmation_btn1.click();
    await browser.pause(2000);

    // Screenshot - BA Form Confirmation
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    const save_btn1 = await $("button=" + test_data.testData.ba_submit_btn);
    await save_btn1.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await save_btn1.click();

    // TOAST
    await util.Toast_Message();

    // Take screenshot - toast
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - BA record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
