const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0011_step_42: Validation Error「お借入内容調整実施済みのため、融資条件項目は変更できません。」", async () => {
    const stepNum = "42"; // ★ 新環境適用' New Env Implementation

    // Go to BA record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    // Update fields to 支店名
    const ba_status_edit = await $(
      ".//button[@title='" +
        test_data.testData.ba_status_edit_title +
        " の編集']"
    );
    await ba_status_edit.waitForClickable({ timeout: 10000 });
    await ba_status_edit.click();
    await browser.pause(3000);

    // Edit 支店名
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.branch_name_label + "')]"
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
        "*" +
        test_data.testData.branch_name_label +
        "']/@for]"
    ).setValue(test_data.testData.branch_name_change_value);
    await browser.pause(3000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    // Footer
    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save
    const save_btn = $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 5000 });
    await save_btn.click();
    await browser.pause(10000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    // Screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
