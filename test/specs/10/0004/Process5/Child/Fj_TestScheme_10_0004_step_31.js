const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_10_0004_step_31: 所管部確認結果 The results of the department's confirmation and 定型コメントthe fixed comments can be updated", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to 3rd INI related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    // ★ 新環境適用' New Env Implementation
    await $("span=" + test_data.testData.ini3_edit_field).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });

    await browser.pause(5000);
    await $(
      "//button[@title='" + test_data.testData.ini3_edit_field + " の編集']"
    ).waitForClickable({
      timeout: 10000,
    });
    await $(
      "//button[@title='" + test_data.testData.ini3_edit_field + " の編集']"
    ).click();
    await browser.pause(2000);

    // Edit 所管部確認結果
    const review_information_linkage_status = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini3_edit_field +
        "')]]"
    );
    await review_information_linkage_status.waitForClickable({ timeout: 5000 });
    await review_information_linkage_status.click();
    const review_information_linkage_status_combobox =
      await review_information_linkage_status.getAttribute("aria-controls");
    await $(".//div[@id='" + review_information_linkage_status_combobox + "']")
      .$("span=" + test_data.testData.confirmation_result_value)
      .click();
    await browser.pause(1000);

    // Save
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    // Save 3rd INI Record Page Full Screen
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
    await browser.pause(20000);

    // Screenshot 3rd INI related record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
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
  });
}
