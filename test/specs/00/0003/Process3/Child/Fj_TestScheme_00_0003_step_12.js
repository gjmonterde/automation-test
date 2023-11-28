const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_12: Completion message is shown on the list and The 「確認」Confirm button is deactivated.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "12";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Data_Login_as_Tantou1();
    }

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    // Radio buttons
    // First record
    const input1 = await $(
      ".//input[@name='" +
        test_data.testData.first_rec_name +
        "'] [@value='" +
        test_data.testData.val_button +
        "']"
    );
    await browser.execute((val) => {
      val.click();
    }, input1);
    await browser.pause(1000);

    // Second record
    const input2 = await $(
      ".//input[@name='" +
        test_data.testData.second_rec_name +
        "'] [@value='" +
        test_data.testData.val_button +
        "']"
    );
    await browser.execute((val) => {
      val.click();
    }, input2);
    await browser.pause(1000);

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Press Confirm button
    const confirm_btn_cdd = await $(
      ".//button[@title='" + test_data.testData.confirm_btn_cdd + "']"
    );
    await browser.execute((val) => {
      val.click();
    }, confirm_btn_cdd);
    await browser.pause(5000);

    const isAlertOpen = await browser.isAlertOpen(); // get the status of alert open or not
    let text_alert = await browser.getAlertText(); // get the alert message

    let ssno = 1;
    if (isAlertOpen && text_alert === test_data.testData.alert_txt) {
      await browser.pause(5000);
      await browser.acceptAlert(); // Click OK in alert dialog
      await browser.pause(10000);

      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-" +
        ssno,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
