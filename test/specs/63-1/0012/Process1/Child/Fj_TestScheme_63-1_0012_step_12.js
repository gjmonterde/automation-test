const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0012-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0012_step_12: 1 実行依頼データ submission data item of record type「13_普通預金_貸越契約」contract has been created", async () => {
    const stepNum = "12"; // ★ 新環境適用' New Env Implementation

    // Go to ER List Result Records
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
    await parent.Get_ER_Record(1);

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

    // Go to LCD related list view
    await parent.Open_LCD_List();

    // Sort - ascending order
    const sort_col = await $(
      ".//a[contains(., '" + test_data.testData.lcd_sort + "')]"
    );
    var sort = await sort_col.nextElement().getText();
    while (sort != test_data.testData.sort_app_asc) {
      await sort_col.click();
      await browser.pause(1000);
      sort = await sort_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.sort_app_asc);

    // Deselect the hover/selected fields
    await util.Deselect_fields(6);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);

    // Empty array
    test_data.testData.lcd_array1 = [];

    // Get LCD records
    await parent.Get_LCD_Record(test_data.testData.refund_flag_api, "12");

    // Loop through the array to determine LCD records
    for (var lcd = 0; lcd < test_data.testData.lcd_array1.length; lcd++) {
      var record = test_data.testData.lcd_array1[lcd];

      // Go to LCD record
      await parent.Open_LCD_Record(record.Id);

      var screenshotCountLCD = 4 + lcd;

      const headerBar_lcd = await $(".//header[@id='oneHeader']");
      const tabheader_lcd = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_lcd = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-" +
          screenshotCountLCD,
        {
          hideAfterFirstScroll: [headerBar_lcd, tabheader_lcd, highlights_lcd],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
