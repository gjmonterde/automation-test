const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0011_step_105: An error message is displayed on the sub screen and cannot be deleted. " +
      "申込が契約／謝絶のため、削除できません。 Application cannot be deleted due to contract/rejection.",
    async () => {
      const stepNum = "105"; // ★ 新環境適用' New Env Implementation

      // Go to RDC record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.rdc_obj,
        test_data.testData.rdc1_id
      );

      // Click ファイル削除 button
      const delete_btn = await $(
        ".//button[@name='" + test_data.testData.delete_btn_api + "']"
      );
      await delete_btn.waitForClickable({ timeout: 10000 });
      await delete_btn.click();
      await browser.pause(5000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
