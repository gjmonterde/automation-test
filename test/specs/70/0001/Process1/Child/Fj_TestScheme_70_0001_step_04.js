const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-1");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0001_step_04: Since data is manually created, the completion screen is excluded " +
      "from the viewpoint of confirmation",
    async () => {
      const stepNum = "4"; // ★ 新環境適用' New Env Implementation

      // Open application form
      await parent.Open_ApplicationForm();

      // Screenshot - 同意 Step
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
