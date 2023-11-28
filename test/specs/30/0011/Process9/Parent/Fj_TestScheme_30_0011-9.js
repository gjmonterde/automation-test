var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0011_step_50 from "../Child/Fj_TestScheme_30_0011_step_50.js";
import Fj_TestScheme_30_0011_step_51 from "../Child/Fj_TestScheme_30_0011_step_51.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0011-9: Complete condition check (条件確認完了)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_30_0011_step_50
    Fj_TestScheme_30_0011_step_50();

    // Execute Fj_TestScheme_30_0011_step_51
    Fj_TestScheme_30_0011_step_51();
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
    // Application
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // FJ_Contracting__c
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

    // FJ_AgreementProcess__c
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.condition_text, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.agr1_name = record.Name;
          test_data.testData.agr1_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.agr1_id);

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login to org
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(10000);
      test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }
  });
}
// ★ 新環境適用' New Env Implementation
// Links
export async function Go_to_APP() {
  // Go to App record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 告知画面 tab
  await util.Application_Record_Scrolling(3);
}

export async function Go_to_AGR() {
  // Go to AGR record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.agr_obj,
    test_data.testData.agr1_id
  );
}
