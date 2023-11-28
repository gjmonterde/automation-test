var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_62_0001_step_44 from "../Child/Fj_TestScheme_62_0001_step_44.js";
import Fj_TestScheme_62_0001_step_45 from "../Child/Fj_TestScheme_62_0001_step_45.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0001-2: Application content check (申込内容確認)", () => {
    // Execute Fj_TestScheme_62_0001_step_44
    Fj_TestScheme_62_0001_step_44();

    // Execute Fj_TestScheme_62_0001_step_45
    Fj_TestScheme_62_0001_step_45();
  });
}

export async function Query() {
  // Connect to salesforce
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
  let csv_record_no = eval(
    "test_data.testData.csv_value" +
      test_data.testData.record_no +
      "_systemacceptno"
  );
  // Get APP record
  await conn
    .sobject("FJ_MuCooperationApp__c")
    .select(
      "Id, Name, fj_System_Acception_No__c, fj_RefApplication__c, fj_RefApplication__r.Name," +
        "fj_RefApplication__r.genesis__Account__c, fj_RefApplication__r.fj_RefContact__c, fj_MuCooperationError__c"
    )
    .where({
      fj_System_Acception_No__c: csv_record_no,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.app_id = record.fj_RefApplication__c;
        test_data.testData.app_name = record.fj_RefApplication__r.Name;
        test_data.testData.mu_id = record.Id;
        test_data.testData.mu_name = record.Name;
        test_data.testData.account_id =
          record.fj_RefApplication__r.genesis__Account__c;
        test_data.testData.contact_id =
          record.fj_RefApplication__r.fj_RefContact__c;
        if (
          record.fj_MuCooperationError__c != "" ||
          record.fj_MuCooperationError__c != test_data.testData.isUndefined
        ) {
          return console.error(err);
        }
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.app_id);
  await util.Record_check(1, test_data.testData.mu_id);
  await util.Record_check(1, test_data.testData.account_id);
  await util.Record_check(1, test_data.testData.contact_id);

  do {
    // Get MNT record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c)")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.acceptance_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt_id = record.Id;
            test_data.testData.mnt_name = record.Name;
          }
        }
      });
    // Pause
    await browser.pause(3000);
  } while (
    test_data.testData.mnt_id == test_data.testData.isUndefined ||
    test_data.testData.mnt_id == ""
  );

  do {
    // Get WNT record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name, toLabel(fj_WebNotificationType__c)")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.acceptance_rectype ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id = record.Id;
            test_data.testData.wnt_name = record.Name;
          }
        }
      });
    // Pause
    await browser.pause(3000);
  } while (
    test_data.testData.wnt_id == test_data.testData.isUndefined ||
    test_data.testData.wnt_id == ""
  );

  // Record check
  await util.Record_check(1, test_data.testData.mnt_id);
  await util.Record_check(1, test_data.testData.wnt_id);

  // Get BA record
  await conn
    .sobject("clcommon__Bank_Account__c")
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
        test_data.testData.ba_name = record.Name;
        test_data.testData.ba_id = record.Id;
        break;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.ba_id);

  if (test_data.testData.logged_status != "uic") {
    // Login as tantou
    await Login_as_tantou();
  }
}

export async function Get_Listview() {
  // Connect to salesforce
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

  // ★ 新環境適用' New Env Implementation
  // Listview - MU
  await conn
    .sobject("ListView")
    .select("Id, Name, SobjectType, DeveloperName")
    .where({
      SobjectType: "FJ_MuCooperationApp__c",
      Name: test_data.testData.all_mu_listview,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.listview1_id = record.Id;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.listview1_id);

  // ★ 新環境適用' New Env Implementation
  // Listview - Application
  await conn
    .sobject("ListView")
    .select("Id, Name, SobjectType, DeveloperName")
    .where({
      SobjectType: "genesis__Applications__c",
      Name: test_data.testData.all_app_listview,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.listview2_id = record.Id;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.listview2_id);

  // ★ 新環境適用' New Env Implementation
  // Listview - Account
  await conn
    .sobject("ListView")
    .select("Id, Name, SobjectType, DeveloperName")
    .where({
      SobjectType: "Account",
      Name: test_data.testData.all_account_listview,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.listview3_id = record.Id;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.listview3_id);

  // ★ 新環境適用' New Env Implementation
  // Listview - Contact
  await conn
    .sobject("ListView")
    .select("Id, Name, SobjectType, DeveloperName")
    .where({
      SobjectType: "Contact",
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (record.Name == test_data.testData.all_contact_listview) {
          test_data.testData.listview4_id = record.Id;
        }
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.listview4_id);
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MUlist() {
  // Go to MU Cooperation List View
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      test_data.testData.httpurl01 +
      test_data.testData.listview1_id
  );
  await browser.pause(10000);

  // Sort
  var controlno = await $(
    ".//a[contains(., '" + test_data.testData.sort_control_no_header + "')]"
  );
  var sortmu = await controlno.nextElement().getText();
  while (sortmu !== test_data.testData.sort_desc) {
    await controlno.click();
    await browser.pause(5000);
    sortmu = await controlno.nextElement().getText();
  }
  await expect(sortmu).toBe(test_data.testData.sort_desc);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_AppList() {
  // Go to Applications List View
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      test_data.testData.httpurl02 +
      test_data.testData.listview2_id
  );
  await browser.pause(10000);

  // Sort
  var appid = await $(
    ".//a[contains(., '" + test_data.testData.sort_app_id_header + "')]"
  );
  var sortapp = await appid.nextElement().getText();
  while (sortapp !== test_data.testData.sort_desc) {
    await appid.click();
    await browser.pause(5000);
    sortapp = await appid.nextElement().getText();
  }
  await expect(sortapp).toBe(test_data.testData.sort_desc);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_Accountlist() {
  // Go to Account List View
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      test_data.testData.httpurl03 +
      test_data.testData.listview3_id
  );
  await browser.pause(10000);

  // Sort
  var acc_date = await $(
    ".//a[contains(., '" + test_data.testData.sort_create_date_header + "')]"
  );
  var sortacc = await acc_date.nextElement().getText();
  while (sortacc !== test_data.testData.sort_desc) {
    await acc_date.click();
    await browser.pause(5000);
    sortacc = await acc_date.nextElement().getText();
  }
  await expect(sortacc).toBe(test_data.testData.sort_desc);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_Contactlist() {
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      test_data.testData.httpurl04 +
      test_data.testData.listview4_id
  );
  await browser.pause(10000);

  // Sort
  var con_date = await $(
    ".//a[contains(., '" + test_data.testData.sort_create_date_header + "')]"
  );
  var sortcon = await con_date.nextElement().getText();
  while (sortcon !== test_data.testData.sort_desc) {
    await con_date.click();
    await browser.pause(5000);
    sortcon = await con_date.nextElement().getText();
  }
  await expect(sortcon).toBe(test_data.testData.sort_desc);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MNT() {
  // Go to MNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT() {
  // Go to WNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MU() {
  // Go to MU record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mu_obj,
    test_data.testData.mu_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_BA() {
  // Go to BA Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ba_obj,
    test_data.testData.ba_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_Account() {
  // Go to Account Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.account_obj,
    test_data.testData.account_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_Contact() {
  // Go to Contact Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.contact_obj,
    test_data.testData.contact_id
  );
}
