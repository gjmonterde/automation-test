var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0007_step_05 from "../Child/Fj_TestScheme_00_0007_step_05";
import Fj_TestScheme_00_0007_step_06 from "../Child/Fj_TestScheme_00_0007_step_06";
import Fj_TestScheme_00_0007_step_07 from "../Child/Fj_TestScheme_00_0007_step_07";
import Fj_TestScheme_00_0007_step_08 from "../Child/Fj_TestScheme_00_0007_step_08";
import Fj_TestScheme_00_0007_step_09 from "../Child/Fj_TestScheme_00_0007_step_09";
import Fj_TestScheme_00_0007_step_10 from "../Child/Fj_TestScheme_00_0007_step_10";
import Fj_TestScheme_00_0007_step_11 from "../Child/Fj_TestScheme_00_0007_step_11";
import Fj_TestScheme_00_0007_step_12 from "../Child/Fj_TestScheme_00_0007_step_12";
import Fj_TestScheme_00_0007_step_06_data from "../Child/Fj_TestScheme_00_0007_step_06_data";
import Fj_TestScheme_00_0007_step_08_data from "../Child/Fj_TestScheme_00_0007_step_08_data";
import Fj_TestScheme_00_0007_step_10_data from "../Child/Fj_TestScheme_00_0007_step_10_data";

export default async function suite() {
  describe("Fj_TestScheme_00_0007-2: Warranty Examination① Result Check (保証審査①結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0007_step_05
    Fj_TestScheme_00_0007_step_05();

    /* if external linkage is not available, execute Fj_TestScheme_00_0007_step_06_data 
  to create/update data. if else, comment out this line. */
    Fj_TestScheme_00_0007_step_06_data();

    // Execute Fj_TestScheme_00_0007_step_06
    Fj_TestScheme_00_0007_step_06();

    // Execute Fj_TestScheme_00_0007_step_07
    Fj_TestScheme_00_0007_step_07();

    // ★ 新環境適用' New Env Implementation
    /* if external linkage is not available, execute Fj_TestScheme_00_0007_step_10_data 
  to create/update data. if else, comment out this line. */
    Fj_TestScheme_00_0007_step_08_data();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0007_step_08
    Fj_TestScheme_00_0007_step_08();

    // Execute Fj_TestScheme_00_0007_step_09
    Fj_TestScheme_00_0007_step_09();

    /* if external linkage is not available, execute Fj_TestScheme_00_0007_step_10_data 
  to create/update data. if else, comment out this line. */
    Fj_TestScheme_00_0007_step_10_data();

    // Execute Fj_TestScheme_00_0007_step_10
    Fj_TestScheme_00_0007_step_10();

    // Execute Fj_TestScheme_00_0007_step_11
    Fj_TestScheme_00_0007_step_11();

    // Execute Fj_TestScheme_00_0007_step_12
    Fj_TestScheme_00_0007_step_12();
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
      .select("Id, Name, genesis__Loan_Amount__c, genesis__Term__c") // ★ 新環境適用' New Env Implementation
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
          test_data.testData.gud_approved_amount =
            record.genesis__Loan_Amount__c; // ★ 新環境適用' New Env Implementation
          test_data.testData.gud_loan_amount_term = record.genesis__Term__c; // ★ 新環境適用' New Env Implementation
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Get GUD record ID and name
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
        "RecordType.Name": test_data.testData.gud1_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.gud_id = record.Id;
          test_data.testData.gud_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.gud_id);
  });
}

export async function Login_User_In_Charge() {
  if (test_data.testData.logged_status != "uic") {
    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  }
}

export async function Login_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function Open_GUD_Record() {
  // Go to GUD record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gud_obj,
    test_data.testData.gud_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_GUA_Record() {
  // Go to GUA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
