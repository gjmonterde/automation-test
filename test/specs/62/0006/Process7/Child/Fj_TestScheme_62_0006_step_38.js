const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0006-7");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0006_step_38: 申込.利率 application.interest rate must have the following values: " +
      "利率 Interest rate corresponding to the 融資額 loan amount among the カードローン金利 card loan interest " +
      "rate table records under CL products",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "38";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "shinsa") {
        // Login as shinsa
        await parent.Login_as_shinsa();
      }

      // Go to App Record
      await parent.Go_to_APP();

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
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to PRO record
      await parent.Go_to_PRO();

      // Scroll down to カードローン金利利用フラグ field
      await $(
        "//span[contains(., '" +
          test_data.testData.cloan_interest_rate_usage_flag_lbl +
          "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await browser.pause(5000);

      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-2"
      );

      // Go to PRO record related list
      await parent.Go_to_PRO_Rellist();

      // Screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-3"
      );
    }
  );
}
