const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0004-5");

export default function suite() {
  it("Fj_TestScheme_63-2_0004_step_31: 所幹部確認結果 Executive confirmation results and 定型コメント fixed comments can be updated", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to INI record
    await parent.Open_Record_URL(
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    // Scroll into view to edit
    await $(
      ".//span[contains(.,'" +
        test_data.testData.jurisdiction_confirmation_result_label +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    // Update fields to 所管部確認結果
    const edit = await $(
      ".//button[@title='" +
        test_data.testData.jurisdiction_confirmation_result_label +
        " の編集']"
    );
    await edit.waitForClickable({ timeout: 10000 });
    await edit.click();
    await browser.pause(1000);

    // Edit 所管部確認結果
    const review_information_linkage_status = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.jurisdiction_confirmation_result_label +
        "')]]"
    );
    await review_information_linkage_status.waitForClickable({
      timeout: 10000,
    });
    await review_information_linkage_status.click();
    const review_information_linkage_status_combobox =
      await review_information_linkage_status.getAttribute("aria-controls");
    await $(".//div[@id='" + review_information_linkage_status_combobox + "']")
      .$("span=" + test_data.testData.jurisdiction_confirmation_result_value)
      .click();
    await browser.pause(1000);

    // Save record
    const save_status_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_status_btn.waitForClickable({ timeout: 10000 });
    await save_status_btn.click();
    await browser.pause(10000);
    await browser.refresh();
    await browser.pause(10000);

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
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
