const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0012-2");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_10_0012_step_38_data: Manually update the status because linkage is disabled", async () => {
    const stepNum = "38"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Login as admin
    await parent.Login_as_Admin();

    // Get Records
    await parent.Get_Records();

    // Go to Exec Result Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.execresult_obj,
      test_data.testData.exec_result_id
    );

    // Quit script if status is not the expected value (自動実行連携失敗)
    if (
      test_data.testData.expected_status_value_before_editing !=
      test_data.testData.expected_status_value
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(5000);

    // Edit 実行結果データ
    await $(
      "//button[@title='" + test_data.testData.exec_edit + " の編集']"
    ).click();
    await browser.pause(2000);

    // 処理ステータス
    await $(
      "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
    ).click();
    await browser.pause(2000);
    const auto_exec = await $(
      "span=" + test_data.testData.processing_status_value
    );
    await auto_exec.click();
    await browser.pause(3000);

    // 実行結果処理ステータス
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.result_status_field + "')]"
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
        test_data.testData.result_status_field +
        "']/@for]"
    ).setValue(test_data.testData.result_status);
    await browser.pause(5000);

    // 取扱番号
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.handling_no_field + "')]"
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
        test_data.testData.handling_no_field +
        "']/@for]"
    ).setValue(test_data.testData.handling_no);
    await browser.pause(2000);
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
        test_data.testData.save_edit_btn +
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
        test_data.testData.spec10 +
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
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//button[@name[contains(., '" + test_data.testData.save_btn + "')]]"
    ).click();
    await browser.pause(20000);

    // Screenshot
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Logout
    await parent.Logout();
  });
}
