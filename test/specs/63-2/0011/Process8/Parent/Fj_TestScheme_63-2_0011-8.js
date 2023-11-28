var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import Fj_TestScheme_63_2_0011_step_31 from "../Child/Fj_TestScheme_63-2_0011_step_31.js";
import Fj_TestScheme_63_2_0011_step_33 from "../Child/Fj_TestScheme_63-2_0011_step_33.js";
import Fj_TestScheme_63_2_0011_step_34 from "../Child/Fj_TestScheme_63-2_0011_step_34.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0011-8: Loan Adjustment (お借入内容調整)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0011_step_31
    // NOTE: mypage_loan_date_value in test_info (date format) will be affected by client locale settings
    Fj_TestScheme_63_2_0011_step_31();

    // Execute Fj_TestScheme_63-2_0011_step_33
    // NOTE: mypage_loan_date_value in test_info (date format) will be affected by client locale settings
    Fj_TestScheme_63_2_0011_step_33();

    // Execute Fj_TestScheme_63-2_0011_step_34
    Fj_TestScheme_63_2_0011_step_34();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce Records", async () => {
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
      .select("Id")
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

    // Maximize browser
    await browser.maximizeWindow();

    // Go to MyPage
    // To determine if the user is existing or new one
    if (test_data.testData.user_status == 0) {
      // if existing user
      await util.Login_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser,
        user_info.userInformation.var_sf_comminuty_loginpwd
      );
    } else if (test_data.testData.user_status == 1) {
      // if new user
      await util.Login_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser2,
        user_info.userInformation.var_sf_comminuty_loginpwd2
      );
    }
    await browser.pause(10000);
  });
}
