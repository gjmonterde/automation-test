var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0010_step_30 from "../Child/Fj_TestScheme_62_0010_step_30.js";
import Fj_TestScheme_62_0010_step_31 from "../Child/Fj_TestScheme_62_0010_step_31.js";
import Fj_TestScheme_62_0010_step_33 from "../Child/Fj_TestScheme_62_0010_step_33.js";
import Fj_TestScheme_62_0010_step_35 from "../Child/Fj_TestScheme_62_0010_step_35.js";
import Fj_TestScheme_62_0010_step_37 from "../Child/Fj_TestScheme_62_0010_step_37.js";
import Fj_TestScheme_62_0010_step_38 from "../Child/Fj_TestScheme_62_0010_step_38.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0010-13: Document check (書類確認)", () => {
    // Login_to_Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_62_0010_step_30
    Fj_TestScheme_62_0010_step_30();

    // Execute Fj_TestScheme_62_0010_step_31
    Fj_TestScheme_62_0010_step_31();

    // Execute Fj_TestScheme_62_0010_step_33
    Fj_TestScheme_62_0010_step_33();

    // Execute Fj_TestScheme_62_0010_step_35
    Fj_TestScheme_62_0010_step_35();

    // Execute Fj_TestScheme_62_0010_step_37
    Fj_TestScheme_62_0010_step_37();

    // Execute Fj_TestScheme_62_0010_step_38
    Fj_TestScheme_62_0010_step_38();
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

    // Get VER record
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name":
          test_data.testData.ver_document_confirmation2_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // ②契約手続き前
          test_data.testData.ver_id = record.Id;
          test_data.testData.ver_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ver_id);

    // Get BA records
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
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
export async function Go_to_VER() {
  // Go to VER record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver_id
  );

  // Scroll into view RDC related list
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_BA(id) {
  // Go to BA record screen
  await util.Open_SF_Record_URL(1, user_info.object.ba_obj, id);
}
