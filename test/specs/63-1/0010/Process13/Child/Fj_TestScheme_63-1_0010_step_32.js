const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0010-13");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0010_step_32: The item values of 実行画面 tab must be updatable", async () => {
    const stepNum = "32"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await parent.Open_APP_Record();

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Edit 第三電話番号_元帳 -- pencil
    const phone_edit = await $(
      ".//button[@title='" + test_data.testData.phone_edit + "']"
    );
    await phone_edit.scrollIntoView();
    await phone_edit.waitForClickable({
      timeout: 10000,
    });
    await phone_edit.click();
    await browser.pause(5000);

    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    // Set to blank
    // Set 第一電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.first_phone_lbl + "')]"
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
        test_data.testData.first_phone_lbl +
        "']/@for]"
    ).clearValue();
    await browser.pause(3000);

    // Set 第二電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.second_phone_lbl + "')]"
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
        test_data.testData.second_phone_lbl +
        "']/@for]"
    ).clearValue();
    await browser.pause(3000);

    // Set 第三電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.third_phone_lbl + "')]"
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
        test_data.testData.third_phone_lbl +
        "']/@for]"
    ).clearValue();
    await browser.pause(3000);

    // Set カナ勤務先_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.kana_office_lbl + "')]"
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
        test_data.testData.kana_office_lbl +
        "']/@for]"
    ).clearValue();
    await browser.pause(3000);

    // Set 年収（万円）_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.annual_income_app_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    const annual_income_input = await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.kana_office_lbl +
        "']/@for]"
    );
    await annual_income_input.setValue("-");
    await annual_income_input.clearValue();
    await browser.pause(3000);

    // Set 漢字勤務先_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.office_name_lbl + "')]"
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
        test_data.testData.office_name_lbl +
        "']/@for]"
    ).clearValue();
    await browser.pause(3000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );
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
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(10000);

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

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
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
