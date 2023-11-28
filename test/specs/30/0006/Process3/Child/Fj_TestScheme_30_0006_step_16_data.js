const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0006-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_30_0006_step_16_data: Update Pスコア限度額（単位：万円）field (for data linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "admin") {
      // Login as admin
      await parent.Login_as_Admin();
    }

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

    // Take screenshot -- Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_exs_before, tabheader_exs_before],
        fullPageScrollTimeout: 3000,
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
      "//button[@title='" +
        test_data.testData.exam_approval_collab_status_edit_btn +
        "']"
    );
    await exam_approval_collab_status_edit_btn.waitForClickable({
      timeout: 10000,
    });
    await exam_approval_collab_status_edit_btn.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Click 審査決裁連携ステータス label
    await $(
      "//label[contains(.,'" +
        test_data.testData.exam_approval_collab_status_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const exam_approval_collab_status_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.exam_approval_collab_status_lbl +
        "')]"
    );
    await exam_approval_collab_status_lbl.click();
    await browser.pause(5000);

    // Select 審査決裁連携ステータス picklist value
    const val = await $(
      "//span[@title='" +
        test_data.testData.exam_approval_collab_status_val +
        "']"
    );
    await val.waitForClickable({ timeout: 5000 });
    await val.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Edit Pスコア限度額（単位：万円）value
    await $(
      "//label[contains(.,'" + test_data.testData.pscore_limit_lbl + "')]"
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
    ).setValue(test_data.testData.pscore_limit_val);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

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

    // Take screenshot -- During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [edit_headerBar, edit_tabheader],
      }
    );

    // Click 保存 button
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 10000 });
    await save_edit_btn.click();
    await browser.pause(10000);

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

    // Take screenshot -- After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
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
  });
}
