const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it(
    "Fj_TestScheme_10_0011_step_27: 融資額(調整上限)  amount of the loan (maximum adjustment) can be renewed to " +
      "a value smaller than 融資額 amount of the loan",
    async () => {
      const stepNum = "27"; // ★ 新環境適用' New Env Implementation

      // Go to 告知画面 tab
      await util.Application_Record_Scrolling(3);

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
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

      // Go to 告知画面 tab
      await util.Application_Record_Scrolling(3);

      // Edit
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//button[@title='" + test_data.testData.app_adj_loanamt + "']"
      ).$(function () {
        this.scrollIntoView({
          block: "center",
        });
      });
      await $(
        ".//button[@title='" + test_data.testData.app_adj_loanamt + "']"
      ).click();

      // 融資額(調整上限)
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" + test_data.testData.loan_upper_field + "')]"
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
          test_data.testData.loan_upper_field +
          "']/@for]"
      ).setValue(test_data.testData.upper_limit_value);
      await browser.pause(3000);

      // Save
      await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
      await browser.pause(20000);

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

      // Go to 告知画面 tab
      await util.Application_Record_Scrolling(3);

      // Screenshot
      const headerBar4 = await $(".//header[@id='oneHeader']");
      const tabheader4 = await $(
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
          hideAfterFirstScroll: [headerBar4, tabheader4],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
