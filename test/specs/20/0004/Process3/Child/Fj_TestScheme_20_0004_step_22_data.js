const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-3");

export default async function suite() {
  it(
    "Fj_TestScheme_20_0004_step_22_data: As a result of inquiry using 氏名 name and 生年月日 date of birth, " +
      "registered in the 顧客AMLチェック結果情報 customer AML check result information section",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "22";

      if (test_data.testData.logged_status != "admin") {
        // Login as admin
        await parent.Login_Admin();
      }

      // Go to 銀行審査 detail page
      await parent.Go_to_INI();

      // Take 銀行審査 page screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
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
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-1" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 6000,
        }
      );

      // Modify AML section
      await $(
        ".//span[contains(.,'" + test_data.testData.ini3_section1 + "')]"
      ).scrollIntoView();
      await browser.pause(3000);
      await $(
        ".//span[contains(.,'" + test_data.testData.ini3_section2 + "')]"
      ).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(3000);

      await $(
        ".//button[@title='" + test_data.testData.ini3_aml_edit_btn + "']"
      ).waitForClickable({ timeout: 5000 });
      await $(
        ".//button[@title='" + test_data.testData.ini3_aml_edit_btn + "']"
      ).click();
      await browser.pause(3000);

      // チェック結果文言１
      await $(
        "//label[contains(.,'" +
          test_data.testData.ini3_checkresult1_lbl +
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
          test_data.testData.ini3_checkresult1_lbl +
          "']/@for]"
      ).setValue(test_data.testData.chk_result1);
      await browser.pause(1000);

      // チェック結果文言２
      await $(
        "//label[contains(.,'" +
          test_data.testData.ini3_checkresult2_lbl +
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
          test_data.testData.ini3_checkresult2_lbl +
          "']/@for]"
      ).setValue(test_data.testData.chk_result2);
      await browser.pause(1000);

      // メッセージ文言１
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message1_lbl + "')]"
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
          test_data.testData.ini3_message1_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg1);

      // メッセージ文言2
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message2_lbl + "')]"
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
          test_data.testData.ini3_message2_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg2);

      // メッセージ文言3
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message3_lbl + "')]"
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
          test_data.testData.ini3_message3_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg3);

      // メッセージ文言4
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message4_lbl + "')]"
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
          test_data.testData.ini3_message4_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg4);

      // メッセージ文言5
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message5_lbl + "')]"
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
          test_data.testData.ini3_message5_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg5);

      // メッセージ文言6
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message6_lbl + "')]"
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
          test_data.testData.ini3_message6_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg6);

      // メッセージ文言7
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message7_lbl + "')]"
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
          test_data.testData.ini3_message7_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg7);

      // メッセージ文言8
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message8_lbl + "')]"
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
          test_data.testData.ini3_message8_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg8);

      // メッセージ文言9
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message9_lbl + "')]"
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
          test_data.testData.ini3_message9_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg9);

      // メッセージ文言１0
      await $(
        "//label[contains(.,'" + test_data.testData.ini3_message10_lbl + "')]"
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
          test_data.testData.ini3_message10_lbl +
          "']/@for]"
      ).setValue(test_data.testData.msg10);

      await browser.keys(["Escape"]);
      await browser.pause(2000);

      // Take screenshot of AML等チェック結果情報 detail page
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 6000,
        }
      );

      await $(
        ".//button[@name='" + test_data.testData.save_edit_btn + "']"
      ).waitForClickable({
        timeout: 5000,
      });
      await $(
        ".//button[@name='" + test_data.testData.save_edit_btn + "']"
      ).click();
      await browser.pause(10000);

      // Take 銀行審査 page screenshot
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-3" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar3, tabheader3],
          fullPageScrollTimeout: 6000,
        }
      );
    }
  );
}
