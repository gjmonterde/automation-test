const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0008-1");

export default async function suite() {
  it("Fj_TestScheme_63-2_0008_step_03: 反社照会関連リスト The anti-social inquiry related list is displayed", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Go to CNT record
    await parent.Open_Record_URL(
      user_info.object.cnt_obj,
      test_data.testData.cnt_id
    );

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0008 +
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
