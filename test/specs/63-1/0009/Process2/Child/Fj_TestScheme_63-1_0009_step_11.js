const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0009-2");

export default function suite() {
  it("Fj_TestScheme_63-1_0009_step_11: Set and save the maximum number of digits that can be entered in the「条件確認ご融資条件」", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Go to CRE record detail screen
    await parent.Open_CRE_Record();

    // Modify マイページ表示情報登録
    await $(
      ".//span[contains(.,'" +
        test_data.testData.examination_result_loan_conditions_label +
        "')]"
    ).waitForClickable({
      timeout: 3000,
    });
    await $(
      ".//span[contains(.,'" +
        test_data.testData.examination_result_loan_conditions_label +
        "')]"
    ).doubleClick();
    await browser.pause(3000);

    await $(".//div[2]/div/div/div/div/input").setValue(
      test_data.testData.guarantee_condition_val +
        test_data.testData.msg_value2_full_value
    );
    await browser.pause(1000);

    // Save changes
    browser.keys(["Escape"]);
    await browser.pause(3000);
    browser.keys(["Tab"]);
    await browser.pause(1000);
    browser.keys(["Enter"]);
    await browser.pause(20000);

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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
