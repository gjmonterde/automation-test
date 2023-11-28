const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_11_data: Same person inquiry status (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "11";

    // Login as admin
    await parent.Login_as_Admin();

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    // Screenshot - Before Data
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_before,
          tabheader_before,
          highlights_before,
        ],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Go to 同一人照会ステータス
    await $(
      ".//span[contains(.,'" + test_data.testData.ddp_status + "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(3000);

    // Edit the 同一人照会ステータス
    const edit_ddp_status = await $(
      ".//button[@title='" + test_data.testData.ddp_status_edit_pencil + "']"
    );
    await edit_ddp_status.waitForClickable({ timeout: 10000 });
    await edit_ddp_status.click();
    await browser.pause(3000);

    const edit_ddp_status_lbl = await $(
      "label=" + test_data.testData.ddp_status
    );
    await edit_ddp_status_lbl.waitForClickable({ timeout: 10000 });
    await edit_ddp_status_lbl.click();
    await browser.pause(3000);

    const edit_ddp_status_value = await $(
      "//span[@title='" + test_data.testData.ddp_status_value + "']"
    );
    await edit_ddp_status_value.scrollIntoView();
    await edit_ddp_status_value.waitForClickable({ timeout: 10000 });
    await edit_ddp_status_value.click();
    await browser.pause(5000);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(3);

    // Screenshot - During Data
    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_during = await $(
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

    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_during,
          tabheader_during,
          highlights_during,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save record
    const ddp_save_status_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await ddp_save_status_btn.waitForClickable({ timeout: 10000 });
    await ddp_save_status_btn.click();
    await browser.pause(20000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot- After Data
    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_after,
          tabheader_after,
          highlights_after,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
