const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0006-4");

export default function suite() {
  it("Fj_TestScheme_30_0006_step_23: Check the 合算返済比率 section are calculated from 借入明細情報一覧 table", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "23";

    // Go to EXS record detail screen
    await parent.Open_EXS();

    const headerBar_exs = await $(".//header[@id='oneHeader']");
    const tabheader_exs = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_exs, tabheader_exs],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
