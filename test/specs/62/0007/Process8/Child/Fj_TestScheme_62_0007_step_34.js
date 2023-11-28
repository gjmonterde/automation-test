const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0007-8");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0007_step_34: The 適用利率 applicable interest rate must display the " +
      "values depending on the change in the融資額 loan amount",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "34";

      // Go to GUA record detail screen
      await parent.Go_to_GUA();

      // Screenshot
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
    }
  );
}
