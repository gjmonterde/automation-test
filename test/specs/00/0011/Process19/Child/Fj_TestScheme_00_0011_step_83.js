const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-19"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0011_step_83: The following item values must be updatable: 第一電話番号_登録", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "83";

    // Go to 申込 Page
    await parent.Go_to_APP(4);

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Refresh page
    await parent.Go_to_APP(4);

    // Edit
    // ★ 新環境適用' New Env Implementation
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.app_first_phone_no_edit_btn +
        "']"
    );
    await browser.pause(2000);
    await edit_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    await edit_btn.waitForClickable({ timeout: 10000 });
    await edit_btn.click();
    await browser.pause(3000);

    // 第一電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.app_firstphone_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.cif_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.app_first_phone_value1);
    await browser.pause(5000);

    // 第二電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.app_secondphone_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.cif_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.app_second_phone_value1);
    await browser.pause(5000);

    // 第三電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.app_thirdphone_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.cif_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.app_third_phone_value1);
    await browser.pause(5000);

    // カナ勤務先_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.app_kanaoffice_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.cif_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.app_kana_office_name_value1);
    await browser.pause(5000);

    // 年収（万円）_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.app_annual_income_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.cif_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.app_annual_income_value1);
    await browser.pause(5000);

    // 漢字勤務先_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.app_officename_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.cif_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.app_office_name_value1);
    await browser.pause(5000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Screenshot - edit page
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var middle = document.getElementsByClassName("col main-col slds-col");
      var height = middle.offsetHeight;
      this.style = "height:" + height + "px!important";
    });
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.sf_saveedit_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "col main-col slds-col"
      ).offsetHeight;
      this.style.marginTop = height + this.height + "px";
      (this.style.marginBottom = "-100px"), (this.style.position = "static");
    });
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click Save
    // ★ 新環境適用' New Env Implementation
    const save = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await save.click();
    await browser.pause(10000);

    // Refresh page
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );
  });
}
