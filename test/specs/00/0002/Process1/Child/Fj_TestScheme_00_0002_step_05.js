const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0002-1");

export default function suite() {
  it("Fj_TestScheme_00_0002_step_05: 徴求書類 Requested document status is「未提出」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Go to VER-1 record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_VER(test_data.testData.ver1_id);

    // Go to RDC of VER1 page record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_RDC();

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);
  });
}
