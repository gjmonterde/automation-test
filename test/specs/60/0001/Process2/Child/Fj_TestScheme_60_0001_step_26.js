const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_60_0001_step_26: 申込 Application's 融資額 amount of loan = the value entered on 申込 application form", async () => {
    const stepNum = "26"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Open_App_Record();

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    // Screenshot - Application 告知画面 tab
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
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
    await browser.pause(3000);

    // Go to CL product
    await util.Open_SF_Record_URL(
      1,
      user_info.object.pro_obj,
      test_data.testData.clProd_id
    );

    // Take screenshot of CL product
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    // Scroll down to Web制御項目設定 section
    const webcontrol_item_settings_section = $(
      "//h3[contains(., '" +
        test_data.testData.webcontrol_item_settings_section +
        "')]"
    );

    await webcontrol_item_settings_section.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Scroll to 最大融資額
    await $(
      ".//span[contains(.,'" + test_data.testData.max_loan_amt_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Take screenshot of CL product
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);
  });
}
