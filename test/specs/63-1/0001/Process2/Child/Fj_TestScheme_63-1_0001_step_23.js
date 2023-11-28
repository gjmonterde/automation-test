const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_23: An application is made", async () => {
    const stepNum = "23"; // ★ 新環境適用' New Env Implementation

    // Go to Application list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl05 +
        test_data.testData.listview_id2
    );
    await browser.pause(5000);

    // Sort
    const app_col = await $(
      ".//a[contains(., '" + test_data.testData.app_id_sort + "')]"
    );
    var sort = await app_col.nextElement().getText();
    while (sort != test_data.testData.sort_latest) {
      await app_col.click();
      await browser.pause(1000);
      sort = await app_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.sort_latest);

    // Deselect the hover/selected fields
    await util.Deselect_fields(7);

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
      }
    );

    // Go to APP record detail screen
    await parent.Open_Salesforce_App_Record();

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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
