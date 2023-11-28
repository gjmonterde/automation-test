const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0012-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0012_step_18: Submit data of record type「23_振込伝票」corresponding to the number of bank accounts 銀行口座（振込先flag＝TRUE）has been created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_As_Tantou1_User();
    }

    // Go to ER related list
    await parent.Go_to_ExecRequest_Related();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to 銀行口座 related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_ba_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );

    // Loop through the array to determine how many BA records
    for (var ba = 0; ba < test_data.testData.ba_array.length; ba++) {
      var record = test_data.testData.ba_array[ba];

      // Open 銀行口座 record
      await util.Open_SF_Record_URL(1, user_info.object.ba_obj, record.Id);

      var screenshotCountBA = 3 + ba;
      // Screenshot - 銀行口座 record
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA,
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );
    }

    // Loop through the array to determine how many ER records
    for (var er = 0; er < test_data.testData.er_array.length; er++) {
      var record = test_data.testData.er_array[er];

      // Go to 実行依頼データ record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.execrequest_obj,
        record.Id
      );

      var screenshotCountER = 3 + test_data.testData.ba_array.length + er;

      // Screenshot - 実行依頼データ record
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-" +
          screenshotCountER,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );
    }
  });
}
