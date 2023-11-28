const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0011_step_12: The 銀行口座 bank account registered on My Page should appear in the 関連リスト relevant list of applications", async () => {
    const stepNum = "12"; // ★ 新環境適用' New Env Implementation

    // Go to BA record list screen
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_ba_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Loop through the array to determine how many BA records
    for (var ba1 = 0; ba1 < test_data.testData.ba_array.length; ba1++) {
      var record = test_data.testData.ba_array[ba1];

      // Open 銀行口座 record
      await util.Open_SF_Record_URL(1, user_info.object.ba_obj, record.Id);

      var screenshotCountBA1 = 2 + ba1;
      // Screenshot - 銀行口座 record
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA1,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
    }
    await browser.pause(3000);

    // Loop through the array to determine how many BA records
    for (var ba2 = 0; ba2 < test_data.testData.ba_array.length; ba2++) {
      var record = test_data.testData.ba_array[ba2];

      // Open 銀行口座 record
      await util.Open_SF_Record_URL(1, user_info.object.ba_obj, record.Id);

      var screenshotCountBA2 = 2 + test_data.testData.ba_array.length + ba2;
      var branchCodeValue = 1 + ba2;

      // Update fields to 確認ステータス and 支店コード
      const edit = await $(
        ".//button[@title='" +
          test_data.testData.confirmation_status_label +
          " の編集']"
      );
      await edit.$(function () {
        this.scrollIntoView({
          block: "center",
        });
      });
      await edit.click();
      await browser.pause(1000);

      await $(
        "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
      ).$(function () {
        this.style.position = "static";
      });

      // Click 確認ステータス
      const confirmation_status = await $(
        "//label[contains(., '" +
          test_data.testData.confirmation_status_label +
          "')]"
      );
      await confirmation_status.waitForClickable({
        timeout: 10000,
      });
      await confirmation_status.click();
      await browser.pause(3000);

      // Select 確認ステータス picklist value
      const confirmation_status_value = await $(
        "//span[@title='" + test_data.testData.confirmation_status_value + "']"
      );
      await confirmation_status_value.scrollIntoView();
      await confirmation_status_value.waitForClickable({
        timeout: 10000,
      });
      await confirmation_status_value.click();
      await browser.pause(5000);

      // Edit 支店コード
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" + test_data.testData.branch_code_label + "')]"
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
          test_data.testData.branch_code_label +
          "']/@for]"
      ).setValue(test_data.testData.branch_code_value + branchCodeValue);
      await browser.pause(2000);

      //★ 新環境適用' New Env Implementation
      // 手数料額(円)
      await $(
        "//label[contains(.,'" +
          test_data.testData.new_account_fee_label +
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
          test_data.testData.new_account_fee_label +
          "']/@for]"
      ).setValue(test_data.testData.ba_fee_amount_value);
      await browser.pause(3000);
      await browser.keys(["Escape"]);
      await browser.pause(1000);

      // Scroll up to highlights panel
      await util.Highlight_panel_scroll();

      // Deselect the hover/selected fields
      await util.Deselect_fields(3);

      Screenshot;
      const edit_footer = await $(
        "records-form-footer.slds-docked-form-footer stickyFooter"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA2,
        {
          hideElements: [edit_footer],
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );

      // Click 保存 button
      const save_btn = await $(
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await save_btn.waitForClickable({ timeout: 10000 });
      await save_btn.click();
      await browser.pause(5000);
    }

    // Loop through the array to determine how many BA records
    for (var ba3 = 0; ba3 < test_data.testData.ba_array.length; ba3++) {
      var record = test_data.testData.ba_array[ba3];

      // Open 銀行口座 record
      await util.Open_SF_Record_URL(1, user_info.object.ba_obj, record.Id);

      var screenshotCountBA3 = test_data.testData.ba_array.length * 2 + 2 + ba3;

      // Screenshot - 銀行口座 record
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA3,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
    }
    await browser.pause(2000);
  });
}
