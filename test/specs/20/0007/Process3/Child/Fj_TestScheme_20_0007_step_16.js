const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0007_step_16: The 保証審査詳細warranty examination details status is 「承認待ち」 waiting approval.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";
    // Go to GUD record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud2_id
    );

    // Take screenshot 保証審査 Detail Page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Modify 保証審査 Detail Page
    await $(
      "//button[@title='" + test_data.testData.gud2_decision_edit_btn + "']"
    ).waitForClickable({
      timeout: 3000,
    });
    await $(
      "//button[@title='" + test_data.testData.gud2_decision_edit_btn + "']"
    ).click();
    await browser.pause(3000);

    // 諾否判定
    await $(
      "//label[contains(.,'" + test_data.testData.gud2_decision_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("label=" + test_data.testData.gud2_decision_lbl).click();
    await $("//span[@title='" + test_data.testData.decision + "']").click();

    // 保証審査結果
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud1_guarantee_review_result_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "label=" + test_data.testData.gud1_guarantee_review_result_lbl
    ).click();
    await $(
      "//span[@title='" + test_data.testData.guarantee_result + "']"
    ).click();

    // 保証番号
    await $(
      "//label[contains(.,'" + test_data.testData.gua_number_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gua_number_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gua_number);
    await browser.pause(1000);

    // 保証額
    await $(
      "//label[contains(.,'" + test_data.testData.gua_amount_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gua_amount_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gua_amount);
    await browser.pause(1000);

    // 事由コード
    await $(
      "//div[contains(.,'" + test_data.testData.reason_code_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("//span[@title='" + test_data.testData.reason_code0 + "']").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await $(
      "//span[@title='" + test_data.testData.reason_code0 + "']"
    ).waitForClickable({
      timeout: 3000,
    });
    await $("//span[@title='" + test_data.testData.reason_code0 + "']").click();
    await $(
      "//button[@title='" + test_data.testData.amount_reduction + "']"
    ).click();
    await $("//span[@title='" + test_data.testData.reason_code1 + "']").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await $(
      "//span[@title='" + test_data.testData.reason_code1 + "']"
    ).waitForClickable({
      timeout: 3000,
    });
    await $("//span[@title='" + test_data.testData.reason_code1 + "']").click();
    await $(
      "//button[@title='" + test_data.testData.reason_code2 + "']"
    ).click();

    // 通知日
    await $("//label[contains(.,'" + test_data.testData.gua_date_lbl + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gua_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gua_date);
    await browser.pause(1000);

    // 保証条件
    await $(
      "//label[contains(.,'" + test_data.testData.gua_condition_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gua_condition_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gua_condition);
    await browser.pause(1000);

    // 保証期間
    await $("//label[contains(.,'" + test_data.testData.gua_term_lbl + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gua_term_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gua_term);
    await browser.pause(1000);

    // チェックコード
    await $(
      "//label[contains(.,'" + test_data.testData.gud2_orico_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gud2_orico_lbl +
        "']/@for]"
    ).setValue(test_data.testData.orico);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(8000);

    // Take screenshot of modified 保証審査 Detail Page
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
    await browser.pause(5000);

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(15000);

    // Take screenshot of 保証審査 Detail Page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Click 確認
    await $(
      ".//button[@name='" + test_data.testData.api_gud2_confirm_btn + "']"
    ).click();
    await browser.pause(5000);

    // Take screenshot of 確認 Page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Confirm
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();

    // Toast message screenshot
    await util.Toast_Message();

    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot of 保証審査 Detail Page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Go to 申込 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 案件詳細 tab
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
