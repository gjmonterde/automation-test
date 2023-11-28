const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");

export default async function suite() {
  it("Fj_TestScheme_60_0009_step_11: Set and save the maximum number of digits that can be entered in the「条件確認ご融資条件」'condition confirmation loan condition''= field.'", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Take screenshot CL Origination
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // Modify マイページ表示情報登録
    await $(
      ".//span[contains(.,'" + test_data.testData.cre_result_condition + "')]"
    ).waitForClickable({
      timeout: 3000,
    });
    await $(
      ".//span[contains(.,'" + test_data.testData.cre_result_condition + "')]"
    ).doubleClick();
    await browser.pause(3000);

    await $(".//div[1]/div/div/div/div/input").setValue(
      test_data.testData.msg_value1
    );
    await $(".//div[2]/div/div/div/div/input").setValue(
      test_data.testData.msg_value_max
    );

    await browser.keys(["Escape"]);
    await browser.pause(10000);

    // Take screenshot of modified マイページ表示情報登録
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);

    // Save changes
    await browser.pause(3000);
    await browser.keys(["Tab"]);
    await browser.pause(1000);
    await browser.keys(["Enter"]);
    await browser.pause(30000);

    // Take screenshot of modified マイページ表示情報登録
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);
  });
}
