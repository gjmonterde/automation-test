const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default async function suite() {
  it("Fj_TestScheme_10_0009_step_16: 確認 confirmation status changes to「実施済OK」", async () => {
    const stepNum = "16"; // ★ 新環境適用' New Env Implementation

    // Get the WNT record
    await $("//a[@aria-label='" + test_data.testData.see_wnt + "']").click();
    await browser.pause(3000);

    await $(`//a[@title='${test_data.testData.wnt1_name}']`).click();
    await browser.pause(8000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(10000);

    // Check for unread status
    await $("//div[@title='" + test_data.testData.mark_read + "']").click();
    await browser.pause(10000);

    // Scroll to top
    // ★ 新環境適用' New Env Implementation
    await $("//div[@class='themeLogo']").$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });

    // Take Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click read
    await $(
      "//button[contains(.,'" + test_data.testData.mark_comp + "')]"
    ).click();
    await browser.pause(10000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(3000);
  });
}
