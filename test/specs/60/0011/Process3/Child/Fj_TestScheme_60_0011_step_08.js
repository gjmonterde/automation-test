const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_08: Can be saved with the 銀行口座表示フラグ＝TRUE bank account display flag = TRUE.　", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Take screenshot of APP record details page
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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
    await browser.pause(3000);

    // Scroll to view - フラグ管理 section
    const flag_mng = await $(
      ".//span[@title='" + test_data.testData.flag_management + "']"
    );
    await flag_mng.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await browser.pause(2000);

    // Click edit button on 銀行口座表示フラグ field
    const edit_btn = await $(
      ".//button[@title='" + test_data.testData.flag_management_edit + "']"
    );
    await edit_btn.waitForClickable({ timeout: 5000 });
    await browser.pause(2000);
    await edit_btn.click();
    await browser.pause(3000);

    // Update 銀行口座表示フラグ field to TRUE
    const input = await $(
      ".//*[contains(text(), '" + test_data.testData.ba_display_flag_lbl + "')]"
    );
    await input.scrollIntoView({ block: "center" });
    await input.click();
    await browser.pause(2000);

    // Take screenshot of 銀行口座表示フラグ field
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);

    // Save changes
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 10000 });
    await save_edit_btn.click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(10000);

    await util.Application_Record_Scrolling(2);

    // Take screenshot of APP record details page
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
    await browser.pause(3000);
  });
}
