const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-1"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0011_step_05: メール通知.送信要否 Email notification. Send required = 送信しない　Do not send", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Go to WebNotif related list
    await parent.Go_to_WNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - お知らせ related list screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to MailNotif related list
    await parent.Go_to_MNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - メール通知 related list screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Go to MNT record
    await parent.Go_to_MNT1(); // ★ 新環境適用' New Env Implementation

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
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
