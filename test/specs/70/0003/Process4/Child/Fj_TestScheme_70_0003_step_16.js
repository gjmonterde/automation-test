const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0003-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0003_step_16: The number of CIF情報 CIF information records that overlap with a different " +
      "取引先 business partner than the 取引先 business partner of the application this time must be the same as the " +
      "number of CIF重複取引先 CIF information records",
    async () => {
      const stepNum = "16"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "uic") {
        await parent.Login_as_tantou();
      }

      // Get CIF record
      await parent.Get_CIF();

      // Go to App Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      // Screenshot - Application Page
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await $(".//*[@class='main-container slds-grid']").$(function () {
        var left = document.getElementsByClassName("col left-col slds-col"),
          middle = document.getElementsByClassName("col main-col slds-col"),
          right = document.getElementsByClassName("col right-col slds-col");
        var height = Math.max(
          left.offsetHeight,
          middle.offsetHeight,
          right.offsetHeight
        );
        this.style = "height:" + height + "px!important";
      });
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
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to App Record - DA related list
      await util.Open_SF_Record_URL(
        2,
        user_info.object.app_obj,
        test_data.testData.app_id,
        user_info.object.application_da_rel
      );

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-2"
      );

      // Get DA record
      await parent.Get_DA();

      var ssno = 2;
      for (var i = 0; i < test_data.testData.da_record_count; i++) {
        // Go to DA Record
        await util.Open_SF_Record_URL(
          1,
          user_info.object.cif_obj,
          test_data.testData.da_id_arr[i]
        );
        ssno = ssno + 1;
        // Screenshot - DA record
        const highlights2 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar2 = await $(".//header[@id='oneHeader']");
        const tabheader2 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        await browser.saveFullPageScreen(
          user_info.userInformation.screenshot +
            test_data.testData.spec70 +
            "_" +
            test_data.testData.tab0003 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          }
        );

        // Go back to account page
        await util.Open_SF_Record_URL(
          1,
          user_info.object.account_obj,
          test_data.testData.da_account_arr[i]
        );

        // Go to CIF related List
        await util.Open_SF_Record_URL(
          2,
          user_info.object.account_obj,
          test_data.testData.da_account_arr[i],
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

        // Go back to account page
        await util.Open_SF_Record_URL(
          1,
          user_info.object.account_obj,
          test_data.testData.da_account_arr[i]
        );

        ssno = ssno + 1;
        // Screenshot - Account record page
        const highlights3 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar3 = await $(".//header[@id='oneHeader']");
        const tabheader3 = await $(
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
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
            fullPageScrollTimeout: 5000,
          }
        );

        // GET DA CIF
        await parent.Get_DA_CIF(test_data.testData.da_account_arr[i]);
        if (
          test_data.testData.cif_id != test_data.testData.isUndefined &&
          test_data.testData.cif_id != ""
        ) {
          // Go to CIF Record
          await util.Open_SF_Record_URL(
            1,
            user_info.object.cif_obj,
            test_data.testData.cif_id
          );

          ssno = ssno + 1;
          // Screenshot - CIF record
          const highlights4 = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar4 = await $(".//header[@id='oneHeader']");
          const tabheader4 = await $(
            ".//div[@class='slds-no-print oneAppNavContainer']"
          );
          await browser.saveFullPageScreen(
            user_info.userInformation.screenshot +
              test_data.testData.spec70 +
              "_" +
              test_data.testData.tab0003 +
              "_" +
              stepNum +
              "-" +
              ssno,
            {
              hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
            }
          );
        }
      }
    }
  );
}
