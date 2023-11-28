const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
var path = require("path");

export default function suite() {
  it("Fj_TestScheme_40_0010_step_06: Can check the contents of the uploaded file", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Loop through RDC records
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC record detail screen
      await util.Open_SF_Record_URL(
        1,
        user_info.object.rdc_obj,
        test_data.testData.rdc_id_arr[i]
      );

      // Uploaded different files - Determine file uploaded
      let r = (i + 1) % 2;
      let fileno = 0;
      if (r == 0) {
        // if even
        fileno = 1;
      } else {
        // if odd
        fileno = 2;
      }

      // Check contents of the uploaded file
      var filename = path.parse(
        eval("user_info.userInformation.var_file_Path" + fileno)
      ).name;
      await browser.pause(5000);
      await $("body").scrollIntoView();
      await $("//span[@title='" + filename + "']").click();
      await browser.pause(5000);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          (i + 1)
      );
      await browser.pause(2000);
    }
  });
}
