var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0011_step_104 from "../Child/Fj_TestScheme_62_0011_step_104.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0011-21: Final Approval (最終承認)", () => {
    // Execute login to salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_62_0011_step_104
    Fj_TestScheme_62_0011_step_104();
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

    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get AGR record
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.contract_agreement_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.agr_name = record.Name;
          test_data.testData.agr_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.agr_id);

    if (test_data.testData.logged_status != "shinsa") {
      // Login to org - shinsa1
      await LoginPage.open();
      await LoginPage.login_as_auditor();
      await browser.pause(10000);
      test_data.testData.logged_status = "shinsa";

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
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

  // Go to 実行画面 tab
  await util.Application_Record_Scrolling(4);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_AGR() {
  // Go to AGR record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.agr_obj,
    test_data.testData.agr_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CNT() {
  // Go to CNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );

  // Scroll to ASC related list
  await util.Scroll_to_related_list(test_data.testData.asc_header);
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
