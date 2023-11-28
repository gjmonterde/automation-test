const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0005-2");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_13: A JICC結果(ファイルM) レコード JICC result (file M) record is created in the 関連リスト related list", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "13";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Login_as_Tantou1();
    }

    // Get JID Records
    await parent.JID_New_Record();

    // Go to TRR record detail
    await parent.Open_Salesforce_TRR_Record();

    // Go to JID record detail
    await parent.Open_Salesforce_JID_Record();

    const headerBar_jid = await $(".//header[@id='oneHeader']");
    const tabheader_jid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // To view the JICC結果(ファイルM) related list
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
  });
}
