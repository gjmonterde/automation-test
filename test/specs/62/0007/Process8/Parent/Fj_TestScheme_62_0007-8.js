var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0007_step_28 from "../Child/Fj_TestScheme_62_0007_step_28.js";
import Fj_TestScheme_62_0007_step_31 from "../Child/Fj_TestScheme_62_0007_step_31.js";
import Fj_TestScheme_62_0007_step_34 from "../Child/Fj_TestScheme_62_0007_step_34.js";
import Fj_TestScheme_62_0007_step_35 from "../Child/Fj_TestScheme_62_0007_step_35.js";

export default async function suite() {
  describe(
    "Fj_TestScheme_62_0007-8: Warranty Examination③Complete (保証審査③完了) and" +
      "Final Warranty Examination Check (最終保証審査確認)",
    () => {
      // Execute Login to Salesforce
      // NOTE: ALWAYS execute before steps
      Login_to_Salesforce();

      // Execute Fj_TestScheme_62_0007_step_28
      Fj_TestScheme_62_0007_step_28();

      // Execute Fj_TestScheme_62_0007_step_31
      Fj_TestScheme_62_0007_step_31();

      // Execute Fj_TestScheme_62_0007_step_34
      Fj_TestScheme_62_0007_step_34();

      // Execute Fj_TestScheme_62_0007_step_35
      Fj_TestScheme_62_0007_step_35();
    }
  );
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

    // Get GUA record
    await conn
      .sobject("FJ_GuaranteeChk__c")
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
          test_data.testData.gua_id = record.Id;
          test_data.testData.gua_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Get GUD record
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
        "RecordType.Name": test_data.testData.gud3_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // 保証審査③
          test_data.testData.gud_id = record.Id;
          test_data.testData.gud_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.gud_id);

    if (test_data.testData.logged_status != "uic") {
      // Login to org - tantou1
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(10000);
      test_data.testData.logged_status = "uic";

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_GUA() {
  // Go to GUA record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
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
