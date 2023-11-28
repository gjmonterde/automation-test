const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0015-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0015_step_08: You can send messages from My Page", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Login to My Page
    await parent.Login_MyPage();

    // Go to home page
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);

    // Scroll to view
    const fujitsu_image = await $(
      "//img[@class='" + test_data.testData.fujitsu_image + "']"
    );
    await fujitsu_image.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(3000);

    // Click the My Page textbox
    await util.Chatter_textbox(test_data.testData.mypage_textbox_value1);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Click My Page textbox button
    const mypage_textbox_button = await $(
      "//button[@title='" + test_data.testData.mypage_textbox_button + "']"
    );
    await mypage_textbox_button.click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
