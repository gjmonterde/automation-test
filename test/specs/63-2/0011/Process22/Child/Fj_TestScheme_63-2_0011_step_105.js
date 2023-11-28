const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0011-22");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_105: Click the「ファイル削除」- an error message is displayed on the sub screen and cannot be deleted", async () => {
    const stepNum = "105"; // ★ 新環境適用' New Env Implementation

    // Go to RDC record
    await parent.Open_Record_URL(
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id_of_ver2
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
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);
  });
}
