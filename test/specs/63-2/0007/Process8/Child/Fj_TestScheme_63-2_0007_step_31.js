const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0007-8");

export default function suite() {
  it("Fj_TestScheme_63-2_0007_step_31: When the 保証審査③ Warranty Examination(3) is an 承認 approval or 条件付き承認 conditional approval and the 審査結果優先度 review result priority has the 最大 highest", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to GUA record
    await parent.Open_Record_URL(
      user_info.object.gua_obj,
      test_data.testData.gua_id
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
        test_data.testData.tab0007 +
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
