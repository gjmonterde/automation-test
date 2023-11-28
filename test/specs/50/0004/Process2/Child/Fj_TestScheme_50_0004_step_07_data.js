const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0004-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0004_step_07_data: Theクレジットカード情報連携 credit card information linkage status becomes 「連携済み」 Linked", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_Admin();

    // Scroll
    await util.Second_INI_Record_Scrolling();

    // Take 銀行審査 page screenshot
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
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 6000,
      }
    );
    await browser.pause(3000);

    // Modify クレジットカード情報連携ステータス field
    await $(
      ".//button[@title='" +
        test_data.testData.credit_card_status_label +
        " の編集']"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//button[@title='" +
        test_data.testData.credit_card_status_label +
        " の編集']"
    ).click();
    await browser.pause(3000);

    await $(
      ".//label[contains(.,'" +
        test_data.testData.credit_card_status_label +
        "')]"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//label[contains(.,'" +
        test_data.testData.credit_card_status_label +
        "')]"
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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
    await browser.pause(3000);

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({
      timeout: 10000,
    });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);

    // Scroll
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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
