const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0004-3");

export default async function suite() {
  it("Fj_TestScheme_50_0004_step_15_data: 顧客AMLチェック連携 Customer AML check collaboration for 銀行審査  Bank examination should be 「連携済み」Collaborated.", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_Admin();

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

    // Update fields to 連携済み
    const edit = await $(
      ".//button[@title='" + test_data.testData.linkage_status1 + " の編集']"
    );
    await edit.scrollIntoView({ block: "center" });
    await edit.click();
    await browser.pause(1000);

    // 審査情報連携ステータス
    const input1 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.linkage_status1 +
        "')]]"
    );
    await input1.click();
    const comboboxid1 = await input1.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid1 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(1000);

    // スコアリング情報連携ステータス
    const input2 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.linkage_status2 +
        "')]]"
    );
    await input2.click();
    const comboboxid2 = await input2.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid2 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(1000);

    // AML等チェック連携ステータス
    const input3 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.linkage_status3 +
        "')]]"
    );
    await input3.click();
    const comboboxid3 = await input3.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid3 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(1000);

    // 顧客AMLチェック連携ステータス
    const input4 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.federation_status +
        "')]]"
    );
    await input4.click();
    const comboboxid4 = await input4.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid4 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(6000);

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

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    // Take 銀行審査 page screenshot
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
