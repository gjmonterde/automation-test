const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-8");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0007_step_33: The 適用利率 applicable interest rate must display the correct value depending on the" +
      "change in the 融資額 loan amount",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "33";

      // Go to 申込 detail page
      await parent.Open_APP_Record(3);

      // Screenshot - Application 告知画面 tab
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 6000,
        }
      );
    }
  );
}
