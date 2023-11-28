const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_20: The results of the inquiry are generated as an 'audit information output result information' record", async () => {
    const stepNum = "20"; // ★ 新環境適用' New Env Implementation

    // Get CHI Record
    await parent.Get_CHI_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.chi_array = test_data.testData.chi_array.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to CHI related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_chi_rel
    );

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

    // Loop through the array to determine CHI records
    for (var chi = 0; chi < test_data.testData.chi_array.length; chi++) {
      var record = test_data.testData.chi_array[chi];

      // Go to CHI record
      await util.Open_SF_Record_URL(1, user_info.object.chi_obj, record.Id);

      var screenshotCountCHI = 2 + chi;

      const headerBar_chi = await $(".//header[@id='oneHeader']");
      const tabheader_chi = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_chi = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          screenshotCountCHI,
        {
          hideAfterFirstScroll: [headerBar_chi, tabheader_chi, highlights_chi],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
