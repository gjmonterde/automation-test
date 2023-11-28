var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0012_step_24 from "../Child/Fj_TestScheme_62_0012_step_24.js";
import Fj_TestScheme_62_0012_step_38 from "../Child/Fj_TestScheme_62_0012_step_38.js";
import Fj_TestScheme_62_0012_step_42 from "../Child/Fj_TestScheme_62_0012_step_42.js";
import Fj_TestScheme_62_0012_step_43 from "../Child/Fj_TestScheme_62_0012_step_43.js";
import Fj_TestScheme_62_0012_step_38_data from "../Child/Fj_TestScheme_62_0012_step_38_data.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0012-2: Execution Result Check (実行結果確認)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS Execute before steps
    Fetch_data();

    // Execute Get ER
    // NOTE: ALWAYS Execute before step 24~42
    // Comment out if running step 43 only
    Get_ER();

    // Execute Fj_TestScheme_62_0012_step_24
    Fj_TestScheme_62_0012_step_24();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_62_0012_step_38_data();

    // Execute Fj_TestScheme_62_0012_step_38
    Fj_TestScheme_62_0012_step_38();

    // Execute Fj_TestScheme_62_0012_step_42
    Fj_TestScheme_62_0012_step_42();

    // Execute Fj_TestScheme_62_0012_step_43
    Fj_TestScheme_62_0012_step_43();
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
    let csv_record_no = eval(
      "test_data.testData.csv_value" +
        test_data.testData.record_no +
        "_systemacceptno"
    );
    // Get APP Record
    await conn
      .sobject("FJ_MuCooperationApp__c")
      .select(
        "Id, Name, fj_System_Acception_No__c, fj_RefApplication__c, fj_RefApplication__r.Name"
      )
      .where({
        fj_System_Acception_No__c: csv_record_no,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.fj_RefApplication__c;
          test_data.testData.app_name = record.fj_RefApplication__r.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);
  });
}

async function Get_ER() {
  it("Get Execution Result Record", async () => {
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

    // Loop until expected error message appears
    do {
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
    } while (
      test_data.testData.exec_result_err_message_actual !=
      test_data.testData.exec_result_err_message_expected
    );

    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);
  });
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // Change App
  await Change_App();
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // Change App
  await Change_App();
}

export async function Logout() {
  // logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Get_MNT() {
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
  await util.Record_check(1, test_data.testData.mnt_id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_Exec_Result() {
  // Go to Exec Result record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT_rel() {
  // Go to WebNotif related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_wnt_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MNT_rel() {
  // Go to MailNotif related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_mnt_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MNT() {
  // Go to MNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Switch_App_Tab(app_tab) {
  // Open APP tab
  await util.Application_Record_Scrolling(app_tab);
}
