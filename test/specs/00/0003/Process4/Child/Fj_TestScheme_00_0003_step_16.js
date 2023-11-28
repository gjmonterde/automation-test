const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-4");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_16: Same person inquiry status is 'Failed to refer to the same person'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Data_Login_as_Tantou1();
    }

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    const headerBar_ddp = await $(".//header[@id='oneHeader']");
    const tabheader_ddp = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_ddp = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_ddp, tabheader_ddp, highlights_ddp],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
