var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_70_0011_step_93 from "../Child/Fj_TestScheme_70_0011_step_93";
import Fj_TestScheme_70_0011_step_94 from "../Child/Fj_TestScheme_70_0011_step_94";

export default async function suite() {
  describe("Fj_TestScheme_70_0011-17.11: Complete condition check (After re-condition check) (条件確認完了(再条件確認後))", () => {
    // Login to Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_70_0011_step_93
    Fj_TestScheme_70_0011_step_93();

    // Execute Fj_TestScheme_70_0011_step_94
    Fj_TestScheme_70_0011_step_94();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
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
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get BA record
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_IsForTransfer__c: test_data.testData.isTrue,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ba_name = record.Name;
          test_data.testData.ba_id = record.Id;
          break;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ba_id);

    if (test_data.testData.logged_status != "uic") {
      // Login to org - tantou1
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(10000);
      test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
    }
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  await util.Application_Record_Scrolling(2);
}
