var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0004_step_24_data: You can see the スコアリングに必要な情報レコードinformation records required" +
      "for scoring from the 関連リスト related list (Data Linkage)",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "24";

      // Login as admin
      await parent.Login_as_admin();

      // Open INI-3 record detail
      await parent.Open_INI_3rd_Record();

      // Take 銀行審査 page screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await $(".//*[@class='main-container slds-grid']").$(function () {
        var left = document.getElementsByClassName("col left-col slds-col"),
          middle = document.getElementsByClassName("col main-col slds-col"),
          right = document.getElementsByClassName("col right-col slds-col");
        var height = Math.max(
          left.offsetHeight,
          middle.offsetHeight,
          right.offsetHeight
        );
        this.style = "height:" + height + "px!important";
      });
      await browser.pause(20000);
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-1" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 6000,
        }
      );
      await browser.pause(3000);

      // JSForce connection
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

      var update_fj_InitialChk__c_id3 = test_data.testData.ini3_id;

      // AML等チェック結果情報 Record Manual Creation
      await conn.sobject("FJ_AMLSCheck__c").create(
        {
          fj_InitialChk__c: update_fj_InitialChk__c_id3,
          fj_HasLoanTransaction__c: test_data.testData.has_loan_transaction,
        },
        function (err, ret) {
          if (err || !ret.success) {
            return console.error(err, ret);
          }
          console.log("Created record id : " + ret.id);
        }
      );

      // Refresh browser
      await browser.refresh();
      await browser.pause(10000);

      // Get ASC Record
      await parent.Get_ASC_Record();

      // Take 銀行審査 page screenshot
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await $(".//*[@class='main-container slds-grid']").$(function () {
        var left = document.getElementsByClassName("col left-col slds-col"),
          middle = document.getElementsByClassName("col main-col slds-col"),
          right = document.getElementsByClassName("col right-col slds-col");
        var height = Math.max(
          left.offsetHeight,
          middle.offsetHeight,
          right.offsetHeight
        );
        this.style = "height:" + height + "px!important";
      });
      await browser.pause(20000);
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 6000,
        }
      );
      await browser.pause(3000);

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.asc_id_arr.length > 0) {
        // ★ 新環境適用' New Env Implementation
        let ssno = 2;
        for (var i = 0; i < test_data.testData.asc_id_arr.length; i++) {
          // Go to ASC record
          // ★ 新環境適用' New Env Implementation
          await parent.Go_to_ASC(test_data.testData.asc_id_arr[i]);

          // Screenshot
          const highlights2 = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar2 = await $(".//header[@id='oneHeader']");
          const tabheader2 = await $(
            ".//div[@class='slds-no-print oneAppNavContainer']"
          );
          ssno = ssno + 1;
          // ★ 新環境適用' New Env Implementation
          await browser.saveFullPageScreen(
            user_info.userInformation.screenshot +
              test_data.testData.spec00 +
              "_" +
              test_data.testData.tab0004 +
              "_" +
              stepNum +
              "-" +
              ssno,
            {
              hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
            }
          );
        }
      }
    }
  );
}
