const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0003-2");

export default function suite() {
  it("Fj_TestScheme_63-2_0003_step_04: 同一人照会（自動(CIF明細取得)) Same person inquiry is created", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Go to DDP record
    await parent.Open_Record_URL(
      user_info.object.ddp_obj,
      test_data.testData.ddp1_id
    );

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0003 +
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
