var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0009_step_01 from "../Child/Fj_TestScheme_62_0009_step_01.js";
import Fj_TestScheme_62_0009_step_03 from "../Child/Fj_TestScheme_62_0009_step_03.js";
import Fj_TestScheme_62_0009_step_04 from "../Child/Fj_TestScheme_62_0009_step_04.js";
import Fj_TestScheme_62_0009_step_05 from "../Child/Fj_TestScheme_62_0009_step_05.js";
import Fj_TestScheme_62_0009_step_06 from "../Child/Fj_TestScheme_62_0009_step_06.js";
import Fj_TestScheme_62_0009_step_09 from "../Child/Fj_TestScheme_62_0009_step_09.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0009-1: Initial process check (初期処理確認)", () => {
    // Execute Fetch_data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_62_0009_step_01
    Fj_TestScheme_62_0009_step_01();

    // Execute Fj_TestScheme_62_0009_step_03
    Fj_TestScheme_62_0009_step_03();

    // Execute Fj_TestScheme_62_0009_step_04
    Fj_TestScheme_62_0009_step_04();

    // Execute Fj_TestScheme_62_0009_step_05
    Fj_TestScheme_62_0009_step_05();

    // Execute Fj_TestScheme_62_0009_step_06
    Fj_TestScheme_62_0009_step_06();

    // Execute Fj_TestScheme_62_0009_step_09
    Fj_TestScheme_62_0009_step_09();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

    // Get VER 2 record
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name":
          test_data.testData.ver_document_confirmation2_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // 書類確認②（その他確認書類）
          test_data.testData.ver_id2 = record.Id;
          test_data.testData.ver_name2 = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ver_id2);

    // Get CRE record
    await conn
      .sobject("FJ_CreditApproval__c")
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
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.cre_id);
  });
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";
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
export async function Go_to_VER() {
  // Go to VER record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver_id2
  );

  // Scroll into view RDC related list
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  await util.Application_Record_Scrolling(2);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CRE() {
  // Go to CRE record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_PCMaster() {
  // Go to PCMaster related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.pro_obj,
    test_data.testData.pro_id,
    user_info.object.pro_pcmaster_rel
  );
}
