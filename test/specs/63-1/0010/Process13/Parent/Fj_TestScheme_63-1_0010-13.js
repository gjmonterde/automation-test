var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0010_step_28 from "../Child/Fj_TestScheme_63-1_0010_step_28.js";
import Fj_TestScheme_63_1_0010_step_29 from "../Child/Fj_TestScheme_63-1_0010_step_29.js";
import Fj_TestScheme_63_1_0010_step_32 from "../Child/Fj_TestScheme_63-1_0010_step_32.js";
import Fj_TestScheme_63_1_0010_step_33 from "../Child/Fj_TestScheme_63-1_0010_step_33.js";
import Fj_TestScheme_63_1_0010_step_35 from "../Child/Fj_TestScheme_63-1_0010_step_35.js";
import Fj_TestScheme_63_1_0010_step_37 from "../Child/Fj_TestScheme_63-1_0010_step_37.js";
import Fj_TestScheme_63_1_0010_step_38 from "../Child/Fj_TestScheme_63-1_0010_step_38.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0010-13: Document check (書類確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Need to fill-out manually the fields (都道府県, 市区町村, 郵便番号１, 郵便番号２, ご希望の連絡先) in 申込内容 tab APP Record
    // Execute Fj_TestScheme_63-1_0010_step_28
    Fj_TestScheme_63_1_0010_step_28();

    // Execute Fj_TestScheme_63-1_0010_step_29
    Fj_TestScheme_63_1_0010_step_29();

    // Execute Fj_TestScheme_63-1_0010_step_32
    Fj_TestScheme_63_1_0010_step_32();

    // Execute Fj_TestScheme_63-1_0010_step_33
    Fj_TestScheme_63_1_0010_step_33();

    // Execute Fj_TestScheme_63-1_0010_step_35
    Fj_TestScheme_63_1_0010_step_35();

    // Execute Fj_TestScheme_63-1_0010_step_37
    Fj_TestScheme_63_1_0010_step_37();

    // Execute Fj_TestScheme_63-1_0010_step_38
    Fj_TestScheme_63_1_0010_step_38();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce Records", async () => {
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

    // Get APP record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // Get CNT record
    await conn
      .sobject("FJ_Contracting__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cnt_id = record.Id;
          test_data.testData.cnt_name = record.Name;
        }
      });

    // Get VER record where レコードタイプ = ②契約手続き前
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ver2_id = record.Id;
          test_data.testData.ver2_name = record.Name;
        }
      });

    // Get RDC record where 書類確認 = ②契約手続き前
    // and 書類名 = 所得確認資料
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name, fj_DocumentName__c")
      .where({
        fj_RefVerification__c: test_data.testData.ver2_id,
        fj_DocumentName__c: test_data.testData.rdc1_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc1_id_of_ver2 = record.Id;
          test_data.testData.rdc1_name_of_ver2 = record.Name;
        }
      });

    // Get CLI record
    await conn
      .sobject("FJ_CustomerLedgerInquiry__c")
      .select("Id, Name, fj_InputKey__c")
      .where({
        fj_InputKey__c: test_data.testData.input_key,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cli_id = record.Id;
          test_data.testData.cli_name = record.Name;
        }
      });

    // Get BA records
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_Verification_Status__c: test_data.testData.ba_status_code,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ba_id = record.Id;
          test_data.testData.ba_name = record.Name;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_VER() {
  // Go to VER record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver2_id
  );

  // Scroll into view RDC related list
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}
