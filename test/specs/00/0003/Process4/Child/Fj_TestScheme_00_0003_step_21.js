const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
const parent = require("../Parent/Fj_TestScheme_00_0003-4");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_21: Check the CIF information records", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "21";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Data_Login_as_Tantou1();
    }

    // Go to Account record
    // ★ 新環境適用' New Env Implementation
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Go to CIF情報 related list
    await util.Scroll_to_related_list(test_data.testData.cif_rel_list);

    // Go to CIF related list view
    // ★ 新環境適用' New Env Implementation
    await util.Open_SF_Record_URL(
      2,
      user_info.object.account_obj,
      test_data.testData.account_id,
      user_info.object.account_cif_rel
    );

    // Screenshot
    const headerBar_rel = await $(".//header[@id='oneHeader']");
    const tabheader_rel = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_rel, tabheader_rel],
      }
    );

    var ssno = 1; // ★ 新環境適用' New Env Implementation
    // Loop through the array to determine CIF records
    for (var cif = 0; cif < test_data.testData.cif_array.length; cif++) {
      var record = test_data.testData.cif_array[cif];

      // Go to CIF record
      await util.Open_SF_Record_URL(1, user_info.object.cif_obj, record.Id);

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      const headerBar_cif = await $(".//header[@id='oneHeader']");
      const tabheader_cif = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cif = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          +test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar_cif, tabheader_cif, highlights_cif],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
