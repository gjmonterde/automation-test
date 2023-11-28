var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0004_step_05 from "../Child/Fj_TestScheme_63-2_0004_step_05.js";
import Fj_TestScheme_63_2_0004_step_06 from "../Child/Fj_TestScheme_63-2_0004_step_06.js";
import Fj_TestScheme_63_2_0004_step_06_data from "../Child/Fj_TestScheme_63-2_0004_step_06_data.js";
import Fj_TestScheme_63_2_0004_step_08 from "../Child/Fj_TestScheme_63-2_0004_step_08.js";
import Fj_TestScheme_63_2_0004_step_10 from "../Child/Fj_TestScheme_63-2_0004_step_10.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0004-2: Credit card information check (クレジットカード情報確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0004_step_05
    Fj_TestScheme_63_2_0004_step_05();

    // Execute Fj_TestScheme_63-2_0004_step_06_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_2_0004_step_06_data();

    // Execute Fj_TestScheme_63-2_0004_step_06
    Fj_TestScheme_63_2_0004_step_06();

    // Execute Fj_TestScheme_63-2_0004_step_08
    Fj_TestScheme_63_2_0004_step_08();

    // Execute Fj_TestScheme_63-2_0004_step_10
    Fj_TestScheme_63_2_0004_step_10();
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
      .select("Id, Name, genesis__CL_Product__c")
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

    // Get INI record where レコードタイプ = 銀行審査②（取引情報取得）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini2_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini2_id = record.Id;
          test_data.testData.ini2_name = record.Name;
        }
      });

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Record_URL(object, id) {
  // Open URL record
  await util.Open_SF_Record_URL(1, object, id);
}
