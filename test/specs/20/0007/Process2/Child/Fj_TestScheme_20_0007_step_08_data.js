const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0007-2");

export default async function suite() {
  it("Fj_TestScheme_20_0007_step_08_data: The 保証審査結果result of the warranty examination is 「否決」 'rejected.'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    if (test_data.testData.logged_status != "admin") {
      // Login as admin
      await parent.Login_as_Admin();
    }
    // Go to GUD record page
    await parent.Go_to_GUD();

    // Take screenshot CL Origination
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(10000);

    // Modify 保証審査連携ステータス and 保証審査結果 fields 保証審査連携ステータス
    // ★ 新環境適用' New Env Implementation
    await $(
      "//button[contains(.,'" + test_data.testData.gud1_edit_btn + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//button[@title='" + test_data.testData.gud1_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      '//button[@title="' + test_data.testData.gud1_edit_btn + '"]'
    ).click();
    await browser.pause(5000);

    // 保証審査連携ステータス
    await $(
      "//label[contains(.,'" + test_data.testData.gud1_status_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("label=" + test_data.testData.gud1_status_lbl).click();
    await browser.pause(5000);
    await $(
      "//span[@title='" + test_data.testData.review_linkage + "']"
    ).click();
    await browser.pause(5000);

    // 保証審査結果
    await $(
      "//label[contains(.,'" +
        test_data.testData.gud1_guarantee_review_result_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "label=" + test_data.testData.gud1_guarantee_review_result_lbl
    ).click();
    await browser.pause(5000);
    await $(
      "//span[@title='" + test_data.testData.review_result + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      "//span[@title='" + test_data.testData.review_result + "']"
    ).click();
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
        test_data.testData.tab0007 +
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
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(30000);

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Logout
    await parent.Logout();
  });
}
