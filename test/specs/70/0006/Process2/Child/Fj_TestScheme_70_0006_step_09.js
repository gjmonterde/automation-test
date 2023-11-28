const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0006-2");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0006_step_09: The number of rows in the KSC category in the table " +
      "at the top of the 借入明細情報一覧 List of loan detail information  is equal to the number " +
      "of KSC照会明細.KSC結果(取引情報) KSC Inquiry detail.KSC Results (transaction information)",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "9";

      // Go to TRR record
      await parent.Go_To_TRR();

      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );

      // Go to KSC照会明細 (KID) record detail screen
      await parent.Go_To_KID(); // ★ 新環境適用' New Env Implementation

      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );

      let ssno = 2;
      for (var i = 0; i < test_data.testData.kit_id_arr.length; i++) {
        // Go to KIT record detail screen
        await parent.Go_To_KIT(test_data.testData.kit_id_arr[i]); // ★ 新環境適用' New Env Implementation

        ssno = ssno + 1;
        // Screenshot
        const highlights3 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar3 = await $(".//header[@id='oneHeader']");
        const tabheader3 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        // ★ 新環境適用' New Env Implementation
        await browser.saveFullPageScreen(
          user_info.userInformation.screenshot +
            test_data.testData.spec70 +
            "_" +
            test_data.testData.tab0006 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
          }
        );
      }
    }
  );
}
