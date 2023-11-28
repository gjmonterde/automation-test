const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_25: The inquiry result is created as a Lending Common Line record", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    // Get LCD Record
    await parent.Get_LCD_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.lcd_array1 = test_data.testData.lcd_array1.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Go to LCD related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.var_sf_sfurl,
      test_data.testData.ini3_id,
      user_info.object.ini_lcd_rel
    );

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
    const headerBar_rel = await $(".//header[@id='oneHeader']");
    const tabheader_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
      }
    );

    // Loop through the array to determine LCD records
    for (var lcd = 0; lcd < test_data.testData.lcd_array1.length; lcd++) {
      var record = test_data.testData.lcd_array1[lcd];

      // Go to LCD record
      await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, record.Id);

      var screenshotCountLCD = 2 + lcd;

      const headerBar_lcd = await $(".//header[@id='oneHeader']");
      const tabheader_lcd = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_lcd = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0004 +
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
