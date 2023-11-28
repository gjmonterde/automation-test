const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0001-2");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_45: The 所有者 owner of the 取引先 business partner becomes your user", async () => {
    // Go to App Record
    await parent.Open_Salesforce_App_Record();

    // Edit 担当者を編集 field
    const manager_edit_button = await $(
      "//button[@title='" + test_data.testData.manager_edit_button + "']"
    );
    await manager_edit_button.$(function () {
      this.scrollIntoView({ block: "center" });
    }); // ★ 新環境適用' New Env Implementation
    await manager_edit_button.waitForClickable({ timeout: 5000 });
    await manager_edit_button.click();
    await browser.pause(3000);

    // Click 担当者 label
    const app_manager_label = await $(
      "//label[contains(.,'" + test_data.testData.app_manager_label + "')]"
    );
    await app_manager_label.$(function () {
      this.scrollIntoView({ block: "center" });
    }); // ★ 新環境適用' New Env Implementation
    await app_manager_label.waitForClickable({ timeout: 5000 });
    await app_manager_label.click();
    await browser.pause(5000);

    const manager_id = await $(
      "label=" + test_data.testData.app_manager_label
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

    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Save
    await $(
      "//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();

    await browser.pause(10000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

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

    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Get 取引先 record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Screenshot - Account record page
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 5000,
      }
    );
  });
}
