const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0010-13");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0010_step_37: 顧客番号再取得連携ステータス field value should be edited to 手動照会済み while any values can be set to both 全店顧客番号 and 融資基本口座番号 fields", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "37";

    // ★ 新環境適用' New Env Implementation
    // Go to APP record detail screen
    await parent.Go_to_APP();

    // Scroll to section
    await $(
      ".//span[contains(., '" +
        test_data.testData.submission_data_section +
        "')]"
    ).scrollIntoView();

    // Click pencil icon beside 全店顧客番号 field
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.store_wide_customer_number_edit_btn +
        "']"
    );
    await edit_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await edit_btn.waitForClickable({ timeout: 60000 });
    await edit_btn.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Input 全店顧客番号 value
    await $("//label[contains(.,'" + test_data.testData.cif_no_lbl + "')]").$(
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
        test_data.testData.cif_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.cif_no_value);
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Input 融資基本口座番号 value
    await $(
      "//label[contains(.,'" + test_data.testData.basic_loan_acc_no_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.basic_loan_acc_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.basic_loan_acc_no_value);
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Click 顧客番号再取得連携ステータス label
    const cust_num_reacq_linkage_status_lbl = await $(
      "//label[contains(.,'" +
        test_data.testData.cust_num_reacq_linkage_status_lbl +
        "')]"
    );
    await cust_num_reacq_linkage_status_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await cust_num_reacq_linkage_status_lbl.waitForClickable({
      timeout: 10000,
    });
    await cust_num_reacq_linkage_status_lbl.click();

    // ★ 新環境適用' New Env Implementation
    // Select 顧客番号再取得連携ステータス picklist field value
    const cust_num_reacq_linkage_status_value = await $(
      "//span[@title='" +
        test_data.testData.cust_num_reacq_linkage_status_value +
        "']"
    );
    await cust_num_reacq_linkage_status_value.waitForClickable({
      timeout: 5000,
    });
    await cust_num_reacq_linkage_status_value.click();
    await browser.pause(5000);

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var middle = document.getElementsByClassName("col main-col slds-col");
      var height = middle.offsetHeight;
      this.style = "height:" + height + "px!important";
    });
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "col main-col slds-col"
      ).offsetHeight;
      this.style.marginTop = height + this.height + "px";
      (this.style.marginBottom = "-100px"), (this.style.position = "static");
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click 保存 button
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 5000 });
    await save_edit_btn.click();
    await browser.pause(10000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Go to 4th tab
    await util.Application_Record_Scrolling(4);

    const app_headerBar = await $(".//header[@id='oneHeader']");
    const app_tabheader = await $(
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

    // Take screenshot for 30-1-(15)_0010_37-2
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot + "30-1-(15)_0010_37-2",
      {
        hideAfterFirstScroll: [app_headerBar, app_tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
