const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0011_step_08: Can be saved with 銀行口座表示 bank account display flag = TRUE", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Go to APP record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Scroll to フラグ管理 section
    const editsection = await $(
      ".//h3[contains(., '" + test_data.testData.flag_header + "')]"
    ).nextElement();

    // ★ 新環境適用' New Env Implementation
    await editsection.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Scroll into view 銀行口座表示フラグ field
    // ★ 新環境適用' New Env Implementation
    await $("span=" + test_data.testData.ba_display_flag_lbl).$(function () {
      this.scrollIntoView();
    });
    await browser.pause(5000);

    // Edit 銀行口座表示フラグ field
    const edit_btn = await $(
      ".//button[@title='" + test_data.testData.ba_display_flag_edit_btn + "']"
    );
    await edit_btn.waitForClickable({ timeout: 10000 });
    await edit_btn.click();
    await browser.pause(2000);
    const input = await $(
      ".//*[contains(text(), '" + test_data.testData.ba_display_flag_lbl + "')]"
    );
    await input.scrollIntoView({ block: "center" });
    await input.click();
    await browser.pause(2000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Save Edits
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(30000);

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

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
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
