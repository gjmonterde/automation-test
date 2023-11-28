var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0003_step_13_data from "../Child/Fj_TestScheme_10_0003_step_13_data.js";
import Fj_TestScheme_10_0003_step_13 from "../Child/Fj_TestScheme_10_0003_step_13.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Execute fetch data
    Fetch_data();

    /**
     * NOTE: If external linkage is not available, execute this script to update data.
     *       Else, comment out this line.
     */
    Fj_TestScheme_10_0003_step_13_data();

    // Execute Fj_TestScheme_10_0003_step_13
    Fj_TestScheme_10_0003_step_13();
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

    // Application
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

    // Examination
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_name = record.Name;
          test_data.testData.exm_id = record.Id;
        }
      });

    // FJ_NameDeduplication__c
    await conn
      .sobject("FJ_NameDeduplication__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // ★ 新環境適用' New Env Implementation
          if (test_data.testData.cif_record_type === record.RecordType.Name) {
            test_data.testData.ddp_name = record.Name;
            test_data.testData.ddp_id = record.Id;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // Change App
  await Change_App();
}

export async function Login_as_Tantou1() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // Change App
  await Change_App();
}
