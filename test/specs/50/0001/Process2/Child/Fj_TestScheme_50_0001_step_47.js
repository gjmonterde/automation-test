const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0001-2");

export default async function suite() {
  it("Fj_TestScheme_50_0001_step_47: 外国人・外字（旧字体）フラグ foreigner gaiji (old type) flag = TRUE", async () => {
    const stepNum = "47"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Open_Salesforce_App_Record();

    // Modify 申込人基本属性 section
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//span[contains(.,'" + test_data.testData.applicant_scroll + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });

    // Edit 外国人・外字（旧字体）フラグを編集 field
    const external_flag_edit_button = await $(
      ".//button[@title='" + test_data.testData.external_flag_edit_button + "']"
    );
    await external_flag_edit_button.waitForClickable({ timeout: 10000 });
    await external_flag_edit_button.click();
    await browser.pause(3000);

    // Click 外国人・外字（旧字体）フラグ label
    const external_flag_label = await $(
      ".//*[contains(text(),'" + test_data.testData.external_flag_label + "')]"
    );
    await external_flag_label.waitForClickable({ timeout: 10000 });
    await external_flag_label.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Save
    await $("//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);

    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
