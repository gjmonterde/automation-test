const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_25: The inquiry result is created as a 「貸出共通明細」 Lending Common Line record", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "uic") {
      // login as tantou
      await parent.Login_as_tantou();
    }
    // Get LCD Record
    await parent.Get_LCD_Record();

    // Go to INI record
    await parent.Go_to_INI();

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    var ssno = 1;
    for (var i = 0; i < test_data.testData.lcd_id_arr.length; i++) {
      // Go to LCD record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.lcd_obj,
        test_data.testData.lcd_id_arr[i]
      );

      ssno = ssno + 1;
      // Screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New records
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(5000);
    }
  });
}
