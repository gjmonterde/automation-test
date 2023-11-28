var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0003_step_13 from "../Child/Fj_TestScheme_62_0003_step_13.js";
import Fj_TestScheme_62_0003_step_18 from "../Child/Fj_TestScheme_62_0003_step_18.js";
import Fj_TestScheme_62_0003_step_13_data from "../Child/Fj_TestScheme_62_0003_step_13_data.js";
import Fj_TestScheme_62_0003_step_18_data from "../Child/Fj_TestScheme_62_0003_step_18_data.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_62_0003_step_13_data();

    // Execute Fj_TestScheme_62_0003_step_13
    Fj_TestScheme_62_0003_step_13();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_62_0003_step_18_data();

    // Execute Fj_TestScheme_62_0003_step_18
    Fj_TestScheme_62_0003_step_18();
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
    await util.Record_check(1, test_data.testData.exm_id);

    // Get DDP record
    await conn
      .sobject("FJ_NameDeduplication__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        "RecordType.Name": test_data.testData.ddp_cifline_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ddp_name = record.Name;
          test_data.testData.ddp_id = record.Id;
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

  // Change Application
  await Change_App();
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // Change Application
  await Change_App();
}

export async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(2000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_DDP() {
  // Go to DDP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id
  );
}
