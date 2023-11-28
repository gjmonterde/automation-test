const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0004-3");

export default async function suite() {
  it("Fj_TestScheme_50_0004_step_34: 適用利率＝基準利率-優遇利率 Applicable Rate = Base Rate - The value of Privileged Rate is displayed.", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    // Go to APP detail page
    await parent.Open_APP_Record();

    // Go to 銀行審査 detail page
    await parent.Open_EXM_INI_Record();

    // Modify 銀行審査 detail page
    // ★ 新環境適用' New Env Implementation
    await $(".//span[contains(.,'" + test_data.testData.ini_scroll + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await browser.pause(3000);

    await $(
      ".//button[@title='" +
        test_data.testData.subsidy_pension_label +
        " の編集']"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//button[@title='" +
        test_data.testData.subsidy_pension_label +
        " の編集']"
    ).click();
    await browser.pause(3000);

    await $(
      ".//*[contains(text(), '" +
        test_data.testData.subsidy_pension_label +
        "')]"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//*[contains(text(), '" +
        test_data.testData.subsidy_pension_label +
        "')]"
    ).click();
    await browser.pause(1000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    // Take 銀行審査 screenshot
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

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
