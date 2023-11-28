const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-4");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_23: The inquiry result is created as 「貸出共通明細」 Lending Common Line record.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "23";

    // Login to org as tantou1
    await parent.Login_User_In_Charge();

    // Get LCD record
    await parent.Get_LCD();

    // Go to 貸出共通明細 related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_lcd_rel
    );

    // Take screenshot of AML等チェック結果情報 detail page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Loop through LCD records
    let ssno = 1;
    for (var i = 0; i < test_data.testData.lcd_id_arr.length; i++) {
      // Go to 貸出共通明細 detail page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.lcd_obj,
        test_data.testData.lcd_id_arr[i]
      );

      ssno = ssno + 1;
      // Take screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
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
  });
}
