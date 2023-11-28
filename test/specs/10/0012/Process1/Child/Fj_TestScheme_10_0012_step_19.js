const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0012_step_19: 振込先口座番号 payee account number is displayed on the screen and the value of 申込.返済用銀行口座.口座番号 application.bank account for repayment.account number is set", async () => {
    const stepNum = "19"; // ★ 新環境適用' New Env Implementation

    // Loop through the array to determine how many BA records
    for (var ba = 0; ba < test_data.testData.ba_array.length; ba++) {
      var record = test_data.testData.ba_array[ba];

      // Open 銀行口座 record
      await util.Open_SF_Record_URL(1, user_info.object.ba_obj, record.Id);

      var screenshotCountBA = 1 + ba;

      // Screenshot - 銀行口座 record
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
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

      var screenshotCountER = 1 + test_data.testData.ba_array.length + er;

      // Screenshot - 実行依頼データ record
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-" +
          screenshotCountER,
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );
    }
  });
}
