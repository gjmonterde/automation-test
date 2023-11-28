const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_34: Update the checkbox for preferential interest rates", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    // Scroll to 給振・年金
    await $(
      "//span[contains(., '" +
        test_data.testData.subsidy_pension_label +
        "')]/parent::*"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Update fields
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.subsidy_pension_label +
        " の編集']"
    );
    await edit.scrollIntoView({ block: "center" });
    await edit.click();
    await browser.pause(1000);

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);

    // Edit 給振・年金
    const subsidy_pension_label = await $(
      ".//*[contains(text(), '" +
        test_data.testData.subsidy_pension_label +
        "')]"
    );
    await subsidy_pension_label.scrollIntoView();
    await subsidy_pension_label.waitForClickable({ timeout: 10000 });
    await subsidy_pension_label.click();
    await browser.pause(1000);

    // Edit その他3
    const other_3_label = await $(
      ".//*[contains(text(), '" + test_data.testData.other_3_label + "')]"
    );
    await other_3_label.scrollIntoView();
    await other_3_label.waitForClickable({ timeout: 10000 });
    await other_3_label.click();
    await browser.pause(1000);

    // Edit ソーラー・蓄電池
    const solar_storage_battery_label = await $(
      ".//*[contains(text(), '" +
        test_data.testData.solar_storage_battery_label +
        "')]"
    );
    await solar_storage_battery_label.scrollIntoView();
    await solar_storage_battery_label.waitForClickable({ timeout: 10000 });
    await solar_storage_battery_label.click();
    await browser.pause(1000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    const edit_headerBar = await $(".//header[@id='oneHeader']");
    const edit_tabheader = await $(
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [edit_headerBar, edit_tabheader],
      }
    );

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
