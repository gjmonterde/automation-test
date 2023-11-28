var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0012_step_24 from "../Child/Fj_TestScheme_40_0012_step_24.js";
import Fj_TestScheme_40_0012_step_37 from "../Child/Fj_TestScheme_40_0012_step_37.js";
import Fj_TestScheme_40_0012_step_38 from "../Child/Fj_TestScheme_40_0012_step_38.js";
import Fj_TestScheme_40_0012_step_42 from "../Child/Fj_TestScheme_40_0012_step_42.js";
import Fj_TestScheme_40_0012_step_24_data from "../Child/Fj_TestScheme_40_0012_step_24_data.js";
import Fj_TestScheme_40_0012_step_38_data from "../Child/Fj_TestScheme_40_0012_step_38_data.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0012-2: Execution Result Check (実行結果確認)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS Execute before steps
    Login_to_Salesforce();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_40_0012_step_24_data();

    // Execute Get_ER
    // NOTE: ALWAYS Execute before step 24~42
    Get_ER();

    // Execute Fj_TestScheme_40_0012_step_24
    Fj_TestScheme_40_0012_step_24();

    // Execute Fj_TestScheme_40_0012_step_37
    Fj_TestScheme_40_0012_step_37();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_40_0012_step_38_data();

    // Execute Fj_TestScheme_40_0012_step_38
    Fj_TestScheme_40_0012_step_38();

    // Execute Fj_TestScheme_40_0012_step_42
    Fj_TestScheme_40_0012_step_42();
  });
}

async function Login_to_Salesforce() {
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

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

async function Get_ER() {
  it("Get Execution Result Record", async () => {
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

    // Loop through 20 times, break loop once expected error message appears
    for (var i = 0; i < 20; i++) {
      // Get ER Exec Result record
      await conn
        .sobject("FJ_ExecutionResult__c")
        .select("Id, Name, fj_ErrorMessage__c,fj_status__c")
        .where({
          fj_RefApplication__c: test_data.testData.app_id,
        })
        .execute(function (err, records) {
          if (err) {
            return console.error(err);
          }
          for (var i = 0; i < records.length; i++) {
            var record = records[i];
            test_data.testData.exec_result_name = record.Name;
            test_data.testData.exec_result_id = record.Id;
            test_data.testData.exec_result_err_message_actual =
              record.fj_ErrorMessage__c;
            test_data.testData.exec_result_processing_status_actual =
              record.fj_status__c;
          }
        });
      await browser.pause(3000);
      if (
        test_data.testData.exec_result_err_message_actual ==
        test_data.testData.exec_result_err_message_expected
      ) {
        break;
      }
    }

    // Record check
    await util.Record_check(3, test_data.testData.exec_result_id);
  });
}

export async function Get_MNT_Record() {
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

  // Get MNT record
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name, toLabel(fj_MailNotificationType__c)")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (
          test_data.testData.borrowing_rectype ===
          record.fj_MailNotificationType__c
        ) {
          test_data.testData.mnt_name = record.Name;
          test_data.testData.mnt_id = record.Id;
        }
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.mnt_id);
}
