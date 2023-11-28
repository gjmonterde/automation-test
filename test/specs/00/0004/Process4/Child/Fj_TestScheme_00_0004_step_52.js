const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-4");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_52: Successful save for any 44, 48, and 12 account code", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "52";

    // Get LCD Record
    await parent.Get_LCD_Record_2();

    // Go to LCD related list view
    await parent.Go_to_LCD_Rel();

    // Check 口座閉鎖フラグ records with 44, 48, and 12 account code
    // Loop through the array to determine LCD records with 44, 48, and 12 account code
    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.lcd_id_arr2.length > 0) {
      // ★ 新環境適用' New Env Implementation
      let ssno = 0;
      for (var i = 0; i < test_data.testData.lcd_id_arr2.length; i++) {
        // Go to LCD record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_LCD(test_data.testData.lcd_id_arr2[i]);

        // ★ 新環境適用' New Env Implementation
        // Edit
        const editbtn = await $(
          ".//button[@title='" + test_data.testData.lcd_onloan_edit_btn + "']"
        );
        await editbtn.$(function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }); // ★ 新環境適用' New Env Implementation
        await editbtn.waitForClickable({ timeout: 20000 });
        await editbtn.click();
        await browser.pause(5000);

        // Edit ソーラー・蓄電池
        const on_loan_collection_flag_label = await $(
          "//label[contains(., '" +
            test_data.testData.lcd_on_loan_collection_flag_label +
            "')]"
        );
        await on_loan_collection_flag_label.$(function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }); // ★ 新環境適用' New Env Implementation
        await on_loan_collection_flag_label.waitForClickable({
          timeout: 10000,
        });
        await on_loan_collection_flag_label.click();
        await browser.pause(1000);

        ssno = ssno + 1;

        // Screenshot
        const headerBar = await $(".//header[@id='oneHeader']");
        const tabheader = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        const highlights = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );

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
            hideAfterFirstScroll: [headerBar, tabheader, highlights],
            fullPageScrollTimeout: 3000,
          }
        );
        await browser.pause(2000);

        // Save record
        const lcd_save_record_btn = await $(
          ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
        );
        await lcd_save_record_btn.waitForClickable({ timeout: 10000 });
        await lcd_save_record_btn.click();
        await browser.pause(5000);
      }
    }

    // Go to LCD related list view
    await parent.Go_to_LCD_Rel();

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

    // Screenshot
    const headerBar_rel = await $(".//header[@id='oneHeader']");
    const tabheader_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // ★ 新環境適用' New Env Implementation
    ssno = ssno + 1;
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
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
