const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-6");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0004_step_63: The status of the 銀行審査 bank examinationbecomes " +
      "「実施済OK(仮謝絶)」Performed OK (Temporary Rejection)",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "63";

      // Go to 3rd INI related record
      // ★ 新環境適用' New Env Implementation
      await parent.Open_INI_3rd_Record();

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      // ★ 新環境適用' New Env Implementation
      // Update fields to 所管部確認結果 and 定型コメント
      const edit = await $(
        ".//button[@title='" +
          test_data.testData.ini3_jurisdiction_confirmation_result_label +
          " の編集']"
      );
      await edit.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation;
      await edit.click();
      await browser.pause(1000);

      // Edit 所管部確認結果
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" +
          test_data.testData.ini3_jurisdiction_confirmation_result_label +
          "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation
      const review_information_linkage_status = await $(
        ".//button[@aria-label[contains(., '" +
          test_data.testData.ini3_jurisdiction_confirmation_result_label +
          "')]]"
      );
      await review_information_linkage_status.waitForClickable({
        timeout: 5000,
      });
      await review_information_linkage_status.click();
      const review_information_linkage_status_combobox =
        await review_information_linkage_status.getAttribute("aria-controls");
      await $(
        ".//div[@id='" + review_information_linkage_status_combobox + "']"
      )
        .$("span=" + test_data.testData.ini3_applicable_value)
        .click();
      await browser.pause(1000);

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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // Save
      const saveedit = await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await saveedit.scrollIntoView({ block: "center" });
      await saveedit.click();
      await browser.pause(15000);

      // Screenshot
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      // Click 謝絶
      const rejectbtn = await $(
        ".//button[@name='" +
          test_data.testData.api_initialcheck_reject_btn +
          "']"
      );
      await rejectbtn.waitForClickable({ timeout: 5000 });
      await rejectbtn.click();
      await browser.pause(6000);

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-4"
      );

      // Confirm
      await $(
        ".//button[@type='" + test_data.testData.submit_type_btn + "']"
      ).click();

      // Toast message screenshot
      await util.Toast_Message(); // ★ 新環境適用' New Env Implementation
      await browser.pause(2000);
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-5"
      );

      // Refresh browser
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const headerBar4 = await $(".//header[@id='oneHeader']");
      const tabheader4 = await $(
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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-6",
        {
          hideAfterFirstScroll: [headerBar4, tabheader4],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // Go to EXM page
      await parent.Go_to_EXM();

      // Screenshot
      const highlights5 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar5 = await $(".//header[@id='oneHeader']");
      const tabheader5 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-7",
        {
          hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
        }
      );

      // Go to App Record
      await parent.Go_to_APP();

      // Screenshot
      const headerBar6 = await $(".//header[@id='oneHeader']");
      const tabheader6 = await $(
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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-8",
        {
          hideAfterFirstScroll: [headerBar6, tabheader6],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );
    }
  );
}
