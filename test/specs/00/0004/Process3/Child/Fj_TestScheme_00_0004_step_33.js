const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");

export default function suite() {
  it(
    "Fj_TestScheme_00_0004_step_33: The customer must be able to see the預かり資産残高（仲介）レコード asset " +
      "balance (brokerage) record from the 関連リスト relevant list",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "33";

      // ★ 新環境適用' New Env Implementation
      // Login as tantou
      await parent.Login_as_tantou();

      // Get CABI record
      await parent.Get_CABI_Record();

      // Open INI-3 record detail
      await parent.Open_INI_3rd_Record();

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
      await browser.pause(5000);

      // Screenshot - Before Data
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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

      // Go to CABI related list view
      // ★ 新環境適用' New Env Implementation
      await parent.Go_to_CABI_Rel();

      // Screenshot
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
        }
      );

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.cabi_id_arr.length > 0) {
        let ssno = 2;
        for (var i = 0; i < test_data.testData.cabi_id_arr.length; i++) {
          // Go to CABI record
          // ★ 新環境適用' New Env Implementation
          await parent.Go_to_CABI(test_data.testData.cabi_id_arr[i]);

          // Screenshot
          const highlights3 = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar3 = await $(".//header[@id='oneHeader']");
          const tabheader3 = await $(
            ".//div[@class='slds-no-print oneAppNavContainer']"
          );
          ssno = ssno + 1;
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
              hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
            }
          );
        }
      }
    }
  );
}
