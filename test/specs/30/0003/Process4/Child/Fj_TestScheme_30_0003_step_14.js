const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0003-4");

export default function suite() {
  it("Fj_TestScheme_30_0003_step_14: The 一致チェック結果一覧 Match Check Result List component is not displayed・同一人照会 Same person inquiry status is 「自動OK」Auto OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "14";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await parent.Login_as_Tantou1();
    }

    // ★ 新環境適用' New Env Implementation
    // Go to 2nd DDP related record
    await parent.Go_to_DDP();

    // Screenshot DDP
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
