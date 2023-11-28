const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_10_0007-2");

export default async function suite() {
  it("Fj_TestScheme_10_0007_step_06_data: The 保証審査詳細 Warranty Examination details status is 「実施済OK」Performed OK.", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Login to org as admin
    await parent.Login_Admin();

    // Go to GUD record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud_id1
    );

    // Take screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Refresh browser
    browser.refresh();
    await browser.pause(10000);

    // Modify 保証審査連携ステータス and 保証審査結果 fields 保証審査連携ステータス"
    await $(
      ".//button[@title='" + test_data.testData.gud_edit_field + " の編集']"
    ).waitForDisplayed({ timeout: 10000 });
    await $(
      ".//button[@title='" + test_data.testData.gud_edit_field + " の編集']"
    ).click();
    await browser.pause(5000);

    await $("label=" + test_data.testData.gud_edit_field).click();
    await browser.pause(3000);

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    await $(
      "//span[@title='" + test_data.testData.linkage_status_value + "']"
    ).click();
    await browser.pause(3000);

    await $("label=" + test_data.testData.accept_or_reject_field).click();
    await browser.pause(3000);

    await $(
      "//span[@title='" + test_data.testData.review_decision + "']"
    ).click();
    await browser.pause(3000);

    await $("label=" + test_data.testData.guarantee_chk_res_field).click();
    await browser.pause(3000);

    await $(
      "//span[@title='" + test_data.testData.approve_confirm + "']"
    ).click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" +
        test_data.testData.guarantee_amount_textbox +
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
        test_data.testData.guarantee_amount_textbox +
        "']/@for]"
    ).setValue(test_data.testData.approved_amount);
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.guarantee_term_textbox + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.guarantee_term_textbox +
        "']/@for]"
    ).setValue(test_data.testData.loan_amount_term);
    await browser.pause(3000);

    browser.keys(["Escape"]);

    // ★ 新環境適用' New Env Implementation
    await $(".//li[@title='" + test_data.testData.gud_scroll + "']").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await browser.pause(3000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);

    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(30000);

    // Take screenshot CL Origination
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
    await browser.pause(3000);
  });
}
