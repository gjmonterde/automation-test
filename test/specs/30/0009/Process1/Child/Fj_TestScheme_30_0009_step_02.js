const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0009-1");

export default async function suite() {
  it("Fj_TestScheme_30_0009_step_02: 確認 Check status of 書類確認②document check (2).", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "2";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou User
      await parent.Login_As_User_In_Charge();
    }

    // ★ 新環境適用' New Env Implementation
    // Go to 契約手続き detail page
    await parent.Go_to_CNT();

    // Take screenshot CL Origination
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
