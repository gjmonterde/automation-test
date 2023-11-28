const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0007-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0007_step_13: Check 帳票レコード document records.", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Login as Admin
    await parent.Login_Admin();

    // Go to 帳票 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.stt_obj,
      test_data.testData.stt_id
    );

    // Take screenshot CL Origination
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
        test_data.testData.spec50 +
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
