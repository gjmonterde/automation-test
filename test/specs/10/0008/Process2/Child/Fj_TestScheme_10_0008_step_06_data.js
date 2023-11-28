const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0008-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0008_step_06_data: Data Linkage Manual Edit of Fields", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Login to org as admin
    await parent.Login_as_Admin();

    // Go to ASC record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.asc_obj,
      test_data.testData.asc_id
    );

    // Screenshot - Before Data
    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.pause(5000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_before,
          tabheader_before,
          highlights_before,
        ],
      }
    );
    await browser.pause(3000);
    await browser.refresh();
    await browser.pause(10000);

    // Update value in 反社照会結果 field = ◎
    await $(
      '//button[@title="' + test_data.testData.edit_asc + '"]'
    ).waitForDisplayed({
      timeout: 5000,
    });
    await browser.pause(5000);
    await $('//button[@title="' + test_data.testData.edit_asc + '"]').click();
    await browser.pause(5000);

    await $("label=" + test_data.testData.asc_result).click();
    await browser.pause(5000);

    const anti_social_inquiry_results_val = await $(
      "//span[@title='" + test_data.testData.asc_res_val + "']"
    );
    await anti_social_inquiry_results_val.click();
    await browser.pause(5000);

    // Update value of 反社照会ステータス field = 連携完了
    await $("label=" + test_data.testData.picklist_label).click();
    await browser.pause(5000);

    await $(
      "//span[@title='" + test_data.testData.asc_value + "']"
    ).scrollIntoView();
    await $("//span[@title='" + test_data.testData.asc_value + "']").click();
    await browser.pause(5000);

    // Screenshot - During Data
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

    await $(
      ".//flexipage-component2[@data-target-selection-name='force_highlightsPanel']"
    ).scrollIntoView();
    await browser.pause(500);

    await $(
      "//div[@class='slds-clearfix detail-panel-root slds-card footer-visible']//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
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
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);
    await browser.refresh();
    await browser.pause(10000);

    // Deselect the pencil icon
    await util.Deselect_fields(3);

    // Screenshot - After Data
    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.pause(8000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_after,
          tabheader_after,
          highlights_after,
        ],
      }
    );
    await browser.pause(2000);
  });
}
