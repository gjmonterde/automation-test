var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0010_step_30 from "../Child/Fj_TestScheme_70_0010_step_30.js";
import Fj_TestScheme_70_0010_step_31 from "../Child/Fj_TestScheme_70_0010_step_31.js";
import Fj_TestScheme_70_0010_step_33 from "../Child/Fj_TestScheme_70_0010_step_33.js";
import Fj_TestScheme_70_0010_step_34 from "../Child/Fj_TestScheme_70_0010_step_34.js";
import Fj_TestScheme_70_0010_step_35 from "../Child/Fj_TestScheme_70_0010_step_35.js";
import Fj_TestScheme_70_0010_step_37 from "../Child/Fj_TestScheme_70_0010_step_37.js";
import Fj_TestScheme_70_0010_step_39 from "../Child/Fj_TestScheme_70_0010_step_39.js";
import Fj_TestScheme_70_0010_step_40 from "../Child/Fj_TestScheme_70_0010_step_40.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0010-13: Document check (書類確認)", () => {
    // Execute login to MyPage
    // NOTE: ALWAYS execute
    Login_to_Salesforce();

    // Execute Fj_TestScheme_70_0010_step_30
    // This fields need to fill-out manually (都道府県 , 市区町村 , 郵便番号１ , 郵便番号２ , ご希望の連絡先 ) before doing the execution
    Fj_TestScheme_70_0010_step_30();

    // Execute Fj_TestScheme_70_0010_step_31
    Fj_TestScheme_70_0010_step_31();

    // Execute Fj_TestScheme_70_0010_step_33
    Fj_TestScheme_70_0010_step_33();

    // Execute Fj_TestScheme_70_0010_step_34
    Fj_TestScheme_70_0010_step_34();

    // Execute Fj_TestScheme_70_0010_step_35
    Fj_TestScheme_70_0010_step_35();

    // Execute Fj_TestScheme_70_0010_step_37
    Fj_TestScheme_70_0010_step_37();

    // Execute Fj_TestScheme_70_0010_step_39
    Fj_TestScheme_70_0010_step_39();

    // Execute Fj_TestScheme_70_0010_step_40
    Fj_TestScheme_70_0010_step_40();
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
      .select("Id, Name, genesis__Account__c, genesis__Account__r.Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__c;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.account_id);

    // Get CNT record
    await conn
      .sobject("FJ_Contracting__c")
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
          test_data.testData.cnt_id = record.Id;
          test_data.testData.cnt_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get VER record
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name":
          test_data.testData.ver_document_confirmation2_rectype, // ②契約手続き前
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ver_id = record.Id;
          test_data.testData.ver_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ver_id);

    test_data.testData.ba_name_arr = []; // ★ 新環境適用' New Env Implementation
    test_data.testData.ba_id_arr = []; // ★ 新環境適用' New Env Implementation
    // Get BA records
    // ★ 新環境適用' New Env Implementation
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_Verification_Status__c: test_data.testData.ba_status_code,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          test_data.testData.ba_name_arr.push(records[i].Name);
          test_data.testData.ba_id_arr.push(records[i].Id);
        }
      });

    if (test_data.testData.logged_status != "uic") {
      // Login to org - tantou1
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(10000);
      test_data.testData.logged_status = "uic";

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
    }
  });
}

export async function Get_BA() {
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

  // Get BA record
  await conn
    .sobject("clcommon__Bank_Account__c")
    .select("Id, Name, fj_IsForPayment__c")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_IsForPayment__c: test_data.testData.isTrue,
    })
    .execute(function (err, records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.ba_name = record.Name;
        test_data.testData.ba_id = record.Id;
        continue;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.ba_id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_App(type) {
  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  switch (type) {
    case 3:
      // Go to 告知画面 tab
      await util.Application_Record_Scrolling(3);
      break;
    case 4:
      // Go to 実行画面 tab
      await util.Application_Record_Scrolling(4);
      break;
  }
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_BA(id) {
  // Go to BA Record
  await util.Open_SF_Record_URL(1, user_info.object.ba_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_VER() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver_id
  );

  // Scroll to RDC related list
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}
