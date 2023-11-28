const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");

export default async function suite() {
  it(
    "Fj_TestScheme_40_0011_step_12: You can set up and store the following in your 銀行口座 bank account: " +
      "確認 Confirmation Status =　「確認済」Confirmed, 支店コード Branch code = * Any number 3 digits",
    async () => {
      const stepNum = "12"; // ★ 新環境適用' New Env Implementation

      // Edit
      const ba_status_edit = await $(
        ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
      );
      await ba_status_edit.scrollIntoView({ block: "center" });
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
      const status_lbl = await $("label=" + test_data.testData.ba_status_lbl);
      await status_lbl.scrollIntoView({ block: "center" });
      const status_id = await status_lbl.getAttribute("for");
      const status_btn = await $(".//button[@id='" + status_id + "']");
      await status_btn.click();
      await $("span=" + test_data.testData.ba_status_value).click();
      await browser.pause(1000);

      // 支店コード
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" +
          test_data.testData.ba_branch_code_field +
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
          test_data.testData.ba_branch_code_field +
          "']/@for]"
      ).setValue(test_data.testData.ba_branch_code_value);
      await browser.pause(2000);
      await browser.keys(["Escape"]);
      await browser.pause(3000);

      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
          fullPageScrollTimeout: 1000,
        }
      );

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(50000);

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 1000,
        }
      );
    }
  );
}
