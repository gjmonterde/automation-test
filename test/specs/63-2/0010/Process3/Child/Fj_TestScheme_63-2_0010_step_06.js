const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0010-3");

export default async function suite() {
  it("Fj_TestScheme_63-2_0010_step_06: Can check the contents of the uploaded file", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation
    
    // Go to RDC record
    await parent.Open_Record_URL(
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id_of_ver2
    );

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);
  });
}
