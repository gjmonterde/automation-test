const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0006-4");

export default function suite() {
  it("Fj_TestScheme_20_0006_step_19: Update 貸出共通明細 record where 科目コード field value is 44, 48, or 12", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "19";

    // Login as admin
    await parent.Login_as_admin();

    // Go to LCD record where 科目コード = 44 and ローン名 = カードではないローン
    await parent.Go_to_LCD();

    // Update record's 既貸回収フラグ field to true
    await $(
      "//button[@title='" +
        test_data.testData.loan_collection_flag_edit_btn +
        "']"
    ).scrollIntoView();
    await browser.pause(5000);
    await $(
      "//button[@title='" +
        test_data.testData.loan_collection_flag_edit_btn +
        "']"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      "//button[@title='" +
        test_data.testData.loan_collection_flag_edit_btn +
        "']"
    ).click();
    await browser.pause(5000);

    await $(
      "//label[contains(.,'" +
        test_data.testData.loan_collection_flag_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const loan_collection_flag_input = await $(
      "label=" + test_data.testData.loan_collection_flag_lbl
    );
    await loan_collection_flag_input.click();
    await browser.pause(3000);

    // Insert value in 最終返済日 field
    await $(
      "//label[contains(.,'" +
        test_data.testData.last_repayment_date_lbl +
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
        test_data.testData.last_repayment_date_lbl +
        "']/@for]"
    ).setValue(test_data.testData.last_repayment_date);
    await browser.pause(5000);

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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Click 保存 button
    await browser.pause(5000);
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(10000);

    // Refresh
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        fullPageScrollTimeout: 1000,
      }
    );

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_As_Shinsa1_User();
    }

    // Go to TRR record detail screen
    await parent.Go_to_TRR();

    const trr_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const trr_headerBar = await $(".//header[@id='oneHeader']");
    const trr_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [trr_headerBar, trr_tabheader, trr_highlights],
      }
    );
  });
}
