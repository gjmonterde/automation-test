var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0007_step_28 from "../Child/Fj_TestScheme_00_0007_step_28.js";
import Fj_TestScheme_00_0007_step_29 from "../Child/Fj_TestScheme_00_0007_step_29.js";
import Fj_TestScheme_00_0007_step_30 from "../Child/Fj_TestScheme_00_0007_step_30.js";
import Fj_TestScheme_00_0007_step_31 from "../Child/Fj_TestScheme_00_0007_step_31.js";
import Fj_TestScheme_00_0007_step_32 from "../Child/Fj_TestScheme_00_0007_step_32.js";
import Fj_TestScheme_00_0007_step_33 from "../Child/Fj_TestScheme_00_0007_step_33.js";
import Fj_TestScheme_00_0007_step_34 from "../Child/Fj_TestScheme_00_0007_step_34.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0007-8: Final Warranty Examination Check  (最終保証審査確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0007_step_28
    Fj_TestScheme_00_0007_step_28();

    // Execute Fj_TestScheme_00_0007_step_29
    Fj_TestScheme_00_0007_step_29();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0007_step_30
    Fj_TestScheme_00_0007_step_30();

    // Execute Fj_TestScheme_00_0007_step_31
    Fj_TestScheme_00_0007_step_31();

    // Execute Fj_TestScheme_00_0007_step_32
    Fj_TestScheme_00_0007_step_32();

    // Execute Fj_TestScheme_00_0007_step_33
    Fj_TestScheme_00_0007_step_33();

    // Execute Fj_TestScheme_00_0007_step_34
    Fj_TestScheme_00_0007_step_34();
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
      .select("Id, Name, genesis__CL_Product__c") // ★ 新環境適用' New Env Implementation
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
          test_data.testData.pro_id = record.genesis__CL_Product__c; // ★ 新環境適用' New Env Implementation
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.pro_id);

    // Get GUA record ID and name
    await conn
      .sobject("FJ_GuaranteeChk__c")
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
          test_data.testData.gua_id = record.Id;
          test_data.testData.gua_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

export async function Open_APP_Record(type) {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  switch (type) {
    case 1:
      // Switch to 申込内容 tab
      await util.Application_Record_Scrolling(1);
      break;
    case 3:
      // Go to 告知画面 tab
      await util.Application_Record_Scrolling(3);
      break;
  }
}

export async function Open_GUA_Record() {
  // Go to GUA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}

export async function Open_PRO_Record() {
  // Go to PRO record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pro_obj,
    test_data.testData.pro_id
  );
}

export async function Open_GUD_Record() {
  // Go to GUD record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gud_obj,
    test_data.testData.gud_id
  );
}
// ★ 新環境適用' New Env Implementation
export async function Get_GUD1() {
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

  // Get GUD record
  await conn
    .sobject("FJ_GuaranteeChkDetail__c")
    .select("Id, Name")
    .where({
      fj_RefGuaranteeChk__c: test_data.testData.gua_id,
      "RecordType.Name": test_data.testData.gud1_rectype,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.gud_id = record.Id;
        test_data.testData.gud_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.gud_id);
}

// ★ 新環境適用' New Env Implementation
export async function Get_GUD2() {
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

  // Get GUD record
  await conn
    .sobject("FJ_GuaranteeChkDetail__c")
    .select("Id, Name")
    .where({
      fj_RefGuaranteeChk__c: test_data.testData.gua_id,
      "RecordType.Name": test_data.testData.gud2_rectype,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.gud_id = record.Id;
        test_data.testData.gud_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.gud_id);
}

// ★ 新環境適用' New Env Implementation
export async function Get_GUD3() {
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

  // Get GUD record
  await conn
    .sobject("FJ_GuaranteeChkDetail__c")
    .select("Id, Name")
    .where({
      fj_RefGuaranteeChk__c: test_data.testData.gua_id,
      "RecordType.Name": test_data.testData.gud3_rectype,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.gud_id = record.Id;
        test_data.testData.gud_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.gud_id);
}
