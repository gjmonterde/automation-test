const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-5");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_56: Executive confirmation results and fixed comments can be updated", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "56";

    // Go to INI(3) record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_INI_3rd_Record();

    // Update fields to 所管部確認結果 and 定型コメント
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.ini3_jurisdiction_confirmation_result_label +
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

    // Edit 所管部確認結果
    await $(
      "//label[contains(.,'" +
        test_data.testData.ini3_jurisdiction_confirmation_result_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    const review_information_linkage_status = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini3_jurisdiction_confirmation_result_label +
        "')]]"
    );
    await review_information_linkage_status.waitForClickable({ timeout: 5000 });
    await review_information_linkage_status.click();
    const review_information_linkage_status_combobox =
      await review_information_linkage_status.getAttribute("aria-controls");
    await $(".//div[@id='" + review_information_linkage_status_combobox + "']")
      .$("span=" + test_data.testData.ini_jurisdiction_confirmation_result_value)
      .click();
    await browser.pause(1000);

    // Edit 定型コメント
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.ini3_fixed_comment_field + "')]"
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
        test_data.testData.ini3_fixed_comment_field +
        "']/@for]"
    ).setValue(test_data.testData.ini_standard_comment_value);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [edit_headerBar, edit_tabheader],
      }
    );

    // Save record
    const save_status_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_status_btn.waitForClickable({ timeout: 10000 });
    await save_status_btn.click();
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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
