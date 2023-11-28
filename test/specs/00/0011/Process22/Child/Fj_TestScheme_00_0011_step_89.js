const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-22"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0011_step_89: The 最終確認ステータス final review status changes to 「確認中」In Review", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "89";

    // Go to APP list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl + test_data.testData.httpurl10 // ★ 新環境適用' New Env Implementation
    );
    await browser.pause(5000);

    // Click Notification
    // ★ 新環境適用' New Env Implementation
    await $(".//*[@class='unsNotificationsCounter']").click();
    await browser.pause(5000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Click Notification record
    // ★ 新環境適用' New Env Implementation
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .waitForClickable({ timeout: 10000 });
    await $(".//a[@class='notification-link']")
      .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
      .click();
    await browser.pause(4000);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);

    // Click 却下 button
    const agr_reject_btn = await $(
      "//li[@data-target-selection-name='" +
        test_data.testData.api_agr_reject_btn +
        "']"
    );
    await agr_reject_btn.waitForClickable({ timeout: 10000 });
    await agr_reject_btn.click();
    await browser.pause(5000);

    // Input reject comment
    const reject_comment = await $(
      "//textarea[@class='inputTextArea cuf-messageTextArea textarea']"
    );
    await reject_comment.waitForExist({ timeout: 10000 });
    await reject_comment.setValue(test_data.testData.agr_reject_comment);
    await browser.pause(5000);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(4);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // Click 却下 button
    const reject_confirm = await $(
      "//button[@class='slds-button slds-button--neutral modal-button-left actionButton uiButton--default uiButton--brand uiButton']"
    );
    await reject_confirm.waitForClickable({ timeout: 10000 });
    await reject_confirm.click();

    // To determine if it reject
    const reject_status = await $(
      ".//span[contains(.,'" + test_data.testData.agr_reject_label + "')]"
    );
    await reject_status.waitForExist({ timeout: 30000 });
    await browser.pause(10000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
    await browser.pause(2000);

    // Go to AGR record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_AGR();

    // Screenshot - AGR Record
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
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );
  });
}
