const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0003-4");
const util = require("../../../../../pageobjects/utility");
var ssno = 0;

export default function suite() {
  it("Fj_TestScheme_63-1_0003_step_14_data: Same person inquiry status and CDD record (Data Linkage)", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to DDP record
    await parent.Open_SF_DDP_Record();

    // Loop through the array to determine CDD records
    for (var cdd = 0; cdd < test_data.testData.cdd_array.length; cdd++) {
      var record = test_data.testData.cdd_array[cdd];
      // Go to CDD record
      await util.Open_SF_Record_URL(1, user_info.object.cdd_obj, record.Id);

      ssno = 1 + ssno;
      // Screenshot - Before Data
      const headerBar_before = await $(".//header[@id='oneHeader']");
      const tabheader_before = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_before = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
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
        ".//span[contains(.,'" + test_data.testData.bra_no_label + "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
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
      await $("//label[contains(.,'" + test_data.testData.bra_no_lbl + "')]").$(
        function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      );
      await browser.pause(3000);
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.bra_no_lbl +
          "']/@for]"
      ).setValue(test_data.testData.bra_no_value);
      await browser.pause(3000);

      // Set 店別顧客番号
      // ★ 新環境適用' New Env Implementation
      await $("//label[contains(.,'" + test_data.testData.cif_no_lbl + "')]").$(
        function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      );
      await browser.pause(3000);
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.cif_no_lbl +
          "']/@for]"
      ).setValue(test_data.testData.cif_no_value);
      await browser.pause(3000);

      const edit_footer = await $(
        "records-form-footer.slds-docked-form-footer stickyFooter"
      );

      await $(
        "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
      ).$(function () {
        this.style.position = "static";
      });

      // Scroll up to highlights panel
      await util.Highlight_panel_scroll();

      // Deselect the hover/selected fields
      await util.Deselect_fields(3);

      ssno = 1 + ssno;
      // Screenshot -During Data
      const headerBar_cdd = await $(".//header[@id='oneHeader']");
      const tabheader_cdd = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cdd = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          ssno +
          test_data.testData.data,
        {
          hideElements: [edit_footer],
          hideAfterFirstScroll: [headerBar_cdd, tabheader_cdd, highlights_cdd],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);

      // Save record
      const cdd_save_btn = await $(
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await cdd_save_btn.waitForClickable({ timeout: 10000 });
      await cdd_save_btn.click();
      await browser.pause(5000);
      await browser.refresh();
      await browser.pause(5000);

      ssno = 1 + ssno;
      // Screenshot - After Data
      const headerBar_after = await $(".//header[@id='oneHeader']");
      const tabheader_after = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_after = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
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
    await parent.Open_SF_DDP_Record();

    ssno = 1 + ssno;
    // Screenshot - Before Data
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    ssno = 1 + ssno;
    // Screenshot - During Data
    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_during = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
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
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await ddp_save_status_btn.waitForClickable({ timeout: 10000 });
    await ddp_save_status_btn.click();
    await browser.pause(50000);
    await browser.refresh();
    await browser.pause(10000);

    ssno = 1 + ssno;
    // Screenshot- After Data
    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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
