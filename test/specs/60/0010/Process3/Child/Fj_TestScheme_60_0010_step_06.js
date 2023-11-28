const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
const path = require("path");

export default function suite() {
  it("Fj_TestScheme_60_0010_step_06: Should be able to check the contents of the uploaded file.", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Loop through RDC records
    let ssno = 0;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.rdc_obj,
        test_data.testData.rdc_id_arr[i]
      );

      ssno = ssno + 1;
      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
          fullPageScrollTimeout: 3000,
        }
      );

      // Upload different files - Determine file to upload
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
      const image = await $("//span[@title='" + filename + "']");
      await image.waitForClickable({ timeout: 10000 });
      await image.click();
      await browser.pause(10000);

      ssno = ssno + 1;
      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
    }
  });
}
