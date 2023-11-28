var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_20_0010_step_21 from "../Child/Fj_TestScheme_20_0010_step_21.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0010-6: My page defect check (マイページ不備確認)", () => {
    // Login_to_MyPage
    Login_to_MyPage();

    // Execute Fj_TestScheme_20_0010_step_21
    Fj_TestScheme_20_0010_step_21();
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
        if (err) {
          return console.error(err);
        }
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

    // Get VER record where レコードタイプ = ②契約手続き前
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_rectype,
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

    // Record check
    await util.Record_check(1, test_data.testData.ver2_id);

    // Get RDC record where 書類確認 = ②契約手続き前
    // and 書類名 = 資金使途確認資料（多目的）
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name, fj_DocumentName__c")
      .where({
        fj_RefVerification__c: test_data.testData.ver2_id,
        fj_DocumentName__c: test_data.testData.rdc2_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc2_id = record.Id;
          test_data.testData.rdc2_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.rdc2_id);

    // Maximize browser
    await browser.maximizeWindow();

    // Login to MyPage
    // ★ 新環境適用' New Env Implementation
    await util.Login_to_MyPage(
      test_data.testData.mypage_url,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );

    // Go to My Page APP record screen
    await Go_to_APP();
  });
}

export async function Go_to_APP() {
  // Go to My Page APP record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}
