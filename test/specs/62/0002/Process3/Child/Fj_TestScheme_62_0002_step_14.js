const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
var path = require("path");
const parent = require("../Parent/Fj_TestScheme_62_0002-3");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0002_step_14: The 処理  processing status of the application is " +
      "「本人確認実施待ち」Waiting for identity confirmation",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "14";

      // Go to App Record
      await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

      // Screenshot - Application Page
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0002 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to RDC page
      await parent.Go_to_RDC(); // ★ 新環境適用' New Env Implementation

      // Check contents of the uploaded file
      var filename = path.parse(user_info.userInformation.var_file_Path1).name;
      await browser.pause(3000);
      await $("body").scrollIntoView();
      const image = await $("//span[@title='" + filename + "']");
      await image.waitForClickable({ timeout: 10000 });
      await image.click();
      await browser.pause(5000);

      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0002 +
          "_" +
          stepNum +
          "-2"
      );
    }
  );
}
