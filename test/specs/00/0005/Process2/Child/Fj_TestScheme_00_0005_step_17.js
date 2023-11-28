const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_17: The JICC結果(注意M)レコード JICC result (Note M) record can be confirmed in the 関連リスト related list", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "17";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Login_as_Tantou1();
    }

    // To view the JICC結果(注意M) related records
    // Go to JID record detail
    await parent.Open_Salesforce_JID_Record();

    // Get JICC結果(ファイルM) (JIM) records
    await parent.JIM_New_Records();

    var ssno = 0; // ★ 新環境適用' New Env Implementation
    for (var i = 0; i < test_data.testData.jim_new_record_no_value; i++) {
      // Go to JICC結果(ファイルM) (JIM) record detail screen
      await parent.Open_Salesforce_JIM_Record(test_data.testData.jim_id_arr[i]); // ★ 新環境適用' New Env Implementation

      const headerBar_jim1 = await $(".//header[@id='oneHeader']");
      const tabheader_jim1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_jim1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0005 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [
            headerBar_jim1,
            tabheader_jim1,
            highlights_jim1,
          ],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  });
}
