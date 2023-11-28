var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0006-3");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_70_0006_step_17_data: Manual update of EXS record 1st Mode PD and 1st Additional PD fields (data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "17";

    // Update record
    // JSForce connection
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

    // EXS Update
    await conn.sobject("FJ_ExternalScoring__c").update(
      {
        Id: test_data.testData.exs_id,
        fj_1st_ModePD__c: test_data.testData.exs_firstmodepd_val,
        fj_1st_AdditionalPD__c: test_data.testData.exs_firstadditionalpd_val,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    if (test_data.testData.logged_status != "admin") {
      // Login as admin
      await parent.Login_as_admin();
    }

    // Open dev console
    // ★ 新環境適用' New Env Implementation
    await util.Developer_Console(
      test_data.testData.query_0006_17 + "'" + test_data.testData.exs_name + "'"
    );

    // Screenshot - developer console
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data
    );

    // Logout
    await parent.Logout();
  });
}
