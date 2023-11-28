var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0011_step_89 from "../Child/Fj_TestScheme_60_0011_step_89.js";
import Fj_TestScheme_60_0011_step_90 from "../Child/Fj_TestScheme_60_0011_step_90.js";
import Fj_TestScheme_60_0011_step_93 from "../Child/Fj_TestScheme_60_0011_step_93.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-17.09: Complete condition check (After re-conditon check) (条件確認完了(再条件確認後))", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Login_To_Salesforce();

    // Execute Fj_TestScheme_60_0011_step_89
    Fj_TestScheme_60_0011_step_89();

    // Execute Fj_TestScheme_60_0011_step_90
    Fj_TestScheme_60_0011_step_90();

    // Execute Fj_TestScheme_60_0011_step_93
    Fj_TestScheme_60_0011_step_93();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
    // Login
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
    // Get Application record ID
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

    // FJ_AgreementProcess__c
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordTypeId")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.agr1_record_type,
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

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_SF_APP_Record() {
  // Go to APP record detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
