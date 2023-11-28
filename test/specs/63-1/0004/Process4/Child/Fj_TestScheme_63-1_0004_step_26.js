const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-4");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_26: Successful save for any 48 account code", async () => {
    const stepNum = "26"; // ★ 新環境適用' New Env Implementation

    // Get LCD Record
    await parent.Get_LCD_Record_1();

    // Go to LCD related list view
    await parent.Open_LCD_SF_Record();

    // Check 口座閉鎖フラグ records with 48 account code
    // Loop through the array to determine LCD records with 48 account code
    for (var lcd = 0; lcd < test_data.testData.lcd_array1.length; lcd++) {
      var record = test_data.testData.lcd_array1[lcd];

      // Go to LCD record
      await util.Open_SF_Record_URL(3, user_info.object.lcd_obj, record.Id);

      // Call util.modal_fullpage function
      await util.modal_fullpage();

      // Edit ソーラー・蓄電池
      const account_closed_flag_label = await $(
        ".//*[contains(text(), '" +
          test_data.testData.account_closed_flag_label +
          "')]"
      );
      await account_closed_flag_label.scrollIntoView();
      await account_closed_flag_label.waitForClickable({ timeout: 10000 });
      await account_closed_flag_label.click();
      await browser.pause(1000);

      // Deselect the hover/selected fields
      await util.Deselect_fields(1);

      var screenshotCountLCD = 1 + lcd;

      // Screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
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
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);

      // Save record
      const lcd_save_record_btn = await $(
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await lcd_save_record_btn.waitForClickable({ timeout: 10000 });
      await lcd_save_record_btn.click();
      await browser.pause(5000);

      // Go to LCD related list view
      await parent.Open_LCD_SF_Record();
    }
  });
}
