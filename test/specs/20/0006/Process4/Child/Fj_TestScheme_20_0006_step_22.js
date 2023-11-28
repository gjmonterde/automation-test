const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0006-4");

export default function suite() {
  it("Fj_TestScheme_20_0006_step_22: Check updated total for each section", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_As_Shinsa1_User();
    }
    // Go to TRR record detail screen
    await parent.Go_to_TRR();

    const trr_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const trr_headerBar = await $(".//header[@id='oneHeader']");
    const trr_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [trr_headerBar, trr_tabheader, trr_highlights],
      }
    );
  });
}
