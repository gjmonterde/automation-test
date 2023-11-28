const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-2");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_08: There is no row of the 「自行」'Own Row' category in the table at the top of the 借入明細情報一覧画面 Borrowing Line Information List screen.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa user
      await parent.Login_as_shinsa();
    }

    // Open TRR record
    await parent.Open_TRR_Record();

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
