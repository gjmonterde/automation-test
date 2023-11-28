const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0003-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0003_step_13: Same person inquiry status is「自動OK」Auto OK", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Login to org - tantou1
    await parent.Login_as_tantou();

    // Go to DDP Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ddp_obj,
      test_data.testData.ddp_id
    );

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
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
