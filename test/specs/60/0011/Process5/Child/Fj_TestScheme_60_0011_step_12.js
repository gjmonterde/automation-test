const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_12: Bank Account's 確認 Confirmation Status =「未確認」Unconfirmed", async () => {
    const stepNum = "12"; // ★ 新環境適用' New Env Implementation

    // Go to BA related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_ba_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    let ssno = 1;
    for (var i = 0; i < test_data.testData.ba_new_record_no_value; i++) {
      // Go to BA record detail page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.ba_obj,
        test_data.testData.ba_id_arr[i]
      );

      ssno = ssno + 1;
      // Take screenshot of BA record detail page
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 1000,
        }
      );
      await browser.pause(3000);

      // Update BA confirmation status
      // 確認ステータス
      const confirmation_status_btn = await $(
        ".//button[@title='" +
          test_data.testData.ba_confirmation_status_label +
          " の編集']"
      );

      await confirmation_status_btn.$(function () {
        this.scrollIntoView({
          block: "center",
        });
      });
      await browser.pause(1000);
      await confirmation_status_btn.waitForClickable({ timeout: 10000 });
      await confirmation_status_btn.click();
      await browser.pause(2000);

      // ★ 新環境適用' New Env Implementation
      const status_id = await $(
        "label=" + test_data.testData.ba_confirmation_status_label
      ).getAttribute("for");
      const status_btn = await $(".//button[@id='" + status_id + "']");
      await status_btn.click();
      await $(
        "lightning-base-combobox-item=" +
          test_data.testData.ba_confirmation_status_value
      ).click();
      await browser.pause(1000);

      // Update BA branch code
      // 支店コード
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" +
          test_data.testData.new_branch_code_label +
          "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await browser.pause(3000);
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.new_branch_code_label +
          "']/@for]"
      ).setValue(eval("test_data.testData.new_branch_code_value" + (i + 1)));
      await browser.pause(3000);
      await await browser.keys(["Escape"]);
      await browser.pause(1000);

      await $(
        "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
      ).$(function () {
        this.style.position = "static";
      });
      await browser.pause(2000);

      // Take screenshot of BA1 edit page
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot + // ★ 新環境適用' New Env Implementation
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 1000,
        }
      );
      await browser.pause(3000);

      // Click submit
      await $(
        ".//button[@name='" + test_data.testData.save_edit_btn + "']"
      ).click();
      await browser.pause(10000);

      // Take screenshot of updated BA
      const highlights3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
          fullPageScrollTimeout: 1000,
        }
      );
      await browser.pause(3000);
    }
  });
}
