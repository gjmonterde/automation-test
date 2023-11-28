const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0007_step_106: The 最終確認 final review status changes to「確認中」", async () => {
    const stepNum = "106"; // ★ 新環境適用' New Env Implementation

    // Go to APP list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        "o/genesis__Applications__c/list?filterName=Recent"
    );
    await browser.pause(10000);

    // Click on Notifications
    await $(
      ".//button[@class='slds-button slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action forceHeaderButton']"
    ).click();
    await browser.pause(10000);

    // Screenshot
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

    // Click the AGR
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

    // Click 却下 button
    const agr_reject_btn = await $(
      "//li[@data-target-selection-name='" +
        test_data.testData.agr_reject_api +
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
    await reject_comment.setValue(test_data.testData.reject_comment);
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
      ".//span[contains(.,'" + test_data.testData.reject_label + "')]"
    );
    await reject_status.waitForExist({ timeout: 50000 });
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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
  });
}
