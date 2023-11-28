const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0007_step_16: The 保証審査詳細 warranty examination details status is「承認待ち」waiting approval", async () => {
    const stepNum = "16"; // ★ 新環境適用' New Env Implementation

    // Edit GUD record
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.gud_acceptance_judgement_edit_btn +
        "']"
    );
    await edit_btn.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await edit_btn.waitForClickable({
      timeout: 10000,
    });
    await edit_btn.click();
    await browser.pause(3000);

    // 諾否判定＝応諾
    await $("label=" + test_data.testData.gud_acceptance_judgement_lbl).click();
    await browser.pause(2000);
    const accept_val = await $(
      "//span[@title='" +
        test_data.testData.gud2_acceptance_judgement_value +
        "']"
    );

    // ★ 新環境適用' New Env Implementation
    await accept_val.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await accept_val.waitForClickable({ timeout: 10000 });
    await accept_val.click();
    await browser.pause(3000);

    // 保証審査結果＝ 条件付き承認
    await $(
      "label=" + test_data.testData.gud_guarantee_review_result_lbl
    ).click();
    await browser.pause(2000);
    const gud_rev_result = await $(
      "//span[@title='" +
        test_data.testData.gud2_guarantee_review_result_value +
        "']"
    );

    // ★ 新環境適用' New Env Implementation
    await gud_rev_result.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await gud_rev_result.waitForClickable({ timeout: 10000 });
    await gud_rev_result.click();
    await browser.pause(3000);

    // 通知日 = any value
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.guarantee_approval_date_field +
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
        test_data.testData.guarantee_approval_date_field +
        "']/@for]"
    ).setValue(test_data.testData.gud2_approval_date_value);
    await browser.pause(3000);

    // 保証番号 = any value
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.guarantee_number_field + "')]"
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
        test_data.testData.guarantee_number_field +
        "']/@for]"
    ).setValue(test_data.testData.gud2_guarantee_no_value);
    await browser.pause(3000);

    // 保証条件 = any value
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.guarantee_condition_field +
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
        test_data.testData.guarantee_condition_field +
        "']/@for]"
    ).setValue(test_data.testData.gud2_guarantee_condition_value);
    await browser.pause(3000);

    // 保証額＝ The amount reduced from 申込.融資額 (Value below 申込.融資額)
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud_guarantee_amount_lbl +
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
        test_data.testData.gud_guarantee_amount_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud2_guarantee_amount_value);
    await browser.pause(3000);

    // 保証期間 = 申込.期間
    // ★ 新環境適用' New Env Implementation
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
    ).setValue(test_data.testData.gud2_guarantee_term_value);
    await browser.pause(3000);

    // 審査結果基準利率 = value different from 申込.利率
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.result_based_interest_rate_field +
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
        test_data.testData.result_based_interest_rate_field +
        "']/@for]"
    ).setValue(test_data.testData.gud2_result_based_interest_rate_value);
    await browser.pause(3000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [highlights1, headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await saveedit.waitForClickable({ timeout: 10000 });
    await saveedit.click();
    await browser.pause(30000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Click 確認
    const confirm_btn = await $(
      ".//button[@name='" +
        test_data.testData.api_guarantee_check_confirm_btn +
        "']"
    );

    // ★ 新環境適用' New Env Implementation
    await confirm_btn.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await confirm_btn.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2"
    );

    // Submit
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();

    // Toast message screenshot
    await util.Toast_Message();

    await browser.pause(2000);
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3"
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
