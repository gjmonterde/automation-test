const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0004-6");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0004_step_32: Bank examination status should be「実施済OK」Performed OK", async () => {
    const stepNum = "32"; // ★ 新環境適用' New Env Implementation

    // Go to INI record
    await parent.Open_Record_URL(
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

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
    await browser.pause(20000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Press approve modal button
    await $(
      ".//button[@name='" + test_data.testData.ini3_approval_modal_button + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//button[@name='" + test_data.testData.ini3_approval_modal_button + "']"
    ).click();
    await browser.pause(6000);

    // Screenshot Approve modal screen
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Confirm
    await $(".//button[@type='" + test_data.testData.submit_btn + "']").click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Screenshot - toast message
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
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - No toast message
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
    await browser.pause(20000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);

    // Go to EXM record
    await parent.Open_Record_URL(
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Scroll to view
    await util.Scroll_to_related_list(test_data.testData.sec_header);

    const headerBar_exm = await $(".//header[@id='oneHeader']");
    const tabheader_exm = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar_exm, tabheader_exm, highlights],
      }
    );
    await browser.pause(3000);

    // Login to org as Admin for querying
    await parent.Login_As_Admin();

    // Go to Salesforce Developer Console
    // Make sure to login as admin
    await util.Developer_Console(
      test_data.testData.query_0004_32 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-6"
    );
    await browser.pause(5000);
  });
}
