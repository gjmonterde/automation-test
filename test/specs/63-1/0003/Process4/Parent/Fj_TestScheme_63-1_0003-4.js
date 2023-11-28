var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0003_step_13 from "../Child/Fj_TestScheme_63-1_0003_step_13.js";
import Fj_TestScheme_63_1_0003_step_14_data from "../Child/Fj_TestScheme_63-1_0003_step_14_data.js";
import Fj_TestScheme_63_1_0003_step_14 from "../Child/Fj_TestScheme_63-1_0003_step_14.js";
import Fj_TestScheme_63_1_0003_step_15 from "../Child/Fj_TestScheme_63-1_0003_step_15.js";
import Fj_TestScheme_63_1_0003_step_17 from "../Child/Fj_TestScheme_63-1_0003_step_17.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0003_step_13
    Fj_TestScheme_63_1_0003_step_13();

    // Execute Fj_TestScheme_63-1_0003_step_14_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_1_0003_step_14_data();

    // Login as Tantou1
    // Only for step_14, step_15 and step_17. Otherwise, comment out
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0003_step_14
    Fj_TestScheme_63_1_0003_step_14();

    // Execute Fj_TestScheme_63-1_0003_step_15
    Fj_TestScheme_63_1_0003_step_15();

    // Execute Fj_TestScheme_63-1_0003_step_17
    Fj_TestScheme_63_1_0003_step_17();
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

    // Get BA record
    await conn
      .sobject("clcommon__Bank_Account__c")
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
          test_data.testData.ba_id = record.Id;
          test_data.testData.ba_name = record.Name;
        }
      });

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

    // Get CIF records
    await conn
      .sobject("FJ_CIF_Infomation__c")
      .select("Id, Name")
      .where({
        fj_RefAccount__c: test_data.testData.account_id,
      })
      .sort({ Name: -1 })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cif_array.push(record);
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await Open_App_Launcher();
  });
}

// After every data linkage, need to relogin as Tantou1
export async function Data_Login_as_Tantou1() {
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

async function Open_App_Launcher() {
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Open_SF_DDP_Record() {
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id
  );
}
