var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_60_0010_step_04 from "../Child/Fj_TestScheme_60_0010_step_04.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0010-2: My page upload (マイページアップロード )", () => {
    // Login_to_MyPage
    Login_to_MyPage();

    // Execute Fj_TestScheme_60_0010_step_04
    Fj_TestScheme_60_0010_step_04();
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

    // Get VER record where レコードタイプ = ②契約手続き前
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_record_type,
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
    test_data.testData.rdc_name_arr = [];
    test_data.testData.rdc_id_arr = [];

    // Get RDC records
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefVerification__c: test_data.testData.ver2_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          test_data.testData.rdc_name_arr.push(records[i].Name);
          test_data.testData.rdc_id_arr.push(records[i].Id);
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Go to MyPage
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );

    // Go to My Page All App Loan List
    await browser.url(
      user_info.userInformation.var_sf_siteurl + "/s/application-all"
    );
    await browser.pause(10000);
  });
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
