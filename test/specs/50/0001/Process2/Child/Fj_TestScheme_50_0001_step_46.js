const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_30_0001_step_46: The 所有者 owner of the 取引先 business partner becomes your user", async () => {
    const stepNum = "46"; // ★ 新環境適用' New Env Implementation

    // Login as tantou1
    await parent.Login_as_Tantou1();

    // Go to App Record
    await parent.Open_Salesforce_App_Record();

    // Edit 担当者を編集 field
    const manager_edit_button = await $(
      "//button[@title='" + test_data.testData.manager_edit_button + "']"
    );
    await manager_edit_button.waitForClickable({ timeout: 10000 });
    await manager_edit_button.click();
    await browser.pause(3000);

    // Click 担当者 label
    const manager_label = await $(
      ".//label[contains(.,'" + test_data.testData.manager_label + "')]"
    );
    await manager_label.waitForClickable({ timeout: 10000 });
    await manager_label.click();
    await browser.pause(5000);

    const manager_id = await $(
      "label=" + test_data.testData.manager_label
    ).getAttribute("for");
    await $("//input[contains(@id, '" + manager_id + "')]").setValue(
      test_data.testData.new_manager_value
    );
    await browser.pause(5000);
    await $(
      "//lightning-base-combobox-formatted-text[@title='" +
        test_data.testData.new_manager_value +
        "']"
    ).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Save
    await $("//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Get 取引先 record
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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
        fullPageScrollTimeout: 5000,
      }
    );
  });
}
