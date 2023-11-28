const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0004_step_28: Query results are created as the following records 「預かり資産残高（仲介）」, 「カードローン口座情報」, " +
      "「預かり資産残高（外貨預金）」, 「融資基本口座」",
    async () => {
      const stepNum = "28"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "uic") {
        // login as tantou
        await parent.Login_as_tantou();
      }
      // Get CABI Record
      await parent.Get_CABI_Record();
      // Get CABF Record
      await parent.Get_CABF_Record();
      // Get BLA Record
      await parent.Get_BLA_Record();
      // Get CLA Record
      await parent.Get_CLA_Record();

      // Go to INI record
      await parent.Go_to_INI();

      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
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
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
        }
      );

      // Go to CABI record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.cabi_obj,
        test_data.testData.cabi_id
      );

      const headerBar_cabi = await $(".//header[@id='oneHeader']");
      const tabheader_cabi = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cabi = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New record
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [
            headerBar_cabi,
            tabheader_cabi,
            highlights_cabi,
          ],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(5000);

      // Go to CABF record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.cabf_obj,
        test_data.testData.cabf_id
      );

      const headerBar_cabf = await $(".//header[@id='oneHeader']");
      const tabheader_cabf = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cabf = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New record
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [
            headerBar_cabf,
            tabheader_cabf,
            highlights_cabf,
          ],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(5000);

      // Go to BLA record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.bla_obj,
        test_data.testData.bla_id
      );

      const headerBar_bla = await $(".//header[@id='oneHeader']");
      const tabheader_bla = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_bla = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New record
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar_bla, tabheader_bla, highlights_bla],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(5000);

      // Go to CLA record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.cla_obj,
        test_data.testData.cla_id
      );

      const headerBar_cla = await $(".//header[@id='oneHeader']");
      const tabheader_cla = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cla = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New record
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-5",
        {
          hideAfterFirstScroll: [headerBar_cla, tabheader_cla, highlights_cla],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(5000);
    }
  );
}
