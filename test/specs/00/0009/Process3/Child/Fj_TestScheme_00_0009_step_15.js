const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0009-3");

export default async function suite() {
  it("Fj_TestScheme_00_0009_step_15: メール通知.送信要否　Email notification. Send required =送信しない Do not send", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "15";

    // Get MNT, WNT record
    await parent.Get_WNT_MNT_Records(); // ★ 新環境適用' New Env Implementation

    // Go to MNT record
    await parent.Open_WNT_Record(); // ★ 新環境適用' New Env Implementation

    // Screenshot
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
