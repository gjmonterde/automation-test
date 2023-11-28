const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_14_data: Manual process for Bank Examination (3) (data linkage)", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "admin") {
      // login as admin
      await parent.Login_as_admin();
    }

    // Go to INI record
    await parent.Go_to_INI();

    // Screenshot
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Update fields to 連携済み
    const edit = await $(
      ".//button[@title='" + test_data.testData.ini_cooperation_edit_btn + "']"
    );
    await edit.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await edit.waitForClickable({ timeout: 30000 });
    await edit.click();
    await browser.pause(1000);

    // 審査情報連携ステータス
    const input1 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_cooperation_exam_status_lbl +
        "')]]"
    );
    await input1.waitForClickable({ timeout: 30000 });
    await input1.click();
    const comboboxid1 = await input1.getAttribute("aria-controls");
    const combo1 = await $(".//div[@id='" + comboboxid1 + "']").$(
      "span=" + test_data.testData.ini3_cooperation_exam_status_val
    );
    await combo1.waitForClickable({ timeout: 30000 });
    await combo1.click();
    await browser.pause(1000);

    // スコアリング情報連携ステータス
    const input2 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_bank_scoring_status_lbl +
        "')]]"
    );
    await input2.click();
    const comboboxid2 = await input2.getAttribute("aria-controls");
    const combo2 = await $(".//div[@id='" + comboboxid2 + "']").$(
      "span=" + test_data.testData.ini3_bank_scoring_status_val
    );
    await combo2.waitForClickable({ timeout: 30000 });
    await combo2.click();
    await browser.pause(1000);

    // AML等チェック連携ステータス
    const input3 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_aml_status_lbl +
        "')]]"
    );
    await input3.waitForClickable({ timeout: 30000 });
    await input3.click();
    const comboboxid3 = await input3.getAttribute("aria-controls");
    const combo3 = await $(".//div[@id='" + comboboxid3 + "']").$(
      "span=" + test_data.testData.ini3_aml_status_val
    );
    await combo3.waitForClickable({ timeout: 30000 });
    await combo3.click();
    await browser.pause(1000);

    // 顧客AMLチェック連携ステータス
    const input4 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_customer_aml_check_status_lbl +
        "')]]"
    );
    await input4.waitForClickable({ timeout: 30000 });
    await input4.click();
    const comboboxid4 = await input4.getAttribute("aria-controls");
    const combo4 = await $(".//div[@id='" + comboboxid4 + "']").$(
      "span=" + test_data.testData.ini3_customer_aml_check_status_val
    );
    await combo4.waitForClickable({ timeout: 30000 });
    await combo4.click();
    await browser.pause(1000);

    // Screenshot
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

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await saveedit.waitForClickable({ timeout: 10000 });
    await saveedit.click();
    await browser.pause(20000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
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

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // logout
    await parent.Logout();
  });
}
