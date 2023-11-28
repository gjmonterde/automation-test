const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility.js");
const stepNum = "17"; // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0005_step_17_data: JICC結果(注意M) Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // JICC結果(注意Ｍ) (JIA) Record Creation in JIM
    await JIA_Record_Creation();
  });
}

async function JIA_Record_Creation() {
  // Get Records
  await parent.JID_New_Record();
  await parent.JIM_New_Records();

  // Go to TRR record detail screen
  await parent.Open_Salesforce_TRR_Record();

  // Go to JICC照会明細 (JID) record detail screen
  await parent.Open_Salesforce_JID_Record();

  var ssno = 0; // ★ 新環境適用' New Env Implementation
  for (var i = 0; i < test_data.testData.jim_new_record_no_value; i++) {
    // Go to JIM record detail screen
    await parent.Open_Salesforce_JIM_Record(test_data.testData.jim_id_arr[i]); // ★ 新環境適用' New Env Implementation

    const headerBar_jim = await $(".//header[@id='oneHeader']");
    const tabheader_jim = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jim = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- Before Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jim, tabheader_jim, highlights_jim],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Click JICC結果(注意Ｍ) (JIA) record -- arrow
    const jia_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.jia_create + "']"
    );
    await jia_arrow.waitForClickable({ timeout: 10000 });
    await jia_arrow.click();
    await browser.pause(5000);

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data
    );

    // JICC結果(注意Ｍ) (JIA) Creation -- click New
    const create_new_jia_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.jia_create +
        "']"
    );
    await create_new_jia_btn.waitForClickable({ timeout: 10000 });
    await create_new_jia_btn.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Set 注意コード ( 新ファイルM ) field
    const jia_field = await $(
      ".//label[contains(.,'" + test_data.testData.jia_code_label + "')]"
    );
    await jia_field.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await jia_field.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        eval("test_data.testData.jia" + (i + 1) + "_code_value") +
        "')]"
    ).click();
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(1); // ★ 新環境適用' New Env Implementation

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- During Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data
    );
    await browser.pause(2000);

    // Save changes for JICC結果(注意Ｍ) (JIA) record
    const jia_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await jia_save_edit_btn.waitForClickable({ timeout: 10000 });
    await jia_save_edit_btn.click();
    await browser.pause(7000);

    await browser.refresh();
    await browser.pause(10000);

    const headerBar_jim2 = await $(".//header[@id='oneHeader']");
    const tabheader_jim2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jim2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- After Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jim2, tabheader_jim2, highlights_jim2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Get JICC結果(注意Ｍ) (JIA) records
    // ★ 新環境適用' New Env Implementation
    await parent.JIA_New_Record_JIM();

    // Go to JIA record detail screen
    await parent.Open_Salesforce_JIA_Record(); // ★ 新環境適用' New Env Implementation

    const headerBar_jia = await $(".//header[@id='oneHeader']");
    const tabheader_jia = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jia = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- After Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jia, tabheader_jia, highlights_jia],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  }
}
