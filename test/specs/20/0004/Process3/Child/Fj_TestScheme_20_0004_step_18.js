const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_18: The results of the inquiry are generated as an 「審査情報出力結果情報」 audit information output result information record", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await parent.Login_User_In_Charge();
    }

    // Get CHI record
    await parent.Get_CHI();

    // Go to 審査情報出力結果情報 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.chi_obj,
      test_data.testData.chi_id
    );

    // Take 審査情報出力結果情報 screenshot
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
