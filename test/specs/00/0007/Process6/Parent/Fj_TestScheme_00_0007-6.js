var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0007_step_21 from "../Child/Fj_TestScheme_00_0007_step_21.js";
import Fj_TestScheme_00_0007_step_24 from "../Child/Fj_TestScheme_00_0007_step_24.js";
import Fj_TestScheme_00_0007_step_25 from "../Child/Fj_TestScheme_00_0007_step_25.js";
import Fj_TestScheme_00_0007_step_26 from "../Child/Fj_TestScheme_00_0007_step_26.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0007-6: Warranty Examination③ Request・Result Check (保証審査③依頼・結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0007_step_21
    Fj_TestScheme_00_0007_step_21();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0007_step_24
    Fj_TestScheme_00_0007_step_24();

    // Execute Fj_TestScheme_00_0007_step_25
    Fj_TestScheme_00_0007_step_25();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0007_step_26
    Fj_TestScheme_00_0007_step_26();
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
      .select("Id, Name, genesis__Loan_Amount__c")
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
          test_data.testData.gud_approved_amount =
            record.genesis__Loan_Amount__c; // ★ 新環境適用' New Env Implementation
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get STT record
    await conn
      .sobject("FJ_Statement__c")
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
          test_data.testData.stt_id = record.Id;
          test_data.testData.stt_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.stt_id);

    // Get GUA record
    await conn
      .sobject("FJ_GuaranteeChk__c")
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
          test_data.testData.gua_id = record.Id;
          test_data.testData.gua_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Get GUD record
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
        "RecordType.Name": test_data.testData.gud3_rectype, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.gud_id = record.Id;
          test_data.testData.gud_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.gud_id);

    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation)
  });
}

export async function Open_GUD_Record() {
  // Go to GUD record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gud_obj,
    test_data.testData.gud_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_GUA_Record() {
  // Go to GUA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_STT_Record() {
  // Go to STT record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.stt_obj,
    test_data.testData.stt_id
  );
}
