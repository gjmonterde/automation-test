var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0006_step_04 from "../Child/Fj_TestScheme_63-1_0006_step_04.js";
import Fj_TestScheme_63_1_0006_step_05 from "../Child/Fj_TestScheme_63-1_0006_step_05.js";
import Fj_TestScheme_63_1_0006_step_06 from "../Child/Fj_TestScheme_63-1_0006_step_06.js";
import Fj_TestScheme_63_1_0006_step_07 from "../Child/Fj_TestScheme_63-1_0006_step_07.js";
import Fj_TestScheme_63_1_0006_step_08 from "../Child/Fj_TestScheme_63-1_0006_step_08.js";
import Fj_TestScheme_63_1_0006_step_11 from "../Child/Fj_TestScheme_63-1_0006_step_11.js";
import Fj_TestScheme_63_1_0006_step_12 from "../Child/Fj_TestScheme_63-1_0006_step_12.js";
import Fj_TestScheme_63_1_0006_step_13 from "../Child/Fj_TestScheme_63-1_0006_step_13.js";
import Fj_TestScheme_63_1_0006_step_14 from "../Child/Fj_TestScheme_63-1_0006_step_14.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0006-2: Initial Process check (Auditor User) (初期処理確認(審査役))", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0006_step_04
    Fj_TestScheme_63_1_0006_step_04();

    // Execute Fj_TestScheme_63-1_0006_step_05
    Fj_TestScheme_63_1_0006_step_05();

    // Execute Fj_TestScheme_63-1_0006_step_06
    Fj_TestScheme_63_1_0006_step_06();

    // Execute Fj_TestScheme_63-1_0006_step_07
    Fj_TestScheme_63_1_0006_step_07();

    // Execute Fj_TestScheme_63-1_0006_step_08
    Fj_TestScheme_63_1_0006_step_08();

    // Execute Fj_TestScheme_63-1_0006_step_11
    Fj_TestScheme_63_1_0006_step_11();

    // Execute Fj_TestScheme_63-1_0006_step_12
    Fj_TestScheme_63_1_0006_step_12();

    // Execute Fj_TestScheme_63-1_0006_step_13
    Fj_TestScheme_63_1_0006_step_13();

    // Execute Fj_TestScheme_63-1_0006_step_14
    Fj_TestScheme_63_1_0006_step_14();
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

    // Get EXS record
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

    // Get TRR record
    await conn
      .sobject("FJ_TotalRepaymentRate__c")
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
          test_data.testData.trr_id = record.Id;
          test_data.testData.trr_name = record.Name;
        }
      });

    // Get INI record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini3_id = record.Id;
          test_data.testData.ini3_name = record.Name;
        }
      });

    // Login as shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Salesforce_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Open_TRR_Record() {
  // Go to TRR record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}

export async function Open_LCD_List_Record() {
  // Go to LCD related list view
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_lcd_rel
  );

  // Sort - ascending order
  const sort_col = await $(
    ".//a[contains(., '" + test_data.testData.lcd_sort + "')]"
  );
  var sort = await sort_col.nextElement().getText();
  while (sort != test_data.testData.sort_app_asc) {
    await sort_col.click();
    await browser.pause(1000);
    sort = await sort_col.nextElement().getText();
  }
  await expect(sort).toBe(test_data.testData.sort_app_asc);

  // Deselect the hover/selected fields
  await util.Deselect_fields(6);
}

export async function Login_As_Tantou1() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
