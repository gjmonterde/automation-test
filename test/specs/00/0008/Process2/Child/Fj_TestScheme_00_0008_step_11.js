const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0008-2"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_00_0008_step_11: The 反社照会ステータスanti-social inquiry status is " +
      "changed to 「実施済NG」Enforced NG",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "11";

      // Login as shinsa
      await parent.Login_as_shinsa1(); // ★ 新環境適用' New Env Implementation

      // Go to ASC record
      await parent.Open_ASC_Record(); // ★ 新環境適用' New Env Implementation

      // Click 謝絶
      const rejectbtn = await $(
        ".//button[@name='" + test_data.testData.api_asc_reject_btn + "']"
      );
      await rejectbtn.waitForClickable({ timeout: 5000 });
      await rejectbtn.click();
      await browser.pause(6000);

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0008 +
          "_" +
          stepNum +
          "-1"
      );

      // Confirm
      await $(
        ".//button[@type='" + test_data.testData.submit_type_btn + "']"
      ).click();

      // Toast message screenshot
      await util.Toast_Message(); // ★ 新環境適用' New Env Implementation
      await browser.pause(2000);
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0008 +
          "_" +
          stepNum +
          "-2"
      );

      // Refresh browser
      await browser.refresh();
      await browser.pause(10000);

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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0008 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );
    }
  );
}
