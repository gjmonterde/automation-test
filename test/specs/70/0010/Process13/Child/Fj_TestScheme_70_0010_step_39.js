const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0010-13");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0010_step_39: Values can be set and saved for the following items.  全店顧客番号＝* Any value," +
      "　融資基本口座番号＝* Any value,　顧客番号再取得連携ステータス status ＝「手動照会済み」",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "39";

      // Go to App Record
      await parent.Go_to_App(4); // ★ 新環境適用' New Env Implementation

      // Scroll to section
      await $(
        ".//span[contains(., '" +
          test_data.testData.app_submission_data_section +
          "')]"
      ).scrollIntoView();

      // Click pencil icon beside 全店顧客番号
      const edit_btn = await $(
        "//button[@title='" + test_data.testData.app_cif_no_edit_btn + "']"
      );
      await browser.pause(5000);
      await edit_btn.scrollIntoView({ block: "center" });
      await edit_btn.waitForClickable({ timeout: 5000 });
      await edit_btn.click();
      await browser.pause(5000);

      // 全店顧客番号 = Any value
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" + test_data.testData.app_cif_no_lbl + "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.app_cif_no_lbl +
          "']/@for]"
      ).setValue(test_data.testData.app_cif_no_val);
      await browser.pause(5000);

      // 融資基本口座番号 = Any value
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" +
          test_data.testData.app_basic_loan_acct_no_lbl +
          "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await $(
        "//input[@id=//label[normalize-space(.)='" +
          test_data.testData.app_basic_loan_acct_no_lbl +
          "']/@for]"
      ).setValue(test_data.testData.app_basic_acct_no_val);
      await browser.pause(5000);

      // 顧客番号再取得連携ステータス＝「手動照会済み」
      // Click 顧客番号再取得連携ステータス label
      const status_lbl = await $(
        "//label[contains(., '" +
          test_data.testData.app_cif_linkage_status_lbl +
          "')]"
      ); // ★ 新環境適用' New Env Implementation
      await status_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation
      await status_lbl.waitForClickable({ timeout: 10000 });
      await status_lbl.click();

      // Select 顧客番号再取得連携ステータス value
      const status_val = await $(
        "//span[@title='" + test_data.testData.app_cif_linkage_status_val + "']"
      );
      await status_val.waitForClickable({ timeout: 5000 });
      await status_val.click();
      await browser.pause(2000);
      await browser.keys(["Escape"]);
      await browser.pause(5000);

      // Screenshot - edit page
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await $(".//*[@class='main-container slds-grid']").$(function () {
        var middle = document.getElementsByClassName("col main-col slds-col");
        var height = middle.offsetHeight;
        this.style = "height:" + height + "px!important";
      });
      await $(
        ".//records-form-footer[contains(., '" +
          test_data.testData.save_btn +
          "')]"
      ).$(function () {
        var height = document.getElementsByClassName(
          "col main-col slds-col"
        ).offsetHeight;
        this.style.marginTop = height + this.height + "px";
        (this.style.marginBottom = "-100px"), (this.style.position = "static");
      });
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
        }
      );

      // Click save button
      const save_edit_btn = await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await save_edit_btn.waitForClickable({ timeout: 5000 });
      await save_edit_btn.click();
      await browser.pause(10000);

      // Refresh
      await parent.Go_to_App(4); // ★ 新環境適用' New Env Implementation

      // Screenshot
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
