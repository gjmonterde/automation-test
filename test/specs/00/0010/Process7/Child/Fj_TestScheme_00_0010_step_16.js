const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_00_0010-7");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_16: Check the contents of the uploaded file", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";

    // Go to RDC2 Record
    await parent.Open_RDC_Record(); // ★ 新環境適用' New Env Implementation

    // View 1st attached file
    await util.View_images(1); // ★ 新環境適用' New Env Implementation

    // Wait for image to load
    const loaded_image1 = await $(".//img[@class='pageImg']");
    const isExisting1 = await loaded_image1.waitForExist({ timeout: 20000 });

    if (isExisting1 === test_data.testData.isTrue,) {
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-1"
      );
    }
  });
}
