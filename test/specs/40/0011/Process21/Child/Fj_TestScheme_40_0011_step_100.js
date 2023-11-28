const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0011-21");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_40_0011_step_100: 振込先銀行口座 payee bank account 's 確認 " +
      "confirmation status =「確認済」Confirmed, then can re-approve",
    async () => {
      const stepNum = "100"; // ★ 新環境適用' New Env Implementation

      // Click Notification
      await parent.Click_Notification();

      // Click approve button
      await $(".//a[@title='" + test_data.testData.approve_btn + "']").click();
      await browser.pause(5000);

      // Click Approve button
      await $("button=" + test_data.testData.approve_btn).click();
      await $("div=" + test_data.testData.agr_approve_error).waitForExist({
        timeout: 30000,
      });

      // Screenshot - error
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );

      let ssno = 1;
      for (var i = 0; i < test_data.testData.ba_name_arr.length; i++) {
        // Go to BA Page
        await util.Open_SF_Record_URL(
          1,
          user_info.object.ba_obj,
          test_data.testData.ba_id_arr[i]
        );

        // Edit
        const ba_status_edit = await $(
          ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
        );
        await ba_status_edit.waitForClickable({ timeout: 10000 });
        await ba_status_edit.click();
        await browser.pause(3000);

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

        // 確認ステータス
        // ★ 新環境適用' New Env Implementation
        const status = await $("label=" + test_data.testData.ba_status_lbl);
        await status.$(function () {
          this.scrollIntoView({
            block: "center",
          });
        });
        const status_id = await status.getAttribute("for");
        const status_btn = await $(".//button[@id='" + status_id + "']");
        await status_btn.waitForClickable({ timeout: 10000 });
        await status_btn.click();
        await $("span=" + test_data.testData.ba_status_value).click();
        await browser.pause(2000);
        await browser.keys(["Escape"]);
        await browser.pause(3000);

        ssno = ssno + 1;
        // Screenshot
        const highlights1 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar1 = await $(".//header[@id='oneHeader']");
        const tabheader1 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        await browser.saveFullPageScreen(
          // ★ 新環境適用' New Env Implementation
          user_info.userInformation.screenshot +
            test_data.testData.spec40 +
            "_" +
            test_data.testData.tab0011 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
            fullPageScrollTimeout: 1000,
          }
        );

        // Save
        await $(
          ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
        ).click();
        await browser.pause(20000);
      }

      // Click Notification
      await parent.Click_Notification();

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      // Click approve button
      await $(".//a[@title='" + test_data.testData.approve_btn + "']").click();
      await browser.pause(5000);

      ssno = ssno + 1;
      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Click Approve button
      await $("button=" + test_data.testData.approve_btn).click();
      await $("span=" + test_data.testData.approved_text).waitForExist({
        timeout: 50000,
      });

      // Refresh
      await browser.refresh();
      await browser.pause(10000);
    }
  );
}
