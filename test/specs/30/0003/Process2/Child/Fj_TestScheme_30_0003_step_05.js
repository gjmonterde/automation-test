const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0003-2");

export default function suite() {
  it("Fj_TestScheme_30_0003_step_05: The 審査 examination status of the 審査 examination is 「同一人照会」refer to the same person・同一人照会 (CIF明細選択) Same person inquiry (CIF line selection) is created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // ★ 新環境適用' New Env Implementation
    // Go to EXM related record
    await parent.Go_to_EXM();

    // Screenshot variables
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot EXM related record
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
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
