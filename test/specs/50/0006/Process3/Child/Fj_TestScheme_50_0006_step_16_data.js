const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0006_step_16_data: Update 審査決裁連携ステータス and Pスコア限度額（単位：万円）fields (for data linkage)", async () => {
    const stepNum = "16"; // ★ 新環境適用' New Env Implementation

    // Go to EXS record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );

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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // Edit 審査決裁連携ステータス value
    const exam_approval_collab_status_edit_btn = await $(
      "//button[@title='" +
        test_data.testData.exam_approval_collab_status_edit_btn +
        "']"
    );
    await browser.pause(5000);
    await exam_approval_collab_status_edit_btn.waitForClickable({
      timeout: 5000,
    });
    await exam_approval_collab_status_edit_btn.click();
    await browser.pause(5000);

    // Click 審査決裁連携ステータス label
    const exam_approval_collab_status_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.exam_approval_collab_status_lbl +
        "')]"
    );
    await exam_approval_collab_status_lbl.click();
    await browser.pause(5000);

    // Select 審査決裁連携ステータス picklist value
    await $(
      "//span[@title='" + test_data.testData.card_linkage + "']"
    ).waitForClickable({ timeout: 10000 });
    await $("//span[@title='" + test_data.testData.card_linkage + "']").click();
    await browser.pause(5000);

    // Set Pスコア限度額（単位：万円）value
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//label[contains(.,'" + test_data.testData.pscore_limit_textbox + "')]"
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
        test_data.testData.pscore_limit_textbox +
        "']/@for]"
    ).setValue(test_data.testData.pscore_limit_value);
    await browser.pause(5000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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
    await browser.pause(5000);
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    await browser.refresh();
    await browser.pause(10000);

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
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
