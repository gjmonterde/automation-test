const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0009-2"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0009_step_11: Set and save the maximum number of digits that can be " +
      "entered in the 「条件確認ご融資条件」condition confirmation loan condition= field",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "11";

      // Go to CRE record detail screen
      await parent.Go_To_CRE(); // ★ 新環境適用' New Env Implementation

      // Click edit button
      const loantermslbl = await $(
        ".//span[contains(., '" + test_data.testData.cre_loan_terms_lbl + "')]"
      );
      await loantermslbl.scrollIntoView({ block: "center" });
      await loantermslbl.waitForClickable({ timeout: 30000 });
      await loantermslbl.doubleClick();
      await browser.pause(5000);

      // Edit 条件確認ご融資条件 field
      const loan_terms = await $(
        ".//label[contains(., '" + test_data.testData.cre_loan_terms_lbl + "')]"
      ).getAttribute("for");
      await $(".//input[@id='" + loan_terms + "']").setValue(
        test_data.testData.cre_loan_terms_val
      );
      await browser.pause(1000);
      await browser.keys(["Escape"]);
      await browser.pause(10000);

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
          test_data.testData.tab0009 +
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
      const btn1 = await $(
        ".//button[@title='" + test_data.testData.save_btn + "']"
      );
      await btn1.scrollIntoView({ block: "center" });
      await browser.execute((val) => {
        val.click();
      }, btn1);
      await browser.pause(30000);

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
