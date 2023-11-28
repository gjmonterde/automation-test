var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0004_step_14 from "../Child/Fj_TestScheme_63-1_0004_step_14.js";
import Fj_TestScheme_63_1_0004_step_19 from "../Child/Fj_TestScheme_63-1_0004_step_19.js";
import Fj_TestScheme_63_1_0004_step_20_data from "../Child/Fj_TestScheme_63-1_0004_step_20_data.js";
import Fj_TestScheme_63_1_0004_step_21_data from "../Child/Fj_TestScheme_63-1_0004_step_21_data.js";
import Fj_TestScheme_63_1_0004_step_22_data from "../Child/Fj_TestScheme_63-1_0004_step_22_data.js";
import Fj_TestScheme_63_1_0004_step_23_data from "../Child/Fj_TestScheme_63-1_0004_step_23_data.js";
import Fj_TestScheme_63_1_0004_step_25_data from "../Child/Fj_TestScheme_63-1_0004_step_25_data.js";
import Fj_TestScheme_63_1_0004_step_28_data from "../Child/Fj_TestScheme_63-1_0004_step_28_data.js";
import Fj_TestScheme_63_1_0004_step_15_data from "../Child/Fj_TestScheme_63-1_0004_step_15_data.js";
import Fj_TestScheme_63_1_0004_step_20 from "../Child/Fj_TestScheme_63-1_0004_step_20.js";
import Fj_TestScheme_63_1_0004_step_21 from "../Child/Fj_TestScheme_63-1_0004_step_21.js";
import Fj_TestScheme_63_1_0004_step_22 from "../Child/Fj_TestScheme_63-1_0004_step_22.js";
import Fj_TestScheme_63_1_0004_step_23 from "../Child/Fj_TestScheme_63-1_0004_step_23.js";
import Fj_TestScheme_63_1_0004_step_25 from "../Child/Fj_TestScheme_63-1_0004_step_25.js";
import Fj_TestScheme_63_1_0004_step_28 from "../Child/Fj_TestScheme_63-1_0004_step_28.js";
import Fj_TestScheme_63_1_0004_step_15 from "../Child/Fj_TestScheme_63-1_0004_step_15.js";
import Fj_TestScheme_63_1_0004_step_29 from "../Child/Fj_TestScheme_63-1_0004_step_29.js";
import Fj_TestScheme_63_1_0004_step_30 from "../Child/Fj_TestScheme_63-1_0004_step_30.js";
import Fj_TestScheme_63_1_0004_step_31 from "../Child/Fj_TestScheme_63-1_0004_step_31.js";
import Fj_TestScheme_63_1_0004_step_33 from "../Child/Fj_TestScheme_63-1_0004_step_33.js";
import Fj_TestScheme_63_1_0004_step_34 from "../Child/Fj_TestScheme_63-1_0004_step_34.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0004-3: External form check result confirmation (外形チェック結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as Tantou1
    // Only for step_14 and step_19. Otherwise, comment out
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0004_step_14
    Fj_TestScheme_63_1_0004_step_14();

    // Execute Fj_TestScheme_63-1_0004_step_19
    Fj_TestScheme_63_1_0004_step_19();

    // **If external linkage is not available, execute this to create records. Else, comment out the admin login and data.
    // Only for data linkage scripts
    Login_as_Admin();
    Fj_TestScheme_63_1_0004_step_20_data();
    Fj_TestScheme_63_1_0004_step_21_data();
    Fj_TestScheme_63_1_0004_step_22_data();
    Fj_TestScheme_63_1_0004_step_23_data();
    Fj_TestScheme_63_1_0004_step_25_data();
    Fj_TestScheme_63_1_0004_step_28_data();
    Fj_TestScheme_63_1_0004_step_15_data();

    // Login as Tantou1
    // Only for step_15 and step_20-34. Otherwise, comment out
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0004_step_20
    Fj_TestScheme_63_1_0004_step_20();

    // Execute Fj_TestScheme_63-1_0004_step_21
    Fj_TestScheme_63_1_0004_step_21();

    // Execute Fj_TestScheme_63-1_0004_step_22
    Fj_TestScheme_63_1_0004_step_22();

    // Execute Fj_TestScheme_63-1_0004_step_23
    Fj_TestScheme_63_1_0004_step_23();

    // Execute Fj_TestScheme_63-1_0004_step_25
    Fj_TestScheme_63_1_0004_step_25();

    // Execute Fj_TestScheme_63-1_0004_step_28
    Fj_TestScheme_63_1_0004_step_28();

    // Execute Fj_TestScheme_63-1_0004_step_15
    Fj_TestScheme_63_1_0004_step_15();

    // Execute Fj_TestScheme_63-1_0004_step_29
    Fj_TestScheme_63_1_0004_step_29();

    // Execute Fj_TestScheme_63-1_0004_step_30
    Fj_TestScheme_63_1_0004_step_30();

    // Execute Fj_TestScheme_63-1_0004_step_31
    Fj_TestScheme_63_1_0004_step_31();

    // Execute Fj_TestScheme_63-1_0004_step_33
    Fj_TestScheme_63_1_0004_step_33();

    // Execute Fj_TestScheme_63-1_0004_step_34
    Fj_TestScheme_63_1_0004_step_34();
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

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_record_type_id,
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Open_App_Launcher() {
  await util.App_Launcher(test_data.testData.originate_app);
}

async function Login_as_Admin() {
  it("Login as Admin", async () => {
    // Login as admin
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await Open_App_Launcher();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await Open_App_Launcher();
  });
}

export async function Open_INI_3rd_Record() {
  // Go to INI(3) record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
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
      fj_InitialChk__c: test_data.testData.ini3_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.chi_array.push(record);
      }
    });
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
      fj_InitialChk__c: test_data.testData.ini3_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.sci_array.push(record);
      }
    });
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
      fj_InitialChk__c: test_data.testData.ini3_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.asc_array.push(record);
      }
    });
}

export async function Get_LCD_Record() {
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
      fj_InitialChk__c: test_data.testData.ini3_id,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.lcd_array1.push(record);
      }
    });
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
      fj_InitialChk__c: test_data.testData.ini3_id,
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
      fj_InitialChk__c: test_data.testData.ini3_id,
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
      fj_InitialChk__c: test_data.testData.ini3_id,
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
      fj_InitialChk__c: test_data.testData.ini3_id,
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
}
