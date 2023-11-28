const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0010-13");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0010_step_37: Values can be set and saved", async () => {
    const stepNum = "37"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await parent.Open_APP_Record();

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    const main_col = await $(
      "//flexipage-component2[@data-target-selection-name='flexipage_tabset']"
    );
    const submission_section = await main_col.$(
      "//h3[contains(., '" + test_data.testData.submission_data_section + "')]"
    );
    await submission_section.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Edit 全店顧客番号 -- pencil
    const cif_edit = await $(
      ".//button[@title='" + test_data.testData.cif_edit + "']"
    );
    await cif_edit.scrollIntoView();
    await cif_edit.waitForClickable({
      timeout: 10000,
    });
    await cif_edit.click();
    await browser.pause(5000);

    await $("//records-form-footer[@class='slds-docked-form-footer']").$(
      function () {
        this.style.position = "static";
      }
    );

    // Set 全店顧客番号
    // ★ 新環境適用' New Env Implementation
    await $("//label[contains(.,'" + test_data.testData.cif_lbl + "')]").$(
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
        test_data.testData.cif_lbl +
        "']/@for]"
    ).setValue(test_data.testData.cif_value);
    await browser.pause(3000);

    // Set 融資基本口座番号
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.basic_loan_lbl + "')]"
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
        test_data.testData.basic_loan_lbl +
        "']/@for]"
    ).setValue(test_data.testData.basic_loan_value);
    await browser.pause(3000);

    // Click 顧客番号再取得連携ステータス label
    const customer_ledger_label = await $(
      ".//label[contains(., '" +
        test_data.testData.customer_ledger_label +
        "')]"
    );
    await customer_ledger_label.waitForClickable({
      timeout: 10000,
    });
    await customer_ledger_label.click();
    await browser.pause(3000);

    // Select 顧客番号再取得連携ステータス picklist value
    const customer_ledger_value = await $(
      ".//span[@title='" + test_data.testData.customer_ledger_value + "']"
    );
    await customer_ledger_value.scrollIntoView();
    await customer_ledger_value.waitForClickable({
      timeout: 10000,
    });
    await customer_ledger_value.click();
    await browser.pause(5000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );
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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);

    await browser.refresh();
    await browser.pause(5000);

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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
