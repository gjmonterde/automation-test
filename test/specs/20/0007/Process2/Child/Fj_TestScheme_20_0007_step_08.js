const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0007-2");

export default async function suite() {
  it("Fj_TestScheme_20_0007_step_08: The 保証審査結果result of the warranty examination is 「否決」 'rejected.'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }
    // Go to GUD record page
    await parent.Go_to_GUD();

    // Take screenshot CL Origination Edit Page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
