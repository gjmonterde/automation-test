const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-3");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_30: 適用利率＝基準利率-優遇利率 Applicable Rate = Base Rate - The preferential rate is updated.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "30";

    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await parent.Login_User_In_Charge();
    }

    // Go to 銀行審査 detail page
    await parent.Go_to_INI();

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
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // Modify 銀行審査 detail page
    await $(
      ".//span[contains(.,'" + test_data.testData.ini3_section1 + "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(3000);

    await $(
      ".//span[contains(.,'" + test_data.testData.other_loan_lbl + "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(3000);

    await $(
      ".//button[@title='" + test_data.testData.other_loan_edit_btn + "']"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//button[@title='" + test_data.testData.other_loan_edit_btn + "']"
    ).click();
    await browser.pause(3000);

    await $(
      "//label[contains(.,'" + test_data.testData.other_loan_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });

    await $(
      ".//*[contains(text(), '" + test_data.testData.other_loan_lbl + "')]"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//*[contains(text(), '" + test_data.testData.other_loan_lbl + "')]"
    ).click();
    await browser.pause(1000);

    await $(
      "//label[contains(.,'" + test_data.testData.occupational_area_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      ".//*[contains(text(), '" +
        test_data.testData.occupational_area_lbl +
        "')]"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//*[contains(text(), '" +
        test_data.testData.occupational_area_lbl +
        "')]"
    ).click();
    await browser.pause(1000);

    // Take screenshot
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

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 6000,
      }
    );

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(10000);

    // Take 銀行審査 screenshot
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

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
