var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0010_step_29 from "../Child/Fj_TestScheme_00_0010_step_29.js";
import Fj_TestScheme_00_0010_step_30 from "../Child/Fj_TestScheme_00_0010_step_30.js";
import Fj_TestScheme_00_0010_step_31 from "../Child/Fj_TestScheme_00_0010_step_31.js";
import Fj_TestScheme_00_0010_step_32 from "../Child/Fj_TestScheme_00_0010_step_32.js";
import Fj_TestScheme_00_0010_step_33 from "../Child/Fj_TestScheme_00_0010_step_33.js";
import Fj_TestScheme_00_0010_step_34 from "../Child/Fj_TestScheme_00_0010_step_34.js";
import Fj_TestScheme_00_0010_step_35 from "../Child/Fj_TestScheme_00_0010_step_35.js";
import Fj_TestScheme_00_0010_step_36 from "../Child/Fj_TestScheme_00_0010_step_36.js";
import Fj_TestScheme_00_0010_step_37 from "../Child/Fj_TestScheme_00_0010_step_37.js";
import Fj_TestScheme_00_0010_step_38 from "../Child/Fj_TestScheme_00_0010_step_38.js";
import Fj_TestScheme_00_0010_step_39 from "../Child/Fj_TestScheme_00_0010_step_39.js";
import Fj_TestScheme_00_0010_step_40 from "../Child/Fj_TestScheme_00_0010_step_40.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0010-13: Document check (書類確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0010_step_29
    Fj_TestScheme_00_0010_step_29();

    // Execute Fj_TestScheme_00_0010_step_30
    Fj_TestScheme_00_0010_step_30();

    // Execute Fj_TestScheme_00_0010_step_31
    Fj_TestScheme_00_0010_step_31();

    // Execute Fj_TestScheme_00_0010_step_32
    Fj_TestScheme_00_0010_step_32();

    // Execute Fj_TestScheme_00_0010_step_33
    Fj_TestScheme_00_0010_step_33();

    // Execute Fj_TestScheme_00_0010_step_34
    Fj_TestScheme_00_0010_step_34();

    // Execute Fj_TestScheme_00_0010_step_35
    Fj_TestScheme_00_0010_step_35();

    // Execute Fj_TestScheme_00_0010_step_36
    Fj_TestScheme_00_0010_step_36();

    // Execute Fj_TestScheme_00_0010_step_37
    Fj_TestScheme_00_0010_step_37();

    // Execute Fj_TestScheme_00_0010_step_38
    Fj_TestScheme_00_0010_step_38();

    // Execute Fj_TestScheme_00_0010_step_39
    Fj_TestScheme_00_0010_step_39();

    // Execute Fj_TestScheme_00_0010_step_40
    Fj_TestScheme_00_0010_step_40();
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
      .select("Id, Name,genesis__Account__c, genesis__Account__r.Name") // ★ 新環境適用' New Env Implementation
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
          test_data.testData.account_name = record.genesis__Account__r.Name; // ★ 新環境適用' New Env Implementation
          test_data.testData.account_id = record.genesis__Account__c; // ★ 新環境適用' New Env Implementation
        }
      });

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get VER record where レコードタイプ = 書類確認②（その他確認書類）
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_record_type, // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ver2_id);

    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

// ★ 新環境適用' New Env Implementation
export async function Get_CLI() {
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

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.cli_id);
}

// ★ 新環境適用' New Env Implementation
export async function Get_BA() {
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

  // Get BA record
  await conn
    .sobject("clcommon__Bank_Account__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
    })
    .execute(function (err, records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.ba_name = record.Name;
        test_data.testData.ba_id = record.Id;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.ba_id);
}

export async function Open_APP_Record(type) {
  // ★ 新環境適用' New Env Implementation
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // ★ 新環境適用' New Env Implementation
  switch (type) {
    case 3:
      // Switch to 告知画面 tab
      await util.Application_Record_Scrolling(3);
      break;
    case 4:
      // Switch to 実行画面 tab
      await util.Application_Record_Scrolling(4);
      break;
  }
}

// ★ 新環境適用' New Env Implementation
export async function Open_CLI_Record() {
  // Go to CLI record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cli_obj,
    test_data.testData.cli_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_BA_Record() {
  // Go to BA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ba_obj,
    test_data.testData.ba_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_VER_Record() {
  // Go to VER record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver2_id
  );

  // Scroll to view RDC
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}
