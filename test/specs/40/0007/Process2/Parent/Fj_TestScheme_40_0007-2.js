var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_40_0007_step_07 from "../Child/Fj_TestScheme_40_0007_step_07";
import Fj_TestScheme_40_0007_step_09 from "../Child/Fj_TestScheme_40_0007_step_09";
import Fj_TestScheme_40_0007_step_12 from "../Child/Fj_TestScheme_40_0007_step_12";
import Fj_TestScheme_40_0007_step_07_data from "../Child/Fj_TestScheme_40_0007_step_07_data";

export default async function suite() {
  describe("Fj_TestScheme_40_0007-2: Warranty Examination① Result Check (保証審査①結果確認)", () => {
    // Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_40_0007_step_07_data();

    // Login to Salesforce as user in charge
    // NOTE: Execute before steps (except step 7 data)
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0007_step_07
    Fj_TestScheme_40_0007_step_07();

    // Execute Fj_TestScheme_40_0007_step_09
    Fj_TestScheme_40_0007_step_09();

    // Execute Fj_TestScheme_40_0007_step_12
    Fj_TestScheme_40_0007_step_12();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
      .select("Id, Name, genesis__Loan_Amount__c")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.gud_guarantee_amount_value =
            record.genesis__Loan_Amount__c;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get GUA record
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

    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Get GUD record
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
          if (record.RecordType.Name === test_data.testData.gud1_rectype) {
            // 保証審査①
            test_data.testData.gud_id = record.Id;
            test_data.testData.gud_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.gua_id);
  });
}
async function Login_as_tantou() {
  it("Login to Salesforce as User in charge", async () => {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // Change Application
    await Change_App();
  });
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // Change Application
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
