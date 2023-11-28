const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");

export default async function suite() {
  it("Fj_TestScheme_30_0009_step_10: Values can be set and saved for the following items. 審査結果ご融資条件 and 条件確認ご融資条件.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

    // Take screenshot CL Origination
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    // Modify マイページ表示情報登録
    const loantermslbl = await $(
      ".//span[contains(., '" + test_data.testData.cre_loan_terms_lbl + "')]"
    );
    await loantermslbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await loantermslbl.waitForClickable({ timeout: 30000 });
    await loantermslbl.doubleClick();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Edit 審査結果ご融資条件 field
    const condition = await $(
      ".//label[contains(., '" + test_data.testData.cre_result_condition + "')]"
    );
    await condition.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const condition_id = await condition.getAttribute("for");
    await $(".//input[@id='" + condition_id + "']").setValue(
      test_data.testData.msg_value1
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Edit 条件確認ご融資条件 field
    const loan_terms = await $(
      ".//label[contains(., '" + test_data.testData.cre_loan_terms_lbl + "')]"
    );
    await loan_terms.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const loan_terms_id = await loan_terms.getAttribute("for");
    await $(".//input[@id='" + loan_terms_id + "']").setValue(
      test_data.testData.msg_value2
    );
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(5000);

    // Take screenshot of modified マイページ表示情報登録
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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save changes
    browser.keys(["Tab"]);
    await browser.pause(1000);
    browser.keys(["Enter"]);
    await browser.pause(10000);
  });
}
