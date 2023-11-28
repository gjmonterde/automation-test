const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0008-1");

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  it("Fj_TestScheme_00_0008_step_13: The 反社照会関連リストanti-social inquiry related list is displayed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "13";

    // Go to CNT record
    await parent.Open_CNT_Record();

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
  });
}
