const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0009-1");

export default async function suite() {
  it("Fj_TestScheme_70_0009_step_01: 確認 Check status of document check (2) =「確認中」 Checking", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "1";

    if (test_data.testData.logged_status != "uic") {
      // login as tantou
      await parent.Login_as_tantou();
    }
    // Go to CNT page
    await parent.Go_To_CNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - CNT record
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
  });
}
