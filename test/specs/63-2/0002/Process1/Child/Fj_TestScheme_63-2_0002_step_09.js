const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0002-1");

export default async function suite() {
  it("Fj_TestScheme_63-2_0002_step_09: All files uploaded from the application form must be registered in the request form", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // Go to RDC of VER1 record
    await parent.Open_Record_URL(
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id_of_ver1
    );

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);
  });
}
