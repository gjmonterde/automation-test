var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0015_step_01 from "../Child/Fj_TestScheme_63-2_0015_step_01.js";
import Fj_TestScheme_63_2_0015_step_02 from "../Child/Fj_TestScheme_63-2_0015_step_02.js";
import Fj_TestScheme_63_2_0015_step_03 from "../Child/Fj_TestScheme_63-2_0015_step_03.js";
import Fj_TestScheme_63_2_0015_step_04 from "../Child/Fj_TestScheme_63-2_0015_step_04.js";
import Fj_TestScheme_63_2_0015_step_05 from "../Child/Fj_TestScheme_63-2_0015_step_05.js";
import Fj_TestScheme_63_2_0015_step_06 from "../Child/Fj_TestScheme_63-2_0015_step_06.js";
import Fj_TestScheme_63_2_0015_step_07 from "../Child/Fj_TestScheme_63-2_0015_step_07.js";

// Passwords - NEED TO CHECK BEFORE EXECUTING THE 0015
let current_password = test_data.testData.password3; // Current password 
let new_password = test_data.testData.password4; // New password

export default async function suite() {
  describe("Fj_TestScheme_63-2_0015-1: Login・Home (ログイン・ホーム)", () => {
    // Execute Fj_TestScheme_63-2_0015_step_01
    Fj_TestScheme_63_2_0015_step_01();

    // Execute Fj_TestScheme_63-2_0015_step_02
    Fj_TestScheme_63_2_0015_step_02();

    // Execute Fj_TestScheme_63-2_0015_step_03
    // The password used is the current one. Check the current_password.
    Fj_TestScheme_63_2_0015_step_03();

    // Execute Fj_TestScheme_63-2_0015_step_04
    // The password used must be the desired change password one. Check the new_password.
    Fj_TestScheme_63_2_0015_step_04();

    // Login to My_Page
    // The password used must be the updated/new one. Check the new_password.
    Login_MyPage();

    // Execute Fj_TestScheme_63-2_0015_step_05
    Fj_TestScheme_63_2_0015_step_05();

    // Execute Fj_TestScheme_63-2_0015_step_06
    Fj_TestScheme_63_2_0015_step_06();

    // Execute Fj_TestScheme_63-2_0015_step_07
    Fj_TestScheme_63_2_0015_step_07();
  });
}

export async function Change_Password() {
  // Change the set values respectively to avoid error when running password reset again
  await $("//input[@name='" + test_data.testData.new_password + "']").setValue(
    new_password
  );
  await browser.pause(2000);
  await $(
    "//input[@name='" + test_data.testData.confirm_password + "']"
  ).setValue(new_password);
  await browser.pause(2000);
}

export async function Login_MyPage() {
  it("Login to My Page", async () => {
    // Go to My Page
    await Go_To_MyPage();

    // Input My Page Credentials
    // Change the input parameter in Input_MyPage_Credentials repectively to avoid error when running password reset again
    await Input_MyPage_Credentials(new_password);

    // To determine if the user is existing or new one
    if (test_data.testData.user_status == 0) {
      // if existing user
      await util.Login_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser,
        new_password
      );
    } else if (test_data.testData.user_status == 1) {
      // if new user
      await util.Login_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser3,
        new_password
      );
    }
  });
}

export async function Input_MyPage_Credentials() {
  // To determine if the user is existing or new one
  if (test_data.testData.user_status == 0) {
    // if existing user
    await util.Go_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      current_password
    );
  } else if (test_data.testData.user_status == 1) {
    // if new user
    await util.Go_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser3,
      current_password
    );
  }
}

export async function Query_Salesforce_Records() {
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
    .select("Id, Name, genesis__Account__c, genesis__Account__r.Name")
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
        test_data.testData.account_name = record.genesis__Account__r.Name;
        test_data.testData.account_id = record.genesis__Account__c;
      }
    });
}

export async function Go_To_MyPage() {
  // Maximize browser
  await browser.maximizeWindow();

  // Go to MyPage
  await browser.url(user_info.userInformation.var_sf_mypage_loginurl);
  await browser.pause(5000);
}

export async function ForgotPassword_MyPage() {
  // Forgot password MyPage
  await browser.url(user_info.userInformation.var_sf_mypage_forgot_password);
  await browser.pause(5000);
}

export async function Login_To_Outlook() {
  // Login to Outlook Email
  // To determine if the user is existing or new one
  if (test_data.testData.user_status == 0) {
    // if existing user
    await util.Login_to_Outlook(
      user_info.userInformation.var_email_testEmailAddress,
      user_info.userInformation.var_email_testEmailPwd
    );
  } else if (test_data.testData.user_status == 1) {
    // if new user
    await util.Login_to_Outlook(
      user_info.userInformation.var_email_testEmailAddress3,
      user_info.userInformation.var_email_testEmailPwd3
    );
  }
}

export async function Search_Email() {
  // Convert creation date
  // ***NOTE: Change TimeZone based on mail timezone***
  await util.Search_chatter_mail_by_date(test_data.testData.mail_time);
}

export async function Login_As_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(20000);
}
