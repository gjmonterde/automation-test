const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_30: The inquiry result is created as a Lending Common Line record", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "30";

    // ★ 新環境適用' New Env Implementation
    // Login as tantou
    await parent.Login_as_tantou();

    // Get LCD Record
    await parent.Get_LCD_Record();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to LCD related list view
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_LCD_Rel();

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
    if (test_data.testData.lcd_id_arr.length > 0) {
      // ★ 新環境適用' New Env Implementation
      let ssno = 1;
      for (var i = 0; i < test_data.testData.lcd_id_arr.length; i++) {
        // Go to LCD record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_LCD(test_data.testData.lcd_id_arr[i]);

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
            ssno +
            test_data.testData.data,
          {
            hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          }
        );
      }
    }
  });
}
