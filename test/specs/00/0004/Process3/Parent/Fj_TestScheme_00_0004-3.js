var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0004_step_14 from "../Child/Fj_TestScheme_00_0004_step_14.js";
import Fj_TestScheme_00_0004_step_15 from "../Child/Fj_TestScheme_00_0004_step_15.js";
import Fj_TestScheme_00_0004_step_16 from "../Child/Fj_TestScheme_00_0004_step_16.js";
import Fj_TestScheme_00_0004_step_17 from "../Child/Fj_TestScheme_00_0004_step_17.js";
import Fj_TestScheme_00_0004_step_18 from "../Child/Fj_TestScheme_00_0004_step_18.js";
import Fj_TestScheme_00_0004_step_19 from "../Child/Fj_TestScheme_00_0004_step_19.js";
import Fj_TestScheme_00_0004_step_20 from "../Child/Fj_TestScheme_00_0004_step_20.js";
import Fj_TestScheme_00_0004_step_21 from "../Child/Fj_TestScheme_00_0004_step_21.js";
import Fj_TestScheme_00_0004_step_23 from "../Child/Fj_TestScheme_00_0004_step_23.js";
import Fj_TestScheme_00_0004_step_24 from "../Child/Fj_TestScheme_00_0004_step_24.js";
import Fj_TestScheme_00_0004_step_25 from "../Child/Fj_TestScheme_00_0004_step_25.js";
import Fj_TestScheme_00_0004_step_26 from "../Child/Fj_TestScheme_00_0004_step_26.js";
import Fj_TestScheme_00_0004_step_27 from "../Child/Fj_TestScheme_00_0004_step_27.js";
import Fj_TestScheme_00_0004_step_28 from "../Child/Fj_TestScheme_00_0004_step_28.js";
import Fj_TestScheme_00_0004_step_29 from "../Child/Fj_TestScheme_00_0004_step_29.js";
import Fj_TestScheme_00_0004_step_31 from "../Child/Fj_TestScheme_00_0004_step_31.js";
import Fj_TestScheme_00_0004_step_32 from "../Child/Fj_TestScheme_00_0004_step_32.js";
import Fj_TestScheme_00_0004_step_33 from "../Child/Fj_TestScheme_00_0004_step_33.js";
import Fj_TestScheme_00_0004_step_34 from "../Child/Fj_TestScheme_00_0004_step_34.js";
import Fj_TestScheme_00_0004_step_35 from "../Child/Fj_TestScheme_00_0004_step_35.js";
import Fj_TestScheme_00_0004_step_36 from "../Child/Fj_TestScheme_00_0004_step_36.js";
import Fj_TestScheme_00_0004_step_37 from "../Child/Fj_TestScheme_00_0004_step_37.js";
import Fj_TestScheme_00_0004_step_38 from "../Child/Fj_TestScheme_00_0004_step_38.js";
import Fj_TestScheme_00_0004_step_39 from "../Child/Fj_TestScheme_00_0004_step_39.js";
import Fj_TestScheme_00_0004_step_40 from "../Child/Fj_TestScheme_00_0004_step_40.js";
import Fj_TestScheme_00_0004_step_41 from "../Child/Fj_TestScheme_00_0004_step_41.js";
import Fj_TestScheme_00_0004_step_42 from "../Child/Fj_TestScheme_00_0004_step_42.js";
import Fj_TestScheme_00_0004_step_43 from "../Child/Fj_TestScheme_00_0004_step_43.js";
import Fj_TestScheme_00_0004_step_44 from "../Child/Fj_TestScheme_00_0004_step_44.js";
import Fj_TestScheme_00_0004_step_45 from "../Child/Fj_TestScheme_00_0004_step_45.js";
import Fj_TestScheme_00_0004_step_46 from "../Child/Fj_TestScheme_00_0004_step_46.js";
import Fj_TestScheme_00_0004_step_48 from "../Child/Fj_TestScheme_00_0004_step_48.js";
import Fj_TestScheme_00_0004_step_50 from "../Child/Fj_TestScheme_00_0004_step_50.js";
import Fj_TestScheme_00_0004_step_47 from "../Child/Fj_TestScheme_00_0004_step_47.js";
import Fj_TestScheme_00_0004_step_49 from "../Child/Fj_TestScheme_00_0004_step_49.js";
import Fj_TestScheme_00_0004_step_53 from "../Child/Fj_TestScheme_00_0004_step_53.js";
import Fj_TestScheme_00_0004_step_54 from "../Child/Fj_TestScheme_00_0004_step_54.js";
import Fj_TestScheme_00_0004_step_55 from "../Child/Fj_TestScheme_00_0004_step_55.js";
import Fj_TestScheme_00_0004_step_20_data from "../Child/Fj_TestScheme_00_0004_step_20_data.js";
import Fj_TestScheme_00_0004_step_22_data from "../Child/Fj_TestScheme_00_0004_step_22_data.js";
import Fj_TestScheme_00_0004_step_24_data from "../Child/Fj_TestScheme_00_0004_step_24_data.js";
import Fj_TestScheme_00_0004_step_27_data from "../Child/Fj_TestScheme_00_0004_step_27_data.js";
import Fj_TestScheme_00_0004_step_30_data from "../Child/Fj_TestScheme_00_0004_step_30_data.js";
import Fj_TestScheme_00_0004_step_33_data from "../Child/Fj_TestScheme_00_0004_step_33_data.js";
import Fj_TestScheme_00_0004_step_36_data from "../Child/Fj_TestScheme_00_0004_step_36_data.js";
import Fj_TestScheme_00_0004_step_39_data from "../Child/Fj_TestScheme_00_0004_step_39_data.js";
import Fj_TestScheme_00_0004_step_42_data from "../Child/Fj_TestScheme_00_0004_step_42_data.js";
import Fj_TestScheme_00_0004_step_44_data from "../Child/Fj_TestScheme_00_0004_step_44_data.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0004-3: External form check result confirmation (外形チェック結果確認)", () => {
    // Execute Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    //**LINKAGE DISABLED, EXECUTE THE DATA SCRIPTS */
    // Execute Fj_TestScheme_00_0004_step_20_data
    Fj_TestScheme_00_0004_step_20_data();

    // Execute Fj_TestScheme_00_0004_step_22_data
    Fj_TestScheme_00_0004_step_22_data();

    // Execute Fj_TestScheme_00_0004_step_24_data
    Fj_TestScheme_00_0004_step_24_data();

    // Execute Fj_TestScheme_00_0004_step_27_data
    Fj_TestScheme_00_0004_step_27_data();

    // Execute Fj_TestScheme_00_0004_step_30_data
    Fj_TestScheme_00_0004_step_30_data();

    // Execute Fj_TestScheme_00_0004_step_33_data
    Fj_TestScheme_00_0004_step_33_data();

    // Execute Fj_TestScheme_00_0004_step_36_data
    Fj_TestScheme_00_0004_step_36_data();

    // Execute Fj_TestScheme_00_0004_step_39_data
    Fj_TestScheme_00_0004_step_39_data();

    // Execute Fj_TestScheme_00_0004_step_42_data
    Fj_TestScheme_00_0004_step_42_data();

    // Execute Fj_TestScheme_00_0004_step_44_data
    Fj_TestScheme_00_0004_step_44_data();

    //**LINKAGE DISABLED, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0004_step_14
    Fj_TestScheme_00_0004_step_14();

    //**LINKAGE POSSIBLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0004_step_15
    Fj_TestScheme_00_0004_step_15();

    // Execute Fj_TestScheme_00_0004_step_16
    Fj_TestScheme_00_0004_step_16();

    // Execute Fj_TestScheme_00_0004_step_17
    Fj_TestScheme_00_0004_step_17();

    // Execute Fj_TestScheme_00_0004_step_18
    Fj_TestScheme_00_0004_step_18();

    // Execute Fj_TestScheme_00_0004_step_19
    Fj_TestScheme_00_0004_step_19();

    // Execute Fj_TestScheme_00_0004_step_20
    Fj_TestScheme_00_0004_step_20();

    // Execute Fj_TestScheme_00_0004_step_21
    Fj_TestScheme_00_0004_step_21();

    // Execute Fj_TestScheme_00_0004_step_23
    Fj_TestScheme_00_0004_step_23();

    // Execute Fj_TestScheme_00_0004_step_24
    Fj_TestScheme_00_0004_step_24();

    // Execute Fj_TestScheme_00_0004_step_25
    Fj_TestScheme_00_0004_step_25();

    // Execute Fj_TestScheme_00_0004_step_26
    Fj_TestScheme_00_0004_step_26();

    // Execute Fj_TestScheme_00_0004_step_27
    Fj_TestScheme_00_0004_step_27();

    // Execute Fj_TestScheme_00_0004_step_28
    Fj_TestScheme_00_0004_step_28();

    // Execute Fj_TestScheme_00_0004_step_29
    Fj_TestScheme_00_0004_step_29();

    // Execute Fj_TestScheme_00_0004_step_31
    Fj_TestScheme_00_0004_step_31();

    // Execute Fj_TestScheme_00_0004_step_32
    Fj_TestScheme_00_0004_step_32();

    // Execute Fj_TestScheme_00_0004_step_33
    Fj_TestScheme_00_0004_step_33();

    // Execute Fj_TestScheme_00_0004_step_34
    Fj_TestScheme_00_0004_step_34();

    // Execute Fj_TestScheme_00_0004_step_35
    Fj_TestScheme_00_0004_step_35();

    // Execute Fj_TestScheme_00_0004_step_36
    Fj_TestScheme_00_0004_step_36();

    // Execute Fj_TestScheme_00_0004_step_37
    Fj_TestScheme_00_0004_step_37();

    // Execute Fj_TestScheme_00_0004_step_38
    Fj_TestScheme_00_0004_step_38();

    // Execute Fj_TestScheme_00_0004_step_39
    Fj_TestScheme_00_0004_step_39();

    // Execute Fj_TestScheme_00_0004_step_40
    Fj_TestScheme_00_0004_step_40();

    // Execute Fj_TestScheme_00_0004_step_41
    Fj_TestScheme_00_0004_step_41();

    // Execute Fj_TestScheme_00_0004_step_42
    Fj_TestScheme_00_0004_step_42();

    // Execute Fj_TestScheme_00_0004_step_43
    Fj_TestScheme_00_0004_step_43();

    // Execute Fj_TestScheme_00_0004_step_44
    Fj_TestScheme_00_0004_step_44();

    // Execute Fj_TestScheme_00_0004_step_45
    Fj_TestScheme_00_0004_step_45();

    // Execute Fj_TestScheme_00_0004_step_46
    Fj_TestScheme_00_0004_step_46();

    // Execute Fj_TestScheme_00_0004_step_47
    Fj_TestScheme_00_0004_step_47();

    // Execute Fj_TestScheme_00_0004_step_48
    Fj_TestScheme_00_0004_step_48();

    // Execute Fj_TestScheme_00_0004_step_49
    Fj_TestScheme_00_0004_step_49();

    // Execute Fj_TestScheme_00_0004_step_50
    Fj_TestScheme_00_0004_step_50();

    // Execute Fj_TestScheme_00_0004_step_53
    Fj_TestScheme_00_0004_step_53();

    // Execute Fj_TestScheme_00_0004_step_54
    Fj_TestScheme_00_0004_step_54();

    // Execute Fj_TestScheme_00_0004_step_55
    Fj_TestScheme_00_0004_step_55();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
      .select("Id, Name, FJ_ProductCodeMaster__c")
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
          test_data.testData.pro_id = record.FJ_ProductCodeMaster__c;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.pro_id);

    // Get INI 3 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_rectype,
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);
  });
}

export async function Login_as_tantou() {
  if (test_data.testData.logged_status != "uic") {
    // ★ 新環境適用' New Env Implementation
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // Change app
    await Change_App();
  }
}
export async function Login_as_admin() {
  if (test_data.testData.logged_status != "admin") {
    //Login as as admin
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);
    test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

    // Change app
    await Change_App();
  }
}

async function Change_App() {
  // ★ 新環境適用' New Env Implementation
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
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

  test_data.testData.asc_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.asc_name_arr = []; // ★ 新環境適用' New Env Implementation

  // Get ASC record ID
  await conn
    .sobject("FJ_AMLSCheck__c")
    .select("Id, Name")
    .where({
      FJ_InitialChk__c: test_data.testData.ini3_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.asc_id_arr.push(record.Id); // ★ 新環境適用' New Env Implementation
        test_data.testData.asc_name_arr.push(record.Name); // ★ 新環境適用' New Env Implementation
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.asc_id_arr);
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

  test_data.testData.lcd_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.lcd_name_arr = []; // ★ 新環境適用' New Env Implementation
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
        test_data.testData.lcd_id_arr.push(record.Id);
        test_data.testData.lcd_name_arr.push(record.Name);
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.lcd_id_arr);
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

  test_data.testData.sci_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.sci_name_arr = []; // ★ 新環境適用' New Env Implementation
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
        test_data.testData.sci_id_arr.push(record.Id);
        test_data.testData.sci_name_arr.push(record.Name);
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.sci_id_arr);
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

  test_data.testData.chi_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.chi_name_arr = []; // ★ 新環境適用' New Env Implementation
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
        test_data.testData.chi_id_arr.push(record.Id);
        test_data.testData.chi_name_arr.push(record.Name);
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.chi_id_arr);
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

  test_data.testData.cabi_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.cabi_name_arr = []; // ★ 新環境適用' New Env Implementation
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
        test_data.testData.cabi_id_arr.push(record.Id);
        test_data.testData.cabi_name_arr.push(record.Name);
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.cabi_id_arr);
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

  test_data.testData.cabf_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.cabf_name_arr = []; // ★ 新環境適用' New Env Implementation
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
        test_data.testData.cabf_id_arr.push(record.Id);
        test_data.testData.cabf_name_arr.push(record.Name);
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.cabf_id_arr);
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

  test_data.testData.cla_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.cla_name_arr = []; // ★ 新環境適用' New Env Implementation
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
        test_data.testData.cla_id_arr.push(record.Id);
        test_data.testData.cla_name_arr.push(record.Name);
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.cla_id_arr);
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

  test_data.testData.bla_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.bla_name_arr = []; // ★ 新環境適用' New Env Implementation
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
        test_data.testData.bla_id_arr.push(record.Id);
        test_data.testData.bla_name_arr.push(record.Name);
      }
    });
  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.bla_id_arr);
}

export async function Open_INI_3rd_Record() {
  // Go to INI Record
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP(type) {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  if (type != "" && type == 1) {
    // Switch to 申込内容 tab
    await util.Application_Record_Scrolling(1);
  }
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CHI(id) {
  // Go to CHI record screen
  await util.Open_SF_Record_URL(1, user_info.object.chi_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_SCI(id) {
  // Go to SCI record screen
  await util.Open_SF_Record_URL(1, user_info.object.sci_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_ASC(id) {
  // Go to ASC record screen
  await util.Open_SF_Record_URL(1, user_info.object.amlsc_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_LCD(id) {
  // Go to LCD record screen
  await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CLA(id) {
  // Go to CLA record screen
  await util.Open_SF_Record_URL(1, user_info.object.cla_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CABI(id) {
  // Go to CABI record screen
  await util.Open_SF_Record_URL(1, user_info.object.cabi_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CABF(id) {
  // Go to CABF record screen
  await util.Open_SF_Record_URL(1, user_info.object.cabf_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_BLA(id) {
  // Go to BLA record screen
  await util.Open_SF_Record_URL(1, user_info.object.bla_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_PRO() {
  // Go to PRO record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pro_obj,
    test_data.testData.pro_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CHI_Rel() {
  // Go to CHI related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_chi_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_SCI_Rel() {
  // Go to SCI related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_sci_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_LCD_Rel() {
  // Go to LCD related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_lcd_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CLA_Rel() {
  // Go to CLA related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_cla_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CABI_Rel() {
  // Go to CABI related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_cabi_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CABF_Rel() {
  // Go to CABF related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_cabf_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_BLA_Rel() {
  // Go to BLA related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_bla_rel
  );
}
