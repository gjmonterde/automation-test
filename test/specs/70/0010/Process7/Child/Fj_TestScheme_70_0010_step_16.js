const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0010-7"); // ★ 新環境適用' New Env Implementation
var path = require("path");

export default async function suite() {
  it("Fj_TestScheme_70_0010_step_16: You can check the contents of the uploaded file", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";

    // Go to RDC page (first RDC record)
    await parent.Go_To_RDC();

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Check contents of the uploaded file
    var filename = path.parse(user_info.userInformation.var_file_Path1).name;
    await browser.pause(5000);
    await $("body").scrollIntoView();
    const image = await $("//span[@title='" + filename + "']");
    await image.waitForClickable({ timeout: 10000 });
    await image.click();
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
