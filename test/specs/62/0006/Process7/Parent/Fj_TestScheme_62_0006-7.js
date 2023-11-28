var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_62_0006_step_33 from "../Child/Fj_TestScheme_62_0006_step_33";
import Fj_TestScheme_62_0006_step_36 from "../Child/Fj_TestScheme_62_0006_step_36";
import Fj_TestScheme_62_0006_step_38 from "../Child/Fj_TestScheme_62_0006_step_38";
import Fj_TestScheme_62_0006_step_40 from "../Child/Fj_TestScheme_62_0006_step_40";

export default async function suite() {
  describe("Fj_TestScheme_62_0006-7: Examination Approval Confirmation (審査決裁確定)", () => {
    // Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_62_0006_step_33
    Fj_TestScheme_62_0006_step_33();

    // Execute Fj_TestScheme_62_0006_step_36
    Fj_TestScheme_62_0006_step_36();

    // Execute Fj_TestScheme_62_0006_step_38
    Fj_TestScheme_62_0006_step_38();

    // Execute Fj_TestScheme_62_0006_step_40
    Fj_TestScheme_62_0006_step_40();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
    let csv_record_no = eval(
      "test_data.testData.csv_value" +
        test_data.testData.record_no +
        "_systemacceptno"
    );
    // Get APP Record
    await conn
      .sobject("FJ_MuCooperationApp__c")
      .select(
        "Id, Name, fj_System_Acception_No__c, fj_RefApplication__c, fj_RefApplication__r.Name," +
          "fj_RefApplication__r.genesis__CL_Product__c, fj_RefApplication__r.genesis__CL_Product__r.Name"
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
          test_data.testData.pro_id =
            record.fj_RefApplication__r.genesis__CL_Product__c;
          test_data.testData.pro_name =
            record.fj_RefApplication__r.genesis__CL_Product__r.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.pro_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.exs_id);
  });
}

export async function Login_as_shinsa() {
  // Login to org - shinsa1
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(7000);
  test_data.testData.logged_status = "shinsa";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(7000);
  test_data.testData.logged_status = "admin";
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(2000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_EXS() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 告知画面 tab
  await util.Application_Record_Scrolling(3);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_PRO() {
  // Go to PRO record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pro_obj,
    test_data.testData.pro_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_PRO_Rellist() {
  // Go to PRO record related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.pro_obj,
    test_data.testData.pro_id,
    user_info.object.pro_cardloaninterest_rel
  );
}
