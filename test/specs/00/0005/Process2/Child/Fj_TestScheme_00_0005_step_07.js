const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0005-2");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_07: A JICC照会明細(他機関)レコード JICC inquiry detail (other organization) record is created in the 関連リスト relevant list of the 借入明細情報一覧", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "7";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Login_as_Tantou1();
    }

    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    const headerBar_trr = await $(".//header[@id='oneHeader']");
    const tabheader_trr = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_trr = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // To view the JICC照会明細(他機関) related list
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
        hideAfterFirstScroll: [headerBar_trr, tabheader_trr, highlights_trr],
      }
    );
    await browser.pause(2000);
  });
}
