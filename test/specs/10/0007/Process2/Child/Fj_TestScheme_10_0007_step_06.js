const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_10_0007-2");

export default async function suite() {
  it("Fj_TestScheme_10_0007_step_06: The 保証審査結果 result of the warranty examination is 「否決」 'rejected.'", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Login to org as tantou1
    await parent.Login_User_In_Charge();

    // Go to GUD record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud_id1
    );

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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0007 +
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
