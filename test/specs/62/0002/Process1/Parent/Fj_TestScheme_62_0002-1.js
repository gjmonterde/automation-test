var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0002_step_01 from "../Child/Fj_TestScheme_62_0002_step_01.js";
import Fj_TestScheme_62_0002_step_02 from "../Child/Fj_TestScheme_62_0002_step_02.js";
import Fj_TestScheme_62_0002_step_03 from "../Child/Fj_TestScheme_62_0002_step_03.js";
import Fj_TestScheme_62_0002_step_05 from "../Child/Fj_TestScheme_62_0002_step_05.js";
import Fj_TestScheme_62_0002_step_06 from "../Child/Fj_TestScheme_62_0002_step_06.js";
import Fj_TestScheme_62_0002_step_11 from "../Child/Fj_TestScheme_62_0002_step_11.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0002-1: Initial process check (初期処理確認)", () => {
    // Execute Login_to_Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_62_0002_step_01
    Fj_TestScheme_62_0002_step_01();

    // Execute Fj_TestScheme_62_0002_step_02
    Fj_TestScheme_62_0002_step_02();

    // Execute Fj_TestScheme_62_0002_step_03
    Fj_TestScheme_62_0002_step_03();

    // Execute Fj_TestScheme_62_0002_step_05
    Fj_TestScheme_62_0002_step_05();

    // Execute Fj_TestScheme_62_0002_step_06
    Fj_TestScheme_62_0002_step_06();

    // Execute Fj_TestScheme_62_0002_step_11
    Fj_TestScheme_62_0002_step_11();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
    // Connect to salesforce
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

    let csv_record_no = eval(
      "test_data.testData.csv_value" +
        test_data.testData.record_no +
        "_systemacceptno"
    );
    // Get APP Record
    await conn
      .sobject("FJ_MuCooperationApp__c")
      .select(
        "Id, Name, fj_System_Acception_No__c, fj_RefApplication__c, fj_RefApplication__r.Name," +
          "fj_RefApplication__r.genesis__CL_Product__c, fj_RefApplication__r.genesis__CL_Product__r.Name"
      )
      .where({
        fj_System_Acception_No__c: csv_record_no,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.fj_RefApplication__c;
          test_data.testData.app_name = record.fj_RefApplication__r.Name;
          test_data.testData.pro_id =
            record.fj_RefApplication__r.genesis__CL_Product__c;
          test_data.testData.pro_name =
            record.fj_RefApplication__r.genesis__CL_Product__r.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.pro_id);

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

    // Get VER 1 & 2 record
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
            test_data.testData.ver_document_confirmation1_rectype ===
            record.RecordType.Name
          ) {
            // ①申込受付後
            test_data.testData.ver_id = record.Id;
            test_data.testData.ver_name = record.Name;
          }
          if (
            test_data.testData.ver_document_confirmation2_rectype ===
            record.RecordType.Name
          ) {
            // ②契約手続き前
            test_data.testData.ver_id2 = record.Id;
            test_data.testData.ver_name2 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ver_id);
    await util.Record_check(1, test_data.testData.ver_id2);

    // Get RDC record
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_RefVerification__c: test_data.testData.ver_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc_id = record.Id;
          test_data.testData.rdc_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.rdc_id);

    if (test_data.testData.logged_status != "uic") {
      // Login to org - tantou1
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(10000);
      test_data.testData.logged_status = "uic";

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CNT() {
  // Go to CNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_VER(id) {
  // Go to VER record screen
  await util.Open_SF_Record_URL(1, user_info.object.ver_obj, id);

  // Scroll to RDC header
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_PRO() {
  // Go to PRO record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pro_obj,
    test_data.testData.pro_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_RDC() {
  // Go to RDC record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.rdc_obj,
    test_data.testData.rdc_id
  );
}
