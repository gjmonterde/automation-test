var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_60_0011_step_81 from "../Child/Fj_TestScheme_60_0011_step_81.js";
import Fj_TestScheme_60_0011_step_82 from "../Child/Fj_TestScheme_60_0011_step_82.js";
import Fj_TestScheme_60_0011_step_83 from "../Child/Fj_TestScheme_60_0011_step_83.js";
import Fj_TestScheme_60_0011_step_84 from "../Child/Fj_TestScheme_60_0011_step_84.js";
import Fj_TestScheme_60_0011_step_86 from "../Child/Fj_TestScheme_60_0011_step_86.js";
import Fj_TestScheme_60_0011_step_87 from "../Child/Fj_TestScheme_60_0011_step_87.js";
import Fj_TestScheme_60_0011_step_88 from "../Child/Fj_TestScheme_60_0011_step_88.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-17: My page re-condition check (Before agreement) (マイページ再条件確認(同意前))", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_Data();

    // Execute Fj_TestScheme_60_0011_step_81
    Fj_TestScheme_60_0011_step_81();

    // Always execute Login to MyPage before step 82 onwards
    // Execute Login to MyPage
    Login_To_MyPage();

    // Execute Fj_TestScheme_60_0011_step_82
    Fj_TestScheme_60_0011_step_82();

    // Execute Fj_TestScheme_60_0011_step_83
    Fj_TestScheme_60_0011_step_83();

    // Execute Fj_TestScheme_60_0011_step_84
    Fj_TestScheme_60_0011_step_84();

    // Execute Fj_TestScheme_60_0011_step_86
    Fj_TestScheme_60_0011_step_86();

    // // Execute Fj_TestScheme_60_0011_step_87
    Fj_TestScheme_60_0011_step_87();

    // Execute Fj_TestScheme_60_0011_step_88
    Fj_TestScheme_60_0011_step_88();
  });
}

async function Fetch_Data() {
  it("Fetch Data", async () => {
    // Login
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
    // Get Application record ID
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

    // Get MNT record CreationDate
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c), CreatedDate")
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
            test_data.testData.reconfirmation_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time_0011 = record.CreatedDate;
            continue;
          }
        }
      });
    // Web Notification
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
            test_data.testData.reconfirmation_text ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt1_id = record.Id;
            continue;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_To_MyPage() {
  it("Login to MyPage", async () => {
    // Login to MyPage
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}
