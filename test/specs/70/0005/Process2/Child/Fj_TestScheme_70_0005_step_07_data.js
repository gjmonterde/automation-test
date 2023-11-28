const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0005_step_07_data: 外信照会 External Credit Inquiry Status (data linkage)", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "admin") {
      // login as admin
      await parent.Login_as_admin();
    }

    // Go to SEC-1 record detail
    await parent.Open_SEC();

    const headerBar_sec1 = await $(".//header[@id='oneHeader']");
    const tabheader_sec1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_sec1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_sec1, tabheader_sec1, highlights_sec1],
        fullPageScrollTimeout: 1000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Go to 外信照会ステータス
    await $(
      ".//span[contains(.,'" + test_data.testData.secondary_chk_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Edit the 外信照会ステータス
    const edit_secondary_chk_status = await $(
      ".//button[@title='" + test_data.testData.secondary_chk_pencil + "']"
    );
    await edit_secondary_chk_status.waitForClickable({ timeout: 10000 });
    await edit_secondary_chk_status.click();
    await browser.pause(3000);

    const edit_secondary_chk_label = await $(
      ".//label[contains(.,'" + test_data.testData.secondary_chk_lbl + "')]"
    );
    await edit_secondary_chk_label.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await edit_secondary_chk_label.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.sec_secondary_chk_val +
        "')]"
    ).click();
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    // Save changes for updated SEC record
    const sf_saveedit_btn_sec = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await sf_saveedit_btn_sec.waitForClickable({ timeout: 10000 });
    await sf_saveedit_btn_sec.click();
    await browser.pause(20000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_sec2 = await $(".//header[@id='oneHeader']");
    const tabheader_sec2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_sec2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_sec2, tabheader_sec2, highlights_sec2],
        fullPageScrollTimeout: 1000,
      }
    );

    // logout
    await parent.Logout();
  });
}
