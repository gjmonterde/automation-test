var path = require("path");
const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_00_0010-10");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_25: Check the contents of the uploaded file.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "25";

    // Go to APP record detail screen
    await parent.Open_APP_Record();

    // Go to RDC record detail screen
    await parent.Open_RDC3_Record();

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Check contents of the uploaded file
    var filename = path.parse(user_info.userInformation.var_file_Path1).name;
    await browser.pause(5000);
    await $("body").scrollIntoView();
    await $(`//span[@title='${filename}']`).click();
    await browser.pause(5000);

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
