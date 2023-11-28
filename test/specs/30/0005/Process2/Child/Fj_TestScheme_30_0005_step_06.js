const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0005-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_30_0005_step_06: JICC結果(債権情報), JICC結果(ファイルM), JICC結果(注意M) records are created in relevant list", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // Get JID Records
    await parent.JID_New_Record();

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Login_as_Tantou1();
    }

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
        test_data.testData.spec30 +
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

    // Go to JICC結果(債権情報) related list - all records
    const jib_rel_list = await $(
      ".//span[contains(.,'" + test_data.testData.jid_rel_list_jib + "')]"
    );
    await jib_rel_list.scrollIntoView();
    await jib_rel_list.waitForClickable({ timeout: 10000 });
    await jib_rel_list.click();
    await browser.pause(5000);

    const headerBar_jib_rel = await $(".//header[@id='oneHeader']");
    const tabheader_jib_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // To view all JICC結果(債権情報) records
    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_jib_rel, tabheader_jib_rel],
        fullPageScrollTimeout: 3000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Get JIM Records
    await parent.JIM_New_Record();
    let ssno = 2;
    for (var i = 0; i < test_data.testData.jim_id_arr.length; i++) {
      // Go to JICC結果(ファイルM) (JIM) record(1) detail screen
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
          test_data.testData.spec30 +
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
