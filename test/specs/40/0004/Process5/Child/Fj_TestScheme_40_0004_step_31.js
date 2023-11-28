const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0004_step_31: 所幹部確認結果 Executive confirmation results and 定型コメント fixed comments can be updated", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to INI Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini_id3
    );

    // Edit
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.ini_executive_confirmation_edit_btn +
        "']"
    );
    // ★ 新環境適用' New Env Implementation
    await edit.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await edit.click();
    await browser.pause(1000);

    // 所管部確認結果
    const input = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_executive_confirmation_lbl +
        "')]]"
    );
    await input.waitForClickable({ timeout: 10000 });
    await input.click();
    await browser.pause(1000);
    const comboboxid = await input.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid + "']")
      .$("span=" + test_data.testData.ini3_notapplicable_value)
      .click();
    await browser.pause(1000);

    // 定型コメント
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.ini3_fixed_comment_value +
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
        test_data.testData.ini3_fixed_comment_value +
        "']/@for]"
    ).setValue(test_data.testData.ini3_fixed_comment_value);
    await browser.pause(1000);

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    // ★ 新環境適用' New Env Implementation
    await saveedit.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await saveedit.click();
    await browser.pause(20000);

    // Screenshot
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
