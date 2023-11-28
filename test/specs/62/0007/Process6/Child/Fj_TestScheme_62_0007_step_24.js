const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0007-6");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_62_0007_step_24: The 保証審査詳細 warranty examination details status is 「承認待ち」 Pending", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "24";

    // Go to GUD Record
    await parent.Go_to_GUD();

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Edit values
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.gud_acceptance_judgement_edit_btn +
        "']"
    );
    await edit_btn.scrollIntoView({
      block: "center",
    });
    await edit_btn.waitForClickable({
      timeout: 5000,
    });
    await edit_btn.click();
    await browser.pause(3000);

    // 諾否判定＝応諾
    const acceptance_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.gud_acceptance_judgement_lbl +
        "')]"
    );
    await acceptance_lbl.waitForClickable({ timeout: 5000 });
    await acceptance_lbl.click();
    await browser.pause(2000);
    const acceptanceval = await $(
      "//span[@title='" +
        test_data.testData.gud_acceptance_judgement_value +
        "']"
    );
    await acceptanceval.scrollIntoView({ block: "center" });
    await acceptanceval.waitForClickable({ timeout: 5000 });
    await acceptanceval.click();
    await browser.pause(2000);

    // 保証審査結果＝承認
    const guarantee_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.gud_guarantee_result_lbl +
        "')]"
    );
    await guarantee_lbl.waitForClickable({ timeout: 5000 });
    await guarantee_lbl.click();
    await browser.pause(2000);
    const guaranteeval = await $(
      "//span[@title='" + test_data.testData.gud_guarantee_result_value + "']"
    );
    await guaranteeval.scrollIntoView({ block: "center" });
    await guaranteeval.waitForClickable({ timeout: 5000 });
    await guaranteeval.click();
    await browser.pause(2000);

    // 通知日
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud_guarantee_approval_date_lbl +
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
        test_data.testData.gud_guarantee_approval_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_approval_date_value);
    await browser.pause(1000);

    // 保証番号
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud_guarantee_number_lbl +
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
        test_data.testData.gud_guarantee_number_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_number_value);
    await browser.pause(1000);

    // 保証条件
    // ★ 新環境適用' New Env Implementation
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
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gud_guarantee_condition_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_condition_value);
    await browser.pause(1000);

    // 保証額
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
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.gud_guarantee_amount_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_amount_value);
    await browser.pause(1000);

    // 保証有効期限
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud_guarantee_exp_date_lbl +
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
        test_data.testData.gud_guarantee_exp_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.gud_guarantee_exp_date_value);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

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
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [highlights2, headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await saveedit.waitForClickable({ timeout: 5000 });
    await saveedit.click();
    await browser.pause(30000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Click 確認 button
    const approve_btn = await $(
      "//button[@name='" + test_data.testData.api_gud_confirm_btn + "']"
    );
    await approve_btn.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await approve_btn.waitForClickable({ timeout: 30000 });
    await approve_btn.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-4"
    );

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const ver_approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await ver_approve_confirm_btn.waitForClickable({ timeout: 30000 });
    await ver_approve_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.pause(1000);
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );

    // Go to App Record
    await parent.Go_to_APP();

    // Screenshot - Application Page
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
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
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
