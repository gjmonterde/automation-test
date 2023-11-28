const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0006-2");

export default function suite() {
  it("Fj_TestScheme_63-2_0006_step_14: The result of the check (the check method is shown in parentheses) is indicated by the traffic light icon", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation
    
    // Go to EXS record
    await parent.Open_Record_URL(
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );

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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot + "63-2-(01)_0006_14-1",
      {
        hideAfterFirstScroll: [headerBar_exs, tabheader_exs],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
