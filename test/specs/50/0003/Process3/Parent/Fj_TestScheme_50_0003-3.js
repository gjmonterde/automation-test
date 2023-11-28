var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_50_0003_step_07 from "../Child/Fj_TestScheme_50_0003_step_07";

export default async function suite() {
  describe("Fj_TestScheme_50_0003-3: Transaction Inquiry result check  (取引照会有無結果確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_50_0003_step_07
    Fj_TestScheme_50_0003_step_07();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
    // Jsforce connection
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

    // Get EXM name and record ID
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });

    // Get DDP record ID
    await conn
      .sobject("FJ_NameDeduplication__c")
      .select("Id")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        fj_NameDeduplication_Status__c: test_data.testData.ddp_status,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ddp_id2 = record.Id;
        }
      });

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
