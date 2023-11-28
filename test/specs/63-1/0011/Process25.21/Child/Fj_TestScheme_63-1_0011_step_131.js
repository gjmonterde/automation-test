const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0011-25.21");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0007_step_131: The 最終確認 final review status changes to「実施済OK」", async () => {
    const stepNum = "131"; // ★ 新環境適用' New Env Implementation

    // Click on Notifications
    const notif_bell = await $(
      ".//button[@class='slds-button slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action forceHeaderButton']"
    );
    await notif_bell.click();
    await browser.pause(10000);

    // Click the AGR (old)
    await $("span=" + test_data.testData.agr2_name).click();
    await browser.pause(10000);

    // Click on Notifications
    await notif_bell.click();
    await browser.pause(10000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Click the AGR (new)
    await $(
      "//span[contains(.,'最終確認ID: " + test_data.testData.agr2_name + "')]"
    ).click();
    await browser.pause(10000);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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

    // Go to AGR record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.agr_obj,
      test_data.testData.agr2_id
    );

    const headerBar_agr = await $(".//header[@id='oneHeader']");
    const tabheader_agr = await $(
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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar_agr, tabheader_agr],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Click 承認履歴 record -- arrow
    const approval_arrow = await $(
      ".//lst-related-list-single-aura-wrapper[contains(., '" +
        test_data.testData.approval_history +
        "')]"
    ).$(".//*[@class='slds-float--right forceDeferredDropDownAction']");
    await approval_arrow.waitForClickable({ timeout: 10000 });
    await approval_arrow.click();
    await browser.pause(5000);

    // Click Approve
    const approval_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.approve_agr_btn +
        "']"
    );
    await approval_btn.waitForClickable({ timeout: 10000 });
    await approval_btn.click();
    await browser.pause(5000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Input approval comment
    const approval_comment = await $(
      "//textarea[@class='inputTextArea cuf-messageTextArea textarea']"
    );
    await approval_comment.waitForExist({ timeout: 10000 });
    await approval_comment.setValue(test_data.testData.approval_comment);
    await browser.pause(5000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(4);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // Click 承認 button
    const approve_confirm = await $(
      "//button[@class='slds-button slds-button--neutral modal-button-left actionButton uiButton--default uiButton--brand uiButton']"
    );
    await approve_confirm.waitForClickable({ timeout: 10000 });
    await approve_confirm.click();
    await browser.pause(10000);

    // To determine if it is already approve
    const approve_text = await $(
      ".//span[contains(., '" + test_data.testData.approve_status + "')]"
    );
    await approve_text.waitForExist({ timeout: 50000 });

    // Refresh the browser
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_agr2 = await $(".//header[@id='oneHeader']");
    const tabheader_agr2 = await $(
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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar_agr2, tabheader_agr2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to CNT record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cnt_obj,
      test_data.testData.cnt_id
    );

    const headerBar_cnt = await $(".//header[@id='oneHeader']");
    const tabheader_cnt = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_cnt = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Scroll to ASC
    await util.Scroll_to_related_list(test_data.testData.asc_header);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar_cnt, tabheader_cnt, highlights_cnt],
      }
    );
    await browser.pause(2000);

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    const headerBar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Get MNT, WNT Record
    await parent.Get_WNT_MNT_Record();

    // Go to MNT related list record
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_mnt_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-8"
    );
    await browser.pause(2000);

    // Go to WNT related list record
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_wnt_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-9"
    );
    await browser.pause(2000);

    // Go to MNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.mnt_obj,
      test_data.testData.mnt1_id
    );

    const highlights_mnt = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_mnt = await $(".//header[@id='oneHeader']");
    const tabheader_mnt = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-10",
      {
        hideAfterFirstScroll: [highlights_mnt, headerBar_mnt, tabheader_mnt],
      }
    );
    await browser.pause(2000);

    // Go to WNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.wnt_obj,
      test_data.testData.wnt1_id
    );

    const highlights_wnt = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_wnt = await $(".//header[@id='oneHeader']");
    const tabheader_wnt = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-11",
      {
        hideAfterFirstScroll: [highlights_wnt, headerBar_wnt, tabheader_wnt],
      }
    );
    await browser.pause(2000);
  });
}
