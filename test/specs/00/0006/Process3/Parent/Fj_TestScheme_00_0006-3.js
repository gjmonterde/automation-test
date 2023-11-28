var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0006_step_17 from "../Child/Fj_TestScheme_00_0006_step_17.js";
import Fj_TestScheme_00_0006_step_18 from "../Child/Fj_TestScheme_00_0006_step_18.js";
import Fj_TestScheme_00_0006_step_19 from "../Child/Fj_TestScheme_00_0006_step_19.js";
import Fj_TestScheme_00_0006_step_20 from "../Child/Fj_TestScheme_00_0006_step_20.js";
import Fj_TestScheme_00_0006_step_21 from "../Child/Fj_TestScheme_00_0006_step_21.js";
import Fj_TestScheme_00_0006_step_22 from "../Child/Fj_TestScheme_00_0006_step_22.js";
import Fj_TestScheme_00_0006_step_23 from "../Child/Fj_TestScheme_00_0006_step_23.js";
import Fj_TestScheme_00_0006_step_20_data from "../Child/Fj_TestScheme_00_0006_step_20_data.js";
import Fj_TestScheme_00_0006_step_21_data from "../Child/Fj_TestScheme_00_0006_step_21_data.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0006-3: Scoring Result Check (スコアリング結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0006_step_17
    Fj_TestScheme_00_0006_step_17();

    // Execute Fj_TestScheme_00_0006_step_18
    Fj_TestScheme_00_0006_step_18();

    // Execute Fj_TestScheme_00_0006_step_19
    Fj_TestScheme_00_0006_step_19();

    // Execute Fj_TestScheme_00_0006_step_20_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_00_0006_step_20_data();

    // Execute Fj_TestScheme_00_0006_step_20
    Fj_TestScheme_00_0006_step_20();

    // Execute Fj_TestScheme_00_0006_step_21_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_00_0006_step_21_data();

    // Execute Fj_TestScheme_00_0006_step_21
    Fj_TestScheme_00_0006_step_21();

    // Execute Fj_TestScheme_00_0006_step_22
    Fj_TestScheme_00_0006_step_22();

    // Execute Fj_TestScheme_00_0006_step_23
    Fj_TestScheme_00_0006_step_23();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get EXS record
    await conn
      .sobject("FJ_ExternalScoring__c")
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
          test_data.testData.exs_id = record.Id;
          test_data.testData.exs_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exs_id);
  });
}

export async function Open_APP_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Open_EXS_Record() {
  // Go to EXS record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function Login_as_Shinsa1() {
  // Login as shinsa1
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);
  test_data.testData.logged_status = "shinsa";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function Update_1st_ModePD() {
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

  // Update fj_1stModePD__c
  await conn.sobject("FJ_ExternalScoring__c").update(
    {
      Id: test_data.testData.exs_id,
      fj_1st_ModePD__c: test_data.testData.first_mode_pd,
    },
    function (err, ret) {
      if (err || !ret.success) {
        return console.error(err, ret);
      }
      console.log("Created record id : " + ret.id);
    }
  );
}

export async function Update_1st_AdditionalPD() {
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

  // Update fj_1stModePD__c
  await conn.sobject("FJ_ExternalScoring__c").update(
    {
      Id: test_data.testData.exs_id,
      fj_1st_AdditionalPD__c: test_data.testData.first_additional_pd,
    },
    function (err, ret) {
      if (err || !ret.success) {
        return console.error(err, ret);
      }
      console.log("Created record id : " + ret.id);
    }
  );
}
