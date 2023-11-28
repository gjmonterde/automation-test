const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0007_step_09: The following item values must be set: 保証審査結果(保証会社①)＝保証審査詳細(保証審査①).保証審査結果", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // Go to GUA Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gua_obj,
      test_data.testData.gua_id
    );

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Go to GUD Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud_id
    );

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
  });
}
