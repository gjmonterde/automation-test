const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0002_step_09: All files uploaded from the application form must be registered in the request form", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "9";

    // Go to RDC record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id
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

    // View 1st attached file
    await  util.View_images(1);

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
          "-2"
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
          "-3"
      );
    }
  });
}
