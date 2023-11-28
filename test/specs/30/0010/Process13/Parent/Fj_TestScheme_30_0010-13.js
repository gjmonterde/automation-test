var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0010_step_33 from "../Child/Fj_TestScheme_30_0010_step_33.js";
import Fj_TestScheme_30_0010_step_35 from "../Child/Fj_TestScheme_30_0010_step_35.js";
import Fj_TestScheme_30_0010_step_37 from "../Child/Fj_TestScheme_30_0010_step_37.js";
import Fj_TestScheme_30_0010_step_38 from "../Child/Fj_TestScheme_30_0010_step_38.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0010-13: Document check (書類確認)", () => {
    // Login as tantou1 user
    Login_As_Tantou1_User();

    // Execute Fj_TestScheme_30_0010_step_33
    Fj_TestScheme_30_0010_step_33();

    // Execute Fj_TestScheme_30_0010_step_35
    Fj_TestScheme_30_0010_step_35();

    // Execute Fj_TestScheme_30_0010_step_37
    Fj_TestScheme_30_0010_step_37();

    // Execute Fj_TestScheme_30_0010_step_38
    Fj_TestScheme_30_0010_step_38();
  });
}

async function Login_As_Tantou1_User() {
  it("Login as tantou1 user", async () => {
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
      .select("Id, Name,genesis__Account__c, genesis__Account__r.Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__c;
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
        "RecordType.Name": test_data.testData.ver2_rectype, // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as tantou1 user
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
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Switch to 実行画面 tab
  await util.Application_Record_Scrolling(4);
}

export async function Go_to_VER() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver2_id
  );

  // Switch to 実行画面 tab
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}
