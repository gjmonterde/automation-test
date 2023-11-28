const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_35: 所幹部確認結果 Executive confirmation results and 定型コメントfixed comments can be updated", async () => {
    const stepNum = "35"; // ★ 新環境適用' New Env Implementation

    // Go to INI Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini_id
    );

    const edit = await $(
      ".//button[@title='" +
        test_data.testData.ini_executive_confirmation_edit_btn +
        "']"
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
    await browser.pause(5000);

    // 所管部確認結果
    const input = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_executive_confirmation_lbl +
        "')]]"
    );
    await input.scrollIntoView({ block: "center" });
    await input.waitForClickable({ timeout: 30000 });
    await input.click();
    await browser.pause(1000);
    const comboboxid = await input.getAttribute("aria-controls");
    const combo1 = await $(".//div[@id='" + comboboxid + "']").$(
      "span=" + test_data.testData.ini3_notapplicable_val
    );
    await combo1.waitForClickable({ timeout: 30000 });
    await combo1.click();
    await browser.pause(1000);

    // 定型コメント
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.fixed_comment_field_lbl +
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
        test_data.testData.fixed_comment_field_lbl +
        "']/@for]"
    ).setValue(test_data.testData.ini3_fixed_comment_val);
    await browser.pause(1000);

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await saveedit.scrollIntoView({ block: "center" });
    await saveedit.click();
    await browser.pause(25000);

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
