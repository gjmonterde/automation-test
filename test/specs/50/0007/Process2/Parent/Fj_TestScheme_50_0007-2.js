var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0007_step_08_data from "../Child/Fj_TestScheme_50_0007_step_08_data";
import Fj_TestScheme_50_0007_step_08 from "../Child/Fj_TestScheme_50_0007_step_08";
import Fj_TestScheme_50_0007_step_09 from "../Child/Fj_TestScheme_50_0007_step_09";
import Fj_TestScheme_50_0007_step_12 from "../Child/Fj_TestScheme_50_0007_step_12";

export default async function suite() {
  describe("Fj_TestScheme_50_0007-2: Warranty Examination① Result Check (保証審査①結果確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    /* if external linkage is not available, execute Fj_TestScheme_50_0004_step_08_data 
    to create/update data. if else, comment out this line. */
    Fj_TestScheme_50_0007_step_08_data();

    // Execute Fj_TestScheme_50_0007_step_08
    Fj_TestScheme_50_0007_step_08();

    // Execute Fj_TestScheme_50_0007_step_09
    Fj_TestScheme_50_0007_step_09();

    // Execute Fj_TestScheme_50_0007_step_12
    Fj_TestScheme_50_0007_step_12();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
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

    // Get GUA record ID and name
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

    // Get GUD record ID and name
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
        "RecordType.Name": test_data.testData.gud_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.gud_id1 = record.Id;
          test_data.testData.gud_name1 = record.Name;
        }
      });

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to 申込 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to GUD record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud_id1
    );
  });
}
