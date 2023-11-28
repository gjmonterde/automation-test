const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0001-2");

export default async function suite() {
  it("Fj_TestScheme_30_0001_step_31: No new 「取引先」business partner, 「取引先責任者」business partner, or user is created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "31";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // login as tantou
      await parent.Login_as_tantou();
    }

    // ★ 新環境適用' New Env Implementation
    // Go to Account list view
    await parent.Go_to_Account_list();

    // Search account
    await $(
      ".//input[@aria-label='" + test_data.testData.search_account + "']"
    ).setValue(test_data.testData.account_name);
    await browser.keys(["Enter"]);
    await $("span=" + test_data.testData.acct_label).click();
    await browser.pause(5000);

    // Screenshot - Account list view
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to Contacts list view
    await parent.Go_to_Contact_list();

    // Search contact
    await $(
      ".//input[@aria-label='" + test_data.testData.search_contact + "']"
    ).setValue(user_info.userInformation.var_sf_comminuty_loginuser);
    await browser.keys(["Enter"]);
    await $("span=" + test_data.testData.contact_label).click();
    await browser.pause(5000);

    // Screenshot - Contact list view
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to Account record page
    await parent.Go_to_Account();

    // ★ 新環境適用' New Env Implementation
    // Go to app related list
    await parent.Go_to_Account_App_list();

    var appid = await $(
      ".//a[contains(., '" + test_data.testData.app_list_sort_col + "')]"
    );
    var sort = await appid.nextElement().getText();
    // Sort
    while (sort !== test_data.testData.sort_app) {
      await appid.click();
      await browser.pause(5000);
      sort = await appid.nextElement().getText();
    }

    await expect(sort).toBe(test_data.testData.sort_app);

    // Go back to account page
    await parent.Go_to_Account();

    // Screenshot - Account record page
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 5000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to Contact page
    await parent.Go_to_Contact();

    // Screenshot - Contact record page
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
