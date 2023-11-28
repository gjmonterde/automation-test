const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0010-13");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0010_step_33: Make the 登録 registration BLANK", async () => {
    const stepNum = "33"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL(
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Edit 第一電話番号_登録 value -- pencil
    const edit_pencil_button_label = await $(
      ".//button[@title='" + test_data.testData.edit_pencil_button_label + "']"
    );
    await edit_pencil_button_label.waitForClickable({
      timeout: 10000,
    });
    await edit_pencil_button_label.click();
    await browser.pause(5000);

    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    // Edit 第一電話番号_登録
    await $(
      ".//label[contains(.,'" +
        test_data.testData.primary_phone_number_registration_label +
        "')]"
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
        test_data.testData.primary_phone_number_registration_label +
        "']/@for]"
    ).setValue(test_data.testData.primary_phone_number_registration_value);
    await browser.pause(3000);

    // Edit 第二電話番号_登録
    await $(
      ".//label[contains(.,'" +
        test_data.testData.second_phone_number_registration_label +
        "')]"
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
        test_data.testData.second_phone_number_registration_label +
        "']/@for]"
    ).setValue(test_data.testData.second_phone_number_registration_value);
    await browser.pause(3000);

    // Edit 第三電話番号_登録
    await $(
      ".//label[contains(.,'" +
        test_data.testData.third_phone_number_registration_label +
        "')]"
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
        test_data.testData.third_phone_number_registration_label +
        "']/@for]"
    ).setValue(test_data.testData.third_phone_number_registration_value);
    await browser.pause(3000);

    // Edit カナ勤務先_登録
    await $(
      ".//label[contains(.,'" +
        test_data.testData.kana_work_place_registration_label +
        "')]"
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
        test_data.testData.kana_work_place_registration_label +
        "']/@for]"
    ).setValue(test_data.testData.kana_work_place_registration_value);

    await browser.pause(3000);

    // Edit 年収（万円）_登録
    await $(
      ".//label[contains(.,'" + test_data.testData.annual_income_label + "')]"
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
        test_data.testData.annual_income_label +
        "']/@for]"
    ).setValue(test_data.testData.annual_income_value);
    await browser.pause(3000);

    // Edit 漢字勤務先_登録
    await $(
      ".//label[contains(.,'" +
        test_data.testData.kanji_work_place_registration_label +
        "')]"
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
        test_data.testData.kanji_work_place_registration_label +
        "']/@for]"
    ).setValue(test_data.testData.kanji_work_place_registration_value);
    await browser.pause(3000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await browser.keys(["Escape"]);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    // Scroll
    await util.Application_Record_Scrolling(4);

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
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        disableCSSAnimation: true,
        hideAfterFirstScroll: [headerBar, tabheader],
      }
    );
    await browser.pause(2000);

    // Click 保存 button
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(50000);
  });
}
