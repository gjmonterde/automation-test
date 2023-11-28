const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_00_0001_step_39: The following new welcome message has been posted in your home message:" +
      "お申込みいただきまして、まことにありがとうございます。\nご質問などありましたら、こちらのメッセージをご利用ください。\nローン担当者がご回答いたします。",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "39";

      if (
        (await browser.getUrl()) ===
        user_info.userInformation.var_sf_mypage_loginurl
      ) {
        // Login to MyPage
        var uname, pword;
        if (test_data.testData.user_status == 0) {
          // if existing user
          uname = user_info.userInformation.var_sf_comminuty_loginuser;
          pword = user_info.userInformation.var_sf_comminuty_loginpwd;
        } else if (test_data.testData.user_status == 1) {
          // if new user
          uname = user_info.userInformation.var_sf_comminuty_loginuser2;
          pword = user_info.userInformation.var_sf_comminuty_loginpwd2;
        }
        // Login to My Page
        // ★ 新環境適用' New Env Implementation
        await util.Login_to_MyPage(test_data.testData.mypage_url, uname, pword);
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
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
