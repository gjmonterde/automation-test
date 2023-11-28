const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_10: The sub screen opens and the following item names are displayed (not おなまえ)", async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Click new button - BA record
    const new_btn = await $(
      ".//button[contains(text(), '" + test_data.testData.new_btn + "')]"
    );
    await new_btn.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await new_btn.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    const next_btn = await $("button=" + test_data.testData.mypage_next_btn);
    await next_btn.waitForClickable({ timeout: 10000 });
    await next_btn.click();
    await browser.pause(3000);

    // Modal full page
    await util.modal_fullpage_mypage();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
