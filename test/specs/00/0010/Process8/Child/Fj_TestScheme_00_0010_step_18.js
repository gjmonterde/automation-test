const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_00_0010-8");

export default function suite() {
  it("Fj_TestScheme_00_0010_step_18: 徴求書類 Requested document status is 「未提出」'Not Submitted'.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    // Go to APP record detail screen
    await parent.Open_APP_Record(); // ★ 新環境適用' New Env Implementation

    // Go to VER record detail screen
    await parent.Open_VER_Record(); // ★ 新環境適用' New Env Implementation

    // From the 「新規」"New" button of the 徴求書類 related list, new registration is possible
    // Create New RDC record
    const rdc_new_link = await $(
      ".//*[@data-target-reveals='" + test_data.testData.new_rdc_btn_api + "']"
    );
    await rdc_new_link.click();

    // Take screenshot
    // ★ 新環境適用' New Env Implementation of 00_0010_18-1
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    const create_new_rdc_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.new_rdc_btn_api +
        "']"
    );
    await create_new_rdc_btn.click();
    await browser.pause(10000);

    // Click 次へ button
    await $(
      "//button[contains(., '" + test_data.testData.next_btn + "')]"
    ).click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Click 書類カテゴリ label
    const new_document_category_label = await $(
      "//label[contains(., '" +
        test_data.testData.rdc_document_category_label +
        "')]"
    );
    await new_document_category_label.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await new_document_category_label.click();

    // ★ 新環境適用' New Env Implementation
    // Select 書類カテゴリ picklist field value
    const new_document_category_value = await $(
      "//span[@title='" + test_data.testData.rdc_document_category_value + "']"
    );
    await new_document_category_value.waitForClickable({ timeout: 5000 });
    await new_document_category_value.click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Click 徴求書類ステータス label
    const new_req_document_status_label = await $(
      "//label[contains(.,'" +
        test_data.testData.rdc_req_document_status_label +
        "')]"
    );
    await new_req_document_status_label.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await new_req_document_status_label.click();

    // ★ 新環境適用' New Env Implementation
    // Select 徴求書類ステータス picklist field value
    const new_req_document_status_value = await $(
      "//span[@title='" +
        test_data.testData.rdc_req_document_status_value +
        "']"
    );
    await new_req_document_status_value.waitForClickable({ timeout: 5000 });
    await new_req_document_status_value.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Set 申込 field value
    const newapp = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.rdc_app_label +
        "']"
    ).$("//label[contains(.,'" + test_data.testData.rdc_app_label + "')]");
    await newapp.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const newapp_id = await newapp.getAttribute("for");
    await $(".//input[@id='" + newapp_id + "']").setValue(
      test_data.testData.app_name
    );
    await browser.pause(3000);
    await $(
      ".//lightning-base-combobox-item[@data-value[contains(.,'" +
        test_data.testData.app_id +
        "')]]"
    ).click();

    await util.modal_fullpage();

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(4000);

    // Click 保存 button
    await browser.pause(4000);
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();

    // To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );

    await browser.pause(10000);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(5000);
  });
}
