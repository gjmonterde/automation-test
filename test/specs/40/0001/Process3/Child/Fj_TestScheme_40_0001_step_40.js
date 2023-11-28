const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0001-3");

export default function suite() {
  it(
    "Fj_TestScheme_40_0001_step_40: The following new welcome message has been posted in your home message: " +
      "お申込みいただきまして、まことにありがとうございます。ご質問などありましたら、こちらのメッセージをご利用ください。" +
      "ローン担当者がご回答いたします",
    async () => {
      const stepNum = "40"; // ★ 新環境適用' New Env Implementation

      if (
        (await browser.getUrl()) ===
        user_info.userInformation.var_sf_mypage_loginurl
      ) {
        await parent.Login_MyPage_Full();
      }

      // Go to My Page homepage
      await browser.url(user_info.userInformation.var_sf_siteurl);
      await browser.pause(10000);

      // Screenshot - My Page Home page
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
