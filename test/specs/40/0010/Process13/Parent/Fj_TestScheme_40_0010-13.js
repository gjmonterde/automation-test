var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0010_step_30 from "../Child/Fj_TestScheme_40_0010_step_30.js";
import Fj_TestScheme_40_0010_step_32 from "../Child/Fj_TestScheme_40_0010_step_32.js";
import Fj_TestScheme_40_0010_step_33 from "../Child/Fj_TestScheme_40_0010_step_33.js";
import Fj_TestScheme_40_0010_step_34 from "../Child/Fj_TestScheme_40_0010_step_34.js";
import Fj_TestScheme_40_0010_step_36 from "../Child/Fj_TestScheme_40_0010_step_36.js";
import Fj_TestScheme_40_0010_step_37 from "../Child/Fj_TestScheme_40_0010_step_37.js";
import Fj_TestScheme_40_0010_step_38 from "../Child/Fj_TestScheme_40_0010_step_38.js";
import Fj_TestScheme_40_0010_step_39 from "../Child/Fj_TestScheme_40_0010_step_39.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0010-13: Document check (書類確認)", () => {
    // Login_to_Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0010_step_30
    Fj_TestScheme_40_0010_step_30();

    // Execute Fj_TestScheme_40_0010_step_32
    Fj_TestScheme_40_0010_step_32();

    // Execute Fj_TestScheme_40_0010_step_33
    // Need to fill-out manually the fields (都道府県, 市区町村, 郵便番号１, 郵便番号２, ご希望の連絡先) in 申込内容 tab APP Record
    Fj_TestScheme_40_0010_step_33();

    // Execute Fj_TestScheme_40_0010_step_34
    Fj_TestScheme_40_0010_step_34();

    // Execute Fj_TestScheme_40_0010_step_36
    Fj_TestScheme_40_0010_step_36();

    // Execute Fj_TestScheme_40_0010_step_37
    Fj_TestScheme_40_0010_step_37();

    // Execute Fj_TestScheme_40_0010_step_38
    Fj_TestScheme_40_0010_step_38();

    // Execute Fj_TestScheme_40_0010_step_39
    Fj_TestScheme_40_0010_step_39();
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
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.ver_document_confirmation2_rectype ===
            record.RecordType.Name
          ) {
            // ②契約手続き前
            test_data.testData.ver_id = record.Id;
            test_data.testData.ver_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ver_id);

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
          break;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ba_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_VER() {
  // Go to VER record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ver_obj,
    test_data.testData.ver_id
  );

  // Scroll to RDC
  await util.Scroll_to_related_list(test_data.testData.rdc_header);
}
