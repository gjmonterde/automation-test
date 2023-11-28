const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-2");

export default async function suite() {
  it("Fj_TestScheme_00_0007_step_06: The 保証審査結果 result of the assurance review is 「承認」'Approved'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // Login to org as tantou1
    await parent.Login_User_In_Charge();

    // Go to GUD record page
    await parent.Open_GUD_Record();

    // Take screenshot CL Origination Edit Page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    // Take screenshot CL Origination
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
    await browser.pause(3000);
  });
}
