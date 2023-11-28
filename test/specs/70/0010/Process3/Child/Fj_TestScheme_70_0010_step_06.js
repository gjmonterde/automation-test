const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0010-3"); // ★ 新環境適用' New Env Implementation
var path = require("path");

export default async function suite() {
  it("Fj_TestScheme_70_0010_step_06: You can check the contents of the uploaded file", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // Loop through RDC records
    let ssno = 0;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC page
      await parent.Go_To_RDC(test_data.testData.rdc_id_arr[i]); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1;
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
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
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
