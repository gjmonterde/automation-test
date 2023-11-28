const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0003-2");

export default async function suite() {
  it("Fj_TestScheme_62_0003_step_05: The 審査 examination status of the 審査 examination is 「同一人照会」same person inquiry", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Go to EXM record detail screen
    await parent.Go_to_EXM(); // ★ 新環境適用' New Env Implementation

    // Screenshot - EXM record
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
