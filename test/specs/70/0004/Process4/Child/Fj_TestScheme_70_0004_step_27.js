const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_27: Successful save", async () => {
    const stepNum = "27"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "auditor") {
      // login as tantou
      await parent.Login_as_shinsa();
    }

    var ssno = 0;
    for (var i = 0; i < test_data.testData.lcd12_id_arr.length; i++) {
      // Go to LCD record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.lcd_obj,
        test_data.testData.lcd12_id_arr[i]
      );

      const editbtn = await $(
        ".//button[@title='" + test_data.testData.lcd_onloan_edit_btn + "']"
      );
      await editbtn.scrollIntoView({ clock: "center" });
      await editbtn.waitForClickable({ timeout: 20000 });
      await editbtn.click();
      await browser.pause(5000);

      const on_loan_collection_flag_label = await $(
        ".//*[contains(text(), '" +
          test_data.testData.lcd_on_loan_collection_flag_lbl +
          "')]"
      );
      await on_loan_collection_flag_label.scrollIntoView();
      await on_loan_collection_flag_label.waitForClickable({
        timeout: 10000,
      });
      await on_loan_collection_flag_label.click();
      await browser.pause(1000);

      ssno = ssno + 1;
      // Screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await $(
        ".//records-form-footer[contains(., '" +
          test_data.testData.save_btn +
          "')]"
      ).$(function () {
        var height = document.getElementsByClassName(
          "record-body-container"
        ).offsetheight;
        this.style.marginTop = height - this.offsetHeight + "px";
        this.style.position = "static";
      });
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(5000);

      // Save record
      const lcd_save_record_btn = await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await lcd_save_record_btn.waitForClickable({ timeout: 10000 });
      await lcd_save_record_btn.click();
      await browser.pause(10000);

      // refresh
      await browser.refresh();
      await browser.pause(10000);

      ssno = ssno + 1;
      // Screenshot
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New records
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(5000);
    }
  });
}
