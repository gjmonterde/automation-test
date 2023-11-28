var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0011_step_13 from "../Child/Fj_TestScheme_00_0011_step_13.js";
import Fj_TestScheme_00_0011_step_14 from "../Child/Fj_TestScheme_00_0011_step_14.js";
import Fj_TestScheme_00_0011_step_15 from "../Child/Fj_TestScheme_00_0011_step_15.js";
import Fj_TestScheme_00_0011_step_16 from "../Child/Fj_TestScheme_00_0011_step_16.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-4: Confirm payee's account (振込先口座登録)", () => {
    // Execute Fetch data
    Fetch_data();

    // Execute Fj_TestScheme_00_0011_step_13
    Fj_TestScheme_00_0011_step_13();

    // Execute Fj_TestScheme_00_0011_step_14
    Fj_TestScheme_00_0011_step_14();

    // Execute Fj_TestScheme_00_0011_step_15
    Fj_TestScheme_00_0011_step_15();

    // Execute Fj_TestScheme_00_0011_step_16
    Fj_TestScheme_00_0011_step_16();
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
    // Get APP record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name,genesis__Account__c, genesis__Account__r.Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__r.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.account_id);

    // BA created from MyPage
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
  });
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation

  test_data.testData.logged_status = "uic";
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-Recycle bin
  await util.App_Launcher(test_data.testData.recycle_bin_app); // ★ 新環境適用' New Env Implementation
  test_data.testData.logged_status = "admin";
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(5000);
}

export async function Get_BankAccount_CL() {
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
  // Bank Account
  await conn
    .sobject("clcommon__Bank_Account__c")
    .select("Id, Name, fj_IsForTransfer__c,fj_BankAccountName__c")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_IsForTransfer__c: test_data.testData.isTrue,
      fj_BankAccountName__c: test_data.testData.ba_recipient_name_val,
    })
    .execute(function (err, records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.ba2_name = record.Name;
        test_data.testData.ba2_id = record.Id;
        break;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.ba2_id);
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

// ★ 新環境適用' New Env Implementation
export async function Go_to_BA(id) {
  // Go to BA record screen
  await util.Open_SF_Record_URL(1, user_info.object.ba_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_BA_Rel() {
  // Go to BA related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_ba_rel
  );
}
