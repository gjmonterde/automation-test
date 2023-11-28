const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-3");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0007_step_16: The 処理ステータス processing status is「保証審査承認待ち」'Pending Warranty Review Approval'.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";

    // Go to GUD record page
    await parent.Open_GUD_Record();

    // Take screenshot 保証審査 Detail Page
    // ★ 新環境適用' New Env Implementation
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(6000);

    // Modify 保証審査 Detail Page
    await $(
      '//button[@title="' +
        test_data.testData.acceptance_judgement_edit_btn +
        '"]'
    ).waitForClickable({
      timeout: 3000,
    });
    await $(
      '//button[@title="' +
        test_data.testData.acceptance_judgement_edit_btn +
        '"]'
    ).click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // 諾否判定
    await $("//label[contains(.,'" + test_data.testData.gud_decision_lbl + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await $("label=" + test_data.testData.gud_decision_lbl).click();
    await browser.pause(5000);
    await $("//span[@title='" + test_data.testData.gud_decision + "']").click();
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
    await $("//span[@title='" + test_data.testData.approve_btn + "']").click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    //保証番号
    await $(
      "//label[contains(.,'" + test_data.testData.gud_guarantee_no_lbl + "')]"
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
        test_data.testData.gud_guarantee_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_gua_number);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    //保証額
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

    // 事由コード
    // ★ 新環境適用' New Env Implementation
    await $(
      "//span[@title='" + test_data.testData.gud_reason_code0 + "']"
    ).waitForClickable({
      timeout: 3000,
    });
    await $(
      "//span[@title='" + test_data.testData.gud_reason_code0 + "']"
    ).click();
    await $(
      "//button[@title='" + test_data.testData.gud_amount_reduction_btn + "']"
    ).click();

    // 事由コード
    // ★ 新環境適用' New Env Implementation
    await $(
      "//span[@title='" + test_data.testData.gud_reason_code1 + "']"
    ).waitForClickable({
      timeout: 3000,
    });
    await $(
      "//span[@title='" + test_data.testData.gud_reason_code1 + "']"
    ).click();

    // 事由コード
    await $(
      "//button[@title='" + test_data.testData.gud_reason_code2 + "']"
    ).click();

    // ★ 新環境適用' New Env Implementation
    //通知日
    await $(
      "//label[contains(.,'" + test_data.testData.gud_guarantee_date_lbl + "')]"
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
        test_data.testData.gud_guarantee_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_gua_date);

    // ★ 新環境適用' New Env Implementation
    //保証条件
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud_guarantee_condition_lbl +
        "')]"
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
        test_data.testData.gud_guarantee_condition_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_gua_condition);

    // ★ 新環境適用' New Env Implementation
    //保証期間
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

    // ★ 新環境適用' New Env Implementation
    //チェックコード
    await $(
      "//label[contains(.,'" + test_data.testData.gud_orico_lbl + "')]"
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
        test_data.testData.gud_orico_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_orico);
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
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(15000);

    // Take screenshot of 保証審査 Detail Page
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Click 確認
    await browser.pause(3000);
    await $(
      ".//button[@name='" + test_data.testData.guarantee_confirm_api + "']"
    ).click();
    await browser.pause(3000);

    // Take screenshot of 保証審査 Page
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(3000);

    await $(".//button[@type='" + test_data.testData.submit_type_btn + "']").click();
    await browser.pause(3000);

    // Toast message screenshot
    await util.Toast_Message(); // ★ 新環境適用' New Env Implementation
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    // Take screenshot 保証審査 Detail Page
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot of 保証審査 Detail Page
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
    await browser.pause(3000);

    // Go to 申込 detail page
    await parent.Open_APP_Record();

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
    await browser.pause(20000);
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
