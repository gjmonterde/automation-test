const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0005_step_11: 審査.外信照会 examination.External Credit inquiry Status is 「実施済OK」 Performed OK", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "uic") {
      // login as tantou
      await parent.Login_as_tantou();
    }
    // Go to EXM page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Scroll into view 外信照会
    await util.Scroll_to_related_list(test_data.testData.bankexam_header);

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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
