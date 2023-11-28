var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../../pageobjects/login.page";
import Fj_TestScheme_00_0001_step_01 from "../Child/Fj_TestScheme_00_0001_step_01.js";
import Fj_TestScheme_00_0001_step_02 from "../Child/Fj_TestScheme_00_0001_step_02.js";
import Fj_TestScheme_00_0001_step_03 from "../Child/Fj_TestScheme_00_0001_step_03.js";
import Fj_TestScheme_00_0001_step_04 from "../Child/Fj_TestScheme_00_0001_step_04.js";
import Fj_TestScheme_00_0001_step_05 from "../Child/Fj_TestScheme_00_0001_step_05.js";
import Fj_TestScheme_00_0001_step_06 from "../Child/Fj_TestScheme_00_0001_step_06.js";
import Fj_TestScheme_00_0001_step_07 from "../Child/Fj_TestScheme_00_0001_step_07.js";
import Fj_TestScheme_00_0001_step_08 from "../Child/Fj_TestScheme_00_0001_step_08.js";
import Fj_TestScheme_00_0001_step_05_data from "../Child/Fj_TestScheme_00_0001_step_05_data.js";

export default async function suite() {
  describe("Fj_TestScheme_00-1_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Open Authentication Form
    // Comment out if all/one step_05_data, step_05, step_06, step_08 are needed to be executed
    // Only for step_01, step_02, step_03
    Open_Authentication_Form();

    //**WITH ACCOUNT AUTHENTICATION, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_01
    Fj_TestScheme_00_0001_step_01();

    // Execute Fj_TestScheme_00_0001_step_02
    Fj_TestScheme_00_0001_step_02();

    // Execute Fj_TestScheme_00_0001_step_03
    Fj_TestScheme_00_0001_step_03();

    //**EXTERNAL LINKAGE UNAVAILABLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_04
    Fj_TestScheme_00_0001_step_04();

    //**EXTERNAL LINKAGE AVAILABLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_05_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_00_0001_step_05_data();

    // Execute Fj_TestScheme_00_0001_step_05
    Fj_TestScheme_00_0001_step_05();

    // Execute Fj_TestScheme_00_0001_step_07/09/11/13/14/16/18/19
    Fj_TestScheme_00_0001_step_07();

    //**WITHOUT ACCOUNT AUTHENTICATION, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_06
    Fj_TestScheme_00_0001_step_06();

    // Execute Fj_TestScheme_00_0001_step_08/09/10/12/15/17/18/19
    Fj_TestScheme_00_0001_step_08();
  });
}

async function Open_Authentication_Form() {
  it("Open Authentication Form", async () => {
    // Maximize browser
    await browser.maximizeWindow();

    // Go to authentication page
    await browser.url(test_data.testData.httpurl01);
    await browser.pause(5000);
  });
}

export async function Open_Application_Form() {
  // Maximize browser
  await browser.maximizeWindow();

  // Go to Loan 10 application form
  await browser.url(
    test_data.testData.httpurl02 + "&cli=" + test_data.testData.input_key
  );
  await browser.pause(5000);
}

export async function Remove_Header_Auth() {
  // Remove header
  await util.Remove_header(1);
}

export async function Remove_Header() {
  // Remove header
  await util.Remove_header(2);
}

export async function Login_as_Tantou1() {
  // Maximize browser
  await browser.maximizeWindow();

  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Maximize browser
  await browser.maximizeWindow();

  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Get_CLI_Record() {
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

  // Get CLI record
  await conn
    .sobject("FJ_CustomerLedgerInquiry__c")
    .select("Id, Name, fj_InputKey__c")
    .where({
      fj_InputKey__c: test_data.testData.input_key,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cli_id = record.Id;
        test_data.testData.cli_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.cli_id);
}

export async function Get_Account_Record() {
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
      fj_MonthOfBirth__c: "1",
      fj_DayOfBirth__c: "1",
      clcommon__Email__c: user_info.userInformation.var_sf_comminuty_loginuser,
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

  // Record check
  await util.Record_check(1, test_data.testData.account_id);
}

export async function Open_PDF() {
  // Open PDF
  for (var i = 0; i < 4; i++) {
    await browser.keys(["Tab"]);
  }
  await browser.keys(["Enter"]);
  await browser.pause(5000);
}

export async function Authentication_Form_Fillout() {
  // Set valid values for submitting
  await $("#loan_app_account_name_last").setValue(
    test_data.testData.loan_app_account_name_last
  );
  await $("#loan_app_account_name_first").setValue(
    test_data.testData.loan_app_account_name_first
  );
  await $("#loan_app_birth").setValue(test_data.testData.loan_app_birth);
  await $("#loan_app_select_branch").selectByAttribute(
    "value",
    test_data.testData.loan_app_select_branch
  );
  await $("#loan_app_account_number").setValue(
    test_data.testData.loan_app_account_number
  );
  await $("#loan_app_pinword").setValue(test_data.testData.loan_app_pinword);
  await browser.pause(2000);
}
