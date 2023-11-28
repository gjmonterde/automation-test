var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0011_step_100 from "../Child/Fj_TestScheme_63-2_0011_step_100.js";
import Fj_TestScheme_63_2_0011_step_101 from "../Child/Fj_TestScheme_63-2_0011_step_101.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0011-21: Final Approval (最終承認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0011_step_100
    Fj_TestScheme_63_2_0011_step_100();

    // Execute Fj_TestScheme_63-2_0011_step_101
    Fj_TestScheme_63_2_0011_step_101();
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

    // Get CNT record
    await conn
      .sobject("FJ_Contracting__c")
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
          test_data.testData.cnt_id = record.Id;
          test_data.testData.cnt_name = record.Name;
        }
      });

    // Get AGR record
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.agr2_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.agr2_id = record.Id;
          test_data.testData.agr2_name = record.Name;
        }
      });

    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Record_URL(url_type, object, id, object_r) {
  switch (url_type) {
    case 1:
      // Open URL record
      await util.Open_SF_Record_URL(
        1,
        object,
        id
      );
      await browser.url(
        user_info.userInformation.var_sf_sfurl +
          "r/" +
          object +
          "/" +
          id +
          "/view"
      );
      await browser.pause(5000);
      break;

    case 2:
      // Open URL record related list
      await browser.url(
        user_info.userInformation.var_sf_sfurl +
          "r/" +
          object +
          "/" +
          id +
          "/related/" +
          object_r +
          "/view"
      );
      await browser.pause(5000);
      break;
  }
}

export async function Get_BA_Records() {
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

  // Get BA records
  await conn
    .sobject("clcommon__Bank_Account__c")
    .select("Id, Name, fj_IsForTransfer__c, fj_Verification_Status__c")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (record.fj_Verification_Status__c == 0) {
          test_data.testData.ba_array_new.push(record);
        }

        if (record.fj_IsForTransfer__c == true) {
          test_data.testData.ba_array.push(record);
        }
      }
    });
}

export async function Get_WNT_MNT_Record() {
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

  // Get WNT record
  await conn
    .sobject("FJ_WebNotification__c")
    .select("Id, Name, CreatedDate")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_WebNotificationType__c: test_data.testData.wnt7_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.wnt7_id = record.Id;
        test_data.testData.wnt7_name = record.Name;
        test_data.testData.mail_time = record.CreatedDate;
      }
    });

  // Get MNT record
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_MailNotificationType__c: test_data.testData.mnt7_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.mnt7_id = record.Id;
        test_data.testData.mnt7_name = record.Name;
      }
    });
}
