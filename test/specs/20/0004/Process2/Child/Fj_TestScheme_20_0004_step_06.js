const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-2");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it('Fj_TestScheme_20_0004_step_06: The クレジットカード情報連携credit card information linkage status becomes 「連携済み」"Linked".', async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await parent.Login_User_In_Charge();
    }

    // Go to 銀行審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini2_id
    );

    // Take 銀行審査 screenshot
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
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
