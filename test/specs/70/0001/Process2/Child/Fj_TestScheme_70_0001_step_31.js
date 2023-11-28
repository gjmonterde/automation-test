const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0001_step_31: No 取引先 business partner, 取引先責任者 business " +
      "partner manager, or ユーザ user is newly created",
    async () => {
      const stepNum = "31"; // ★ 新環境適用' New Env Implementation

      // Go to App Record
      await parent.Open_SF_App_Record();

      // Screenshot
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
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to Account list view
      await browser.url(
        user_info.userInformation.var_sf_sfurl +
          test_data.testData.httpurl04 +
          test_data.testData.listview2_id
      ); // ★ 新環境適用' New Env Implementation
      await browser.pause(10000);

      // Search account
      await $(
        ".//input[@aria-label='" + test_data.testData.searchacct_lbl + "']"
      ).setValue(test_data.testData.account_name);
      await browser.keys(["Enter"]);
      await $("span=" + test_data.testData.account_lbl).click();
      await browser.pause(5000);

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-2"
      );

      // Go to Account record page
      await parent.Open_SF_Account_Record();

      // Go to App related list
      await util.Open_SF_Record_URL(
        2,
        user_info.object.account_obj,
        test_data.testData.account_id,
        user_info.object.account_app_rel
      );

      const appid = await $(
        ".//a[contains(., '" + test_data.testData.appid_col + "')]"
      );
      var sort = await appid.nextElement().getText();
      // Sort
      while (sort === test_data.testData.app_asc) {
        await appid.click();
        await browser.pause(2000);
        sort = await appid.nextElement().getText();
      }

      await expect(sort).toBe(test_data.testData.sort_app);

      // Screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-5"
      );

      // Go back to account page
      await parent.Open_SF_Account_Record();

      // Screenshot - Account record page
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
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 5000,
        }
      );

      // Go to Contacts list view
      await browser.url(
        user_info.userInformation.var_sf_sfurl +
          test_data.testData.httpurl05 +
          test_data.testData.listview3_id
      ); // ★ 新環境適用' New Env Implementation
      await browser.pause(10000);

      // Search contact
      await $(
        ".//input[@aria-label='" + test_data.testData.searchcontact_lbl + "']"
      ).setValue(test_data.testData.contact_name);
      await browser.keys(["Enter"]);
      await $("span=" + test_data.testData.contact_header).click();
      await browser.pause(5000);

      // Screenshot - Contact list view
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-3"
      );

      // Go to Contact page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.contact_obj,
        test_data.testData.contact_id
      );

      // Screenshot - Contact record page
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
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-6",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  );
}
