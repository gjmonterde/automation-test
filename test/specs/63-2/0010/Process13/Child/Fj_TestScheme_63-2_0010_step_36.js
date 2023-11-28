const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0010-13");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0010_step_36: You can set up and save a newly created 銀行口座 bank account (返済用フラグ flag is set to TRUE) ", async () => {
    const stepNum = "36"; // ★ 新環境適用' New Env Implementation

    // Go to BA record
    await parent.Open_Record_URL(
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    // Edit
    const ba_status_edit = await $(
      ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
    );
    await ba_status_edit.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await ba_status_edit.waitForClickable({ timeout: 10000 });
    await ba_status_edit.click();
    await browser.pause(3000);

    await $(
      "//div[@class='slds-clearfix detail-panel-root slds-card footer-visible']//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);

    // 確認ステータス
    const status = await $(
      "label=" + test_data.testData.ba_confirmation_status_label
    );
    await status.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    const status_id = await status.getAttribute("for");
    const status_btn = await $(".//button[@id='" + status_id + "']");
    await status_btn.waitForClickable({ timeout: 10000 });
    await status_btn.click();
    const val = await $("span=" + test_data.testData.confirmation_status_value);
    await val.waitForClickable({ timeout: 10000 });
    await val.click();
    await browser.pause(3000);

    // Save
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(10000);

    const ba_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const ba_headerBar = await $(".//header[@id='oneHeader']");
    const ba_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [ba_headerBar, ba_tabheader, ba_highlights],
      }
    );
    await browser.pause(2000);

    // Go to APP record
    await parent.Open_Record_URL(
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

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
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        disableCSSAnimation: true,
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
