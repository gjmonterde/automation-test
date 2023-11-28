var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_00_0003_step_01 from "../Child/Fj_TestScheme_00_0003_step_01.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0003-1: My page initial process check (マイページ初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0003_step_01
    Fj_TestScheme_00_0003_step_01();
  });
}

async function Query_Salesforce_Records() {
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
      .select("Id, Name, genesis__CL_Product_Name__c")
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
          test_data.testData.pro_name = record.genesis__CL_Product_Name__c;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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
    // ★ 新環境適用' New Env Implementation
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      uname,
      pword
    );
  });
}
