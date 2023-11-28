const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0012-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0012_step_38_data: EXEC record manually (Data Linkage)", async () => {
    const stepNum = "38"; // ★ 新環境適用' New Env Implementation

    // Get Expected status value
    await parent.Get_Exec_Record_Status_Value();

    // Go to Exec Result Record
    await parent.Open_Exec_Record();

    // Screenshot - Before Data
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(5000);

    // Quit script if status is not the expected value (自動実行連携失敗)
    if (
      test_data.testData.expected_status_value_before_editing !=
      test_data.testData.expected_status_value
    ) {
      await browser.closeWindow();
    }

    // Edit values
    await $(
      "//button[@title='" +
        test_data.testData.processing_status_label +
        " の編集']"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      "//button[@title='" +
        test_data.testData.processing_status_label +
        " の編集']"
    ).click();
    await browser.pause(2000);

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);

    await $(
      "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
    ).click();
    await browser.pause(2000);
    const exec_value = await $(
      "span=" + test_data.testData.processing_status_value
    );
    await exec_value.click();
    await browser.pause(5000);

    // 取扱番号
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.handling_no_label + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.handling_no_label +
        "']/@for]"
    ).setValue(test_data.testData.handling_no);

    await browser.pause(3000);

    // 融資基本口座番号/カードローン口座番号
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.loan_account_no_label + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.loan_account_no_label +
        "']/@for]"
    ).setValue(test_data.testData.loan_account_no);
    await browser.pause(3000);

    // 実行結果処理ステータス
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.result_status_label + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.result_status_label +
        "']/@for]"
    ).setValue(test_data.testData.result_status);
    await browser.pause(3000);

    // 処理エラーメッセージ
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.error_message_label + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.error_message_label +
        "']/@for]"
    ).clearValue();
    await browser.pause(3000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    // Screenshot - During Data
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
    await browser.pause(5000);

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - After Data
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
    await browser.pause(2000);
  });
}
