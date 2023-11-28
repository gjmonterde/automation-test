var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_70_0002_step_23 from "../Child/Fj_TestScheme_70_0002_step_23.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0002-9: Check my page completion (マイページ完了確認)", () => {
    // Execute Login_to_MyPage
    // NOTE: ALWAYS execute
    Login_to_MyPage();

    // Execute Fj_TestScheme_70_0002_step_23
    Fj_TestScheme_70_0002_step_23();
  });
}

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
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
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.app_id);

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
    await util.Record_check(3, test_data.testData.cnt_id);

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
            test_data.testData.ver_document_confirmation1_rectype ===
            record.RecordType.Name
          ) {
            // ①申込受付後
            test_data.testData.ver_id = record.Id;
            test_data.testData.ver_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.ver_id);

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
    await util.Record_check(3, test_data.testData.rdc_id);

    // Maximize browser
    await browser.maximizeWindow();

    // Go to My Page Login page
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_siteurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}
