const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-20"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0011_step_86: メール通知.送信要否Email notification. Send required = 送信しないDo not send", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "86";

    // Go to MNT record
    await parent.Go_to_MNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - MNT record
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
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
