const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");

export default async function suite() {
  it("Fj_TestScheme_50_0003_step_01: The 申込 application status is 「審査中」Under Examination", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Click View All Applications
    await browser.pause(5000);
    await $(
      ".//a[@title='" + test_data.testData.see_app + "']/parent::*"
    ).click();
    await browser.pause(5000);

    // Sort Applications List
    const appname_col = await $(
      ".//a[contains(., '" + test_data.testData.app_num + "')]"
    );
    var sort_text = await appname_col.nextElement().getText();
    while (sort_text != test_data.testData.sort_app) {
      await appname_col.click();
      await browser.pause(3000);
      sort_text = await appname_col.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.sort_app);
    await browser.pause(8000);

    await $("a=" + test_data.testData.app_name).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(8000);

    // Find Application record in list
    const app_name = await $("div=" + test_data.testData.app_name);
    await app_name.$(function () {
      this.scrollIntoView();
    });
    await browser.pause(5000);

    // Go to Application record page
    await app_name.click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);
  });
}
