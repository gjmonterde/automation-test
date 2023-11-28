var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0003_step_07 from "../Child/Fj_TestScheme_70_0003_step_07.js";
import Fj_TestScheme_70_0003_step_09_data from "../Child/Fj_TestScheme_70_0003_step_09_data.js";
import Fj_TestScheme_70_0003_step_09 from "../Child/Fj_TestScheme_70_0003_step_09.js";
import Fj_TestScheme_70_0003_step_12_data from "../Child/Fj_TestScheme_70_0003_step_12_data.js";
import Fj_TestScheme_70_0003_step_12 from "../Child/Fj_TestScheme_70_0003_step_12.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0003-3: Transaction inquiry result check (取引照会有無結果確認)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute
    Fetch_data();

    // Execute Fj_TestScheme_70_0003_step_07
    Fj_TestScheme_70_0003_step_07();

    // Execute Fj_TestScheme_70_0003_step_09_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0003_step_09_data();

    // Execute Fj_TestScheme_70_0003_step_09
    Fj_TestScheme_70_0003_step_09();

    // Execute Fj_TestScheme_70_0003_step_12_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0003_step_12_data();

    // Execute Fj_TestScheme_70_0003_step_12
    Fj_TestScheme_70_0003_step_12();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
    // Connect to salesforce
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
      .select(
        "Id, Name, fj_AddressCode__c,genesis__Account__c, genesis__Account__r.Name"
      )
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
          test_data.testData.app_address_code = record.fj_AddressCode__c;
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__c;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.app_id);

    // Get EXM record
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
    await util.Record_check(3, test_data.testData.exm_id);

    // Get DDP record
    await conn
      .sobject("FJ_NameDeduplication__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.ddp_cifline_rectype === record.RecordType.Name
          ) {
            test_data.testData.ddp_name = record.Name;
            test_data.testData.ddp_id = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ddp_id);
  });
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

export async function Get_CDD() {
  // Connect to salesforce
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

  // Get CDD record
  await conn
    .sobject("FJ_NameDedupe_Candidate__c")
    .select("Id, Name, fj_RefNameDeduplication__c")
    .where({
      fj_RefNameDeduplication__c: test_data.testData.ddp_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cdd_name = record.Name;
        test_data.testData.cdd_id = record.Id;
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.cdd_id);
}

export async function Open_SF_CDD_Record() {
  // Go to CDD Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cdd_obj,
    test_data.testData.cdd_id
  );
}

export async function Open_SF_DDP_Record() {
  // Go to DDP Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id
  );
}
