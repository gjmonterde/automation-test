const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");

export default async function suite() {
  it("Fj_TestScheme_62_0004_step_35: 所幹部確認結果 Executive confirmation results and 定型コメント fixed comments can be updated", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "35";

    // Edit
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.ini_executive_confirmation_edit_btn +
        "']"
    );
    await edit.scrollIntoView({ block: "center" });
    await edit.waitForClickable({ timeout: 30000 });
    await edit.click();
    await browser.pause(1000);

    // 所管部確認結果
    const input = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini_executive_confirmation_lbl +
        "')]]"
    );
    await input.scrollIntoView({ block: "center" });
    await input.waitForClickable({ timeout: 5000 });
    await input.click();
    await browser.pause(1000);
    const comboboxid = await input.getAttribute("aria-controls");
    const val = await $(".//div[@id='" + comboboxid + "']").$(
      "span=" + test_data.testData.ini3_notapplicable_value
    );
    await val.waitForClickable({ timeout: 5000 });
    await val.click();
    await browser.pause(1000);

    // 定型コメント
    await $(
      "//label[contains(.,'" + test_data.testData.ini3_comment_lbl + "')]"
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
        test_data.testData.ini3_comment_lbl +
        "']/@for]"
    ).setValue(test_data.testData.ini3_fixed_comment_value);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

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
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
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
    await browser.pause(20000);

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
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
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
