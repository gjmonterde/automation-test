const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0011-21");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_100: An error message is displayed and cannot be accepted", async () => {
    const stepNum = "100"; // ★ 新環境適用' New Env Implementation

    // Go to App list
    await parent.Open_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    for (var i = 0; i < test_data.testData.ba_new_record_no_value; i++) {
      // Scroll to BA
      await util.Scroll_to_related_list(test_data.testData.ba_scroll);

      // Create New BA record
      const ba_new_link = await $(
        ".//*[@data-target-reveals='" + test_data.testData.new_ba_btn + "']"
      );
      await ba_new_link.click();
      await browser.pause(1000);

      const create_new_ba_btn = await $(
        ".//*[@data-target-selection-name='" +
          test_data.testData.new_ba_btn +
          "']"
      );
      await create_new_ba_btn.click();
      await browser.pause(5000);

      // BA Modal - full screen
      await util.modal_fullpage();

      // Dialog box
      const dialog = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );

      // 振込先フラグ＝TRUE
      await dialog
        .$(
          ".//*[contains(text(), '" +
            test_data.testData.ba_payee_flag_label +
            "')]"
        )
        .click();

      // 確認ステータス＝「確認済」
      const new_confirmation_status_picklist = await dialog.$(
        ".//label[contains(.,'" +
          test_data.testData.ba_confirmation_status_label +
          "')]"
      );
      await new_confirmation_status_picklist.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await new_confirmation_status_picklist.click();
      await $(
        ".//lightning-base-combobox-item[contains(.,'" +
          test_data.testData.ba_confirmation_status_value +
          "')]"
      ).click();
      await browser.pause(1000);

      // 預金種類＝ * Any value
      const new_deposit_type_picklist = await dialog.$(
        ".//label[contains(.,'" +
          test_data.testData.ba_deposit_type_label +
          "')]"
      );
      await new_deposit_type_picklist.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await new_deposit_type_picklist.click();
      await $(
        ".//lightning-base-combobox-item[contains(.,'" +
          test_data.testData.ba_deposit_type_value +
          "')]"
      ).click();
      await browser.pause(1000);

      // お受取人お名前＝ * Any value
      const recipient_name_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.recipient_name_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.recipient_name_label +
            "')]"
        );
      await recipient_name_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const recipient_name_id = await recipient_name_lbl.getAttribute("for");
      await $(".//input[@id='" + recipient_name_id + "']").setValue(
        test_data.testData.ba_recipient_name_value
      );
      await browser.pause(3000);

      // 金融機関名(選択)＝ *Any value
      const new_financial_inst_name_optional_picklist = await dialog.$(
        ".//label[contains(.,'" +
          test_data.testData.ba_institution_name_opt_label +
          "')]"
      );
      await new_financial_inst_name_optional_picklist.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await new_financial_inst_name_optional_picklist.click();
      await $(
        ".//lightning-base-combobox-item[contains(.,'" +
          test_data.testData.ba_institution_name_opt_value +
          "')]"
      ).click();
      await browser.pause(1000);

      // お受取人カタカナ＝ * Any value
      const recipient_katakana_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.recipient_katakana_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.recipient_katakana_label +
            "')]"
        );
      await recipient_name_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const recipient_katakana_id = await recipient_katakana_lbl.getAttribute(
        "for"
      );
      await $(".//input[@id='" + recipient_katakana_id + "']").setValue(
        test_data.testData.ba_recipient_name_kana_value
      );
      await browser.pause(3000);

      // 金融機関コード
      const newfininst_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.institution_code_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.institution_code_label +
            "')]"
        );
      await newfininst_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const fininstname_id = await newfininst_lbl.getAttribute("for");
      await $(".//input[@id='" + fininstname_id + "']").setValue(
        test_data.testData.ba_bank_code_value
      );
      await browser.pause(3000);

      // 金融機関名
      const newfinst_name_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_bank_name_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_bank_name_label +
            "')]"
        );
      await newfinst_name_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const newfinst_name_id = await newfinst_name_lbl.getAttribute("for");
      await $(".//input[@id='" + newfinst_name_id + "']").setValue(
        test_data.testData.ba_fin_inst_name_value
      );
      await browser.pause(3000);

      // 支店コード = * Any number 3 digits
      const new_branch_code_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.branch_code_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" + test_data.testData.branch_code_label + "')]"
        );
      await new_branch_code_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const new_branch_code_id = await new_branch_code_lbl.getAttribute("for");
      await $(".//input[@id='" + new_branch_code_id + "']").setValue(
        test_data.testData.ba_branch_code_value
      );
      await browser.pause(3000);

      // 支店名
      const new_branch_name_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.branch_name_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" + test_data.testData.branch_name_label + "')]"
        );
      await new_branch_name_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const new_branch_name_id = await new_branch_name_lbl.getAttribute("for");
      await $(".//input[@id='" + new_branch_name_id + "']").setValue(
        test_data.testData.ba_branch_name_value
      );
      await browser.pause(3000);

      // 口座番号
      const new_account_number1_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.account_number_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.account_number_label +
            "')]"
        );
      await new_account_number1_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const new_account_number1_id = await new_account_number1_lbl.getAttribute(
        "for"
      );
      await $(".//input[@id='" + new_account_number1_id + "']").setValue(
        test_data.testData.ba_account_no_value
      );
      await browser.pause(3000);

      // 振込金額(円)
      const amount_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.transfer_amount_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.transfer_amount_label +
            "')]"
        );
      await amount_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const amount_id = await amount_lbl.getAttribute("for");
      await $(".//input[@id='" + amount_id + "']").setValue(
        test_data.testData.ba_amount_value
      );
      await browser.pause(3000);

      // 手数料額(円)
      const new_account_fee_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.new_account_fee_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.new_account_fee_label +
            "')]"
        );
      await new_account_fee_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const new_account_fee_id = await new_account_fee_lbl.getAttribute("for");
      await $(".//input[@id='" + new_account_fee_id + "']").setValue(
        test_data.testData.ba_fee_amount_value
      );
      await browser.pause(3000);

      // Save record
      const save_btn = await $(
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await save_btn.waitForClickable({ timeout: 10000 });
      await save_btn.click();
      await browser.pause(20000);
      await browser.refresh();
      await browser.pause(10000);
    }

    // Get new BA records
    await parent.Get_BA_Records();

    // Go to BA record list
    await parent.Open_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_ba_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Loop through the array to determine how many BA records
    for (var ba1 = 0; ba1 < test_data.testData.ba_array.length; ba1++) {
      var record1 = test_data.testData.ba_array[ba1];

      // Open 銀行口座 record
      await parent.Open_Record_URL(1, user_info.object.ba_obj, record1.Id);

      var screenshotCountBA1 = 2 + ba1;

      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA1,
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );
      await browser.pause(3000);
    }

    // Go to APP record
    await parent.Open_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Click on Notifications
    await $(
      ".//button[@class='slds-button slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action forceHeaderButton']"
    ).click();
    await browser.pause(10000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        (2 + test_data.testData.ba_array.length)
    );
    await browser.pause(3000);

    // Click the notification item
    const notif = await $(
      "//span[contains(.,'最終確認ID: " + test_data.testData.agr2_name + "')]"
    );
    await notif.waitForDisplayed({
      timeout: 30000,
    });
    await notif.click();
    await browser.pause(8000);

    // Deselect
    await util.Deselect_fields(8);

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        (3 + test_data.testData.ba_array.length),
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
    await browser.pause(2000);

    // Click 承認 button
    const process_instance_approve = await $(
      "//li[@data-target-selection-name='" +
        test_data.testData.process_instance_approve_api +
        "']"
    );
    await process_instance_approve.waitForClickable({ timeout: 10000 });
    await process_instance_approve.click();
    await browser.pause(5000);

    // Input approval comment
    const approval_comment = await $(
      "//textarea[@class='inputTextArea cuf-messageTextArea textarea']"
    );
    await approval_comment.waitForExist({ timeout: 10000 });
    await approval_comment.setValue(
      test_data.testData.process_approval_comment
    );
    await browser.pause(5000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(4);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        (4 + test_data.testData.ba_array.length)
    );

    // // Click 承認 button
    const approve_confirm_btn = await $(
      "//button[@class='slds-button slds-button--neutral modal-button-left actionButton uiButton--default uiButton--brand uiButton']"
    );
    await approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await approve_confirm_btn.click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        (5 + test_data.testData.ba_array.length)
    );
    await browser.pause(2000);

    var screenshotCountBA2 = 5 + test_data.testData.ba_array.length;

    // Loop through the array to determine how many BA records
    for (var ba2 = 0; ba2 < test_data.testData.ba_array_new.length; ba2++) {
      var record2 = test_data.testData.ba_array_new[ba2];

      // Open 銀行口座 record
      await parent.Open_Record_URL(1, test_data.testData.ba_object, record2.Id);

      // Update fields to 確認ステータス
      const edit = await $(
        ".//button[@title='" +
          test_data.testData.confirmation_status_label +
          " の編集']"
      );
      await edit.scrollIntoView({ block: "center" });
      await edit.click();
      await browser.pause(1000);

      await $(
        "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
      ).$(function () {
        this.style.position = "static";
      });

      // Click 確認ステータス
      const confirmation_status = await $(
        "//label[contains(., '" +
          test_data.testData.confirmation_status_label +
          "')]"
      );
      await confirmation_status.waitForClickable({
        timeout: 10000,
      });
      await confirmation_status.click();
      await browser.pause(3000);

      // Select 確認ステータス picklist value
      const confirmation_status_value = await $(
        "//span[@title='" + test_data.testData.confirmation_status_value + "']"
      );
      await confirmation_status_value.scrollIntoView();
      await confirmation_status_value.waitForClickable({
        timeout: 10000,
      });
      await confirmation_status_value.click();
      await browser.pause(5000);

      // Scroll up to highlights panel
      await util.Highlight_panel_scroll();

      // Deselect the hover/selected fields
      await util.Deselect_fields(3);

      // Screenshot
      const edit_footer = await $(
        "records-form-footer.slds-docked-form-footer stickyFooter"
      );
      const highlights3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      screenshotCountBA2 = screenshotCountBA2 + 1;
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA2,
        {
          hideElements: [edit_footer],
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        }
      );
      await browser.pause(5000);

      // Click 保存 button
      const save_btn = await $(
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await save_btn.waitForClickable({ timeout: 10000 });
      await save_btn.click();
      await browser.pause(10000);
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const highlights4 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar4 = await $(".//header[@id='oneHeader']");
      const tabheader4 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      screenshotCountBA2 = screenshotCountBA2 + 1;
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA2,
        {
          hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        }
      );
      await browser.pause(3000);
    }

    // Click on Notifications
    await $(
      ".//button[@class='slds-button slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action forceHeaderButton']"
    ).click();
    await browser.pause(10000);

    // Click the notification item
    await notif.waitForDisplayed({
      timeout: 30000,
    });
    await notif.click();
    await browser.pause(10000);

    // Deselect
    await util.Deselect_fields(8);

    const highlights5 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    screenshotCountBA2 = screenshotCountBA2 + 1;
    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        screenshotCountBA2,
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
      }
    );
    await browser.pause(2000);

    // Click 承認 button
    await process_instance_approve.waitForClickable({ timeout: 10000 });
    await process_instance_approve.click();
    await browser.pause(5000);

    // Input approval comment
    await approval_comment.waitForExist({ timeout: 10000 });
    await approval_comment.setValue(
      test_data.testData.process_approval_comment
    );
    await browser.pause(5000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(4);

    // Screenshot
    screenshotCountBA2 = screenshotCountBA2 + 1;
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-" +
        screenshotCountBA2
    );
    await browser.pause(2000);

    // Click 承認 button
    await approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await approve_confirm_btn.click();
    await browser.pause(60000);
  });
}
