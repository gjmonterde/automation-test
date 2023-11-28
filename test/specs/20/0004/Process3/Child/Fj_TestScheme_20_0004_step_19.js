const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_19: The query results are created as 「スコアリングに必要な情報」 Information Required for Scoring records.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "19";

    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await parent.Login_User_In_Charge();
    }

    // Get SCI
    await parent.Get_SCI();

    // Go to スコアリングに必要な情報 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.sci_obj,
      test_data.testData.sci_id
    );

    // Take スコアリングに必要な情報 screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
