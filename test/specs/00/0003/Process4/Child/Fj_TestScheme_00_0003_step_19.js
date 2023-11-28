const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-4");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_19: 同一人照会ステータス　Same person inquiry status is「自動OK」'Auto OK'.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "19";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Data_Login_as_Tantou1();
    }

    // Go to BA record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_BA();

    const headerBar_ba = await $(".//header[@id='oneHeader']");
    const tabheader_ba = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_ba = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_ba, tabheader_ba, highlights_ba],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
