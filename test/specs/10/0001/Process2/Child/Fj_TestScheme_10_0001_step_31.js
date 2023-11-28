const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_10_0001_step_31:「取引先」bussiness partner is newly created and linked to the appication", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to Account record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Go to App related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.account_obj,
      test_data.testData.account_id,
      user_info.object.account_app_rel
    );

    const appid = await $(
      ".//a[contains(., '" + test_data.testData.app_id_col + "')]"
    );
    var sort = await appid.nextElement().getText();
    // Sort
    while (sort != test_data.testData.sort_app) {
      await appid.click();
      await browser.pause(1000);
      sort = await appid.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.sort_app);

    // Go back to account page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Screenshot - Account record page
    const highlights5 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
        fullPageScrollTimeout: 5000,
      }
    );

    // Go to Contact page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.contact_obj,
      test_data.testData.contact_id
    );

    // Screenshot - Contact record page
    const highlights6 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar6 = await $(".//header[@id='oneHeader']");
    const tabheader6 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
        fullPageScrollTimeout: 3000,
      }
    );

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Users Page
    await util.Users_Page();

    await $("a=" + test_data.testData.account_name).click();
    await browser.pause(5000);
    await browser.switchToParentFrame();
    await browser.pause(5000);

    await browser.execute("document.body.style.zoom='40%'");
    await browser.pause(5000);

    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );

    var u_email;
    if (test_data.testData.user_status == 0) {
      // Email and password - Existing user (to be used for PG)
      u_email = user_info.userInformation.var_sf_comminuty_loginuser;
    } else if (test_data.testData.user_status == 1) {
      // Email and password - New user (to be used for testing)
      u_email = user_info.userInformation.var_sf_comminuty_loginuser2;
    }

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0001_31 + "'" + u_email + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
