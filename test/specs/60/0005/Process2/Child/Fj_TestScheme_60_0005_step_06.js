const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0005-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0005_step_06: JICC結果(債権情報), JICC結果(ファイルM), JICC結果(注意M) records are created in relevant list", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Get JID Records
    await parent.JID_New_Record();

    // Login as Tantou1
    await parent.Login_as_Tantou1();

    // Go to JID record detail
    await parent.Open_Salesforce_JID_Record();

    const headerBar_jid = await $(".//header[@id='oneHeader']");
    const tabheader_jid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // To view the JICC結果(ファイルM), JICC結果(債権情報) related list
    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_jid, tabheader_jid, highlights_jid],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // ★ 新環境適用' New Env Implementation
    // Get JIM Records
    await parent.JIM_New_Records();
    let ssno = 1;
    for (var i = 0; i < test_data.testData.jim_id_arr.length; i++) {
      // Go to JICC結果(ファイルM) (JIM) record(1) detail screen
      // To view the JICC結果(注意M) related list
      await parent.Open_JIM(test_data.testData.jim_id_arr[i]);

      const headerBar_jim = await $(".//header[@id='oneHeader']");
      const tabheader_jim = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_jim = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1;
      // Take screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0005 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar_jim, tabheader_jim, highlights_jim],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  });
}
