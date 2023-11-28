var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import Fj_TestScheme_63_1_0011_step_69 from "../Child/Fj_TestScheme_63-1_0011_step_69.js";
import Fj_TestScheme_63_1_0011_step_72 from "../Child/Fj_TestScheme_63-1_0011_step_72.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0011-15: Contract agreement default confirmation (契約同意デフォルト確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0011_step_69
    Fj_TestScheme_63_1_0011_step_69();

    // Execute Fj_TestScheme_63-1_0011_step_72
    Fj_TestScheme_63_1_0011_step_72();
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

    // Maximize browser
    await browser.maximizeWindow();

    // Login to MyPage
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    await browser.pause(10000);
  });
}
