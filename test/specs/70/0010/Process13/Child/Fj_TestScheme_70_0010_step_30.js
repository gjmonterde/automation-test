const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0010-13");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0010_step_30: The 融資額(調整上限)amount of the loan " +
      "(maximum adjustment) can be renewed to a value smaller than the 融資額 amount of the loan",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "30";

      // Go to App Record
      await parent.Go_to_App(3); // ★ 新環境適用' New Env Implementation

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Refresh
      await parent.Go_to_App(3); // ★ 新環境適用' New Env Implementation
      // This fields need to fill-out manually (都道府県 , 市区町村 , 郵便番号１ , 郵便番号２ , ご希望の連絡先 ) before doing the execution

      // Edit
      const edit_btn = await $(
        "//button[@title='" +
          test_data.testData.app_loan_amt_max_edit_btn +
          "']"
      );
      await browser.pause(2000);
      await edit_btn.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation;
      await edit_btn.waitForClickable({ timeout: 5000 });
      await edit_btn.click();
      await browser.pause(5000);

      // 融資額(調整上限)
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" +
          test_data.testData.app_loan_amt_upper_limit_lbl +
          "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.app_loan_amt_upper_limit_lbl +
          "']/@for]"
      ).setValue(test_data.testData.app_loan_amt_upper_limit_val2);
      await browser.pause(1000);
      await browser.keys(["Escape"]);
      await browser.pause(2000);

      // Screenshot - edit page
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await $(".//*[@class='main-container slds-grid']").$(function () {
        var middle = document.getElementsByClassName("col main-col slds-col");
        var height = middle.offsetHeight;
        this.style = "height:" + height + "px!important";
      });
      await $(
        ".//records-form-footer[contains(., '" +
          test_data.testData.save_btn +
          "')]"
      ).$(function () {
        var height = document.getElementsByClassName(
          "col main-col slds-col"
        ).offsetHeight;
        this.style.marginTop = height + this.height + "px";
        (this.style.marginBottom = "-100px"), (this.style.position = "static");
      });
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
        }
      );

      // Click save button
      const save_edit_btn = await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await save_edit_btn.waitForClickable({ timeout: 5000 });
      await save_edit_btn.click();
      await browser.pause(25000);

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
