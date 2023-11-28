const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0010_step_03: All 徴求書類 requested document statuses must be「未提出」'Not Submitted'.", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Loop through RDC records
    let ssno = 0;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC VER2 record detail screen
      await util.Open_SF_Record_URL(
        1,
        user_info.object.rdc_obj,
        test_data.testData.rdc_id_arr[i]
      );

      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      ssno = ssno + 1;
      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [highlights1, headerBar1, tabheader1],
        }
      );
      await browser.pause(3000);
    }
  });
}
