var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0010_step_25 from "../Child/Fj_TestScheme_40_0010_step_25.js";
import Fj_TestScheme_40_0010_step_27 from "../Child/Fj_TestScheme_40_0010_step_27.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0010-11: Check requested document (徴求書類確認)", () => {
    // Login_to_Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0010_step_25
    Fj_TestScheme_40_0010_step_25();

    // Execute Fj_TestScheme_40_0010_step_27
    Fj_TestScheme_40_0010_step_27();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
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
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get VER record
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.ver_document_confirmation2_rectype ===
            record.RecordType.Name
          ) {
            // ②契約手続き前
            test_data.testData.ver_id = record.Id;
            test_data.testData.ver_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ver_id);

    test_data.testData.rdc_name_arr = [];
    test_data.testData.rdc_id_arr = [];

    // Get RDC records
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefVerification__c: test_data.testData.ver_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          test_data.testData.rdc_name_arr.push(records[i].Name);
          test_data.testData.rdc_id_arr.push(records[i].Id);
        }
      });

    // Record check
    await util.Record_check(2, test_data.testData.rdc_id_arr);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_RDC(id) {
  // Go to RDC record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.rdc_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_VER() {
  // Go to VER record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver_id
  );

  // Scroll to RDC
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}
