const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0007-2"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0007_step_10: The 保証審査結果result of the warranty examination is 「否決」 'rejected.'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

    // ★ 新環境適用' New Env Implementation
    // Login to org as tantou1
    await parent.Login_User_In_Charge();

    // Go to GUD record page
    await parent.Open_GUD_Record(); // ★ 新環境適用' New Env Implementation

    // Take screenshot CL Origination Edit Page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // ★ 新環境適用' New Env Implementation
    // Take screenshot of GUD
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
