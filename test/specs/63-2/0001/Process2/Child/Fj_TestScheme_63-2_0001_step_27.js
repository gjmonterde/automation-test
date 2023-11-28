const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0001_step_27: Application's 融資額 loan amount ＝CL商品の最大融資額", async () => {
    const stepNum = "27"; // ★ 新環境適用' New Env Implementation

    // Go to App record
    await parent.Open_Record_URL(
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    const headerBar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        disableCSSAnimation: true,
        fullPageScrollTimeout: 5000,
      }
    );
    await browser.pause(2000);

    // Login as admin user
    await parent.Login_As_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0001_27 +
        "'" +
        test_data.testData.cl_product_id +
        "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
