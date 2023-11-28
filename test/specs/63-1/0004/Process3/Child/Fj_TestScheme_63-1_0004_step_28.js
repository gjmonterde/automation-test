const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_28: Query results are created as the following records: CABI, CABF, BLA, CLA", async () => {
    const stepNum = "28"; // ★ 新環境適用' New Env Implementation

    // Get CABI record
    await parent.Get_CABI_Record();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to CABI related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_cabi_rel
    );

    // Screenshot
    const headerBar_cabi_rel = await $(".//header[@id='oneHeader']");
    const tabheader_cabi_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_cabi_rel, tabheader_cabi_rel],
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
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_cabi, tabheader_cabi, highlights_cabi],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Get CABF record
    await parent.Get_CABF_Record();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to CABF related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_cabf_rel
    );

    // Screenshot
    const headerBar_cabf_rel = await $(".//header[@id='oneHeader']");
    const tabheader_cabf_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar_cabf_rel, tabheader_cabf_rel],
      }
    );

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
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_cabf, tabheader_cabf, highlights_cabf],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Get BLA record
    await parent.Get_BLA_Record();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to BLA related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_bla_rel
    );

    // Screenshot
    const headerBar_bla_rel = await $(".//header[@id='oneHeader']");
    const tabheader_bla_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar_bla_rel, tabheader_bla_rel],
      }
    );

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
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-6",

      {
        hideAfterFirstScroll: [headerBar_bla, tabheader_bla, highlights_bla],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Get BLA record
    await parent.Get_CLA_Record();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to CLA related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_cla_rel
    );

    // Screenshot
    const headerBar_cla_rel = await $(".//header[@id='oneHeader']");
    const tabheader_cla_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar_cla_rel, tabheader_cla_rel],
      }
    );

    // Go to CLA record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_cla_rel,
      test_data.testData.cla_id
    );

    const headerBar_cla = await $(".//header[@id='oneHeader']");
    const tabheader_cla = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_cla = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-8",

      {
        hideAfterFirstScroll: [headerBar_cla, tabheader_cla, highlights_cla],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
