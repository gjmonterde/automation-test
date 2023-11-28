const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0011_step_08: Can be saved with 銀行口座表示 bank account display flag = TRUE", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Go to 申込 Page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    // Scrollintoview フラグ管理 section
    await $("span=" + test_data.testData.flag_mng_scroll).$(function () {
      this.scrollIntoView({ block: "center" });
    });
    await browser.pause(5000);

    // Scroll into view 銀行口座表示フラグ field
    await $("span=" + test_data.testData.ba_display_label).$(function () {
      this.scrollIntoView({ block: "center" });
    }); // ★ 新環境適用' New Env Implementation

    // Edit 銀行口座表示フラグ field
    await $(
      ".//button[@title='" + test_data.testData.ba_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//button[@title='" + test_data.testData.ba_edit_btn + "']"
    ).click();
    await browser.pause(2000);
    await $("span=" + test_data.testData.ba_display_label).$(function () {
      this.scrollIntoView({ block: "center" }); // ★ 新環境適用' New Env Implementation
    });
    const input = await $("label=" + test_data.testData.ba_display_label);
    await input.$(function () {
      this.scrollIntoView({ block: "center" }); // ★ 新環境適用' New Env Implementation
    });
    //await input.click();
    await browser.execute((input) => {
      input.click();
    }, input);

    // Save Edits
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);

    await browser.refresh();

    await util.Application_Record_Scrolling(2);

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
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
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
