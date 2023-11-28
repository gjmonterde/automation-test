const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0004-2");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it('Fj_TestScheme_30_0004_step_07_data: The クレジットカード情報連携credit card information linkage status becomes 「連携済み」"Linked".', async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "7";

    // Login as admin
    await parent.Login_As_Admin();

    // ★ 新環境適用' New Env Implementation
    // Go to 銀行審査 detail page
    await parent.Go_to_INI();
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
    await browser.pause(20000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);

    // Modify クレジットカード情報連携ステータス field
    await $(
      ".//button[@title='" + test_data.testData.ini2_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//button[@title='" + test_data.testData.ini2_edit_btn + "']"
    ).click();
    await browser.pause(3000);

    const linkage = await $(
      ".//label[contains(.,'" + test_data.testData.ini2_linkage_lbl + "')]"
    );
    await linkage.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await linkage.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.card_linkage +
        "')]"
    ).click();
    await browser.pause(1000);

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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save changes
    const save = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save.waitForClickable({ timeout: 5000 });
    await save.click();
    await browser.pause(15000);

    // Refresh
    await browser.refresh();
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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
