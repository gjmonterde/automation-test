var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0006_step_33 from "../Child/Fj_TestScheme_70_0006_step_33.js";
import Fj_TestScheme_70_0006_step_35 from "../Child/Fj_TestScheme_70_0006_step_35.js";
import Fj_TestScheme_70_0006_step_39 from "../Child/Fj_TestScheme_70_0006_step_39.js";
import Fj_TestScheme_70_0006_step_40 from "../Child/Fj_TestScheme_70_0006_step_40.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0006-7: Examination Approval Confirmation (審査決裁確定)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute
    Fetch_data();

    // Execute Fj_TestScheme_70_0006_step_33
    Fj_TestScheme_70_0006_step_33();

    // Execute Fj_TestScheme_70_0006_step_35
    Fj_TestScheme_70_0006_step_35();

    // Execute Fj_TestScheme_70_0006_step_39
    Fj_TestScheme_70_0006_step_39();

    // Execute Fj_TestScheme_70_0006_step_40
    Fj_TestScheme_70_0006_step_40();
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

    // Login to org - shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);
    test_data.testData.logged_status = "auditor";

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_EXS() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_APP() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 告知画面 tab
  await util.Application_Record_Scrolling(3);
}
