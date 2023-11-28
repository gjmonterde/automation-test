const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0011-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_08: Can be saved with 銀行口座表示 bank account display flag = TRUE", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL(
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Scroll into フラグ管理
    await $(
      "//span[contains(., '" +
        test_data.testData.applicant_information +
        "')]/parent::*"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    // Click the pencil icon
    const bank_acct_display_flag = await $(
      ".//button[@title='" +
        test_data.testData.edit_bank_account_display_flag +
        "']"
    );
    await bank_acct_display_flag.scrollIntoView();
    await bank_acct_display_flag.waitForClickable({
      timeout: 10000,
    });
    await bank_acct_display_flag.click();
    await browser.pause(5000);

    // Footer
    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    // Check the checkbox if bank display flag is false
    if (test_data.testData.has_bank_display_flag == false) {
      const bank_account_display_flag = await $(
        ".//*[contains(text(), '" +
          test_data.testData.bank_account_display_flag +
          "')]"
      );
      await bank_account_display_flag.scrollIntoView();
      await bank_account_display_flag.waitForClickable({
        timeout: 10000,
      });
      await bank_account_display_flag.click();
      await browser.pause(3000);
    }

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    await util.Application_Record_Scrolling(2);

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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
