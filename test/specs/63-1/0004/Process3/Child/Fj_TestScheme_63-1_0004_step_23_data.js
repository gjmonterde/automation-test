const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_23_data: Update INI3 Record - 顧客AMLチェック結果情報 (Data Linkage)", async () => {
    const stepNum = "23"; // ★ 新環境適用' New Env Implementation

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

    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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

    // Scroll to 顧客AMLチェック結果情報
    await $(
      "//span[contains(., '" + test_data.testData.aml_section + "')]/parent::*"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Update fields
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.check_result_1_title +
        " の編集']"
    );
    await edit.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await edit.click();
    await browser.pause(1000);

    // Edit チェック結果文言１
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.check_result_1_title + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.check_result_1_title +
        "']/@for]"
    ).setValue(test_data.testData.check_result_1_value);
    await browser.pause(3000);

    // Edit メッセージ文言１
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.message_1_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.message_1_lbl +
        "']/@for]"
    ).setValue(test_data.testData.message_1_value);
    await browser.pause(3000);

    // Edit メッセージ文言２
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.message_2_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.message_2_lbl +
        "']/@for]"
    ).setValue(test_data.testData.message_2_value);
    await browser.pause(3000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    const edit_headerBar = await $(".//header[@id='oneHeader']");
    const edit_tabheader = await $(
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [edit_headerBar, edit_tabheader],
      }
    );

    // Save record
    const save_record_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_record_btn.waitForClickable({ timeout: 10000 });
    await save_record_btn.click();
    await browser.pause(20000);
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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
