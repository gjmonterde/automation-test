const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0003_step_15: Check the CIF information records", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Go to Account record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Go to CIF情報 related list
    await $(
      ".//span[contains(.,'" + test_data.testData.cif_rel_list + "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(2000);

    // Go to CIF related list view
    await util.Open_SF_Record_URL(
      2,
      user_info.object.cif_obj,
      test_data.testData.account_id,
      user_info.object.account_cif_rel
    );

    // Screenshot
    const headerBar_rel = await $(".//header[@id='oneHeader']");
    const tabheader_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
      }
    );

    // Loop through the array to determine CIF records
    for (var cif = 0; cif < test_data.testData.cif_array.length; cif++) {
      var record = test_data.testData.cif_array[cif];

      // Go to CIF record
      await util.Open_SF_Record_URL(1, user_info.object.cif_obj, record.Id);

      var screenshotCountCIF = 2 + cif;

      const headerBar_cif = await $(".//header[@id='oneHeader']");
      const tabheader_cif = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cif = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          screenshotCountCIF,
        {
          hideAfterFirstScroll: [headerBar_cif, tabheader_cif, highlights_cif],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
