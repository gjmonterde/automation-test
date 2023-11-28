const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0003-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0003_step_11: The inquiry status of the same person becomes 'inquiry of the same person'", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Go to DDP record
    await parent.Open_SF_DDP_Record();

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-2",
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

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
