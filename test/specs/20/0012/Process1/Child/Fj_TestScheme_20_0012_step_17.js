const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0012-1");

export default async function suite() {
  it("Fj_TestScheme_20_0012_step_17: Submit data of record type「21_カードローン口座閉鎖」 is created acoording to the number of  貸出共通明細（既貸回収flag＝TRUE　and　科目コード＝48", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "17";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_As_Tantou1_User();
    }

    // Direct link 実行依頼データ (Submission Data)
    await parent.Go_to_ExecRequest_Related();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to 3rd INI Record LCD related
    await parent.Go_to_LCD_Related();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );

    var ssno = 2;
    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.lcd44_id_arr.length > 0) {
      for (var i = 0; i < test_data.testData.lcd44_id_arr.length; i++) {
        // Go to LCD record
        await parent.Go_to_LCD(test_data.testData.lcd44_id_arr[i]);

        ssno = ssno + 1;
        // Screenshot
        const headerBar = await $(".//header[@id='oneHeader']");
        const tabheader = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        const highlights = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        await browser.saveFullPageScreen(
          user_info.userInformation.screenshot +
            test_data.testData.spec20 +
            "_" +
            test_data.testData.tab0012 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar, tabheader, highlights],
            fullPageScrollTimeout: 3000,
          }
        );
      }
    }
  });
}
