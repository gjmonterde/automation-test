const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0003-4");

export default function suite() {
  it("Fj_TestScheme_63-1_0003_step_13: Same person inquiry status is 'Failed to refer to the same person'", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Login as Tantou1
    await parent.Data_Login_as_Tantou1();

    // Go to DDP record
    await parent.Open_SF_DDP_Record();

    const headerBar_ddp = await $(".//header[@id='oneHeader']");
    const tabheader_ddp = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_ddp = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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
