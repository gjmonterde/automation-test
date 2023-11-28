var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0004_step_13_data from "../Child/Fj_TestScheme_20_0004_step_13_data";
import Fj_TestScheme_20_0004_step_18_data from "../Child/Fj_TestScheme_20_0004_step_18_data";
import Fj_TestScheme_20_0004_step_19_data from "../Child/Fj_TestScheme_20_0004_step_19_data";
import Fj_TestScheme_20_0004_step_20_data from "../Child/Fj_TestScheme_20_0004_step_20_data";
import Fj_TestScheme_20_0004_step_22_data from "../Child/Fj_TestScheme_20_0004_step_22_data";
import Fj_TestScheme_20_0004_step_24_data from "../Child/Fj_TestScheme_20_0004_step_24_data";
import Fj_TestScheme_20_0004_step_13 from "../Child/Fj_TestScheme_20_0004_step_13";
import Fj_TestScheme_20_0004_step_17 from "../Child/Fj_TestScheme_20_0004_step_17";
import Fj_TestScheme_20_0004_step_18 from "../Child/Fj_TestScheme_20_0004_step_18";
import Fj_TestScheme_20_0004_step_19 from "../Child/Fj_TestScheme_20_0004_step_19";
import Fj_TestScheme_20_0004_step_20 from "../Child/Fj_TestScheme_20_0004_step_20";
import Fj_TestScheme_20_0004_step_22 from "../Child/Fj_TestScheme_20_0004_step_22";
import Fj_TestScheme_20_0004_step_24 from "../Child/Fj_TestScheme_20_0004_step_24";
import Fj_TestScheme_20_0004_step_25 from "../Child/Fj_TestScheme_20_0004_step_25";
import Fj_TestScheme_20_0004_step_26 from "../Child/Fj_TestScheme_20_0004_step_26";
import Fj_TestScheme_20_0004_step_27 from "../Child/Fj_TestScheme_20_0004_step_27";
import Fj_TestScheme_20_0004_step_28 from "../Child/Fj_TestScheme_20_0004_step_28";
import Fj_TestScheme_20_0004_step_29 from "../Child/Fj_TestScheme_20_0004_step_29";
import Fj_TestScheme_20_0004_step_30 from "../Child/Fj_TestScheme_20_0004_step_30";

export default async function suite() {
  describe("Fj_TestScheme_20_0004-3: External form check result confirmation (外形チェック結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    /* if external linkage is not available, execute these scripts to create/update data.
     if else, comment out this line. */

    /*Step 13 data script should be executed after running steps 18-24 data scripts for the data to be reflected.*/
    Fj_TestScheme_20_0004_step_18_data();
    Fj_TestScheme_20_0004_step_19_data();
    Fj_TestScheme_20_0004_step_20_data();
    Fj_TestScheme_20_0004_step_22_data();
    Fj_TestScheme_20_0004_step_24_data();
    Fj_TestScheme_20_0004_step_13_data();

    // Execute Fj_TestScheme_20_0004_step_13
    Fj_TestScheme_20_0004_step_13();

    // Execute Fj_TestScheme_20_0004_step_17
    Fj_TestScheme_20_0004_step_17();

    // Execute Fj_TestScheme_20_0004_step_18
    Fj_TestScheme_20_0004_step_18();

    // Execute Fj_TestScheme_20_0004_step_19
    Fj_TestScheme_20_0004_step_19();

    // Execute Fj_TestScheme_20_0004_step_20
    Fj_TestScheme_20_0004_step_20();

    // Execute Fj_TestScheme_20_0004_step_22
    Fj_TestScheme_20_0004_step_22();

    // Execute Fj_TestScheme_20_0004_step_24
    Fj_TestScheme_20_0004_step_24();

    // Execute Fj_TestScheme_20_0004_step_25
    Fj_TestScheme_20_0004_step_25();

    // Execute Fj_TestScheme_20_0004_step_26
    Fj_TestScheme_20_0004_step_26();

    // Execute Fj_TestScheme_20_0004_step_27
    Fj_TestScheme_20_0004_step_27();

    // Execute Fj_TestScheme_20_0004_step_28
    Fj_TestScheme_20_0004_step_28();

    // Execute Fj_TestScheme_20_0004_step_29
    Fj_TestScheme_20_0004_step_29();

    // Execute Fj_TestScheme_20_0004_step_30
    Fj_TestScheme_20_0004_step_30();
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
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get EXM name and record ID
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get INI record ID
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        "RecordType.Name": test_data.testData.ini3_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini3_id = record.Id;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);
  });
}

export async function Login_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin";

  // Change App
  await Change_App();
}

export async function Login_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic";

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Get_CHI() {
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

  // Get CHI record ID
  await conn
    .sobject("FJ_CheckInfo__c")
    .select("Id, Name")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.chi_id = record.Id;
        test_data.testData.chi_name = record.Name;
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.chi_id);
}

export async function Get_SCI() {
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

  // Get SCI record ID
  await conn
    .sobject("FJ_ScoringInfo__c")
    .select("Id, Name")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.sci_id = record.Id;
        test_data.testData.sci_name = record.Name;
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.sci_id);
}

export async function Get_ASC() {
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

  // Get ASC record ID
  await conn
    .sobject("FJ_AMLSCheck__c")
    .select("Id, Name")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.asc_id = record.Id;
        test_data.testData.asc_name = record.Name;
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.asc_id);
}

export async function Get_records() {
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

  // Get CABI record ID
  await conn
    .sobject("FJ_CAB_Intermediary__c")
    .select("Id")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cabi_id = record.Id;
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.cabi_id);

  // Get CABF record ID
  await conn
    .sobject("FJ_CAB_FCD__c")
    .select("Id")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cabf_id = record.Id;
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.cabf_id);

  // Get BLA record ID
  await conn
    .sobject("FJ_BasicLoanAccount__c")
    .select("Id")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.bla_id = record.Id;
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.bla_id);

  // Get CLA record ID
  await conn
    .sobject("FJ_CardLoanAccountInfo__c")
    .select("Id")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cla_id = record.Id;
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.cla_id);
}

export async function Go_to_INI() {
  // Go to 銀行審査 detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
  );
}
