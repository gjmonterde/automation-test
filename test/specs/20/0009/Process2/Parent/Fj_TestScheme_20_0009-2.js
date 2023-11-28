var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0009_step_10 from "../Child/Fj_TestScheme_20_0009_step_10";

export default async function suite() {
  describe("Fj_TestScheme_20_0009-2: Screening Condition Registration (審査条件登録)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_20_0009_step_10
    Fj_TestScheme_20_0009_step_10();
  });
}

async function Login_To_Salesforce() {
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

    // Record check
    let app_status = test_data.testData.isFalse;
    if (
      test_data.testData.app_id != test_data.testData.isUndefined &&
      test_data.testData.app_id != ""
    ) {
      app_status = test_data.testData.isTrue;
    }
    expect(app_status).toEqual(test_data.testData.isTrue);

    //Get CRE record ID and name
    await conn
      .sobject("FJ_CreditApproval__c")
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
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
        }
      });

    // Record check
    let cre_status = test_data.testData.isFalse;
    if (
      test_data.testData.cre_id != test_data.testData.isUndefined &&
      test_data.testData.cre_id != ""
    ) {
      cre_status = test_data.testData.isTrue;
    }
    expect(cre_status).toEqual(test_data.testData.isTrue);

    // Get EXS record ID and name
    await conn
      .sobject("FJ_ExternalScoring__c")
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
          test_data.testData.exs_id = record.Id;
          test_data.testData.exs_name = record.Name;
        }
      });

    // Record check
    let exs_status = test_data.testData.isFalse;
    if (
      test_data.testData.exs_id != test_data.testData.isUndefined &&
      test_data.testData.exs_id != ""
    ) {
      exs_status = test_data.testData.isTrue;
    }
    expect(exs_status).toEqual(test_data.testData.isTrue);

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Go_to_CRE() {
  // Go to 契約手続き Detail Screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

export async function Go_to_EXS() {
  // Go to 審査決裁 Detail Screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}
