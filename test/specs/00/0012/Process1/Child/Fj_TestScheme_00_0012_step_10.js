const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0012-1");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0012_step_10: 実行依頼データ Submit data for record type「21_カードローン口座閉鎖」has been created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

    // Go to Exec List Result Records
    await parent.Open_ER_List();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Empty array for getting new data
    test_data.testData.er_array = [];

    // Get 21_カードローン口座閉鎖 records
    await parent.Get_ER_Array_Record(test_data.testData.er_21_rectype);

    // Screenshot variable
    var ssno = 1; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.er_array.length > 0) {
      // Loop through the array to determine how many ER records
      for (var er = 0; er < test_data.testData.er_array.length; er++) {
        var record = test_data.testData.er_array[er];

        // Go to ER record
        await parent.Open_ER_Record(record.Id);

        // Screenshot count
        ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
        // Screenshot
        const highlights_er = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar_er = await $(".//header[@id='oneHeader']");
        const tabheader_er = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        await browser.saveFullPageScreen(
          user_info.userInformation.screenshot +
            test_data.testData.spec00 +
            "_" +
            test_data.testData.tab0012 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar_er, tabheader_er, highlights_er],
          }
        );
        await browser.pause(2000);
      }
    }

    // Go to LCD related list view
    await parent.Open_LCD_List();

    // Sort - ascending order
    const sort_col = await $(
      ".//a[contains(., '" + test_data.testData.lcd_sort + "')]"
    );
    var sort = await sort_col.nextElement().getText();
    while (sort != test_data.testData.app_asc) {
      await sort_col.click();
      await browser.pause(1000);
      sort = await sort_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.app_asc);

    // Deselect the hover/selected fields
    await util.Deselect_fields(6); // ★ 新環境適用' New Env Implementation

    // Screenshot count
    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-" +
        ssno
    );
    await browser.pause(2000);

    // Get LCD records
    await parent.Get_LCD_Record_10();

    if (test_data.testData.lcd_id_arr.length > 0) {
      // Loop through the array to determine LCD records
      for (var lcd = 0; lcd < test_data.testData.lcd_arr_id.length; lcd++) {
        // Go to LCD record
        await parent.Open_LCD_Record(test_data.testData.lcd_arr_id[lcd]);

        // Screenshot count
        ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
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
            test_data.testData.spec00 +
            "_" +
            test_data.testData.tab0012 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [
              headerBar_lcd,
              tabheader_lcd,
              highlights_lcd,
            ],
            fullPageScrollTimeout: 3000,
          }
        );
        await browser.pause(2000);
      }
    }
  });
}
