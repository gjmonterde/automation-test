const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0011_step_08: From the 「新規」New button of the 銀行口座関連リスト bank account related list, new registration is possible", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Go to App record
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
        test_data.testData.spec50 +
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

    await browser.refresh();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    await $("span=" + test_data.testData.bankdisplay_flag_section).$(
      function () {
        this.scrollIntoView({ block: "center" });
      }
    );
    await browser.pause(5000);

    // Scroll into view 銀行口座表示フラグ field
    await $("span=" + test_data.testData.ba_display_label).$(function () {
      this.scrollIntoView({ block: "center" });
    });

    // Edit 銀行口座表示フラグ field
    await $(
      ".//button[@title='" + test_data.testData.ba_edit_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//button[@title='" + test_data.testData.ba_edit_btn + "']"
    ).click();
    await browser.pause(2000);
    await $("span=" + test_data.testData.ba_display_label).$(function () {
      this.scrollIntoView();
    });
    const input = await $(
      ".//*[contains(text(), '" + test_data.testData.ba_display_label + "')]"
    );
    await input.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await input.click();

    const footer2 = $(
      "//records-form-footer[@class='slds-docked-form-footer']"
    );
    await footer2.$(function () {
      this.style.position = "static";
    });

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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideElements: [footer2],
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save Edits
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(30000);

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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
  });
}
