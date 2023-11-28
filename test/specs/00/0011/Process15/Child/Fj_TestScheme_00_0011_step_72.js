const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-15");

export default function suite() {
  it(
    "Fj_TestScheme_00_0011_step_72: The お申込みステータス application status on My Page must be　" +
      "「ご融資条件ご確定」 Finalized Loan Terms",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "72";

      if (test_data.testData.logged_status != "mypage") {
        // Login to My Page
        await parent.Login_to_MyPage();
      }

      // Go to app record
      await parent.Go_to_MyPage_App();

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
