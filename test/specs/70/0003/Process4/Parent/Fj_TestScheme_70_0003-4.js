var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0003_step_13 from "../Child/Fj_TestScheme_70_0003_step_13.js";
import Fj_TestScheme_70_0003_step_13_data from "../Child/Fj_TestScheme_70_0003_step_13_data.js";
import Fj_TestScheme_70_0003_step_14 from "../Child/Fj_TestScheme_70_0003_step_14.js";
import Fj_TestScheme_70_0003_step_15 from "../Child/Fj_TestScheme_70_0003_step_15.js";
import Fj_TestScheme_70_0003_step_16 from "../Child/Fj_TestScheme_70_0003_step_16.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute
    Fetch_data();

    // Execute Fj_TestScheme_70_0003_step_13
    Fj_TestScheme_70_0003_step_13();

    // Execute Fj_TestScheme_70_0003_step_13_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0003_step_13_data();

    // Execute Fj_TestScheme_70_0003_step_14
    Fj_TestScheme_70_0003_step_14();

    // Execute Fj_TestScheme_70_0003_step_15
    Fj_TestScheme_70_0003_step_15();

    // Execute Fj_TestScheme_70_0003_step_16
    Fj_TestScheme_70_0003_step_16();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

    // Get APP record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name,genesis__Account__c, genesis__Account__r.Name")
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

    // Record check
    await util.Record_check(3, test_data.testData.app_id);

    // Get EXM record
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.exm_id);

    // Get DDP record
    await conn
      .sobject("FJ_NameDeduplication__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.ddp_cifline_rectype === record.RecordType.Name
          ) {
            test_data.testData.ddp_name = record.Name;
            test_data.testData.ddp_id = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ddp_id);

    // Get CDD record
    await conn
      .sobject("FJ_NameDedupe_Candidate__c")
      .select("Id, Name, fj_RefNameDeduplication__c")
      .where({
        fj_RefNameDeduplication__c: test_data.testData.ddp_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cdd_name = record.Name;
          test_data.testData.cdd_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.cdd_id);
  });
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

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

export async function Get_CIF() {
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

  // Get CIF record
  await conn
    .sobject("FJ_CIF_Infomation__c")
    .select(
      "Id, Name, fj_RefAccount__c, fj_BraNo__c, fj_CIFNo__c, fj_CustNo__c"
    )
    .where({
      fj_RefAccount__c: test_data.testData.account_id,
      fj_BraNo__c: test_data.testData.input_bra_no,
      fj_CIFNo__c: test_data.testData.cif_no_val,
      fj_CustNo__c: test_data.testData.cust_no,
    })
    .sort({ Id: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cif_name = record.Name;
        test_data.testData.cif_id = record.Id;
        continue;
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.cif_id);
}

export async function Get_DA() {
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

  // Get DA record
  await conn
    .sobject("FJ_DeduplicationAccount__c")
    .select("Id, Name, fj_RefApplication__c, fj_RefAccount__c")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      test_data.testData.da_record_count = records.length;
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.da_id_arr.push(record.Id);
        test_data.testData.da_name_arr.push(record.Name);
        test_data.testData.da_account_arr.push(record.fj_RefAccount__c);
      }
    });
}

export async function Get_DA_CIF(acct) {
  test_data.testData.cif_id = "";
  test_data.testData.cif_name = "";
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

  // Get CIF record
  await conn
    .sobject("FJ_CIF_Infomation__c")
    .select(
      "Id, Name, fj_RefAccount__c, fj_BraNo__c, fj_CIFNo__c, fj_CustNo__c"
    )
    .where({
      fj_RefAccount__c: acct,
      fj_BraNo__c: test_data.testData.input_bra_no,
      fj_CustNo__c: test_data.testData.cust_no,
    })
    .sort({ Id: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cif_name = record.Name;
        test_data.testData.cif_id = record.Id;
        continue;
      }
    });
}

export async function Open_SF_DDP_Record() {
  // Go to DDP Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id
  );
}

export async function Open_SF_Account_Record() {
  // Go to account page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.account_obj,
    test_data.testData.account_id
  );
}
