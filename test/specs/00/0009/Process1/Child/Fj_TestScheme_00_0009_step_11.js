const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0009-1");

export default function suite() {
  it("Fj_TestScheme_00_0009_step_11: The value obtained from the 商品コードマスタ product code master is set in the 商品コード product code", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "11";

    // ★ 新環境適用' New Env Implementation
    // Login as tantou
    await parent.Login_as_Tantou1();

    // Go to CRE record detail screen
    await parent.Open_CRE_Record();

    const headerBar_cre = await $(".//header[@id='oneHeader']");
    const tabheader_cre = await $(
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

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_cre, tabheader_cre],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to PRO record detail screen
    await parent.Open_PRO_Record(); // ★ 新環境適用' New Env Implementation

    // Go to PRO related list view
    await parent.Open_PCMaster_Rel(); // ★ 新環境適用' New Env Implementation

    const headerBar_rel = await $(".//header[@id='oneHeader']");
    const tabheader_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}