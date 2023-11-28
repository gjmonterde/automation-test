const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0011-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0011_step_10: お受取人お名前 item names are displayed", async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation

    // Go to My Page APP record screen
    await parent.AppPage_MyPage();

    // Click new button - BA record
    const new_btn = await $(
      ".//button[contains(text(), '" + test_data.testData.new_btn + "')]"
    );
    await new_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
