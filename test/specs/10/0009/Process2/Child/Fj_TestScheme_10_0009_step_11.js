const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_10_0009_step_11: Set the maximum number of digits that can be entered in the 「条件確認ご融資条件」", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Go to CRE record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cre_obj,
      test_data.testData.cre_id
    );

    // Modify マイページ表示情報登録
    await $(
      ".//span[contains(.,'" + test_data.testData.cre_mypage1 + "')]"
    ).waitForClickable({
      timeout: 10000,
    });
    await $(
      ".//span[contains(.,'" + test_data.testData.cre_mypage1 + "')]"
    ).doubleClick();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    await $(".//div[1]/div/div/div/div/input").setValue(
      test_data.testData.cre_fillout
    );

    await $(".//div[2]/div/div/div/div/input").setValue(
      test_data.testData.cre_fillout
    );

    await browser.keys(["Escape"]);
    await browser.pause(5000);

    // Save changes
    await browser.pause(3000);
    browser.keys(["Tab"]);
    await browser.pause(1000);
    browser.keys(["Enter"]);
    await browser.pause(5000);

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
        "-1",
      {
        hideAfterFirstScroll: [headerBar_cre, tabheader_cre],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
