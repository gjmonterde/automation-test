var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import Fj_TestScheme_63_1_0011_step_110 from "../Child/Fj_TestScheme_63-1_0011_step_110.js";
import Fj_TestScheme_63_1_0011_step_111 from "../Child/Fj_TestScheme_63-1_0011_step_111.js";
import Fj_TestScheme_63_1_0011_step_112 from "../Child/Fj_TestScheme_63-1_0011_step_112.js";
import Fj_TestScheme_63_1_0011_step_113 from "../Child/Fj_TestScheme_63-1_0011_step_113.js";
import Fj_TestScheme_63_1_0011_step_115 from "../Child/Fj_TestScheme_63-1_0011_step_115.js";
import Fj_TestScheme_63_1_0011_step_116 from "../Child/Fj_TestScheme_63-1_0011_step_116.js";
import Fj_TestScheme_63_1_0011_step_117 from "../Child/Fj_TestScheme_63-1_0011_step_117.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0011-25: My page re-condition check (Before Final Approval) (マイページ再条件確認(最終承認前))", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // // Execute Fj_TestScheme_63-1_0011_step_110
    Fj_TestScheme_63_1_0011_step_110();

    // Login MyPage
    // Comment out if step_110 is the only step needed to be executed
    Login_MyPage();

    // Execute Fj_TestScheme_63-1_0011_step_111
    Fj_TestScheme_63_1_0011_step_111();

    // // Execute Fj_TestScheme_63-1_0011_step_112
    Fj_TestScheme_63_1_0011_step_112();

    // Execute Fj_TestScheme_63-1_0011_step_113
    Fj_TestScheme_63_1_0011_step_113();

    // Execute Fj_TestScheme_63-1_0011_step_115
    Fj_TestScheme_63_1_0011_step_115();

    // Execute Fj_TestScheme_63-1_0011_step_116
    // ***NOTE: date format will be affected by client locale settings***
    // Please check the mypage_loan_date_value_final in test_info before executing step_116
    Fj_TestScheme_63_1_0011_step_116();

    // Execute Fj_TestScheme_63-1_0011_step_117
    Fj_TestScheme_63_1_0011_step_117();
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

    // Get WNT record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_WebNotificationType__c: test_data.testData.wnt7_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.wnt1_id = record.Id;
          test_data.testData.wnt1_name = record.Name;
        }
      });

    // Get MNT record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_MailNotificationType__c: test_data.testData.mnt7_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.mnt1_id = record.Id;
          test_data.testData.mnt1_name = record.Name;
          test_data.testData.mail_time = record.CreatedDate;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_MyPage() {
  it("Login to MyPage", async () => {
    // Login to MyPage
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    await browser.pause(10000);
  });
}
