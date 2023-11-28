const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0002_step_10: All files uploaded from the application form must be registered in file of 徴求書類 (When there is a simultaneous application for a set of goods)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

    // Go to CNT record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cnt_obj,
      test_data.testData.cnt2_id
    );

    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver3_id
    );

    // ★ 新環境適用' New Env Implementation
    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to RDC record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc2_id
    );

    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    await browser.pause(5000);

    // View 1st attached file
    await util.View_images(1);

    // Wait for image to load
    const loaded_image1 = await $(".//img[@class='pageImg']");
    const isExisting1 = await loaded_image1.waitForExist({ timeout: 20000 });

    if (isExisting1 === true) {
      // Take screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0002 +
          "_" +
          stepNum +
          "-4"
      );
    }

    // Click close button
    await $("//button[@title='" + test_data.testData.close_btn + "']").click();

    await browser.pause(5000);

    // View 2nd attached file
    await util.View_images(2);

    // Wait for image to load
    const loaded_image2 = await $(".//img[@class='pageImg']");
    const isExisting2 = await loaded_image2.waitForExist({ timeout: 20000 });

    if (isExisting2 === true) {
      // Take screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0002 +
          "_" +
          stepNum +
          "-5"
      );
    }
  });
}
