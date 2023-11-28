const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0010-13");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0010_step_38: Values can be set and saved for the following items", async () => {
    const stepNum = "38"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL(
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // ★ 新環境適用' New Env Implementation
    await $("span=" + test_data.testData.submission_data_section).$(
      function () {
        this.scrollIntoView();
      }
    );
    await browser.pause(5000);
    await $("span=" + test_data.testData.execution_result_section).$(
      function () {
        this.scrollIntoView();
      }
    );
    await browser.pause(5000);

    // Edit 全店顧客番号を編集 value -- pencil
    const edit_store_wide_customer_number = await $(
      ".//button[@title='" +
        test_data.testData.edit_store_wide_customer_number +
        "']"
    );
    await edit_store_wide_customer_number.waitForClickable({
      timeout: 10000,
    });
    await edit_store_wide_customer_number.click();
    await browser.pause(5000);

    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    // Edit 全店顧客番号
    await $(
      ".//label[contains(.,'" +
        test_data.testData.store_wide_customer_number_label +
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
        test_data.testData.store_wide_customer_number_label +
        "']/@for]"
    ).setValue(test_data.testData.store_wide_customer_number_value);
    await browser.pause(3000);

    // Click 顧客番号再取得連携ステータス label
    const status_lbl = await $(
      ".//div[@data-target-selection-name='" +
        test_data.testData.api_app_customeledgerstatus_field +
        "']"
    ).$(
      "label=" +
        test_data.testData.customer_number_reacquisition_linkage_status_label
    );
    await status_lbl.scrollIntoView();
    await status_lbl.waitForClickable({ timeout: 10000 });
    await status_lbl.click();

    // Select 顧客番号再取得連携ステータス picklist field value
    const cust_num_reacq_linkage_status_value = await $(
      "//span[@title='" +
        test_data.testData.customer_number_reacquisition_linkage_status_value +
        "']"
    );
    await cust_num_reacq_linkage_status_value.waitForClickable({
      timeout: 10000,
    });
    await cust_num_reacq_linkage_status_value.click();
    await browser.pause(5000);

    const footer2 = $(
      "//records-form-footer[@class='slds-docked-form-footer']"
    );
    await footer2.$(function () {
      this.style.position = "static";
    });

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await browser.keys(["Escape"]);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

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
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        disableCSSAnimation: true,
        hideAfterFirstScroll: [headerBar1, tabheader1],
      }
    );
    await browser.pause(2000);

    // Click 保存 button
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);
    await browser.refresh();
    await browser.pause(10000);

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

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
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        disableCSSAnimation: true,
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
