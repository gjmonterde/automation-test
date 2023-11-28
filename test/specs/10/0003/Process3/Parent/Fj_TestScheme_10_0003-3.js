var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0003_step_06 from "../Child/Fj_TestScheme_10_0003_step_06.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0003-3: Transaction inquiry result check (取引照会有無結果確認)", () => {
    // Execute Login
    Login();

    // Execute Fj_TestScheme_10_0003_step_06
    Fj_TestScheme_10_0003_step_06();
  });
}

async function Login() {
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

    // Examination
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
          test_data.testData.exm_name = record.Name;
          test_data.testData.exm_id = record.Id;
        }
      });

    // FJ_NameDeduplication__c
    await conn
      .sobject("FJ_NameDeduplication__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // ★ 新環境適用' New Env Implementation
          if (test_data.testData.cif_record_type === record.RecordType.Name) {
            test_data.testData.ddp_name = record.Name;
            test_data.testData.ddp_id = record.Id;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );
  });
}
