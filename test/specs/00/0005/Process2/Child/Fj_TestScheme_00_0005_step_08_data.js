const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_08_data: JICC照会明細(他機関) Data Linkage", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    const headerBar_trr = await $(".//header[@id='oneHeader']");
    const tabheader_trr = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_trr = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot -- Before Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_trr, tabheader_trr, highlights_trr],
      }
    );
    await browser.pause(2000);

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Go to JICC照会明細(他機関) (JIO) related list
    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.jio_rel_list_name);

    // Click JICC照会明細(他機関) (JIO) record -- arrow
    const jio_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.jio_other_create + "']"
    );
    await jio_arrow.waitForClickable({ timeout: 10000 });
    await jio_arrow.click();
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    // JICC照会明細(他機関) (JIO) Creation -- click New
    const create_new_jio_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.jio_other_create +
        "']"
    );
    await create_new_jio_btn.waitForClickable({ timeout: 10000 });
    await create_new_jio_btn.click();
    await browser.pause(5000);

    // Set 支払遅延の有無（CIC交流）field
    const cic = await $(
      ".//label[contains(.,'" + test_data.testData.jio_overdue_label + "')]"
    );
    await cic.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await cic.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.jio_overdue_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(1);

    // Screenshot -- During Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data
    );
    await browser.pause(2000);

    // Save changes for JICC照会明細(他機関) (JIO) record
    const jio_save_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await jio_save_btn.waitForClickable({ timeout: 10000 });
    await jio_save_btn.click();
    await browser.pause(5000);

    // Get JIO & JID record
    await parent.JID_New_Record();
    await parent.JIO_New_Record();

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const highlights_trr2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_trr2 = await $(".//header[@id='oneHeader']");
    const tabheader_trr2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot -- After Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_trr2, tabheader_trr2, highlights_trr2],
      }
    );
    await browser.pause(2000);

    // Scroll up to the highlight panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Go to JIO record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_Salesforce_JIO_Record();

    const highlights_jio = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_jio = await $(".//header[@id='oneHeader']");
    const tabheader_jio = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot -- After Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-5" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [tabheader_jio, headerBar_jio, highlights_jio],
      }
    );
    await browser.pause(2000);
  });
}
