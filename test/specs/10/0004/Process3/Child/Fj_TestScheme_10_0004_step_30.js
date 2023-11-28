const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0004-3");

export default function suite() {
  it("Fj_TestScheme_10_0004_step_30: On the Bank Examination (3) detail screen: Check the items in the preferential interest rate section", async () => {
    const stepNum = "30"; // ★ 新環境適用' New Env Implementation

    // Go to 3rd INI related record
    await parent.Open_3rd_INI_Record();

    // ★ 新環境適用' New Env Implementation
    // Scroll to 給振・年金
    await $(
      "//span[contains(., '" +
        test_data.testData.subsidy_pension_label +
        "')]/parent::*"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Update fields
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.subsidy_pension_label +
        " の編集']"
    );
    await edit.scrollIntoView({ block: "center" });
    await edit.click();
    await browser.pause(1000);

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);

    // Edit 給振・年金
    const subsidy_pension_label = await $(
      ".//*[contains(text(), '" +
        test_data.testData.subsidy_pension_label +
        "')]"
    );
    await subsidy_pension_label.scrollIntoView();
    await subsidy_pension_label.waitForClickable({ timeout: 10000 });
    await subsidy_pension_label.click();
    await browser.pause(1000);

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);
    await browser.refresh();
    await browser.pause(10000);

    // Save 3rd INI Record Page Full Screen
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
    await browser.pause(20000);

    // Screenshot 3rd INI related record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
