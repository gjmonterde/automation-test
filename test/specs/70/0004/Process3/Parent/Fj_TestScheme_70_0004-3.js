var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0004_step_14 from "../Child/Fj_TestScheme_70_0004_step_14.js";
import Fj_TestScheme_70_0004_step_14_data from "../Child/Fj_TestScheme_70_0004_step_14_data.js";
import Fj_TestScheme_70_0004_step_15 from "../Child/Fj_TestScheme_70_0004_step_15.js";
import Fj_TestScheme_70_0004_step_16 from "../Child/Fj_TestScheme_70_0004_step_16.js";
import Fj_TestScheme_70_0004_step_18 from "../Child/Fj_TestScheme_70_0004_step_18.js";
import Fj_TestScheme_70_0004_step_20_data from "../Child/Fj_TestScheme_70_0004_step_20_data.js";
import Fj_TestScheme_70_0004_step_20 from "../Child/Fj_TestScheme_70_0004_step_20.js";
import Fj_TestScheme_70_0004_step_21_data from "../Child/Fj_TestScheme_70_0004_step_21_data.js";
import Fj_TestScheme_70_0004_step_21 from "../Child/Fj_TestScheme_70_0004_step_21.js";
import Fj_TestScheme_70_0004_step_22_data from "../Child/Fj_TestScheme_70_0004_step_22_data.js";
import Fj_TestScheme_70_0004_step_22 from "../Child/Fj_TestScheme_70_0004_step_22.js";
import Fj_TestScheme_70_0004_step_23_data from "../Child/Fj_TestScheme_70_0004_step_23_data.js";
import Fj_TestScheme_70_0004_step_23 from "../Child/Fj_TestScheme_70_0004_step_23.js";
import Fj_TestScheme_70_0004_step_25_data from "../Child/Fj_TestScheme_70_0004_step_25_data.js";
import Fj_TestScheme_70_0004_step_25 from "../Child/Fj_TestScheme_70_0004_step_25.js";
import Fj_TestScheme_70_0004_step_28_data from "../Child/Fj_TestScheme_70_0004_step_28_data.js";
import Fj_TestScheme_70_0004_step_28 from "../Child/Fj_TestScheme_70_0004_step_28.js";
import Fj_TestScheme_70_0004_step_33 from "../Child/Fj_TestScheme_70_0004_step_33.js";
import Fj_TestScheme_70_0004_step_34 from "../Child/Fj_TestScheme_70_0004_step_34.js";

export default async function suite() {
  describe(
    "Fj_TestScheme_70_0004-3: Credit card information check (クレジットカード情報確認) a " +
      "External form check result confirmation (外形チェック結果確認)",
    () => {
      // Execute fetch data
      // NOTE: ALWAYS execute
      Fetch_data();

      // Execute Fj_TestScheme_70_0004_step_14
      Fj_TestScheme_70_0004_step_14();

      // Execute Fj_TestScheme_70_0004_step_14_data
      // NOTE: If external linkage is not available, execute this script to update data.
      //       Else, comment out this line.
      Fj_TestScheme_70_0004_step_14_data();

      // Execute Fj_TestScheme_70_0004_step_15
      Fj_TestScheme_70_0004_step_15();

      // Execute Fj_TestScheme_70_0004_step_16
      Fj_TestScheme_70_0004_step_16();

      // Execute Fj_TestScheme_70_0004_step_18
      Fj_TestScheme_70_0004_step_18();

      // Execute Fj_TestScheme_70_0004_step_20_data
      // NOTE: If external linkage is not available, execute this script to update data.
      //       Else, comment out this line.
      Fj_TestScheme_70_0004_step_20_data();

      // Execute Fj_TestScheme_70_0004_step_20
      Fj_TestScheme_70_0004_step_20();

      // Execute Fj_TestScheme_70_0004_step_21_data
      // NOTE: If external linkage is not available, execute this script to update data.
      //       Else, comment out this line.
      Fj_TestScheme_70_0004_step_21_data();

      // Execute Fj_TestScheme_70_0004_step_21
      Fj_TestScheme_70_0004_step_21();

      // Execute Fj_TestScheme_70_0004_step_22_data
      // NOTE: If external linkage is not available, execute this script to update data.
      //       Else, comment out this line.
      Fj_TestScheme_70_0004_step_22_data();

      // Execute Fj_TestScheme_70_0004_step_22
      Fj_TestScheme_70_0004_step_22();

      //  Execute Fj_TestScheme_70_0004_step_23_data
      //  NOTE: If external linkage is not available, execute this script to update data.
      //       Else, comment out this line.
      Fj_TestScheme_70_0004_step_23_data();

      // Execute Fj_TestScheme_70_0004_step_23
      Fj_TestScheme_70_0004_step_23();

      //  Execute Fj_TestScheme_70_0004_step_25_data
      //  NOTE: If external linkage is not available, execute this script to update data.
      //       Else, comment out this line.
      Fj_TestScheme_70_0004_step_25_data();

      //  Execute Fj_TestScheme_70_0004_step_25
      Fj_TestScheme_70_0004_step_25();

      //  Execute Fj_TestScheme_70_0004_step_28_data
      //  NOTE: If external linkage is not available, execute this script to update data.
      //        Else, comment out this line.
      Fj_TestScheme_70_0004_step_28_data();

      // Execute Fj_TestScheme_70_0004_step_28
      Fj_TestScheme_70_0004_step_28();

      // Execute Fj_TestScheme_70_0004_step_33
      Fj_TestScheme_70_0004_step_33();

      // Execute Fj_TestScheme_70_0004_step_34
      Fj_TestScheme_70_0004_step_34();
    }
  );
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
      .select(
        "Id, Name,genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name"
      )
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
          test_data.testData.contact_id = record.fj_RefContact__c;
          test_data.testData.contact_name = record.fj_RefContact__r.Name;
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

    // Get INI 3 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.RecordType.Name === test_data.testData.ini3_rectype) {
            test_data.testData.ini_id = record.Id;
            test_data.testData.ini_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id);
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

export async function Go_to_INI() {
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini_id
  );
}

export async function Get_CHI_Record() {
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

  // Get CHI records
  await conn
    .sobject("FJ_CheckInfo__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.chi_id = record.Id;
        test_data.testData.chi_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.chi_id);
}

export async function Get_SCI_Record() {
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

  // Get SCI records
  await conn
    .sobject("FJ_ScoringInfo__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.sci_id = record.Id;
        test_data.testData.sci_name = record.Name;
      }
    });
  // Record check
  await util.Record_check(3, test_data.testData.sci_id);
}

export async function Get_ASC_Record() {
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

  // Get ASC records
  await conn
    .sobject("FJ_AMLSCheck__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.asc_id = record.Id;
        test_data.testData.asc_name = record.Name;
      }
    });
  // Record check
  await util.Record_check(3, test_data.testData.asc_id);
}

export async function Get_LCD_Record() {
  test_data.testData.lcd_id_arr = [];
  test_data.testData.lcd_name_arr = [];
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

  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.lcd_id_arr.push(record.Id);
        test_data.testData.lcd_name_arr.push(record.Name);
      }
    });
  // Record check
  await util.Record_check(2, test_data.testData.lcd_id_arr);
}

export async function Get_CABI_Record() {
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

  // Get CABI records
  await conn
    .sobject("FJ_CAB_Intermediary__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cabi_id = record.Id;
        test_data.testData.cabi_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.cabi_id);
}

export async function Get_CABF_Record() {
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

  // Get CABF records
  await conn
    .sobject("FJ_CAB_FCD__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cabf_id = record.Id;
        test_data.testData.cabf_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.cabf_id);
}

export async function Get_BLA_Record() {
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

  // Get BLA records
  await conn
    .sobject("FJ_BasicLoanAccount__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.bla_id = record.Id;
        test_data.testData.bla_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.bla_id);
}

export async function Get_CLA_Record() {
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

  // Get CLA records
  await conn
    .sobject("FJ_CardLoanAccountInfo__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.cla_id = record.Id;
        test_data.testData.cla_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(3, test_data.testData.cla_id);
}
