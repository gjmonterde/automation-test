const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_10_0009_step_05: The value of the 審査決裁 examination approval is copied to the 審査決裁ステータス", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Go to EXS record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );

    // Take screenshot
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_exs, tabheader_exs],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to CRE record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cre_obj,
      test_data.testData.cre_id
    );

    // Take screenshot
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_cre, tabheader_cre],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
