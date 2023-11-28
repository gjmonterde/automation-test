const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_40_0012_step_38_data: Manually update 実行結果データ record (data linkage)", async () => {
    const stepNum = "38"; // ★ 新環境適用' New Env Implementation

    // Go to Exec Result Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.execresult_obj,
      test_data.testData.exec_result_id
    );

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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
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
    await edit.scrollIntoView();
    await edit.waitForClickable({ timeout: 10000 });
    await edit.click();
    await browser.pause(2000);

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

    // 処理ステータス
    await $(
      "label=" + test_data.testData.exec_result_processing_status_lbl
    ).click();
    await browser.pause(2000);
    const auto_exec = await $(
      "span=" + test_data.testData.exec_result_processing_status_value
    );
    await auto_exec.click();
    await browser.pause(2000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

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

    // 取扱番号
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.er_handling_no_field + "')]"
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
        test_data.testData.er_handling_no_field +
        "']/@for]"
    ).setValue(test_data.testData.exec_result_handling_no_value);

    await browser.pause(3000);

    // 実行結果処理ステータス
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" +
        test_data.testData.er_result_status_field +
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
        test_data.testData.er_result_status_field +
        "']/@for]"
    ).setValue(test_data.testData.exec_result_status_value);
    await browser.pause(2000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Screenshot
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
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

    // Save
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(30000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        fullPageScrollTimeout: 1000,
      }
    );
  });
}
