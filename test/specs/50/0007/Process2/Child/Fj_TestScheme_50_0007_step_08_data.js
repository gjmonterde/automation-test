const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0007_step_08_data: The 保証審査結果result of the warranty examination is 「否決」 'rejected.'", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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
    await browser.pause(5000);

    // Modify 保証審査連携ステータス and 保証審査結果 fields 保証審査連携ステータス"
    await $(
      ".//button[@title='" +
        test_data.testData.guarantee_check_label +
        " の編集']"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//button[@title='" +
        test_data.testData.guarantee_check_label +
        " の編集']"
    ).click();
    await browser.pause(5000);

    await $("label=" + test_data.testData.guarantee_check_label).click();
    await browser.pause(5000);

    await $("//span[@title='" + test_data.testData.card_linkage + "']").click();
    await browser.pause(5000);

    await $("label=" + test_data.testData.guarantee_checkresult_label).click();
    await browser.pause(5000);

    await $(
      "//span[@title='" + test_data.testData.review_result + "']"
    ).click();
    await browser.pause(5000);

    // Take screenshot CL Origination Edit Page
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    await browser.pause(3000);
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(30000);

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
  });
}
