const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0005_step_10: External Credit inquiry (2) is made", async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "uic") {
      // login as tantou
      await parent.Login_as_tantou();
    }
    // Go to EXM page
    await parent.Open_EXM_SF_Record();

    // Scroll into view 外信照会
    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.bankexam_header);

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
