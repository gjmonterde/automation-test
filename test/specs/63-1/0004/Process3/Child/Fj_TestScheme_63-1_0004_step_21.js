const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_21: The query results are created as Information Required for Scoring records", async () => {
    const stepNum = "21"; // ★ 新環境適用' New Env Implementation

    // Get SCI Record
    await parent.Get_SCI_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.sci_array = test_data.testData.sci_array.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to SCI related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_chi_rel,
      test_data.testData.ini3_id,
      user_info.object.ini_sci_rel
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

    // Loop through the array to determine SCI records
    for (var sci = 0; sci < test_data.testData.sci_array.length; sci++) {
      var record = test_data.testData.sci_array[sci];

      // Go to SCI record
      await util.Open_SF_Record_URL(1, user_info.object.sci_obj, record.Id);

      var screenshotCountSCI = 2 + sci;

      const headerBar_sci = await $(".//header[@id='oneHeader']");
      const tabheader_sci = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_sci = await $(
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
          screenshotCountSCI,
        {
          hideAfterFirstScroll: [headerBar_sci, tabheader_sci, highlights_sci],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
