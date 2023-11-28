var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0003_step_07 from "../Child/Fj_TestScheme_63-1_0003_step_07.js";
import Fj_TestScheme_63_1_0003_step_09_data from "../Child/Fj_TestScheme_63-1_0003_step_09_data.js";
import Fj_TestScheme_63_1_0003_step_09 from "../Child/Fj_TestScheme_63-1_0003_step_09.js";
import Fj_TestScheme_63_1_0003_step_10_data from "../Child/Fj_TestScheme_63-1_0003_step_10_data.js";
import Fj_TestScheme_63_1_0003_step_10 from "../Child/Fj_TestScheme_63-1_0003_step_10.js";
import Fj_TestScheme_63_1_0003_step_11 from "../Child/Fj_TestScheme_63-1_0003_step_11.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0003-3: Transaction inquiry result check (取引照会有無結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0003_step_07
    Fj_TestScheme_63_1_0003_step_07();

    // Execute Fj_TestScheme_63-1_0003_step_09_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_1_0003_step_09_data();

    // Execute Fj_TestScheme_63-1_0003_step_09
    Fj_TestScheme_63_1_0003_step_09();

    // Execute Fj_TestScheme_63-1_0003_step_10_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_1_0003_step_10_data();

    // Login as Tantou1
    // Only for step_10 and step_11. Otherwise, comment out
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0003_step_10
    Fj_TestScheme_63_1_0003_step_10();

    // Execute Fj_TestScheme_63-1_0003_step_11
    Fj_TestScheme_63_1_0003_step_11();
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
      .select("Id, Name, genesis__Account__c, genesis__Account__r.Name")
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
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__c;
        }
      });

    // Get 2nd DDP record
    await conn
      .sobject("FJ_Examination__c")
      .select("Id")
      .include("FJ_NameDeduplication_Examination__r")
      .select("Id, Name, RecordType.*")
      .end()
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.FJ_NameDeduplication_Examination__r.records.length > 0) {
            for (
              var j = 0;
              j < record.FJ_NameDeduplication_Examination__r.records.length;
              j++
            ) {
              var child_obj =
                record.FJ_NameDeduplication_Examination__r.records[j];
              if (
                child_obj.RecordType.Name ===
                test_data.testData.ddp_record_type2
              ) {
                test_data.testData.ddp_id = child_obj.Id;
                test_data.testData.ddp_name = child_obj.Name;
              }
            }
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await Relogin_as_Tantou1();
  });
}

// After every data linkage, need to relogin as Tantou1
export async function Relogin_as_Tantou1() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await Open_App_Launcher();
}

export async function Login_as_Admin() {
  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await Open_App_Launcher();
}

export async function Get_CDD_Record() {
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

  // Get CDD records
  await conn
    .sobject("FJ_NameDedupe_Candidate__c")
    .select("Id, Name")
    .where({
      fj_RefNameDeduplication__c: test_data.testData.ddp_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cdd_array.push(record);
      }
    });
}

export async function Open_SF_DDP_Record() {
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id
  );
}

async function Open_App_Launcher() {
  await util.App_Launcher(test_data.testData.originate_app);
}
