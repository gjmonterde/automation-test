const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-6");

export default async function suite() {
  it("Fj_TestScheme_00_0004_step_66: 審査.審査ステータスAward. The award status should be 「審査完了」Award Complete", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "66";

    // Go to EXM Record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_EXM();

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
