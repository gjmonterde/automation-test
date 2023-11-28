const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_19_data: JICC照会ステータス Data Linkage", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "19";

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to SEC record detail
    await parent.Open_Salesforce_EXM_SEC1_Record();

    const headerBar_sec3 = await $(".//header[@id='oneHeader']");
    const tabheader_sec3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_sec3 = await $(
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
        hideAfterFirstScroll: [headerBar_sec3, tabheader_sec3, highlights_sec3],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Go to JICC照会ステータス
    await $(
      ".//span[contains(.,'" + test_data.testData.jicc_status_label + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // Edit the JICC照会ステータス
    const edit_jicc_status = await $(
      ".//button[@title='" + test_data.testData.jicc_edit_pencil + "']"
    );
    await edit_jicc_status.waitForClickable({ timeout: 10000 });
    await edit_jicc_status.click();
    await browser.pause(3000);

    const jicc_status = await $(
      ".//label[contains(.,'" + test_data.testData.jicc_status_label + "')]"
    );
    await jicc_status.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await jicc_status.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.sec_status_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(3); // ★ 新環境適用' New Env Implementation
    await browser.pause(1000);

    // Screenshot -- During Data
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
    await browser.pause(2000);

    // Save changes for updated SEC record
    const save_btn_sec = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_btn_sec.waitForClickable({ timeout: 10000 });
    await save_btn_sec.click();
    await browser.pause(10000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_sec4 = await $(".//header[@id='oneHeader']");
    const tabheader_sec4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_sec4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
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
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_sec4, tabheader_sec4, highlights_sec4],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
