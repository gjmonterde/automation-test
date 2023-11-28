const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0004-2");

export default function suite() {
  it("Fj_TestScheme_63-2_0004_step_05: The credit card information linkage status becomes 'Connection failed'", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Go to INI(2) record
    await parent.Open_Record_URL(
      user_info.object.ini_obj,
      test_data.testData.ini2_id
    );

    const headerBar_ini = await $(".//header[@id='oneHeader']");
    const tabheader_ini = await $(
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
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_ini, tabheader_ini],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
