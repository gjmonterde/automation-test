const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0009-2");

export default function suite() {
  it("Fj_TestScheme_00_0009_step_13: 保証審査.最終保証条件 warranty examination.final warranty condition is set to 条件確認ご融資条件", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "13";

    // Go to CRE record detail screen
    await parent.Open_CRE_Record();

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

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // ★ 新環境適用' New Env Implementation
    // Modify マイページ表示情報登録
    const loantermslbl = await $(
      ".//span[contains(., '" +
        test_data.testData.cre_examination_result_loan_conditions_label +
        "')]"
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
      ".//label[contains(., '" +
        test_data.testData.cre_examination_result_loan_conditions_label +
        "')]"
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
      test_data.testData.cre_msg_value1
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
      test_data.testData.cre_msg_value2
    );
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(5000);

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
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await browser.pause(3000);

    // Save changes
    await browser.pause(3000);
    browser.keys(["Tab"]);
    await browser.pause(1000);
    browser.keys(["Enter"]);
    await browser.pause(10000);

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

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
