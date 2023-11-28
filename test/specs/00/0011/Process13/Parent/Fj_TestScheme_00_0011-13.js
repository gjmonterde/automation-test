var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_00_0011_step_58 from "../Child/Fj_TestScheme_00_0011_step_58";
import Fj_TestScheme_00_0011_step_59 from "../Child/Fj_TestScheme_00_0011_step_59";
import Fj_TestScheme_00_0011_step_60 from "../Child/Fj_TestScheme_00_0011_step_60";
import Fj_TestScheme_00_0011_step_61 from "../Child/Fj_TestScheme_00_0011_step_61";
import Fj_TestScheme_00_0011_step_62 from "../Child/Fj_TestScheme_00_0011_step_62";
import Fj_TestScheme_00_0011_step_63 from "../Child/Fj_TestScheme_00_0011_step_63";
import Fj_TestScheme_00_0011_step_64 from "../Child/Fj_TestScheme_00_0011_step_64";
import Fj_TestScheme_00_0011_step_65 from "../Child/Fj_TestScheme_00_0011_step_65";
import Fj_TestScheme_00_0011_step_66 from "../Child/Fj_TestScheme_00_0011_step_66";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-13: Contract agreement default confirmation (契約同意デフォルト確認)", () => {
    // Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_00_0011_step_58
    Fj_TestScheme_00_0011_step_58();

    // Execute Fj_TestScheme_00_0011_step_59
    Fj_TestScheme_00_0011_step_59();

    // Execute Fj_TestScheme_00_0011_step_60
    Fj_TestScheme_00_0011_step_60();

    // Execute Fj_TestScheme_00_0011_step_61
    Fj_TestScheme_00_0011_step_61();

    // Execute Fj_TestScheme_00_0011_step_62
    Fj_TestScheme_00_0011_step_62();

    // Execute Fj_TestScheme_00_0011_step_63
    Fj_TestScheme_00_0011_step_63();

    // Execute Fj_TestScheme_00_0011_step_64
    Fj_TestScheme_00_0011_step_64();

    // Execute Fj_TestScheme_00_0011_step_65
    Fj_TestScheme_00_0011_step_65();

    // Execute Fj_TestScheme_00_0011_step_66
    Fj_TestScheme_00_0011_step_66();
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
      .select("Id, Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get AGR record
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.contract_agreement_rectype, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.agr_name = record.Name;
          test_data.testData.agr_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.agr_id);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_to_Salesforce() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  test_data.testData.logged_status = "uic";
}

export async function Login_to_MyPage() {
  var uname, pword;
  if (test_data.testData.user_status == 0) {
    // if existing user
    uname = user_info.userInformation.var_sf_comminuty_loginuser;
    pword = user_info.userInformation.var_sf_comminuty_loginpwd;
  } else if (test_data.testData.user_status == 1) {
    // if new user
    uname = user_info.userInformation.var_sf_comminuty_loginuser2;
    pword = user_info.userInformation.var_sf_comminuty_loginpwd2;
  }

  // Login to MyPage
  await util.Login_to_MyPage(test_data.testData.mypage_url, uname, pword); // ★ 新環境適用' New Env Implementation
  test_data.testData.logged_status = "mypage";
}

export async function Go_to_Contract() {
  // Click the 「ご契約内容確認」"Confirm contract" button.
  await $("button=" + test_data.testData.mypage_contract_details_btn).click();
  await browser.pause(10000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await $("span=" + test_data.testData.app_name).waitForExist({
    timeout: 30000,
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_AGR() {
  // Go to AGR record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.agr_obj,
    test_data.testData.agr_id
  );
}
