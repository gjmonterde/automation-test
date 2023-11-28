const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-2");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0005_step_04: JICC結果(債権情報)」 JICC Results (Bond Information), 「JICC結果(ファイルM)」JICC Results (File M), " +
      "and 「JICC結果(注意M)」JICC Results (Note M) records should be created in the 関連リスト relevant list",
    async () => {
      const stepNum = "4"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "uic") {
        // login as tantou
        await parent.Login_as_tantou();
      }

      // Get JID Record
      await parent.Get_JID();

      // Go to JID record detail
      await parent.Open_JID();

      const headerBar_jid = await $(".//header[@id='oneHeader']");
      const tabheader_jid = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_jid = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // To view the JICC結果(ファイルM), JICC結果(債権情報) related list
      // Screenshot
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
          hideAfterFirstScroll: [headerBar_jid, tabheader_jid, highlights_jid],
          fullPageScrollTimeout: 1000,
        }
      );
    }
  );
}
