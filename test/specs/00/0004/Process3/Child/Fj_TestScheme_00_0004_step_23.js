const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0004_step_23: 照会結果 Query results are created as " +
      "スコアリングに必要な情報レコードinformation records required for scoring",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "23";

      // ★ 新環境適用' New Env Implementation
      // Login as tantou
      await parent.Login_as_tantou();

      // Get SCI record
      await parent.Get_SCI_Record();

      // Open INI-3 record detail
      await parent.Open_INI_3rd_Record();

      // Screenshot
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
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // Go to スコアリングに必要な情報 related list
      await parent.Go_to_SCI_Rel();

      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2"
      );

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.sci_id_arr.length > 0) {
        // ★ 新環境適用' New Env Implementation
        let ssno = 2;
        for (var i = 0; i < test_data.testData.sci_id_arr.length; i++) {
          // Go to SCI record
          // ★ 新環境適用' New Env Implementation
          await parent.Go_to_SCI(test_data.testData.sci_id_arr[i]);

          // Screenshot
          const highlights2 = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar2 = await $(".//header[@id='oneHeader']");
          const tabheader2 = await $(
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
              hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
            }
          );
        }
      }
    }
  );
}
