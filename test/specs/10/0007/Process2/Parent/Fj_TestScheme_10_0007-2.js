var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0007_step_06 from "../Child/Fj_TestScheme_10_0007_step_06";
import Fj_TestScheme_10_0007_step_09 from "../Child/Fj_TestScheme_10_0007_step_09";
import Fj_TestScheme_10_0007_step_10 from "../Child/Fj_TestScheme_10_0007_step_10";
import Fj_TestScheme_10_0007_step_29 from "../Child/Fj_TestScheme_10_0007_step_29";
import Fj_TestScheme_10_0007_step_34 from "../Child/Fj_TestScheme_10_0007_step_34";
import Fj_TestScheme_10_0007_step_35 from "../Child/Fj_TestScheme_10_0007_step_35";
import Fj_TestScheme_10_0007_step_06_data from "../Child/Fj_TestScheme_10_0007_step_06_data";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0007-2: Warranty Examination① Result Check (保証審査①結果確認) and Final Warranty Examination Check (最終保証審査確認)", () => {
    //Query Salesforce Records
    Query_Salesforce_Records();

    /* if external linkage is not available, execute Fj_TestScheme_10_0004_step_08_data 
    to create/update data. if else, comment out this line. */
    Fj_TestScheme_10_0007_step_06_data();

    // Execute Fj_TestScheme_10_0007_step_06
    Fj_TestScheme_10_0007_step_06();

    // Execute Fj_TestScheme_10_0007_step_09
    Fj_TestScheme_10_0007_step_09();

    // Execute Fj_TestScheme_10_0007_step_10
    Fj_TestScheme_10_0007_step_10();

    // Execute Fj_TestScheme_10_0007_step_29
    Fj_TestScheme_10_0007_step_29();

    // Execute Fj_TestScheme_10_0007_step_34
    Fj_TestScheme_10_0007_step_34();

    // Execute Fj_TestScheme_10_0007_step_35
    Fj_TestScheme_10_0007_step_35();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce Records", async () => {
    //JSForce connection
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

    // Get Loan Amount and Term
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name, genesis__Loan_Amount__c, genesis__Term__c")
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
          test_data.testData.approved_amount = record.genesis__Loan_Amount__c;
          test_data.testData.loan_amount_term = record.genesis__Term__c;
        }
      });

    // Get GUA record ID and name
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

    // Get GUD record ID and name
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // ★ 新環境適用' New Env Implementation
          if (test_data.testData.gud_record_type === record.RecordType.Name) {
            for (var i = 0; i < records.length; i++) {
              test_data.testData.gud_id1 = record.Id;
              test_data.testData.gud_name1 = record.Name;
            }
          }
        }
      });

    // Get CL商品 record ID
    await conn
      .sobject("clcommon__CL_Product__c")
      .select("Id, Name")
      .where({
        clcommon__Product_Name__c: test_data.testData.clProd_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.clProd_id = record.Id;
        }
      });
  });
}

export async function Login_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);

  // Change App
  await Change_App();
}

export async function Login_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
