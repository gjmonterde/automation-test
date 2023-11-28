const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-2");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it('Fj_TestScheme_20_0004_step_06_data: The クレジットカード情報連携credit card information linkage status becomes 「連携済み」"Linked".', async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    if (test_data.testData.logged_status != "admin") {
      // Login as admin
      await parent.Login_Admin();
    }

    // Go to 銀行審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini2_id
    );

    await util.Second_INI_Record_Scrolling();

    // Take screenshot
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
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 6000,
      }
    );

    // Modify クレジットカード情報連携ステータス field
    await $(
      ".//button[@title='" + test_data.testData.ini2_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//button[@title='" + test_data.testData.ini2_edit_btn + "']"
    ).click();
    await browser.pause(3000);

    await $(
      "//label[contains(.,'" + test_data.testData.ini2_linkage_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      ".//label[contains(.,'" + test_data.testData.ini2_linkage_lbl + "')]"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//label[contains(.,'" + test_data.testData.ini2_linkage_lbl + "')]"
    ).click();
    await browser.pause(3000);

    await $(
      ".//span[@title='" + test_data.testData.card_linkage + "']"
    ).click();
    await browser.pause(3000);

    // Take 銀行審査 edit page screenshot
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
        "-2" +
        test_data.testData.data,
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

    await util.Second_INI_Record_Scrolling();

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
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
