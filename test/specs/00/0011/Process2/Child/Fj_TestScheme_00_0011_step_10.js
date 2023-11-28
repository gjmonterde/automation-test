const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");

export default function suite() {
  it(
    "Fj_TestScheme_00_0011_step_10: The お申込みステータスapplication status displayed on My Page " +
      "must be 「ご融資条件ご確定」Finalized Loan Terms",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "10";

      // Go to My Page Application record screen
      await browser.url(
        user_info.userInformation.var_sf_siteurl +
          "/s/application-detail?id=" +
          test_data.testData.app_id
      );
      await $("span=" + test_data.testData.app_name).waitForExist({
        timeout: 30000,
      });

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
