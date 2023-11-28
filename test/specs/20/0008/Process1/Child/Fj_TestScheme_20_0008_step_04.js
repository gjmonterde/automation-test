const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0008-1");

export default function suite() {
  it("Fj_TestScheme_20_0008_step_04: The 反社照会 anti-company inquiry status is「実施中」 In Progress", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "4";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_as_shinsa();
    }

    // Go to ASC record
    await parent.Go_to_ASC();

    // Screenshot - 反社照会 Screen
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
