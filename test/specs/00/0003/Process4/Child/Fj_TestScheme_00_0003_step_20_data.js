const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-4");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_20_data: 同一人照会ステータス　Same person inquiry status is　「自動OK」 'Auto OK'. (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    // Loop through the array to determine CDD records
    let ssno = 0; // ★ 新環境適用' New Env Implementation
    for (var cdd = 0; cdd < test_data.testData.cdd_array.length; cdd++) {
      var record = test_data.testData.cdd_array[cdd];
      // Go to CDD record
      // ★ 新環境適用' New Env Implementation
      await util.Open_SF_Record_URL(1, user_info.object.cdd_obj, record.Id);

      ssno = 1 + ssno; // ★ 新環境適用' New Env Implementation

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
          "-" +
          ssno +
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

      // Go to 店番号
      await $(
        ".//span[contains(.,'" + test_data.testData.cdd_bra_no_label + "')]"
      ).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(3000);

      // Edit the 店番号
      const edit_cdd = await $(
        ".//button[@title='" + test_data.testData.edit_pencil_cdd + "']"
      );
      await edit_cdd.waitForClickable({ timeout: 10000 });
      await edit_cdd.click();
      await browser.pause(3000);

      // Set 店番号
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" + test_data.testData.cdd_bra_no_label + "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.cdd_bra_no_label +
          "']/@for]"
      ).setValue(test_data.testData.cdd_bra_no_value);
      await browser.pause(1000);

      // Set 店別顧客番号
      // ★ 新環境適用' New Env Implementation
      await $("//label[contains(.,'" + test_data.testData.cdd_cif_no_lbl + "')]").$(
        function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      );
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.cdd_cif_no_lbl +
          "']/@for]"
      ).setValue(test_data.testData.cdd_cif_no_value);
      await browser.pause(1000);

      // Scroll up to highlights panel
      // ★ 新環境適用' New Env Implementation
      await util.Highlight_panel_scroll();

      // Deselect the hover/selected fields
      // ★ 新環境適用' New Env Implementation
      await util.Deselect_fields(3);

      ssno = 1 + ssno; // ★ 新環境適用' New Env Implementation
      // Screenshot -During Data
      const headerBar_cdd = await $(".//header[@id='oneHeader']");
      const tabheader_cdd = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cdd = await $(
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
          "-" +
          ssno +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar_cdd, tabheader_cdd, highlights_cdd],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);

      // Save record
      const cdd_save_btn = await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await cdd_save_btn.waitForClickable({ timeout: 10000 });
      await cdd_save_btn.click();
      await browser.pause(5000);
      await browser.refresh();
      await browser.pause(10000);

      ssno = 1 + ssno; // ★ 新環境適用' New Env Implementation

      // Screenshot - After Data
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
          "-" +
          ssno +
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
    }

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    ssno = 1 + ssno; // ★ 新環境適用' New Env Implementation
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
        "-" +
        ssno +
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
      "//span[@title='" + test_data.testData.ddp_status_value2 + "']"
    );
    await edit_ddp_status_value.scrollIntoView();
    await edit_ddp_status_value.waitForClickable({ timeout: 10000 });
    await edit_ddp_status_value.click();
    await browser.pause(5000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    ssno = 1 + ssno; // ★ 新環境適用' New Env Implementation
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
        "-" +
        ssno +
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

    ssno = 1 + ssno; // ★ 新環境適用' New Env Implementation
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
        "-" +
        ssno +
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
