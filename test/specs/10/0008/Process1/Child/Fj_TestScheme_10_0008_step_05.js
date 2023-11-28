// ★ 新環境適用' New Env Implementation
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0008_step_05: A PDF of the 'Application Form for Inquiry Against Company' is created in the memo and attached file.", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Go to STT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.stt_obj,
      test_data.testData.stt_id
    );

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
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [stt_headerBar, stt_tabheader, stt_highlights],
      }
    );
    await browser.pause(2000);
  });
}
