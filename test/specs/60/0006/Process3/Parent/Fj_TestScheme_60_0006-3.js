var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0006_step_16 from "../Child/Fj_TestScheme_60_0006_step_16.js";
import Fj_TestScheme_60_0006_step_16_data from "../Child/Fj_TestScheme_60_0006_step_16_data.js";
import Fj_TestScheme_60_0006_step_17 from "../Child/Fj_TestScheme_60_0006_step_17.js";
import Fj_TestScheme_60_0006_step_17_data from "../Child/Fj_TestScheme_60_0006_step_17_data.js";
import Fj_TestScheme_60_0006_step_18 from "../Child/Fj_TestScheme_60_0006_step_18.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0006-3: Scoring Result Check (スコアリング結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_60_0006_step_16
    Fj_TestScheme_60_0006_step_16();

    // Execute Fj_TestScheme_60_0006_step_16_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_60_0006_step_16_data();

    // Execute Fj_TestScheme_60_0006_step_17_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_60_0006_step_17_data();

    // Login as shinsa1
    // Only for step_17 and step_18
    Login_as_ShinsaUser();

    // Execute Fj_TestScheme_60_0006_step_17
    Fj_TestScheme_60_0006_step_17();

    // Execute Fj_TestScheme_60_0006_step_18
    Fj_TestScheme_60_0006_step_18();
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

    // Get CL商品 record ID
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
          test_data.testData.cl_prod_id = record.genesis__CL_Product__c;
        }
      });
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Shinsa1() {
  // Login as shinsa1 user
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await Change_App();
}

async function Login_as_ShinsaUser() {
  it("Login as Shinsa1", async () => {
    // Login as shinsa1 user
    await Login_as_Shinsa1();
  });
}

export async function Open_Salesforce_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Open_Salesforce_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Open_Salesforce_CL_Product() {
  // Go to CL Product detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pro_obj,
    test_data.testData.cl_prod_id
  );
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
