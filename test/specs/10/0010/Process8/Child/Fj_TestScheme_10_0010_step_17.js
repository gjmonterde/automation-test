var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0010_step_17: 徴求書類 Required document status is 「未提出」'Not Submitted'.", async () => {
    const stepNum = "17"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver2_id
    );

    // Scroll to view - 徴求書類 related list
    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    // From the 「新規」"New" button of the 徴求書類 related list, new registration is possible
    // Create New RDC record
    const rdc_new_link = await $(
      ".//*[@data-target-reveals='" + test_data.testData.new_rdc_btn_api + "']"
    );
    await rdc_new_link.waitForClickable({ timeout: 30000 });
    await rdc_new_link.click();

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
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
    await create_new_rdc_btn.waitForClickable({ timeout: 30000 });
    await create_new_rdc_btn.click();
    await browser.pause(10000);

    // Fullpage modal
    await util.modal_fullpage();

    // Dialog box
    const dialog = await $("//div[@data-aura-class='oneRecordActionWrapper']");

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click 徴求書類ステータス label
    const new_req_document_status_label = await dialog.$(
      "//label[contains(.,'" +
        test_data.testData.new_req_document_status_label +
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

    // Select 徴求書類ステータス picklist field value
    const new_req_document_status_value = await dialog.$(
      "//span[@title='" +
        test_data.testData.new_req_document_status_value +
        "']"
    );
    await new_req_document_status_value.waitForClickable({ timeout: 5000 });
    await new_req_document_status_value.click();
    await browser.pause(5000);

    // Set 申込 field value
    const newapp = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_app_label +
          "']"
      )
      .$("//label[contains(.,'" + test_data.testData.new_app_label + "')]");
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

    // Set 書類マスタ field value
    // ★ 新環境適用' New Env Implementation
    const new_document_master_label = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_document_master_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_document_master_label +
          "')]"
      );
    await new_document_master_label.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const dmid = await new_document_master_label.getAttribute("for");
    const dm_input = await $(".//input[@id='" + dmid + "']");
    await dm_input.setValue(test_data.testData.new_document_master_value);
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // If document category does not exist in dropdown - advanced search
    // Get element id
    const docmaster_id = await dm_input.getAttribute("aria-owns");
    // Select See all option in dropdown
    const viewlist = await $(".//div[@id='" + docmaster_id + "']").$(
      ".//lightning-base-combobox-item[@data-value='actionAdvancedSearch']"
    );
    await viewlist.waitForClickable({ timeout: 30000 });
    await viewlist.click();
    await browser.pause(7000);

    // Search modal
    const searchresmodal = await $(
      ".//div[@class[contains(.,'forceSearchLookupAdvanced')]]"
    );

    // Click link for DM record that matches search
    const searchresval = await searchresmodal.$(
      ".//a[@data-recordid='" + test_data.testData.dm_id + "']"
    );
    await searchresval.waitForClickable({ timeout: 30000 });

    // Screenshot - search modal
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );
    await searchresval.click();
    await browser.pause(5000);

    await util.modal_fullpage();

    // Screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click 保存 button
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Connect to Salesforce
    var conn = new jsforce.Connection({
      loginUrl: user_info.userInformation.var_sf_loginurl,
    });
    await conn.login(
      user_info.userInformation.var_sf_loginuser_admin,
      user_info.userInformation.var_sf_loginpwd_admin,
      function (err, res) {
        if (err) {
          return console.log(err);
        }
      }
    );

    // Get NEW RDC record
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name, fj_DocumentName__c")
      .where({
        fj_RefVerification__c: test_data.testData.ver2_id,
        fj_DocumentName__c: test_data.testData.rdc4_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc4_id_of_ver2 = record.Id;
          test_data.testData.rdc4_name_of_ver2 = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.rdc4_id_of_ver2);

    // Go to newly-created RDC record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc4_id_of_ver2
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Go to VER record RDC related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ver_obj,
      test_data.testData.ver2_id,
      user_info.object.rdc_ver_rel
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-8",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
    await browser.pause(2000);
  });
}
