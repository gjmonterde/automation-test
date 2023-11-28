var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_60_0001_step_05 from "../Child/Fj_TestScheme_60_0001_step_05.js";
import Fj_TestScheme_60_0001_step_06 from "../Child/Fj_TestScheme_60_0001_step_06.js";
import Fj_TestScheme_60_0001_step_07 from "../Child/Fj_TestScheme_60_0001_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Open Application form
    Open_ApplicationForm();

    // Execute Fj_TestScheme_60_0001_step_05
    Fj_TestScheme_60_0001_step_05();

    // Execute Open Application form
    Open_ApplicationForm();

    // Execute Fj_TestScheme_60_0001_step_06
    Fj_TestScheme_60_0001_step_06();

    // Execute before step 7
    Fetch_Data();

    // Execute Open Application form
    // NOTE: Execute again if executing steps after step 07
    Open_ApplicationForm();

    // Execute Fj_TestScheme_60_0001_step_07/11/12/15/16/20/21 - Application Record Creation
    Fj_TestScheme_60_0001_step_07();
  });
}

async function Open_ApplicationForm() {
  it("Open application form", async () => {
    // Maximize browser
    await browser.maximizeWindow();

    // Go to Loan 60 application page
    await browser.url(test_data.testData.httpurl01);
    await browser.pause(5000);

    // Remove header
    await util.Remove_header(2);
  });
}

async function Fetch_Data() {
  it("Fetch Data", async () => {
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

    // Get Account record
    await conn
      .sobject("Account")
      .select("Id, Name")
      .where({
        fj_YearOfBirth__c: test_data.testData.birth_year,
        fj_MonthOfBirth__c: test_data.testData.birth_month,
        fj_DayOfBirth__c: test_data.testData.birth_day,
        clcommon__Email__c:
          user_info.userInformation.var_sf_comminuty_loginuser,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.account_name = record.Name;
          test_data.testData.account_id = record.Id;
        }
      });
  });
}

export async function Remove_Header_App() {
  await util.Remove_header(1);
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
