const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0010_step_14: Check the contents of the uploaded file.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "14";

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // View attached file
    await util.View_images(1);

    // Wait for image to load
    const loaded_image = await $(".//img[@class='pageImg']");
    const isExisting = await loaded_image.waitForExist({ timeout: 20000 });

    if (isExisting === true) {
      // Take screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-2"
      );
    }
  });
}
