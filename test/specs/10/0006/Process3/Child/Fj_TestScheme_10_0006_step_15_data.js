const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_10_0006-3");

export default function suite() {
  it("Fj_TestScheme_10_0006_step_15_data: Update Pスコア限度額（単位：万円）fields (for data linkage)", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to EXS record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );

    const headerBar_exs_before = await $(".//header[@id='oneHeader']");
    const tabheader_exs_before = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_exs_before, tabheader_exs_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll down to スコアリング結果 section
    await $(
      "//span[contains(., '" +
        test_data.testData.scoring_result_section +
        "')]/parent::*"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Edit Pスコア限度額（単位：万円）value
    const pscore_edit = await $(
      "//button[@title='" + test_data.testData.pscore_edit_btn + "']"
    );
    await browser.pause(5000);
    await pscore_edit.waitForClickable({
      timeout: 10000,
    });
    await pscore_edit.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.pscore_limit_textbox +
        "']/@for]"
    ).setValue(test_data.testData.pscore_limit_value);

    await browser.pause(5000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [edit_headerBar, edit_tabheader],
      }
    );

    // Click 保存 button
    await browser.pause(5000);
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);
    await browser.refresh();

    const headerBar_exs_after = await $(".//header[@id='oneHeader']");
    const tabheader_exs_after = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_exs_after, tabheader_exs_after],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
