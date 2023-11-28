const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0007-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0007_step_07_data: Manual process for 保証審査詳細 record field update (data linkage)", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_admin();

    // Go to GUD Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.gud_obj,
      test_data.testData.gud_id
    );

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Click edit btn
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.gud_assurance_review_edit_btn +
        "']"
    );
    // ★ 新環境適用' New Env Implementation
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

    // 保証審査連携ステータス = 連携済み
    const assurance_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.gud_assurance_review_lbl +
        "')]"
    );
    await assurance_lbl.click();
    await browser.pause(2000);
    const assurance_val = await $(
      "//span[@title='" + test_data.testData.gud_assurance_review_value + "']"
    );
    // ★ 新環境適用' New Env Implementation
    await assurance_val.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await assurance_val.waitForClickable({ timeout: 10000 });
    await assurance_val.click();
    await browser.pause(2000);

    // 保証審査結果＝条件付き承認
    const guarantee_review_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.gud_guarantee_review_result_lbl +
        "')]"
    );
    // ★ 新環境適用' New Env Implementation
    await guarantee_review_lbl.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });

    await guarantee_review_lbl.click();
    await browser.pause(2000);
    const guarantee_val = await $(
      "//span[@title='" +
        test_data.testData.gud_guarantee_review_result_value +
        "']"
    );

    // ★ 新環境適用' New Env Implementation
    await guarantee_val.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await guarantee_val.waitForClickable({ timeout: 10000 });
    await guarantee_val.click();
    await browser.pause(2000);

    // 保証額＝申込.融資額
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
    ).setValue(test_data.testData.gud_guarantee_amount_value);
    await browser.pause(3000);

    // 保証期間＝value reduce from 申込.期間 application.period
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
    ).setValue(test_data.testData.gud_guarantee_term_value);
    await browser.pause(3000);
    await $(
      "//label[contains(., '" +
        test_data.testData.gud_guarantee_amount_lbl +
        "')]"
    ).click();

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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
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
    await saveedit.waitForClickable({ timeout: 10000 });
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
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

    // Logout
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);
  });
}
