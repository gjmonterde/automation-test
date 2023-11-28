var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0005_step_03 from "../Child/Fj_TestScheme_00_0005_step_03.js";
import Fj_TestScheme_00_0005_step_04 from "../Child/Fj_TestScheme_00_0005_step_04.js";
import Fj_TestScheme_00_0005_step_05 from "../Child/Fj_TestScheme_00_0005_step_05.js";
import Fj_TestScheme_00_0005_step_06 from "../Child/Fj_TestScheme_00_0005_step_06.js";
import Fj_TestScheme_00_0005_step_07 from "../Child/Fj_TestScheme_00_0005_step_07.js";
import Fj_TestScheme_00_0005_step_08 from "../Child/Fj_TestScheme_00_0005_step_08.js";
import Fj_TestScheme_00_0005_step_09 from "../Child/Fj_TestScheme_00_0005_step_09.js";
import Fj_TestScheme_00_0005_step_10 from "../Child/Fj_TestScheme_00_0005_step_10.js";
import Fj_TestScheme_00_0005_step_11 from "../Child/Fj_TestScheme_00_0005_step_11.js";
import Fj_TestScheme_00_0005_step_12 from "../Child/Fj_TestScheme_00_0005_step_12.js";
import Fj_TestScheme_00_0005_step_13 from "../Child/Fj_TestScheme_00_0005_step_13.js";
import Fj_TestScheme_00_0005_step_14 from "../Child/Fj_TestScheme_00_0005_step_14.js";
import Fj_TestScheme_00_0005_step_15 from "../Child/Fj_TestScheme_00_0005_step_15.js";
import Fj_TestScheme_00_0005_step_16 from "../Child/Fj_TestScheme_00_0005_step_16.js";
import Fj_TestScheme_00_0005_step_17 from "../Child/Fj_TestScheme_00_0005_step_17.js";
import Fj_TestScheme_00_0005_step_18 from "../Child/Fj_TestScheme_00_0005_step_18.js";
import Fj_TestScheme_00_0005_step_18 from "../Child/Fj_TestScheme_00_0005_step_18.js";
import Fj_TestScheme_00_0005_step_19 from "../Child/Fj_TestScheme_00_0005_step_19.js";
import Fj_TestScheme_00_0005_step_20 from "../Child/Fj_TestScheme_00_0005_step_20.js";
import Fj_TestScheme_00_0005_step_21 from "../Child/Fj_TestScheme_00_0005_step_21.js";
import Fj_TestScheme_00_0005_step_22 from "../Child/Fj_TestScheme_00_0005_step_22.js";
import Fj_TestScheme_00_0005_step_23 from "../Child/Fj_TestScheme_00_0005_step_23.js";
import Fj_TestScheme_00_0005_step_24 from "../Child/Fj_TestScheme_00_0005_step_24.js";
import Fj_TestScheme_00_0005_step_25 from "../Child/Fj_TestScheme_00_0005_step_25.js";
import Fj_TestScheme_00_0005_step_26 from "../Child/Fj_TestScheme_00_0005_step_26.js";
import Fj_TestScheme_00_0005_step_27 from "../Child/Fj_TestScheme_00_0005_step_27.js";
import Fj_TestScheme_00_0005_step_28 from "../Child/Fj_TestScheme_00_0005_step_28.js";
import Fj_TestScheme_00_0005_step_29 from "../Child/Fj_TestScheme_00_0005_step_29.js";
import Fj_TestScheme_00_0005_step_30 from "../Child/Fj_TestScheme_00_0005_step_30.js";
import Fj_TestScheme_00_0005_step_31 from "../Child/Fj_TestScheme_00_0005_step_31.js";
import Fj_TestScheme_00_0005_step_32 from "../Child/Fj_TestScheme_00_0005_step_32.js";
import Fj_TestScheme_00_0005_step_33 from "../Child/Fj_TestScheme_00_0005_step_33.js";
import Fj_TestScheme_00_0005_step_34 from "../Child/Fj_TestScheme_00_0005_step_34.js";
import Fj_TestScheme_00_0005_step_35 from "../Child/Fj_TestScheme_00_0005_step_35.js";
import Fj_TestScheme_00_0005_step_36 from "../Child/Fj_TestScheme_00_0005_step_36.js";
import Fj_TestScheme_00_0005_step_05_data from "../Child/Fj_TestScheme_00_0005_step_05_data.js";
import Fj_TestScheme_00_0005_step_08_data from "../Child/Fj_TestScheme_00_0005_step_08_data.js";
import Fj_TestScheme_00_0005_step_11_data from "../Child/Fj_TestScheme_00_0005_step_11_data.js";
import Fj_TestScheme_00_0005_step_14_data from "../Child/Fj_TestScheme_00_0005_step_14_data.js";
import Fj_TestScheme_00_0005_step_17_data from "../Child/Fj_TestScheme_00_0005_step_17_data.js";
import Fj_TestScheme_00_0005_step_19_data from "../Child/Fj_TestScheme_00_0005_step_19_data.js";
import Fj_TestScheme_00_0005_step_21_data from "../Child/Fj_TestScheme_00_0005_step_21_data.js";
import Fj_TestScheme_00_0005_step_24_data from "../Child/Fj_TestScheme_00_0005_step_24_data.js";
import Fj_TestScheme_00_0005_step_27_data from "../Child/Fj_TestScheme_00_0005_step_27_data.js";
import Fj_TestScheme_00_0005_step_30_data from "../Child/Fj_TestScheme_00_0005_step_30_data.js";
import Fj_TestScheme_00_0005_step_33_data from "../Child/Fj_TestScheme_00_0005_step_33_data.js";
import Fj_TestScheme_00_0005_step_35_data from "../Child/Fj_TestScheme_00_0005_step_35_data.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0005-2: External Credit Inquiry Result Check (外信照会結果確認)", () => {
    /* NOTE: Make sure that your timeout under mochaOpts in wdio.conf.js file is 10000000 or more to be able
  to execute this process */
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0005_step_04
    Fj_TestScheme_00_0005_step_04();

    // Execute Fj_TestScheme_00_0005_step_07
    Fj_TestScheme_00_0005_step_07();

    // Execute Fj_TestScheme_00_0005_step_10
    Fj_TestScheme_00_0005_step_10();

    // Execute Fj_TestScheme_00_0005_step_13
    Fj_TestScheme_00_0005_step_13();

    // Execute Fj_TestScheme_00_0005_step_16
    Fj_TestScheme_00_0005_step_16();

    // Execute Fj_TestScheme_00_0005_step_20
    Fj_TestScheme_00_0005_step_20();

    // Execute Fj_TestScheme_00_0005_step_23
    Fj_TestScheme_00_0005_step_23();

    // Execute Fj_TestScheme_00_0005_step_26
    Fj_TestScheme_00_0005_step_26();

    // Execute Fj_TestScheme_00_0005_step_29
    Fj_TestScheme_00_0005_step_29();

    // Execute Fj_TestScheme_00_0005_step_32
    Fj_TestScheme_00_0005_step_32();

    // Execute Fj_TestScheme_00_0005_step_36
    Fj_TestScheme_00_0005_step_36();

    /** EXTERNAL LINKAGE UNAVAILABLE, execute this */
    // Execute Fj_TestScheme_00_0005_step_03
    Fj_TestScheme_00_0005_step_03();

    // Execute Fj_TestScheme_00_0005_step_05_data
    Fj_TestScheme_00_0005_step_05_data();

    // Execute Fj_TestScheme_00_0005_step_05
    Fj_TestScheme_00_0005_step_05();

    // Execute Fj_TestScheme_00_0005_step_08_data
    Fj_TestScheme_00_0005_step_08_data();

    // Execute Fj_TestScheme_00_0005_step_08
    Fj_TestScheme_00_0005_step_08();

    // Execute Fj_TestScheme_00_0005_step_11_data
    Fj_TestScheme_00_0005_step_11_data();

    // Execute Fj_TestScheme_00_0005_step_11
    Fj_TestScheme_00_0005_step_11();

    // Execute Fj_TestScheme_00_0005_step_14_data
    Fj_TestScheme_00_0005_step_14_data();

    // Execute Fj_TestScheme_00_0005_step_14
    Fj_TestScheme_00_0005_step_14();

    // Execute Fj_TestScheme_00_0005_step_17_data
    Fj_TestScheme_00_0005_step_17_data();

    // Execute Fj_TestScheme_00_0005_step_17
    Fj_TestScheme_00_0005_step_17();

    // Execute Fj_TestScheme_00_0005_step_19_data
    Fj_TestScheme_00_0005_step_19_data();

    // Execute Fj_TestScheme_00_0005_step_19
    Fj_TestScheme_00_0005_step_19();

    // Execute Fj_TestScheme_00_0005_step_21_data
    Fj_TestScheme_00_0005_step_21_data();

    // Execute Fj_TestScheme_00_0005_step_21
    Fj_TestScheme_00_0005_step_21();

    // Execute Fj_TestScheme_00_0005_step_24_data
    Fj_TestScheme_00_0005_step_24_data();

    // Execute Fj_TestScheme_00_0005_step_24
    Fj_TestScheme_00_0005_step_24();

    // Execute Fj_TestScheme_00_0005_step_27_data
    Fj_TestScheme_00_0005_step_27_data();

    // Execute Fj_TestScheme_00_0005_step_27
    Fj_TestScheme_00_0005_step_27();

    // Execute Fj_TestScheme_00_0005_step_30_data
    Fj_TestScheme_00_0005_step_30_data();

    // Execute Fj_TestScheme_00_0005_step_30
    Fj_TestScheme_00_0005_step_30();

    // Execute Fj_TestScheme_00_0005_step_33_data
    Fj_TestScheme_00_0005_step_33_data();

    // Execute Fj_TestScheme_00_0005_step_33
    Fj_TestScheme_00_0005_step_33();

    // Execute Fj_TestScheme_00_0005_step_35_data
    Fj_TestScheme_00_0005_step_35_data();

    // Execute Fj_TestScheme_00_0005_step_35
    Fj_TestScheme_00_0005_step_35();

    // Execute Fj_TestScheme_00_0005_step_06
    Fj_TestScheme_00_0005_step_06();

    // Execute Fj_TestScheme_00_0005_step_09
    Fj_TestScheme_00_0005_step_09();

    // Execute Fj_TestScheme_00_0005_step_12
    Fj_TestScheme_00_0005_step_12();

    // Execute Fj_TestScheme_00_0005_step_15
    Fj_TestScheme_00_0005_step_15();

    // Execute Fj_TestScheme_00_0005_step_18
    Fj_TestScheme_00_0005_step_18();

    // Execute Fj_TestScheme_00_0005_step_22
    Fj_TestScheme_00_0005_step_22();

    // Execute Fj_TestScheme_00_0005_step_25
    Fj_TestScheme_00_0005_step_25();

    // Execute Fj_TestScheme_00_0005_step_28
    Fj_TestScheme_00_0005_step_28();

    // Execute Fj_TestScheme_00_0005_step_31
    Fj_TestScheme_00_0005_step_31();

    // Execute Fj_TestScheme_00_0005_step_34
    Fj_TestScheme_00_0005_step_34();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get SEC1 record where レコードタイプ = 外信照会①
    await conn
      .sobject("FJ_SecondaryChk__c")
      .select("Id, Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        "RecordType.Name": test_data.testData.sec1_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.sec1_id = record.Id;
          test_data.testData.sec1_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.trr_id);
  });
}

// For data linkage purposes
export async function Login_as_Tantou1() {
  // Login as tantou1 user
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // Change App
  await Change_App();
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function JID_New_Record() {
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
  // Get JID record
  await conn
    .sobject("FJ_JICC_InquiryDetail__c")
    .select("Id, Name")
    .where({
      fj_RefSecondaryChk__c: test_data.testData.sec1_id,
      fj_RefTotalRepaymentRate__c: test_data.testData.trr_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.jid_id = record.Id;
        test_data.testData.jid_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.jid_id);
}

// JIO Records
export async function JIO_New_Record() {
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
  // Get JIO record
  await conn
    .sobject("FJ_JICC_InquiryDetail_Other__c")
    .select("Id, Name")
    .where({
      fj_RefTotalRepaymentRate__c: test_data.testData.trr_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.jio_id = record.Id;
        test_data.testData.jio_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.jio_id);
}

// JIM Records
export async function JIM_New_Records() {
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
  test_data.testData.jim_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.jim_name_arr = []; // ★ 新環境適用' New Env Implementation
  // Get JIM records
  await conn
    .sobject("FJ_JICC_InquiryResult_M__c")
    .select("Id, Name")
    .where({
      fj_RefInquiryDetail_JICC__c: test_data.testData.jid_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.jim_id_arr.push(record.Id); // ★ 新環境適用' New Env Implementation
        test_data.testData.jim_name_arr.push(record.Name); // ★ 新環境適用' New Env Implementation
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.jim_id_arr);
}

// JIA Records
export async function JIA_New_Record_JIM(id) {
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
  // Get JIA record in JIM(1)
  await conn
    .sobject("FJ_JICC_InquiryResult_AM__c")
    .select("Id, Name")
    .where({
      fj_RefInquiryResult_M_JICC__c: id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.jia_id = record.Id;
        test_data.testData.jia_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.jia_id);
}

// JIB Records
export async function JIB_New_Records() {
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
  test_data.testData.jib_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.jib_name_arr = []; // ★ 新環境適用' New Env Implementation
  // Get JIB record
  await conn
    .sobject("FJ_JICC_InquiryResult_Debt__c")
    .select("Id, Name, toLabel(fj_TransactionType__c)")
    .where({
      fj_RefInquiryDetail_JICC__c: test_data.testData.jid_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.jib_id_arr.push(record.Id); // ★ 新環境適用' New Env Implementation
        test_data.testData.jib_name_arr.push(record.Name); // ★ 新環境適用' New Env Implementation
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.jib_id_arr);
}

export async function KID_New_Record() {
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
  // Get KID record
  await conn
    .sobject("FJ_KSC_InquiryDetail__c")
    .select("Id, Name")
    .where({
      fj_RefSecondaryChk__c: test_data.testData.sec1_id,
      fj_RefTotalRepaymentRate__c: test_data.testData.trr_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.kid_id = record.Id;
        test_data.testData.kid_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.kid_id);
}

// KIT Records
export async function KIT_New_Records() {
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
  test_data.testData.kit_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.kit_name_arr = []; // ★ 新環境適用' New Env Implementation
  // Get KIT record
  await conn
    .sobject("FJ_KSC_InquiryResult_Tran__c")
    .select("Id, Name, toLabel(fj_TransactionType__c)")
    .where({
      fj_RefInquiryDetail_KSC__c: test_data.testData.kid_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.kit_id_arr.push(record.Id); // ★ 新環境適用' New Env Implementation
        test_data.testData.kit_name_arr.push(record.Name); // ★ 新環境適用' New Env Implementation
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.kit_id_arr);
}

// KIC Record
export async function KIC_New_Record() {
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
  // Get KIC record
  await conn
    .sobject("FJ_KSC_InquiryResult_CIC__c")
    .select("Id, Name")
    .where({
      fj_RefInquiryDetail_KSC__c: test_data.testData.kid_id,
      fj_LoanAmount__c: test_data.testData.loanamt_val,
      fj_Name_Kana__c: test_data.testData.name_kana_value,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.kic_id = record.Id;
        test_data.testData.kic_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.kic_id);
}

// KIJ Record
export async function KIJ_New_Record() {
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
  // Get KIJ record
  await conn
    .sobject("FJ_KSC_InquiryResult_JICC__c")
    .select("Id, Name")
    .where({
      fj_RefInquiryDetail_KSC__c: test_data.testData.kid_id,
      fj_LoanAmount__c: test_data.testData.loanamt_val,
      fj_Name_Kana__c: test_data.testData.name_kana_value,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.kij_id = record.Id;
        test_data.testData.kij_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.kij_id);
}

// KIL Record
export async function KIL_New_Record() {
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
  // Get KIL record
  await conn
    .sobject("FJ_KSC_InquiryResult_Decl__c")
    .select("Id, Name")
    .where({
      fj_RefInquiryDetail_KSC__c: test_data.testData.kid_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.kil_id = record.Id;
        test_data.testData.kil_name = record.Name;
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.kil_id);
}

export async function Open_Salesforce_TRR_Record() {
  // Go to TRR record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}

export async function Open_Salesforce_EXM_SEC1_Record() {
  // Go to EXM record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );

  // Go to SEC1 record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.sec_obj,
    test_data.testData.sec1_id
  );
}

export async function Open_Salesforce_JID_Record() {
  // Go to JICC照会明細 (JID) record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jid_obj,
    test_data.testData.jid_id
  );
}

export async function Open_Salesforce_KID_Record() {
  // Go to KSC照会明細 (KID) record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kid_obj,
    test_data.testData.kid_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_EXM_Record() {
  // Go to EXM record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );

  // Scroll to view SEC related list
  await util.Scroll_to_related_list(test_data.testData.foreigninq_header);
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_JIO_Record() {
  // Go to JIO record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jio_obj,
    test_data.testData.jio_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_JIB_Record(id) {
  // Go to JIB record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.jib_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_JIM_Record(id) {
  // Go to JIM record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.jim_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_JIA_Record() {
  // Go to JIA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jia_obj,
    test_data.testData.jia_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_KIC_Record() {
  // Go to KIC record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kic_obj,
    test_data.testData.kic_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_KIJ_Record() {
  // Go to KIJ record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kij_obj,
    test_data.testData.kij_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_KIT_Record(id) {
  // Go to KIT record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.kit_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Open_Salesforce_KIL_Record() {
  // Go to KIL record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kil_obj,
    test_data.testData.kil_id
  );
}
