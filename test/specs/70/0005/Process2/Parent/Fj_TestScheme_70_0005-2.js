var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0005_step_03_data from "../Child/Fj_TestScheme_70_0005_step_03_data.js";
import Fj_TestScheme_70_0005_step_03 from "../Child/Fj_TestScheme_70_0005_step_03.js";
import Fj_TestScheme_70_0005_step_04_data from "../Child/Fj_TestScheme_70_0005_step_04_data.js";
import Fj_TestScheme_70_0005_step_04 from "../Child/Fj_TestScheme_70_0005_step_04.js";
import Fj_TestScheme_70_0005_step_05_data from "../Child/Fj_TestScheme_70_0005_step_05_data.js";
import Fj_TestScheme_70_0005_step_05 from "../Child/Fj_TestScheme_70_0005_step_05.js";
import Fj_TestScheme_70_0005_step_06_data from "../Child/Fj_TestScheme_70_0005_step_06_data.js";
import Fj_TestScheme_70_0005_step_06 from "../Child/Fj_TestScheme_70_0005_step_06.js";
import Fj_TestScheme_70_0005_step_07_data from "../Child/Fj_TestScheme_70_0005_step_07_data.js";
import Fj_TestScheme_70_0005_step_07 from "../Child/Fj_TestScheme_70_0005_step_07.js";
import Fj_TestScheme_70_0005_step_11 from "../Child/Fj_TestScheme_70_0005_step_11.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0005-2: External Credit Inquiry Result Check (外信照会結果確認)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute
    Fetch_data();

    // Execute Fj_TestScheme_70_0005_step_03_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0005_step_03_data();

    // Execute Fj_TestScheme_70_0005_step_03
    Fj_TestScheme_70_0005_step_03();

    // Execute Fj_TestScheme_70_0005_step_04_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0005_step_04_data();

    // Execute Fj_TestScheme_70_0005_step_04
    Fj_TestScheme_70_0005_step_04();

    // Execute Fj_TestScheme_70_0005_step_05_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0005_step_05_data();

    // Execute Fj_TestScheme_70_0005_step_05
    Fj_TestScheme_70_0005_step_05();

    // Execute Fj_TestScheme_70_0005_step_06_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0005_step_06_data();

    // Execute Fj_TestScheme_70_0005_step_06
    Fj_TestScheme_70_0005_step_06();

    // Execute Fj_TestScheme_70_0005_step_07_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0005_step_07_data();

    // Execute Fj_TestScheme_70_0005_step_07
    Fj_TestScheme_70_0005_step_07();

    // Execute Fj_TestScheme_70_0005_step_11
    Fj_TestScheme_70_0005_step_11();
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

    // Get SEC record
    await conn
      .sobject("FJ_SecondaryChk__c")
      .select("Id, Name, fj_RefExamination__c, RecordType.Name")
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
          test_data.testData.sec_id = record.Id;
          test_data.testData.sec_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.sec_id);

    // Get TRR record
    await conn
      .sobject("FJ_TotalRepaymentRate__c")
      .select("Id, Name, fj_RefApplication__c")
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

    // Record check
    await util.Record_check(3, test_data.testData.trr_id);
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

export async function Get_JID() {
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

  // Get JID record
  await conn
    .sobject("FJ_JICC_InquiryDetail__c")
    .select("Id, Name")
    .where({
      fj_RefSecondaryChk__c: test_data.testData.sec_id,
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

  // Record check
  await util.Record_check(1, test_data.testData.jid_id);
}

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
  // Record check
  await util.Record_check(3, test_data.testData.jio_id);
}

// JIM's Records
export async function JIM_New_Record() {
  test_data.testData.jim_id_arr = [];
  test_data.testData.jim_name_arr = [];

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
  // Get JIM's record
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
        test_data.testData.jim_id_arr.push(record.Id);
        test_data.testData.jim_name_arr.push(record.Name);
      }
    });

  // Record check
  await util.Record_check(2, test_data.testData.jim_id_arr);
}

// JIA Records
export async function JIA_New_Record(jim_id) {
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
  // Get JIA's records
  await conn
    .sobject("FJ_JICC_InquiryResult_AM__c")
    .select("Id, Name")
    .where({
      fj_RefInquiryResult_M_JICC__c: jim_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.jia1_id = record.Id;
        test_data.testData.jia1_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.jia1_id);
}

// JIB Records
export async function JIB_New_Record() {
  test_data.testData.jib_id_arr = [];
  test_data.testData.jib_name_arr = [];

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
  // Get JIB's record
  await conn
    .sobject("FJ_JICC_InquiryResult_Debt__c")
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
        test_data.testData.jib_id_arr.push(record.Id);
        test_data.testData.jib_name_arr.push(record.Name);
      }
    });

  // Record check
  await util.Record_check(2, test_data.testData.jib_id_arr);
}

// KID Record
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
      fj_RefSecondaryChk__c: test_data.testData.sec_id,
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

  // Record check
  await util.Record_check(1, test_data.testData.kid_id);
}

// KIT Records
export async function KIT_New_Record() {
  test_data.testData.kit_id_arr = [];
  test_data.testData.kit_name_arr = [];

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
  // Get KIT's record
  await conn
    .sobject("FJ_KSC_InquiryResult_Tran__c")
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
        test_data.testData.kit_id_arr.push(record.Id);
        test_data.testData.kit_name_arr.push(record.Name);
      }
    });

  // Record check
  await util.Record_check(2, test_data.testData.kit_id_arr);
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
      fj_LoanAmount__c: test_data.testData.kij_loanamt_val,
      fj_Name_Kana__c: test_data.testData.name_kana_val,
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
  // Record check
  await util.Record_check(3, test_data.testData.kij_id);
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
      fj_LoanAmount__c: test_data.testData.kij_loanamt_val,
      fj_Name_Kana__c: test_data.testData.name_kana_val,
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
  // Record check
  await util.Record_check(1, test_data.testData.kic_id);
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
  // Record check
  await util.Record_check(3, test_data.testData.kil_id);
}

// KIO Record
export async function KIO_New_Record() {
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
  // Get KIO record
  await conn
    .sobject("FJ_KSC_InquiryResult_Official__c")
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
        test_data.testData.kio_id = record.Id;
        test_data.testData.kio_name = record.Name;
      }
    });
  // Record check
  await util.Record_check(3, test_data.testData.kio_id);
}

// Open URL
export async function Open_SEC() {
  // Go to SEC page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.sec_obj,
    test_data.testData.sec_id
  );
}

export async function Open_KIC_Record() {
  // Go to KIC record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kic_obj,
    test_data.testData.kic_id
  );
}

export async function Open_KIJ_Record() {
  // Go to KIJ record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kij_obj,
    test_data.testData.kij_id
  );
}

export async function Open_JID() {
  // Go to JICC照会明細 (JID) record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jid_obj,
    test_data.testData.jid_id
  );
}

export async function Open_Salesforce_KID_Record() {
  // Go to KSC照会明細 (KID) record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kid_obj,
    test_data.testData.kid_id
  );
}

export async function Open_KIT_Record(id) {
  // Go to KIT record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.kit_obj, id);
}

export async function Open_Salesforce_TRR_Record() {
  // Go to TRR record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}

export async function Open_SF_JIM_Record(id) {
  // Go to JIM's record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.jim_obj, id);
}

export async function Open_SF_JIA_Record() {
  // Go to JIA's record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jia_obj,
    test_data.testData.jia1_id
  );
}

export async function Open_SF_JIO_Record() {
  // Go to JIO record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jio_obj,
    test_data.testData.jio_id
  );
}

export async function Open_SF_JIB_Record(id) {
  // Go to JIB(1) record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.jib_obj, id);
}

export async function Open_SF_KIL_Record() {
  // Go to KIL record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kil_obj,
    test_data.testData.kil_id
  );
}

export async function Open_SF_KIO_Record() {
  // Go to KIO record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kio_obj,
    test_data.testData.kio_id
  );
}
