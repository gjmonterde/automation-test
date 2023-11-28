const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0001-3");

export default function suite() {
  it(
    "Fj_TestScheme_50_0001_step_39: The「お申込みステータス/お手続き状況」 application status/procedure status is " +
      "「申込受付完了/本人確認書類ご提出 Application acceptance completion/submission of identification documents",
    async () => {
      const stepNum = "39"; // ★ 新環境適用' New Env Implementation

      // Go to My Page
      await browser.url(user_info.userInformation.var_sf_mypage_loginurl);
      await browser.pause(5000);

      // Screenshot - My Page Login Screen
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

      // Login to MyPage
      // ★ 新環境適用' New Env Implementation
      await parent.Login_MyPage();

      // Screenshot - My Page Home page
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-2"
      );

      // Click View Applications
      const view_app = await $(
        ".//a[@title='" + test_data.testData.see_app + "']/parent::*"
      );
      await view_app.scrollIntoView();
      await view_app.click();
      await browser.pause(10000);

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

      // Go to My Page Application record screen
      await browser.url(
        user_info.userInformation.var_sf_siteurl +
          "/s/application-detail?id=" +
          test_data.testData.app_id
      );
      await browser.pause(10000);

      // Screenshot - Application record
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-3"
      );
    }
  );
}
