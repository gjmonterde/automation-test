const test_data = require("../../../../../test_data/test_info_60");
const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_60_0006-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0006_step_16_data: Update Pスコア限度額（単位：万円）field (for data linkage)", async () => {
    const stepNum = "16"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_Admin();

    // Go to EXS record detail page
    await parent.Open_Salesforce_EXS_Record();

    const headerBar_exs_before = await $(".//header[@id='oneHeader']");
    const tabheader_exs_before = await $(
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
    await browser.pause(10000);

    // Take screenshot -- Before
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_exs_before, tabheader_exs_before],
      }
    );

    // Scroll down to スコアリング結果 section
    await $(
      "//span[contains(., '" +
        test_data.testData.scoring_result_section +
        "')]/parent::*"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Edit 審査決裁連携ステータス value -- pencil
    const exam_approval_collab_status_edit_btn = await $(
      ".//button[@title='" +
        test_data.testData.exam_approval_collab_status_edit_btn +
        "']"
    );
    await exam_approval_collab_status_edit_btn.waitForClickable({
      timeout: 10000,
    });
    await exam_approval_collab_status_edit_btn.click();
    await browser.pause(5000);

    // Click 審査決裁連携ステータス label
    const exam_approval_collab_status_label = await $(
      ".//label[contains(., '" +
        test_data.testData.exam_approval_collab_status_lbl +
        "')]"
    );
    await exam_approval_collab_status_label.waitForClickable({
      timeout: 10000,
    });
    await exam_approval_collab_status_label.click();
    await browser.pause(3000);

    // Select 審査決裁連携ステータス picklist value
    const exam_approval_collab_status_value = await $(
      ".//span[@title='" + test_data.testData.card_linkage + "']"
    );
    await exam_approval_collab_status_value.$(function () {
      this.scrollIntoView();
    });
    await exam_approval_collab_status_value.waitForClickable({
      timeout: 10000,
    });
    await exam_approval_collab_status_value.click();
    await browser.pause(5000);

    // Edit Pスコア限度額（単位：万円）value
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.pscore_limit_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.pscore_limit_lbl +
        "']/@for]"
    ).setValue(test_data.testData.pscore_limit);
    await browser.pause(3000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Deselect the hover/selected fields
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    const edit_headerBar = await $(".//header[@id='oneHeader']");
    const edit_tabheader = await $(
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
    await browser.pause(10000);

    // Take screenshot -- During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [edit_headerBar, edit_tabheader],
      }
    );

    // Click 保存 button
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 10000 });
    await save_edit_btn.click();
    await browser.pause(20000);

    // Refresh the page
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_exs_after = await $(".//header[@id='oneHeader']");
    const tabheader_exs_after = await $(
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
    await browser.pause(10000);

    // Take screenshot -- After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_exs_after, tabheader_exs_after],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
