const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-4");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0011_step_13: You can set up and store the following in your銀行口座 bank account." +
      "　確認ステータス Confirmation Status = 「確認済」 Confirmed, " +
      "支店コード Branch code = * Any number 3 digits",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "13";

      if (test_data.testData.logged_status != "uic") {
        // Login as tantou
        await parent.Login_as_tantou();
      }
      // Go to App Record
      await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

      // Screenshot
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 5000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // Go to BA Page
      await parent.Go_to_BA(); // ★ 新環境適用' New Env Implementation

      // Edit
      const ba_status_edit = await $(
        ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
      );
      await ba_status_edit.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation;
      await ba_status_edit.waitForClickable({ timeout: 5000 });
      await ba_status_edit.click();
      await browser.pause(3000);

      // 確認ステータス
      const status_lbl = await $("label=" + test_data.testData.ba_status_lbl);
      await status_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation;
      const status_id = await status_lbl.getAttribute("for");
      const status_btn = await $(".//button[@id='" + status_id + "']");
      await status_btn.click();
      await $("span=" + test_data.testData.ba_status_value).click();
      await browser.pause(1000);

      // 支店コード
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" + test_data.testData.ba_branch_code_lbl + "')]"
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
          test_data.testData.ba_branch_code_lbl +
          "']/@for]"
      ).setValue(test_data.testData.ba_branch_code_value);
      await browser.pause(3000);

      // ★ 新環境適用' New Env Implementation
      // 手数料額(円)
      await $(
        "//label[contains(.,'" + test_data.testData.ba_account_fee_label + "')]"
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
          test_data.testData.ba_account_fee_label +
          "']/@for]"
      ).setValue(test_data.testData.ba_fee_amount_value);
      await browser.pause(3000);
      await browser.keys(["Escape"]);
      await browser.pause(1000);

      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(10000);

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const highlights3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
          fullPageScrollTimeout: 1000,
        }
      );
    }
  );
}
