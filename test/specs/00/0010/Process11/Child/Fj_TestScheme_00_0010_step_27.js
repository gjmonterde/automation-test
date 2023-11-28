const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-11"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_27: 徴求書類 requested document should be「銀行確認済」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "27";

    let ssno = 0;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC record detail screen
      await parent.Go_to_RDC(test_data.testData.rdc_id_arr[i]); // ★ 新環境適用' New Env Implementation

      // Click 確認 button
      const rdc_approve_btn = await $(
        "//button[@name='" + test_data.testData.confirm_btn + "']"
      );
      await rdc_approve_btn.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await rdc_approve_btn.click();
      await browser.pause(5000);

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Click 確認 confirmation button
      const footer_modal = await $("//footer[@class='slds-modal__footer']");
      const rdc_approve_confirm_btn = await footer_modal.$(
        ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
      );
      await rdc_approve_confirm_btn.waitForClickable({ timeout: 10000 });
      await rdc_approve_confirm_btn.click();

      // To determine if the toast shows up
      // ★ 新環境適用' New Env Implementation
      await util.Toast_Message();

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot - toast message
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
      await browser.pause(3000);

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      ); // ★ 新環境適用' New Env Implementation
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      ); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot - updated page without toast message
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
      await browser.pause(2000);
    }
  });
}
