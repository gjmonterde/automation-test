const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0003-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0003_step_15: The same number of CIF情報 CIF information records " +
      "as the same person candidates as those determined to be identical",
    async () => {
      const stepNum = "15"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "uic") {
        await parent.Login_as_tantou();
      }

      // Get CIF record
      await parent.Get_CIF();

      // Go to account page
      await parent.Open_SF_Account_Record();

      // Go to CIF related List
      await util.Open_SF_Record_URL(
        2,
        user_info.object.account_obj,
        test_data.testData.account_id,
        user_info.object.account_cif_rel
      );

      const cifid = await $(
        ".//a[contains(., '" + test_data.testData.cif_col + "')]"
      );
      var sort = await cifid.nextElement().getText();
      // Sort
      while (sort != test_data.testData.sort_app) {
        await cifid.click();
        await browser.pause(2000);
        sort = await cifid.nextElement().getText();
      }

      await expect(sort).toBe(test_data.testData.sort_app);

      // Go to account page
      await parent.Open_SF_Account_Record();

      // Screenshot - Account record page
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
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
          fullPageScrollTimeout: 5000,
        }
      );

      // Go to CIF Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.cif_obj,
        test_data.testData.cif_id
      );

      // Screenshot - DDP record
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );
    }
  );
}
