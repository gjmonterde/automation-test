const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0004-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0004_step_04: Bank examination (2) is prepared", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Go to EXM record
    await parent.Open_Record_URL(
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Scroll to view
    await util.Scroll_to_related_list(test_data.testData.sec_header);

    await browser.execute("document.body.style.zoom='80%'");

    const headerBar_exm = await $(".//header[@id='oneHeader']");
    const tabheader_exm = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_exm = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_exm, tabheader_exm, highlights_exm],
      }
    );
  });
}
