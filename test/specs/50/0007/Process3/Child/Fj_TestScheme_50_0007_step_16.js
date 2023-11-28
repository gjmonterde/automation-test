const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0007-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0007_step_16: The 保証審査詳細warranty examination details status is 「承認待ち」 waiting approval.", async () => {
    const stepNum = "16"; // ★ 新環境適用' New Env Implementation

    // Login as tantou1
    await parent.Login_User_In_Charge();

    // Go to GUD record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud_id2
    );

    // Modify 保証審査 Detail Page
    await $(
      "//button[@title='" +
        test_data.testData.accept_or_reject_label +
        " の編集']"
    ).waitForClickable({
      timeout: 10000,
    });
    await $(
      "//button[@title='" +
        test_data.testData.accept_or_reject_label +
        " の編集']"
    ).click();
    await browser.pause(5000);

    await $("label=" + test_data.testData.accept_or_reject_label).click();
    await $("//span[@title='" + test_data.testData.decision + "']").click();

    await $("label=" + test_data.testData.guarantee_checkresult_label).click();
    await $("//span[@title='" + test_data.testData.gua_result + "']").click();

    await $(
      ".//label[contains(.,'" + test_data.testData.gua_number_label + "')]"
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
        test_data.testData.gua_number_label +
        "']/@for]"
    ).setValue(test_data.testData.gua_number);

    await $(
      ".//label[contains(.,'" + test_data.testData.gua_amount_label + "')]"
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
        test_data.testData.gua_amount_label +
        "']/@for]"
    ).setValue(test_data.testData.gua_amount);

    await $(
      "//span[@title='" + test_data.testData.already_paid_off + "']"
    ).waitForClickable({
      timeout: 10000,
    });
    await $(
      "//span[@title='" + test_data.testData.already_paid_off + "']"
    ).click();
    await $(
      "//button[@title='" + test_data.testData.picklist_select + "']"
    ).click();

    await $(
      ".//label[contains(.,'" +
        test_data.testData.gua_approval_date_label +
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
        test_data.testData.gua_approval_date_label +
        "']/@for]"
    ).setValue(test_data.testData.gua_date);

    await $(
      ".//label[contains(.,'" + test_data.testData.gua_condition_label + "')]"
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
        test_data.testData.gua_condition_label +
        "']/@for]"
    ).setValue(test_data.testData.gua_condition);

    await $(
      ".//label[contains(.,'" + test_data.testData.gua_term_label + "')]"
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
        test_data.testData.gua_term_label +
        "']/@for]"
    ).setValue(test_data.testData.gua_term);

    await $(".//label[contains(.,'" + test_data.testData.orico_label + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.orico_label +
        "']/@for]"
    ).setValue(test_data.testData.orico);

    await $(
      ".//label[contains(.,'" +
        test_data.testData.result_based_interest_rate_label +
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
        test_data.testData.result_based_interest_rate_label +
        "']/@for]"
    ).setValue(test_data.testData.result_based_interest_rate);

    browser.keys(["Escape"]);
    await browser.pause(8000);

    // Take screenshot 保証審査 Detail Page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await $(
      ".//records-form-footer[contains(., '" + test_data.testData.keep + "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "record-body-container"
      ).offsetheight;
      this.style.marginTop = height - this.offsetHeight + "px";
      this.style.position = "static";
    });
    await browser.pause(5000);

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Save changes
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(30000);

    // Take screenshot of 保証審査 Detail Page
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Click 確認
    await browser.pause(3000);
    await $(
      ".//button[@name='" +
        test_data.testData.gua_check_detail_confirm_btn_api +
        "']"
    ).click();
    await browser.pause(5000);

    // Take screenshot of 確認 Page
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(3000);

    await $(".//button[@type='" + test_data.testData.submit_btn + "']").click();

    // Toast message screenshot
    await util.Toast_Message();
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4"
    );

    // Refresh browser
    browser.refresh();
    await browser.pause(10000);

    // Take screenshot of 保証審査 Detail Page
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Go to 申込 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

    // Take screenshot of 申込 Detail Page
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
