const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");

export default async function suite() {
  it(
    "Fj_TestScheme_40_0011_step_15: The bank account 支店名 branch name and  " +
      "口座番号 account number can be changed",
    async () => {
      const stepNum = "15"; // ★ 新環境適用' New Env Implementation

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

      // 支店名
      await $(
        ".//label[contains(.,'" +
          test_data.testData.ba_input_branch_name_lbl +
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
        "*//input[@id=//label[normalize-space(.)='" +
          "*" +
          test_data.testData.ba_input_branch_name_lbl +
          "']/@for]"
      ).setValue(test_data.testData.ba_branch_name_value);
      await browser.pause(2000);
      await browser.keys(["Escape"]);
      await browser.pause(3000);

      // 口座番号
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" +
          test_data.testData.ba_bank_account_no_field +
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
          "*" +
          test_data.testData.ba_bank_account_no_field +
          "']/@for]"
      ).setValue(test_data.testData.ba_input_acct_no_lbl);
      await browser.pause(2000);
      await browser.keys(["Escape"]);
      await browser.pause(3000);

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(50000);

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

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
    }
  );
}
