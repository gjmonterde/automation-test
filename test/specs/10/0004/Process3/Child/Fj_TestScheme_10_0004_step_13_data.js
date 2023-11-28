const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0004-3");

export default function suite() {
  it("Fj_TestScheme_10_0004_step_13_data: Update 3rd INI related record 銀行審査③", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to 3rd INI related record
    await parent.Open_3rd_INI_Record();

    // Save 3rd INI Record Page Full Screen
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
    await browser.pause(20000);

    // Screenshot INI related record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);

    // Go to 3rd INI related record
    await parent.Open_3rd_INI_Record();

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    // Update fields to 連携済み
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.review_information_linkage_status_label +
        " の編集']"
    );
    await edit.scrollIntoView({ block: "center" });
    await edit.click();
    await browser.pause(1000);

    // 審査情報連携ステータス
    const input1 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.review_information_linkage_status_label +
        "')]]"
    );
    await input1.waitForClickable({ timeout: 10000 });
    await input1.click();
    const comboboxid1 = await input1.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid1 + "']")
      .$("span=" + test_data.testData.linkage_status_value)
      .click();
    await browser.pause(1000);

    // スコアリング情報連携ステータス
    const input2 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.scoring_information_linkage_status_label +
        "')]]"
    );
    await input2.waitForClickable({ timeout: 10000 });
    await input2.click();
    const comboboxid2 = await input2.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid2 + "']")
      .$("span=" + test_data.testData.linkage_status_value)
      .click();
    await browser.pause(1000);

    // AML等チェック連携ステータス
    const input3 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.aml_etc_check_linkage_status_label +
        "')]]"
    );
    await input3.waitForClickable({ timeout: 10000 });
    await input3.click();
    const comboboxid3 = await input3.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid3 + "']")
      .$("span=" + test_data.testData.linkage_status_value)
      .click();
    await browser.pause(1000);

    // 顧客AMLチェック連携ステータス
    const input4 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.customer_aml_check_federation_status_label +
        "')]]"
    );
    await input4.waitForClickable({ timeout: 10000 });
    await input4.click();
    const comboboxid4 = await input4.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid4 + "']")
      .$("span=" + test_data.testData.linkage_status_value)
      .click();
    await browser.pause(6000);

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
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);

    // Save
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    // Go to 3rd INI related record
    await parent.Open_3rd_INI_Record();

    // Save 3rd INI Record Page Full Screen
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
    await browser.pause(20000);

    // Screenshot INI related record
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
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
    await browser.pause(5000);
  });
}
