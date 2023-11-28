const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0008-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0008_step_09_data: Data linkage manual edit of fields", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // Login as admin user
    await parent.Login_Admin();

    // Go to ASC record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.asc_obj,
      test_data.testData.asc_id
    );

    // Screenshot - Before Data
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    await browser.refresh();
    await browser.pause(10000);

    // Edit 反社照会ステータス field
    await $(
      ".//button[@title='" + test_data.testData.asc_label + " の編集']"
    ).waitForDisplayed({
      timeout: 10000,
    });
    await browser.pause(5000);
    await $(
      ".//button[@title='" + test_data.testData.asc_label + " の編集']"
    ).click();
    await browser.pause(5000);

    await $(
      "//div[@class='slds-clearfix detail-panel-root slds-card footer-visible']//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);

    // Update value of 反社照会ステータス field
    await $("label=" + test_data.testData.asc_label).click();
    await browser.pause(5000);

    await $(
      "//span[@title='" +
        test_data.testData.anti_social_inquiry_status_value +
        "']"
    ).$(function () {
      this.scrollIntoView();
    });
    await $(
      "//span[@title='" +
        test_data.testData.anti_social_inquiry_status_value +
        "']"
    ).click();
    await browser.pause(5000);

    const edit_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const edit_headerBar = await $(".//header[@id='oneHeader']");
    const edit_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [edit_highlights, edit_headerBar, edit_tabheader],
      }
    );
    await browser.pause(5000);

    // Click 保存 button
    await browser.pause(5000);
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);

    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - After Data
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print']"
    );
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
  });
}
