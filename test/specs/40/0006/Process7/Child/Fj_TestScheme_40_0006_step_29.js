const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_40_0006_step_29: The sub screen is displayed, and approval operations can be " +
      "performed by entering 決裁コメントapproval comments",
    async () => {
      const stepNum = "29"; // ★ 新環境適用' New Env Implementation

      // Go to EXS record detail screen
      await util.Open_SF_Record_URL(
        1,
        user_info.object.exs_obj,
        test_data.testData.exs_id
      );

      // Click 承認
      const acceptbtn = await $(
        ".//button[@name='" +
          test_data.testData.api_externalscoring_accept_btn +
          "']"
      );
      await acceptbtn.waitForClickable({ timeout: 10000 });
      await acceptbtn.click();
      await browser.pause(10000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1"
      );

      // Confirm
      await $(
        ".//button[@type='" + test_data.testData.submit_type_btn + "']"
      ).click();

      // Toast message screenshot
      await util.Toast_Message();

      await browser.pause(2000);
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-2"
      );

      // Refresh browser
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
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
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
