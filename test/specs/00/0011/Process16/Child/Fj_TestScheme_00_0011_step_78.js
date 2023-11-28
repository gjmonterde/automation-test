const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-16");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0011_step_78: The following item values can be set and saved." +
      "　契約同意フラグ　Contract Agreement Flag = TRUE" +
      "　契約同意日時　Agreed date and time = * Current date and time",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "78";

      if (test_data.testData.logged_status != "uic") {
        // login to Salesforce
        await parent.Login_to_Salesforce();
      }

      // Go to AGR record
      await parent.Go_to_AGR(); // ★ 新環境適用' New Env Implementation

      // Screenshot - AGR Record
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
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // refresh
      await browser.refresh();
      await browser.pause(10000);

      // Edit
      // ★ 新環境適用' New Env Implementation
      const edit = await $(
        "//span[contains(., '" +
          test_data.testData.agr_contract_acceptance_flag_lbl +
          "')]"
      );
      await edit.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await edit.doubleClick();
      await browser.pause(1000);

      // 契約同意フラグ=TRUE
      // ★ 新環境適用' New Env Implementation
      const flg = await $(
        "//label[contains(., '" +
          test_data.testData.agr_contract_acceptance_flag_lbl +
          "')]"
      );
      await flg.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await browser.execute((flg) => {
        flg.click();
      }, flg);

      // Get Date and Time (Japan)
      var datestring = new Date(Date.now()).toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo",
        hourCycle: "h23",
      });
      var date = new Date(datestring);
      var timestring = date.toLocaleTimeString("ja-JP", {
        timeZone: "Asia/Tokyo",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        hourCycle: "h23",
      });
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      // 日付
      const agr_date = await browser.execute(
        (fieldset, lbl) => {
          const id = document
            .evaluate(
              "//fieldset[contains(., '" +
                fieldset +
                "')]/div/div[1]/label[contains(., '" +
                lbl +
                "')]",
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            )
            .singleNodeValue.getAttribute("for");
          return id;
        },
        test_data.testData.agr_contract_agreement_datetime_lbl,
        test_data.testData.agr_date_lbl
      );
      await $(".//input[@id='" + agr_date + "']").setValue(
        year + "/" + month + "/" + day
      );

      // 時間
      const agr_time = await browser.execute(
        (fieldset, lbl) => {
          const id = document
            .evaluate(
              "//fieldset[contains(., '" +
                fieldset +
                "')]/div/div[2]/div/label[contains(., '" +
                lbl +
                "')]",
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            )
            .singleNodeValue.getAttribute("for");
          return id;
        },
        test_data.testData.agr_contract_agreement_datetime_lbl,
        test_data.testData.agr_time_lbl
      );
      await $(".//input[@id='" + agr_time + "']").setValue(timestring);
      await browser.keys(["Escape"]);
      await browser.pause(2000);

      // Screenshot - App Record left column edit
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // Save
      const save = await $(
        "//button[@title='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await browser.execute((btn) => {
        btn.click();
      }, save);
      await browser.pause(25000);

      // Screenshot - AGR Record
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
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );
    }
  );
}
