const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0001-3");

export default function suite() {
  it(
    "Fj_TestScheme_50_0001_step_41: The following new welcome message has been posted in your home message:" +
      "お申込みいただきまして、まことにありがとうございます。\nご質問などありましたら、こちらのメッセージをご利用ください。\nローン担当者がご回答いたします。",
    async () => {
      const stepNum = "41"; // ★ 新環境適用' New Env Implementation

      if (
        (await browser.getUrl()) ===
        user_info.userInformation.var_sf_mypage_loginurl
      ) {
        // Login to MyPage
        // ★ 新環境適用' New Env Implementation
        await parent.Login_MyPage();
      }
      if (
        (await browser.getUrl()) !=
        user_info.userInformation.var_sf_siteurl + "/s/"
      ) {
        // Go to My Page homepage
        await browser.url(user_info.userInformation.var_sf_siteurl);
        await browser.pause(15000);
      }

      // Screenshot - My Page Home page
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
