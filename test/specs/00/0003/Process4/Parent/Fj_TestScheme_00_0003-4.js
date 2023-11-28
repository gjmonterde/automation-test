var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0003_step_16 from "../Child/Fj_TestScheme_00_0003_step_16.js";
import Fj_TestScheme_00_0003_step_17 from "../Child/Fj_TestScheme_00_0003_step_17.js";
import Fj_TestScheme_00_0003_step_19 from "../Child/Fj_TestScheme_00_0003_step_19.js";
import Fj_TestScheme_00_0003_step_20 from "../Child/Fj_TestScheme_00_0003_step_20.js";
import Fj_TestScheme_00_0003_step_21 from "../Child/Fj_TestScheme_00_0003_step_21.js";
import Fj_TestScheme_00_0003_step_22 from "../Child/Fj_TestScheme_00_0003_step_22.js";
import Fj_TestScheme_00_0003_step_23 from "../Child/Fj_TestScheme_00_0003_step_23.js";
import Fj_TestScheme_00_0003_step_24 from "../Child/Fj_TestScheme_00_0003_step_24.js";
import Fj_TestScheme_00_0003_step_19_data from "../Child/Fj_TestScheme_00_0003_step_19_data.js";
import Fj_TestScheme_00_0003_step_20_data from "../Child/Fj_TestScheme_00_0003_step_20_data.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    //**EXTERNAL LINKAGE UNAVAILABLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_16
    Fj_TestScheme_00_0003_step_16();

    //**WITH CANDIDATES AND LINKAGE POSSIBLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_17
    Fj_TestScheme_00_0003_step_17();

    //**WITH CANDIDATES AND LINKAGE AVAILABLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_19_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_00_0003_step_19_data();

    // Execute Fj_TestScheme_00_0003_step_19
    Fj_TestScheme_00_0003_step_19();

    //**WITHOUT CANDIDATES AND LINKAGE UNAVAILABLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_20_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_00_0003_step_20_data();

    // Execute Fj_TestScheme_00_0003_step_20
    Fj_TestScheme_00_0003_step_20();

    //**WITH CANDIDATES, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_21
    Fj_TestScheme_00_0003_step_21();

    //**WITH DUPLICATE CANDIDATES, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_22
    Fj_TestScheme_00_0003_step_22();

    //**WITHOUT DUPLICATE CANDIDATES, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_23
    Fj_TestScheme_00_0003_step_23();

    //**WITHOUT CANDIDATES AND LINKAGE POSSIBLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0003_step_24
    Fj_TestScheme_00_0003_step_24();
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
    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.account_id);

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
    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ddp_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ba_id);

    test_data.testData.cdd_array = new Array();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(2, test_data.testData.cdd_array);

    test_data.testData.cif_array = new Array();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(2, test_data.testData.cif_array);
  });
}

// After every data linkage, need to relogin as Tantou1
export async function Data_Login_as_Tantou1() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  // ★ 新環境適用' New Env Implementation
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  // ★ 新環境適用' New Env Implementation
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Go_to_DDP() {
  // Go to DDP record
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id
  );
}

export async function Go_to_BA() {
  // Go to BA record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ba_obj,
    test_data.testData.ba_id
  );
}

export async function Go_to_APP() {
  // Go to APP record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
