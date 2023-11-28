const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0006-3");

export default function suite() {
  it("Fj_TestScheme_63-2_0006_step_15_data: EXS record Data Linkage", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Go to EXS record
    await parent.Open_Record_URL(
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );

    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
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

    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_before, tabheader_before],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

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

    // Edit 審査決裁連携ステータス value
    const exam_approval_collab_status_edit_btn = await $(
      "//button[@title='" +
        test_data.testData.exam_approval_collab_status_edit_btn +
        "']"
    );
    await browser.pause(5000);
    await exam_approval_collab_status_edit_btn.waitForClickable({
      timeout: 10000,
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
    const linkage_status_value = await $(
      "//span[@title='" + test_data.testData.linkage_status_value + "']"
    );
    await linkage_status_value.scrollIntoView();
    await linkage_status_value.waitForClickable({
      timeout: 10000,
    });
    await linkage_status_value.click();
    await browser.pause(5000);

    // Edit Pスコア限度額（単位：万円）value
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
    ).setValue(test_data.testData.pscore_limit_value);
    await browser.pause(3000);
    await browser.keys(["Escape"]);
    await browser.pause(2000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
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

    // Screenshot - During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar_during, tabheader_during],
      }
    );

    // Save
    await browser.pause(5000);
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
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

    // Screenshot - After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
