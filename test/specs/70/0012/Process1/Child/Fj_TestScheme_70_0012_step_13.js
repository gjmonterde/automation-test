const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_70_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0012_step_13: Submit data for the record type 「14_カードローン回収」 " +
      "14 _ Card Loan Recoupment has been created for the number of 貸出共通明細（既貸回収フラグflag " +
      "＝TRUE　and　科目コード＝48）common detail for loans (recall flag = TRUE and account code = 48)",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "13";

      // ★ 新環境適用' New Env Implementation
      // Login as tantou
      await parent.Login_as_tantou();

      // Go to ER related list
      await parent.Go_to_ER_list();

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-1"
      );

      // ★ 新環境適用' New Env Implementation
      // Go to LCD related list view
      await parent.Open_LCD_List();

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-2"
      );

      // ★ 新環境適用' New Env Implementation
      // Get LCD records (subject code 48)
      await parent.Get_LCD_Record_collect();
      var ssno = 2; // ★ 新環境適用' New Env Implementation
      if (test_data.testData.lcd_id_arr.length > 0) {
        // Loop through the array to determine LCD records
        for (var lcd = 0; lcd < test_data.testData.lcd_id_arr.length; lcd++) {
          // Go to LCD record
          await parent.Open_LCD_Record(test_data.testData.lcd_id_arr[lcd]);

          const headerBar_lcd = await $(".//header[@id='oneHeader']");
          const tabheader_lcd = await $(
            ".//div[@class='slds-no-print oneAppNavContainer']"
          );
          const highlights_lcd = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );

          // Screenshot count
          ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
          // Screenshot
          await browser.saveFullPageScreen(
            user_info.userInformation.screenshot +
              test_data.testData.spec70 +
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
    }
  );
}
