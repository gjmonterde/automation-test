const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0002_step_06: 確認ステータス field value should be 確認中 and 2 徴求書類 records should be created", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver2_id
    );

    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Go to CL product
    await util.Open_SF_Record_URL(
      1,
      user_info.object.pro_obj,
      test_data.testData.clProd_id
    );

    // Scroll down to 審査フロー設定 section
    // ★ 新環境適用' New Env Implementation
    await $(
      "//span[contains(., '" + test_data.testData.clpro_scroll1 + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//span[contains(., '" + test_data.testData.clpro_scroll2 + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Take screenshot of CL product
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
  });
}
