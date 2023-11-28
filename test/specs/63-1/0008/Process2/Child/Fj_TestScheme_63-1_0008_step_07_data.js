const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0008-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0008_step_07_data: AntiSocial record (Data Linkage)", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_Admin();

    // Go to ASC Record
    await parent.Open_ASC_Record();

    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1" + 
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          highlights_before,
          headerBar_before,
          tabheader_before,
        ],
      }
    );
    await browser.pause(5000);

    // Go to ASC Record
    await parent.Open_ASC_Record();

    await $(
      "//button[@title='" +
        test_data.testData.anti_social_inquiry_result_label +
        " の編集']"
    ).waitForDisplayed({
      timeout: 5000,
    });
    await browser.pause(5000);
    await $(
      "//button[@title='" +
        test_data.testData.anti_social_inquiry_result_label +
        " の編集']"
    ).click();
    await browser.pause(5000);

    await $(
      "//div[@class='slds-clearfix detail-panel-root slds-card footer-visible']//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);

    // Insert value in 反社照会結果 field
    await $(
      "label=" + test_data.testData.anti_social_inquiry_result_label
    ).click();
    await browser.pause(5000);
    const anti_social_inquiry_results_val = await $(
      "//span[@title='" + test_data.testData.asc_results_value + "']"
    );
    await anti_social_inquiry_results_val.click();
    await browser.pause(5000);

    // Insert value in 授受結果 field
    await $(
      "label=" + test_data.testData.giving_receiving_label
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("label=" + test_data.testData.giving_receiving_label).click();
    await browser.pause(5000);
    const give_receive_result_val = await $(
      "//span[@title='" + test_data.testData.give_receive_result_value + "']"
    );
    await give_receive_result_val.click();
    await browser.pause(5000);

    // Update value of 反社照会ステータス field
    await $(
      "label=" + test_data.testData.anti_social_inquiry_status_label
    ).click();
    await browser.pause(5000);
    await $(
      "//span[@title='" + test_data.testData.completed_status_value + "']"
    ).scrollIntoView();
    await $(
      "//span[@title='" + test_data.testData.completed_status_value + "']"
    ).click();
    await browser.pause(5000);

    // Scroll to label
    await $(
      "label=" + test_data.testData.anti_social_inquiry_result_label
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
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
    await $(
      ".//flexipage-component2[@data-target-selection-name='force_highlightsPanel']"
    ).scrollIntoView();
    await browser.pause(500);

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    // Screenshot - During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);

    // Go to ASC Record
    await parent.Open_ASC_Record();

    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // Screenshot - After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          highlights_after,
          headerBar_after,
          tabheader_after,
        ],
      }
    );
    await browser.pause(2000);
  });
}
