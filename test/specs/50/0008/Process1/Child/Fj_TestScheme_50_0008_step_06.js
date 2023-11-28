const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0008_step_06: 帳票 record is created", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Go to STT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.stt_obj,
      test_data.testData.stt_id
    );

    // Screenshot - 帳票 Screen
    const stt_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const stt_headerBar = await $(".//header[@id='oneHeader']");
    const stt_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [stt_headerBar, stt_tabheader, stt_highlights],
      }
    );
  });
}
