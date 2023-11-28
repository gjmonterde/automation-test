const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0012-2");

export default async function suite() {
  it("Fj_TestScheme_70_0012_step_39_data: Manually update 実行結果データ record (data linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "39";

    if (test_data.testData.logged_status != "admin") {
      // Login as admin
      await parent.Login_as_Admin();
    }

    // Go to Exec Result Record
    await parent.Go_to_ExecResult(); // ★ 新環境適用' New Env Implementation

    // Quit script if status is not the expected value (自動実行連携失敗)
    expect(test_data.testData.exec_result_processing_status_actual).toBe(
      test_data.testData.exec_result_processing_status_expected
    );
    if (
      test_data.testData.exec_result_processing_status_actual !=
      test_data.testData.exec_result_processing_status_expected
    ) {
      await browser.deleteSession();
    }

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 1000,
      }
    );

    // Edit 実行結果データ
    const edit = await $(
      "//button[@title='" +
        test_data.testData.exec_result_processing_status_edit_btn +
        "']"
    );
    await edit.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    await edit.waitForClickable({ timeout: 30000 });
    await edit.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // 処理ステータス
    await $(
      "//label[contains(.,'" +
        test_data.testData.exec_result_processing_status_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "label=" + test_data.testData.exec_result_processing_status_lbl
    ).click();
    await browser.pause(2000);
    const auto_exec = await $(
      "span=" + test_data.testData.exec_result_processing_status_val
    );
    await auto_exec.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // 取扱番号
    await $(
      "//label[contains(.,'" +
        test_data.testData.exec_result_handling_no_lbl +
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
        test_data.testData.exec_result_handling_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.exec_result_handling_no_val);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 融資基本口座番号/カードローン口座番号
    await $(
      "//label[contains(.,'" +
        test_data.testData.exec_result_loan_account_no_lbl +
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
        test_data.testData.exec_result_loan_account_no_lbl +
        "']/@for]"
    ).setValue(test_data.testData.exec_result_loan_acct_no_val);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 実行結果処理ステータス
    await $(
      "//label[contains(.,'" + test_data.testData.exec_result_status_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.exec_result_status_lbl +
        "']/@for]"
    ).setValue(test_data.testData.exec_result_status_val);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Save
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(30000);

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        fullPageScrollTimeout: 1000,
      }
    );

    // Logout
    await parent.Logout();
  });
}
