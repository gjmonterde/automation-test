const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_04: The application form will change and the product name will be displayed", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Get CLI record
    await parent.Get_CLI_Record();

    // Login as tantou1
    await parent.Login_as_Tantou1();

    // Go to CLI Record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cli_obj,
      test_data.testData.cli_id
    );

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
