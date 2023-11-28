const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0002_step_06:「徴求書類」Requested document shall be prepared", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Go to VER page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver_id2
    );

    // Scroll to view RDC
    await util.Scroll_to_related_list(test_data.testData.history_header);

    // Screenshot - VER record
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
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to PRO page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.pro_obj,
      test_data.testData.pro_id
    );

    // Scroll Requisition document settings into view
    const header = await $(
      ".//span[contains(., '" +
        test_data.testData.pro_pref_interest_rate2_lbl +
        "')]"
    );
    // ★ 新環境適用' New Env Implementation
    await header.$(function () {
      this.scrollIntoView();
    });
    await browser.pause(10000);

    // Screenshot - PRO record
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
