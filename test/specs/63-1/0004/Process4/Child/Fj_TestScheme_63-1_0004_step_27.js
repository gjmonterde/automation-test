const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-4");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_27: Successful save for any 44, 48, and 12 account code", async () => {
    const stepNum = "27"; // ★ 新環境適用' New Env Implementation

    // Get LCD Record
    await parent.Get_LCD_Record_2();

    // Go to LCD related list view
    await parent.Open_LCD_SF_Record();

    // Check 口座閉鎖フラグ records with 44, 48, and 12 account code
    // Loop through the array to determine LCD records with 44, 48, and 12 account code
    for (var lcd = 0; lcd < test_data.testData.lcd_array2.length; lcd++) {
      var record = test_data.testData.lcd_array2[lcd];

      // Go to LCD record
      await util.Open_SF_Record_URL(3, user_info.object.lcd_obj, record.Id);

      // Call util.modal_fullpage function
      await util.modal_fullpage();

      // Edit ソーラー・蓄電池
      const on_loan_collection_flag_label = await $(
        ".//*[contains(text(), '" +
          test_data.testData.on_loan_collection_flag_label +
          "')]"
      );
      await on_loan_collection_flag_label.scrollIntoView();
      await on_loan_collection_flag_label.waitForClickable({
        timeout: 10000,
      });
      await on_loan_collection_flag_label.click();
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
    }

    // Go to LCD related list view
    await parent.Open_LCD_SF_Record();

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
    var screenshotAfterClick = screenshotCountLCD + 1;

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-" +
        screenshotAfterClick,
      {
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
