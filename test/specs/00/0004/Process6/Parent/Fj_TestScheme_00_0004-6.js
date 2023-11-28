var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0004_step_58 from "../Child/Fj_TestScheme_00_0004_step_58.js";
import Fj_TestScheme_00_0004_step_60 from "../Child/Fj_TestScheme_00_0004_step_60.js";
import Fj_TestScheme_00_0004_step_62 from "../Child/Fj_TestScheme_00_0004_step_62.js";
import Fj_TestScheme_00_0004_step_63 from "../Child/Fj_TestScheme_00_0004_step_63.js";
import Fj_TestScheme_00_0004_step_64 from "../Child/Fj_TestScheme_00_0004_step_64.js";
import Fj_TestScheme_00_0004_step_66 from "../Child/Fj_TestScheme_00_0004_step_66.js";
import Fj_TestScheme_00_0004_step_67 from "../Child/Fj_TestScheme_00_0004_step_67.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0004-6: Bank Examination confirmed (銀行審査確定)", () => {
    // Execute Login_to_Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_00_0004_step_58
    Fj_TestScheme_00_0004_step_58();

    // Execute Fj_TestScheme_00_0004_step_60
    Fj_TestScheme_00_0004_step_60();

    // Execute Fj_TestScheme_00_0004_step_62
    Fj_TestScheme_00_0004_step_62();

    // Execute Fj_TestScheme_00_0004_step_63
    Fj_TestScheme_00_0004_step_63();

    // Execute Fj_TestScheme_00_0004_step_64
    Fj_TestScheme_00_0004_step_64();

    // Execute Fj_TestScheme_00_0004_step_66
    Fj_TestScheme_00_0004_step_66();

    // Execute Fj_TestScheme_00_0004_step_67
    Fj_TestScheme_00_0004_step_67();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get EXM record
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get INI 3 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_rectype, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini3_id = record.Id;
          test_data.testData.ini3_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    // ★ 新環境適用' New Env Implementation
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

// ★ 新環境適用' New Env Implementation
export async function Open_INI_3rd_Record() {
  // Go to INI Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_EXM() {
  // Go to EXM Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );

  // Scroll to SEC related list
  await util.Scroll_to_related_list(test_data.testData.foreigninq_header);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 告知画面 tab
  await util.Application_Record_Scrolling(3);
}
