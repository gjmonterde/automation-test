const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0003-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0003_step_13_data: Manual creation of CIF Information record and " +
      "update of 同一人照会ステータス field (for data linkage)",
    async () => {
      const stepNum = "13"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "admin") {
        // login as admin
        await parent.Login_as_admin();
      }

      var ssno = 0;
      // ★ 新環境適用' New Env Implementation
      for (var i = 0; i < test_data.testData.two_records_of_cif; i++) {
        // New 新規CIF情報 record (for running business partner)
        await browser.url(
          user_info.userInformation.var_sf_sfurl + test_data.testData.httpurl06
        );
        await browser.pause(10000);

        // full page modal
        await util.modal_fullpage();

        // 取引先
        // ★ 新環境適用' New Env Implementation
        const accountLabel = await $(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.account_lbl +
            "']"
        ).$(".//label[contains(.,'" + test_data.testData.account_lbl + "')]");
        await accountLabel.$(function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        });
        const accountLabel_id = await accountLabel.getAttribute("for");
        await $(".//input[@id='" + accountLabel_id + "']").setValue(
          eval("test_data.testData.kanji_name" + (i + 1))
        );

        const acct_name = await $(
          ".//*[@title='" +
            eval("test_data.testData.kanji_name" + (i + 1)) +
            "']"
        );
        await acct_name.waitForClickable({ timeout: 50000 });
        await acct_name.click();
        await browser.pause(1000);

        // ★ 新環境適用' New Env Implementation
        // 全店顧客番号
        const customerNo = await $(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.app_cif_no_lbl +
            "']"
        ).$(
          ".//label[contains(.,'" + test_data.testData.app_cif_no_lbl + "')]"
        );
        await customerNo.$(function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        });
        const customerNo_id = await customerNo.getAttribute("for");
        await $(".//input[@id='" + customerNo_id + "']").setValue(
          test_data.testData.cust_no
        );
        await browser.pause(1000);

        // ★ 新環境適用' New Env Implementation
        // 店番号
        const brandNo = await $(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.cif_bra_no_field_lbl +
            "']"
        ).$(
          ".//label[contains(.,'" +
            test_data.testData.cif_bra_no_field_lbl +
            "')]"
        );
        await brandNo.$(function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        });
        const brandNo_id = await brandNo.getAttribute("for");
        await $(".//input[@id='" + brandNo_id + "']").setValue(
          test_data.testData.input_bra_no
        );
        await browser.pause(1000);

        // ★ 新環境適用' New Env Implementation
        // 店別顧客番号
        const noValue = await $(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.cif_no_field_lbl +
            "']"
        ).$(
          ".//label[contains(.,'" + test_data.testData.cif_no_field_lbl + "')]"
        );
        await noValue.$(function () {
          this.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        });
        const noValue_id = await noValue.getAttribute("for");
        await $(".//input[@id='" + noValue_id + "']").setValue(
          test_data.testData.cif_no_val
        );
        await browser.pause(1000);

        ssno = ssno + 1;

        // Screenshot
        const headerBar1 = await $(".//header[@id='oneHeader']");
        const tabheader1 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        await browser.saveFullPageScreen(
          // ★ 新環境適用' New Env Implementation
          user_info.userInformation.screenshot +
            test_data.testData.spec70 +
            "_" +
            test_data.testData.tab0003 +
            "_" +
            stepNum +
            "-" +
            ssno +
            test_data.testData.data,
          {
            hideAfterFirstScroll: [headerBar1, tabheader1],
          }
        );

        // Save
        await $(
          ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
        ).click();

        // Toast
        await util.Toast_Message();

        ssno = ssno + 1;

        // Screenshot
        await browser.saveScreen(
          // ★ 新環境適用' New Env Implementation
          user_info.userInformation.screenshot +
            test_data.testData.spec70 +
            "_" +
            test_data.testData.tab0003 +
            "_" +
            stepNum +
            "-" +
            ssno +
            test_data.testData.data
        );

        // Refresh
        await browser.refresh();
        await browser.pause(10000);

        ssno = ssno + 1;

        // Screenshot - CIF record
        const highlights2 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar2 = await $(".//header[@id='oneHeader']");
        const tabheader2 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        await browser.saveFullPageScreen(
          // ★ 新環境適用' New Env Implementation
          user_info.userInformation.screenshot +
            test_data.testData.spec70 +
            "_" +
            test_data.testData.tab0003 +
            "_" +
            stepNum +
            "-" +
            ssno +
            test_data.testData.data,
          {
            hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          }
        );
      }

      // Go to CDD Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.cdd_obj,
        test_data.testData.cdd_id
      );

      // Screenshot - CDD record
      const highlights5 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar5 = await $(".//header[@id='oneHeader']");
      const tabheader5 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-7" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
        }
      );

      // Edit
      const edit = await $(
        ".//button[@title='" + test_data.testData.cdd_bra_no_edit_btn + "']"
      );
      await edit.scrollIntoView({ block: "center" });
      await edit.waitForClickable({ timeout: 30000 });
      await edit.click();
      await browser.pause(5000);

      // ★ 新環境適用' New Env Implementation
      // 店番号
      const brandNoEdit = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cif_bra_no_field_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.cif_bra_no_field_lbl +
          "')]"
      );
      await brandNoEdit.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const brandNoEdit_id = await brandNoEdit.getAttribute("for");
      await $(".//input[@id='" + brandNoEdit_id + "']").setValue(
        test_data.testData.input_bra_no
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 店別顧客番号
      const noValueEdit = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cif_no_field_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" + test_data.testData.cif_no_field_lbl + "')]"
      );
      await noValueEdit.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const noValueEdit_id = await noValueEdit.getAttribute("for");
      await $(".//input[@id='" + noValueEdit_id + "']").setValue(
        test_data.testData.cif_no_val
      );
      await browser.pause(1000);
      await browser.keys(["Escape"]);
      await browser.pause(5000);

      // Screenshot
      const highlights6 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar6 = await $(".//header[@id='oneHeader']");
      const tabheader6 = await $(
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
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-8" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
          fullPageScrollTimeout: 1000,
        }
      );

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(10000);

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const highlights7 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar7 = await $(".//header[@id='oneHeader']");
      const tabheader7 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-9" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar7, tabheader7, highlights7],
          fullPageScrollTimeout: 1000,
        }
      );

      // Go to DDP Record
      await parent.Open_SF_DDP_Record();

      // Screenshot
      const highlights8 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar8 = await $(".//header[@id='oneHeader']");
      const tabheader8 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-10" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar8, tabheader8, highlights8],
        }
      );

      // Edit Same person Inquiry 同一人照会 - 同一人照会完了
      const edit_btn2 = await $(
        "//button[@title='" +
          test_data.testData.ddp_samepersoninqstatus_edit_btn +
          "']"
      );
      await edit_btn2.waitForClickable({ timeout: 5000 });
      await edit_btn2.click();
      await browser.pause(2000);
      await $(
        "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
      ).click();
      await browser.pause(5000);
      const val = await $(
        "//span[@title='" + test_data.testData.ddp_inquirycomplete_val + "']"
      );
      await val.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await val.waitForClickable({ timeout: 30000 });
      await val.click();
      await browser.pause(5000);

      // Screenshot
      const highlights9 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar9 = await $(".//header[@id='oneHeader']");
      const tabheader9 = await $(
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
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-11" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar9, tabheader9, highlights9],
          fullPageScrollTimeout: 1000,
        }
      );

      // Save
      await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      ).click();
      await browser.pause(20000);

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const highlights10 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar10 = await $(".//header[@id='oneHeader']");
      const tabheader10 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-12" +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar10, tabheader10, highlights10],
        }
      );

      // logout
      await parent.Logout();
    }
  );
}
