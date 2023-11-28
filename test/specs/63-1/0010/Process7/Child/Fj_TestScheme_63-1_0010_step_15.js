const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0010-7");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0010_step_15: Check the contents of the uploaded file", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Go to RDC2 Record
    await parent.Open_RDC2_Record();

    // View 1st attached file
    await util.View_images(1);

    // Wait for image to load
    const loaded_image1 = await $(".//img[@class='pageImg']");
    const isExisting1 = await loaded_image1.waitForExist({ timeout: 30000 });

    if (isExisting1 === true) {
      // Screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-1"
      );
    }
  });
}
