const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-2"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0007_step_10_data: The 保証審査結果result of the warranty examination is 「否決」 'rejected.'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

    // Login to org as admin
    await parent.Login_Admin();

    // Go to GUD record page
    await parent.Open_GUD_Record(); // ★ 新環境適用' New Env Implementation

    // Take screenshot CL Origination
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // ★ 新環境適用' New Env Implementation
    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    await browser.pause(10000);

    // Modify 保証審査連携ステータス and 保証審査結果 fields 保証審査連携ステータス"
    // ★ 新環境適用' New Env Implementation
    await $(
      "//button[contains(.,'" +
        test_data.testData.assurance_review_edit_btn +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//button[@title='" + test_data.testData.assurance_review_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      '//button[@title="' + test_data.testData.assurance_review_edit_btn + '"]'
    ).click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // 保証審査連携ステータス
    await $(
      "//label[contains(.,'" + test_data.testData.gud_assurance_review_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("label=" + test_data.testData.gud_assurance_review_lbl).click();
    await browser.pause(5000);
    await $("//span[@title='" + test_data.testData.card_linkage + "']").click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // 保証審査結果
    await $(
      "//label[contains(.,'" + test_data.testData.gud_review_result_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("label=" + test_data.testData.gud_review_result_lbl).click();
    await browser.pause(5000);
    await $(
      "//span[@title='" +
        test_data.testData.gud_guarantee_result_rejection +
        "']"
    ).click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    //保証額
    test_data.testData.gud_approved_amount =
      parseInt(test_data.testData.gud_approved_amount) - 100;
    await $(
      "//label[contains(.,'" + test_data.testData.guarantee_amt_lbl + "')]"
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
        test_data.testData.guarantee_amt_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_approved_amount);

    // ★ 新環境適用' New Env Implementation
    //保証期間
    test_data.testData.gud_loan_amount_term =
      parseInt(test_data.testData.gud_loan_amount_term) - 5;
    await $(
      "//label[contains(.,'" + test_data.testData.gud_guarantee_term_lbl + "')]"
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
        test_data.testData.gud_guarantee_term_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_loan_amount_term);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "record-body-container"
      ).offsetheight;
      this.style.marginTop = height - this.offsetHeight + "px";
      this.style.position = "static";
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    await browser.pause(3000);
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(15000);

    // ★ 新環境適用' New Env Implementation
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
  });
}
