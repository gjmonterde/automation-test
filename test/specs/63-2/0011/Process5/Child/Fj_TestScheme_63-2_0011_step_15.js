const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0011-5");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_15: The bank account 支店名 branch name and 口座番号 account number can be changed", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

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
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    var record = "";

    // Loop through the array to get BA record
    for (var ba = 0; ba < test_data.testData.ba_array.length; ba++) {
      record = test_data.testData.ba_array[0];
    }

    // Open 銀行口座 record
    await parent.Open_Record_URL(2, user_info.object.ba_obj, record.Id);

    // Dialog box
    const dialog = await $("//div[@data-aura-class='oneRecordActionWrapper']");

    // Modal full page
    await util.modal_fullpage();

    // Edit values for BA record
    // Set 支店名
    const new_branch_name_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.branch_name_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.branch_name_label + "')]"
      );
    await new_branch_name_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_branch_name_id = await new_branch_name_lbl.getAttribute("for");
    await $(".//input[@id='" + new_branch_name_id + "']").setValue(
      test_data.testData.edit_branch_name_value
    );
    await browser.pause(3000);

    // Set 口座番号 account_number_label
    const new_account_number1_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.account_number_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.account_number_label +
          "')]"
      );
    await new_account_number1_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_account_number1_id = await new_account_number1_lbl.getAttribute(
      "for"
    );
    await $(".//input[@id='" + new_account_number1_id + "']").setValue(
      test_data.testData.edit_account_number_value
    );
    await browser.pause(3000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(1);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
    await browser.pause(3000);

    // Click 保存 button
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(30000);

    // Go to APP record
    await parent.Open_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Open 銀行口座 record
    await parent.Open_Record_URL(1, user_info.object.ba_obj, record.Id);

    // Screenshot
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );
    await browser.pause(3000);
  });
}
