const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_22: The query results are created as Information Required for Scoring records", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

    // ★ 新環境適用' New Env Implementation
    // Login as tantou
    await parent.Login_as_tantou();

    // Get SCI Record
    await parent.Get_SCI_Record();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to SCI related list view
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_SCI_Rel();

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
    if (test_data.testData.sci_id_arr.length > 0) {
      // ★ 新環境適用' New Env Implementation
      let ssno = 1;
      for (var i = 0; i < test_data.testData.sci_id_arr.length; i++) {
        // Go to SCI record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_SCI(test_data.testData.sci_id_arr[i]);

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
