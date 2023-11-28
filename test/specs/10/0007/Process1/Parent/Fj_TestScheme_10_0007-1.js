var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0007_step_01 from "../Child/Fj_TestScheme_10_0007_step_01";
import Fj_TestScheme_10_0007_step_02 from "../Child/Fj_TestScheme_10_0007_step_02";
import Fj_TestScheme_10_0007_step_03 from "../Child/Fj_TestScheme_10_0007_step_03";
import Fj_TestScheme_10_0007_step_04 from "../Child/Fj_TestScheme_10_0007_step_04";
import Fj_TestScheme_10_0007_step_05 from "../Child/Fj_TestScheme_10_0007_step_05";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0007-1: Initial Process check (初期処理確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Login as Tantou1
    Login_As_Tantou1();

    // Execute Fj_TestScheme_10_0007_step_01
    Fj_TestScheme_10_0007_step_01();

    // Execute Fj_TestScheme_10_0007_step_02
    Fj_TestScheme_10_0007_step_02();

    // Login as Tantou1
    Login_As_Tantou1();

    // Execute Fj_TestScheme_10_0007_step_03
    Fj_TestScheme_10_0007_step_03();

    // Execute Fj_TestScheme_10_0007_step_04
    Fj_TestScheme_10_0007_step_04();

    // Execute Fj_TestScheme_10_0007_step_05
    Fj_TestScheme_10_0007_step_05();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
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

    // Get APP record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name, fj_Guarantee_Company__c")
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
          test_data.testData.guarantee_company = record.fj_Guarantee_Company__c;
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
      .select("Id, Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.gud_id1 = record.Id;
          test_data.testData.gud_name1 = record.Name;
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

    // Get [PC] record ID
    await conn
      .sobject("FJ_ProductCodeMaster__c")
      .select("Id, Name, fj_RefCLProduct__c, fj_Guarantee_Company__c")
      .where({
        fj_RefCLProduct__c: test_data.testData.clProd_id,
        fj_Guarantee_Company__c: test_data.testData.guarantee_company,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.pro_code_id = record.Id;
        }
      });
  });
}

async function Login_As_Tantou1() {
  it("Login as tantou1 user", async () => {
    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
