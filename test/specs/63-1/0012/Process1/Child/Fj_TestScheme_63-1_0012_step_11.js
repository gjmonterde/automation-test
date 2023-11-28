const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0012-1");

export default function suite() {
  it("Fj_TestScheme_63-1_0012_step_11: 1 実行依頼データ submission data item of record type「13_普通預金_貸越契約」contract has been created", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Go to Exec List Result Records
    await parent.Open_ER_List();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Empty er_id for new data
    test_data.testData.er_id = "";

    // Get 13_普通預金_貸越契約 ER record
    await parent.Get_ER_Record(-1);

    // Go to ER record
    await parent.Open_ER_Record(test_data.testData.er_id);

    // Screenshot - 実行依頼データ record
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);
  });
}
