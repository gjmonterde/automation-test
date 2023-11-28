const user_info = require("../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-2");

export default async function suite() {
  it("Fj_TestScheme_00_0007_step_05: The 保証審査結果result of the assurance review is 「承認」'Approved'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Login as tantou
    await parent.Login_User_In_Charge();

    // Go to related 保証審査詳細 Detail Screen
    await parent.Open_GUD_Record();

    // Take screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
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
    await browser.pause(2000);
  });
}
