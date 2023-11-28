const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-12"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_28: The File Upload component is hidden", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "28";

    let ssno = 0;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to My Page RDC record screen
      await parent.Go_to_RDC(test_data.testData.rdc_id_arr[i]); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-1"
      );
      await browser.pause(2000);
    }
  });
}
