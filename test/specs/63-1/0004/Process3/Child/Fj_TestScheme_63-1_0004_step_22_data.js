var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_22_data: Create ASC Record manually (Data Linkage)", async () => {
    const stepNum = "22"; // ★ 新環境適用' New Env Implementation

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
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
    await browser.pause(10000);

    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_before, tabheader_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Create records
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

    // [ASC] AML等チェック結果情報 Record Manual Creation(1)
    await conn.sobject("FJ_AMLSCheck__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_TransactionBanCode__c: test_data.testData.transaction_ban_code1,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [ASC] AML等チェック結果情報 Record Manual Creation(2)
    await conn.sobject("FJ_AMLSCheck__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_TransactionBanCode__c: test_data.testData.transaction_ban_code2,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // Refresh browser
    browser.refresh();
    await browser.pause(5000);

    // Get ASC Record
    await parent.Get_ASC_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.asc_array = test_data.testData.asc_array.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
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
    await browser.pause(10000);

    // Screenshot - After Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );

    // Loop through the array to determine ASC records
    for (var asc = 0; asc < test_data.testData.asc_array.length; asc++) {
      var record = test_data.testData.asc_array[asc];

      // Go to ASC record
      await util.Open_SF_Record_URL(1, user_info.object.amlsc_obj, record.Id);

      var screenshotCountASC = 3 + asc;

      const headerBar_asc = await $(".//header[@id='oneHeader']");
      const tabheader_asc = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_asc = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New records
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          screenshotCountASC +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar_asc, tabheader_asc, highlights_asc],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
