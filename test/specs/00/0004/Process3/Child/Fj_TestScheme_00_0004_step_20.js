const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_20: The results of the inquiry are generated as an 'audit information output result information' record", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    // ★ 新環境適用' New Env Implementation
    // Login as tantou
    await parent.Login_as_tantou();

    // Get CHI Record
    await parent.Get_CHI_Record();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to 審査情報出力結果情報 related list
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_CHI_Rel();

    // Screenshot
    const headerBar_rel = await $(".//header[@id='oneHeader']");
    const tabheader_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
      }
    );

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.chi_id_arr.length > 0) {
      // ★ 新環境適用' New Env Implementation
      let ssno = 1;
      for (var i = 0; i < test_data.testData.chi_id_arr.length; i++) {
        // Go to CHI record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_CHI(test_data.testData.chi_id_arr[i]);

        // Screenshot
        const highlights2 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar2 = await $(".//header[@id='oneHeader']");
        const tabheader2 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        ssno = ssno + 1;
        // ★ 新環境適用' New Env Implementation
        await browser.saveFullPageScreen(
          user_info.userInformation.screenshot +
            test_data.testData.spec00 +
            "_" +
            test_data.testData.tab0004 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          }
        );
      }
    }
  });
}
