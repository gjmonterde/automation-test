var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
import Fj_TestScheme_00_0010_step_23 from "../Child/Fj_TestScheme_00_0010_step_23.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0010-9: Check my page document adding (マイページ書類追加確認)", () => {
    // Login_to_MyPage
    Login_to_MyPage();

    // Execute Fj_TestScheme_00_0010_step_23
    Fj_TestScheme_00_0010_step_23();
  });
}

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
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

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get VER record where レコードタイプ = 書類確認②（その他確認書類）
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_record_type, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ver2_id = record.Id;
          test_data.testData.ver2_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ver2_id);

    // Get RDC record where 書類確認 = 書類確認②（その他確認書類）
    // and 書類カテゴリ = その他
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name, fj_DocumentName__c")
      .where({
        fj_RefVerification__c: test_data.testData.ver2_id,
        fj_DocumentName__c: test_data.testData.rdc3_rectype, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc3_id_of_ver2 = record.Id;
          test_data.testData.rdc3_name_of_ver2 = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.rdc3_id_of_ver2);

    // Maximize browser
    await browser.maximizeWindow();

    var uname, pword;
    if (test_data.testData.user_status == 0) {
      // if existing user
      uname = user_info.userInformation.var_sf_comminuty_loginuser;
      pword = user_info.userInformation.var_sf_comminuty_loginpwd;
    } else if (test_data.testData.user_status == 1) {
      // if new user
      uname = user_info.userInformation.var_sf_comminuty_loginuser2;
      pword = user_info.userInformation.var_sf_comminuty_loginpwd2;
    }

    // Login to My Page
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      uname,
      pword
    );
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_RDC() {
  // Go to My Page RDC record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/required-document-detail?id=" +
      test_data.testData.rdc3_id_of_ver2
  );
  await browser.pause(5000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to My Page APP record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}
