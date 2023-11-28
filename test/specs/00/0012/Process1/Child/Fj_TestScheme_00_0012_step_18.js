const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0012-1");

export default function suite() {
  it(
    "Fj_TestScheme_00_0012_step_18: 実行依頼データ execution Submit data of record type「23_振込伝票」" +
      '"23 _ remittance slip" corresponding to the number of bank accounts 銀行口座（振込先flag＝TRUE）has been created',
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "18";

      // Go to BA related list
      await parent.Open_BA_rel();

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

      var ssno = 1;

      if (test_data.testData.ba_id_arr.length > 0) {
        for (var i = 0; i < test_data.testData.ba_id_arr.length; i++) {
          // Go to BA record
          await parent.Open_BA(test_data.testData.ba_id_arr[i]);

          // Screenshot count
          ssno = ssno + 1; // ★ 新環境適用' New Env Implementation

          // Screenshot
          const highlights = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar = await $(".//header[@id='oneHeader']");
          const tabheader = await $(
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
              hideAfterFirstScroll: [headerBar, tabheader, highlights],
            }
          );
        }
      }

      // Go to ER related list
      await parent.Open_ER_List();

      // Screenshot variable
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

      // Get 23_振込伝票 records
      await parent.Get_ER_Array_Record(test_data.testData.er_23_rectype); // ★ 新環境適用' New Env Implementation

      // Screenshot variable
      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation

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
    }
  );
}
