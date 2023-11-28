const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it(
    "Fj_TestScheme_10_0011_step_104: An error message is displayed on the sub screen and cannot be deleted. " +
      "申込が契約／謝絶のため、削除できません。Application cannot be deleted due to contract/rejection.",
    async () => {
      const stepNum = "104"; // ★ 新環境適用' New Env Implementation

      // Go to BA record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.ba_obj,
        test_data.testData.ba_id
      );

      // click Delete button
      await $(
        ".//button[@name='" + test_data.testData.ba_delete_button_api + "']"
      ).click();
      await browser.pause(5000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
