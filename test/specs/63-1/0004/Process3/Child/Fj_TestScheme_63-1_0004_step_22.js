const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_22: The inquiry result is created as an 'AML check result information' record", async () => {
    const stepNum = "22"; // ★ 新環境適用' New Env Implementation

    // Get ASC Record
    await parent.Get_ASC_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.asc_array = test_data.testData.asc_array.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to ASC related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_aml_rel
    );

    await browser.pause(7000);

    // Screenshot
    const headerBar_rel = await $(".//header[@id='oneHeader']");
    const tabheader_rel = await $(
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
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
      }
    );

    // Loop through the array to determine ASC records
    for (var asc = 0; asc < test_data.testData.asc_array.length; asc++) {
      var record = test_data.testData.asc_array[asc];

      // Go to ASC record
      await util.Open_SF_Record_URL(1, user_info.object.amlsc_obj, record.Id);

      var screenshotCountASC = 2 + asc;

      const headerBar_asc = await $(".//header[@id='oneHeader']");
      const tabheader_asc = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_asc = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          screenshotCountASC,
        {
          hideAfterFirstScroll: [headerBar_asc, tabheader_asc, highlights_asc],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
