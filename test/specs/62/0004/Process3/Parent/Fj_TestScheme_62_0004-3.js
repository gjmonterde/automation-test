var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_62_0004_step_14 from "../Child/Fj_TestScheme_62_0004_step_14";
import Fj_TestScheme_62_0004_step_15_data from "../Child/Fj_TestScheme_62_0004_step_15_data";
import Fj_TestScheme_62_0004_step_15 from "../Child/Fj_TestScheme_62_0004_step_15";
import Fj_TestScheme_62_0004_step_17 from "../Child/Fj_TestScheme_62_0004_step_17";
import Fj_TestScheme_62_0004_step_33 from "../Child/Fj_TestScheme_62_0004_step_33";
import Fj_TestScheme_62_0004_step_34 from "../Child/Fj_TestScheme_62_0004_step_34";

export default async function suite() {
  describe(
    "Fj_TestScheme_62_0004-3: Credit card information check (クレジットカード情報確認) and " +
      "External form check result confirmation (外形チェック結果確認)",
    () => {
      // Fetch data
      // NOTE: ALWAYS execute before steps
      Fetch_data();

      // Execute Fj_TestScheme_62_0004_step_14
      Fj_TestScheme_62_0004_step_14();

      // NOTE: If external linkage is not available, execute this script to update data.
      //       Else, comment out this line.
      Fj_TestScheme_62_0004_step_15_data();

      // Execute Fj_TestScheme_62_0004_step_15
      Fj_TestScheme_62_0004_step_15();

      // Execute Fj_TestScheme_62_0004_step_17
      Fj_TestScheme_62_0004_step_17();

      // Execute Fj_TestScheme_62_0004_step_33
      Fj_TestScheme_62_0004_step_33();

      // Execute Fj_TestScheme_62_0004_step_34
      Fj_TestScheme_62_0004_step_34();
    }
  );
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

    // Get INI 3 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini_id = record.Id;
          test_data.testData.ini_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id);
  });
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // Change Application
  await Change_App();
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // Change Application
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_INI() {
  // Go to INI Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini_id
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
}
