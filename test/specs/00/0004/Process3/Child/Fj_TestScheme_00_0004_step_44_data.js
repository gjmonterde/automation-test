const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_44_data: Update 3rd INI Record (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "44";

    // ★ 新環境適用' New Env Implementation
    // Login as admin
    await parent.Login_as_admin();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
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

    // ★ 新環境適用' New Env Implementation
    // Screenshot - Before Data
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
        hideAfterFirstScroll: [headerBar_before, tabheader_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Go to クレジットカード情報連携ステータス
    await $(
      ".//span[contains(.,'" +
        test_data.testData.ini3_review_information_linkage_status_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation;
    await browser.pause(3000);

    // Update fields to 連携済み
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.ini3_review_information_linkage_status_label +
        " の編集']"
    );
    await edit.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation;
    await edit.click();
    await browser.pause(1000);

    // Edit 審査情報連携ステータス
    await $(
      "//label[contains(.,'" +
        test_data.testData.ini3_review_information_linkage_status_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    const input1 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini3_review_information_linkage_status_label +
        "')]]"
    );
    await input1.waitForClickable({ timeout: 10000 });
    await input1.click();
    const comboboxid1 = await input1.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid1 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(1000);

    // Edit スコアリング情報連携ステータス
    await $(
      "//label[contains(.,'" +
        test_data.testData.ini3_scoring_information_linkage_status_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    const input2 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini3_scoring_information_linkage_status_label +
        "')]]"
    );
    await input2.waitForClickable({ timeout: 10000 });
    await input2.click();
    const comboboxid2 = await input2.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid2 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(1000);

    // Edit AML等チェック連携ステータス
    await $(
      "//label[contains(.,'" +
        test_data.testData.ini_aml_etc_check_linkage_status_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    const input3 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_aml_etc_check_linkage_status_label +
        "')]]"
    );
    await input3.waitForClickable({ timeout: 10000 });
    await input3.click();
    const comboboxid3 = await input3.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid3 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(1000);

    // Edit 顧客AMLチェック連携ステータス
    await $(
      "//label[contains(.,'" +
        test_data.testData.ini_customer_aml_check_federation_status_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    const input4 = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_customer_aml_check_federation_status_label +
        "')]]"
    );
    await input4.waitForClickable({ timeout: 10000 });
    await input4.click();
    const comboboxid4 = await input4.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid4 + "']")
      .$("span=" + test_data.testData.card_linkage)
      .click();
    await browser.pause(6000);

    // Scroll to the highlight panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(3);

    // Screenshot - During Data
    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
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

    // Screenshot - During Data
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
        hideAfterFirstScroll: [headerBar_during, tabheader_during],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save record
    const ini3_save_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await ini3_save_btn.waitForClickable({ timeout: 10000 });
    await ini3_save_btn.click();
    await browser.pause(10000);
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
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

    // Screenshot - After Data
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
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
