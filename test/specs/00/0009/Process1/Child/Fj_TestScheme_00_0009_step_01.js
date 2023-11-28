const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0009-1");

export default function suite() {
  it("Fj_TestScheme_00_0009_step_01: Check status of 書類確認② document check (2) =「確認中」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "1";

    // ★ 新環境適用' New Env Implementation
    // Login as tantou
    await parent.Login_as_Tantou1();

    // Go to CNT Record
    await parent.Open_CNT_Record();

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
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
