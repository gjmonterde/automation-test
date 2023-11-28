var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import Fj_TestScheme_63_1_0012_step_43 from "../Child/Fj_TestScheme_63-1_0012_step_43.js";
import Fj_TestScheme_63_1_0012_step_44 from "../Child/Fj_TestScheme_63-1_0012_step_44.js";
import Fj_TestScheme_63_1_0012_step_45 from "../Child/Fj_TestScheme_63-1_0012_step_45.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0012-3: My page execution result check (マイページ実行結果確認) and Execution Result Check (実行結果確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_63-1_0012_step_43
    Fj_TestScheme_63_1_0012_step_43();

    // Execute Fj_TestScheme_63-1_0012_step_44
    Fj_TestScheme_63_1_0012_step_44();

    // Execute Fj_TestScheme_63-1_0012_step_45
    Fj_TestScheme_63_1_0012_step_45();
  });
}

async function Login_To_Salesforce() {
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

    // Get WNT record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name, CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_WebNotificationType__c: test_data.testData.wnt11_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.wnt1_id = record.Id;
          test_data.testData.wnt1_name = record.Name;
          test_data.testData.mail_time = record.CreatedDate;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_MyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    user_info.userInformation.var_sf_mypage_loginurl,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
  test_data.testData.logged_status = "mypage";
  await browser.pause(10000);
}
