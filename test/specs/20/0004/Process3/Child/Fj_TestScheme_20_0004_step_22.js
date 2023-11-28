const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-3");

export default async function suite() {
  it(
    "Fj_TestScheme_20_0004_step_22: As a result of inquiry using 氏名 name and 生年月日 date of birth, " +
      "registered in the 顧客AMLチェック結果情報 customer AML check result information section",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "22";

      if (test_data.testData.logged_status != "uic") {
        // Login to org as tantou1
        await parent.Login_User_In_Charge();
      }

      // Go to 銀行審査 detail page
      await parent.Go_to_INI();

      // Take screenshot of AML等チェック結果情報 detail page
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
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
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  );
}
