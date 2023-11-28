const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0001-2");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_22: 申込.キャンペーンフラグ Offer. Campaign Flag = TRUE and 申込.CL商品.キャンペーンフラグ Application.CL Product. Campaign Flag = TRUE.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

    // Go to App Record
    await parent.Open_Salesforce_App_Record();

    // Switch to 申込内容 tab
    // ★ 新環境適用' New Env Implementation
    await util.Application_Record_Scrolling(1);

    // Screenshot - Application 申込内容 tab
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
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Login as admin
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // Open dev console
    // ★ 新環境適用' New Env Implementation
    await util.Developer_Console(
      test_data.testData.query_0001_22 + "'" + test_data.testData.app_name + "'"
    );
    await browser.pause(5000);

    // Screenshot - Developer console
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
