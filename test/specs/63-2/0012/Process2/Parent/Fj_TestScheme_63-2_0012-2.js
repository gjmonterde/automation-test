var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0012_step_39 from "../Child/Fj_TestScheme_63-2_0012_step_39.js";
import Fj_TestScheme_63_2_0012_step_41 from "../Child/Fj_TestScheme_63-2_0012_step_41.js";
import Fj_TestScheme_63_2_0012_step_42 from "../Child/Fj_TestScheme_63-2_0012_step_42.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0012-2: Execution Result Check (実行結果確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Login as tantou1
    Login_As_Tantou1();

    // Execute Fj_TestScheme_63-2_0012_step_39
    Fj_TestScheme_63_2_0012_step_39();

    // Login as tantou1
    Login_As_Tantou1();

    // Execute Fj_TestScheme_63-2_0012_step_41
    Fj_TestScheme_63_2_0012_step_41();

    // Execute Fj_TestScheme_63-2_0012_step_42
    Fj_TestScheme_63_2_0012_step_42();
  });
}

async function Login_To_Salesforce() {
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
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });
  });
}

export async function Open_Record_URL(url_type, object, id, object_r) {
  switch (url_type) {
    case 1:
      // Open URL record
      await util.Open_SF_Record_URL(1, object, id);
      break;

    case 2:
      // Open URL record related list
      await util.Open_SF_Record_URL(2, object, id, object_r);
      break;
  }
}

async function Login_As_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_As_Admin() {
  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

export async function Get_WNT_MNT_Records() {
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

  // Get WNT record
  await conn
    .sobject("FJ_WebNotification__c")
    .select("Id, Name, CreatedDate")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_WebNotificationType__c: test_data.testData.wnt8_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.wnt8_id = record.Id;
        test_data.testData.wnt8_name = record.Name;
        test_data.testData.mail_time = record.CreatedDate;
      }
    });

  // Get MNT record
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_MailNotificationType__c: test_data.testData.mnt8_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.mnt8_id = record.Id;
        test_data.testData.mnt8_name = record.Name;
      }
    });
}
