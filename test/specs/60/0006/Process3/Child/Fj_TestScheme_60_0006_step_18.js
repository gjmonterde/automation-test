const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0006-3");

export default function suite() {
  it("Fj_TestScheme_60_0006_step_18: Depending on the value of the Pスコア P-Score, the following values should be set for the 優遇利率 Privileged Rate. ", async () => {
    const stepNum = "18"; // ★ 新環境適用' New Env Implementation

    // Go to EXS record detail page
    await parent.Open_Salesforce_EXS_Record();

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
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to CL Product detail page
    await parent.Open_Salesforce_CL_Product();

    // Scroll to Pスコア_ランクA上限(以下) field
    const pscore_a_lbl = await $(
      ".//span[contains(.,'" + test_data.testData.pscore_a_lbl + "')]"
    );
    await pscore_a_lbl.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await browser.pause(3000);

    // Scroll to section nearest to target fields
    const pro_scroll = await $(
      ".//span[contains(., '" + test_data.testData.pro_scroll + "')]"
    );
    await pro_scroll.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
