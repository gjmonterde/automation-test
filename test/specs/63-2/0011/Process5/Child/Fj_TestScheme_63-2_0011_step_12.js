const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0011-5");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_12: The 銀行口座 bank account registered on My Page should appear in the 関連リスト relevant list of 申込 applications", async () => {
    const stepNum = "12"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Loop through the array to determine how many BA records
    for (var ba1 = 0; ba1 < test_data.testData.ba_array.length; ba1++) {
      var record1 = test_data.testData.ba_array[ba1];

      // Open 銀行口座 record
      await parent.Open_Record_URL(1, user_info.object.ba_obj, record1.Id);

      var screenshotCountBA1 = 2 + ba1;

      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA1,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );
      await browser.pause(3000);
    }

    // Loop through the array to determine how many BA records
    for (var ba2 = 0; ba2 < test_data.testData.ba_array.length; ba2++) {
      var record2 = test_data.testData.ba_array[ba2];

      // Open 銀行口座 record
      await parent.Open_Record_URL(1, user_info.object.ba_obj, record2.Id);

      var screenshotCountBA2 = 2 + test_data.testData.ba_array.length + ba2;
      var branchCodeValue = 1 + ba2;

      // Update fields to 確認ステータス and 支店コード
      const edit = await $(
        ".//button[@title='" +
          test_data.testData.confirmation_status_label +
          " の編集']"
      );
      await edit.scrollIntoView({ block: "center" });
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
      await $(
        "//label[contains(.,'" + test_data.testData.branch_code_label + "')]"
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
      await browser.pause(3000);

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
      ).setValue(test_data.testData.new_account_amount_value);
      await browser.pause(3000);

      // Scroll up to highlights panel
      await util.Highlight_panel_scroll();

      // Deselect the hover/selected fields
      await util.Deselect_fields(3);

      // Screenshot
      const edit_footer = await $(
        "records-form-footer.slds-docked-form-footer stickyFooter"
      );
      const highlights3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA2,
        {
          hideElements: [edit_footer],
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        }
      );

      // Click 保存 button
      const save_btn = await $(
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await save_btn.waitForClickable({ timeout: 10000 });
      await save_btn.click();
      await browser.pause(10000);
    }

    // Loop through the array to determine how many BA records
    for (var ba3 = 0; ba3 < test_data.testData.ba_array.length; ba3++) {
      var record3 = test_data.testData.ba_array[ba3];

      // Open 銀行口座 record
      await parent.Open_Record_URL(1, user_info.object.ba_obj, record3.Id);

      var screenshotCountBA3 = test_data.testData.ba_array.length * 2 + 2 + ba3;

      // Screenshot
      const highlights4 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar4 = await $(".//header[@id='oneHeader']");
      const tabheader4 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec63_2 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-" +
          screenshotCountBA3,
        {
          hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        }
      );
    }
    await browser.pause(2000);
  });
}
