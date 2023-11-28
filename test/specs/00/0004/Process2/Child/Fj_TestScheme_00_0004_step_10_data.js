const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-2");

export default async function suite() {
  it("Fj_TestScheme_00_0004_step_10_data: The クレジットカード情報連携 credit card information linkage status becomes 「連携済み」 Linked", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

    // Login as admin
    await parent.Login_as_admin();

    // Go to INI Record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_INI2(1);

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

    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    // ★ 新環境適用' New Env Implementation
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.ini2_linkage_status_pencil +
        "']"
    );
    await edit.$(function () {
      this.scrollIntoView({ block: "center" });
    });
    await edit.waitForClickable({ timeout: 5000 });
    await edit.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // Click field label to show picklist
    const lbl = await $(
      ".//label[contains(.,'" +
        test_data.testData.ini2_linkage_status_lbl +
        "')]"
    );
    await lbl.$(function () {
      this.scrollIntoView({ block: "center" });
    });
    await lbl.waitForClickable({ timeout: 5000 });
    await lbl.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // Select value from picklist
    const val = await $(
      ".//span[@title='" + test_data.testData.card_linkage + "']"
    );
    await val.waitForClickable({ timeout: 5000 });
    await val.click();
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

    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    // ★ 新環境適用' New Env Implementation
    const save = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save.waitForClickable({
      timeout: 5000,
    });
    await save.click();
    await browser.pause(15000);

    // Go to INI Record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_INI2(1);

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

    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
