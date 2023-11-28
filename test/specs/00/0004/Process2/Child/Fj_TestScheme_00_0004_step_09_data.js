var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-2");

export default async function suite() {
  it("Fj_TestScheme_00_0004_step_09_data: Manual creation of クレジットカード連携結果情報 record (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "9";

    // Login as admin
    await parent.Login_as_admin();

    // Go to INI Record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_INI2(1);

    // Screenshot (before record creation)
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

    // Jsforce connection
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

    var update_fj_InitialChk__c_id2 = test_data.testData.ini_id;
    var crc_has_credit1_value = test_data.testData.isTrue;
    var crc_has_credit2_value = test_data.testData.isFalse;

    // [CRC] クレジットカード連携結果情報 Record Manual Creation
    await conn.sobject("FJ_CreditCard__c").create(
      {
        fj_InitialChk__c: update_fj_InitialChk__c_id2,
        fj_HasCreditCard__c: crc_has_credit1_value,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );
    await conn.sobject("FJ_CreditCard__c").create(
      {
        fj_InitialChk__c: update_fj_InitialChk__c_id2,
        fj_HasCreditCard__c: crc_has_credit2_value,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );
    await browser.pause(3000);

    // Go to INI Record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_INI2(1);

    // Screenshot (after record creation)
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
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 6000,
      }
    );

    // Logout
    await parent.Logout();
  });
}
