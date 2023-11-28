const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-3");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_11: The 処理 processing status of the application is 'Waiting for confirmation of inquiry by the same person'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "11";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Data_Login_as_Tantou1();
    }

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    // Get CDD record
    await parent.Get_CDD_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.cdd_array = test_data.testData.cdd_array.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    // Loop through the array to determine CDD records
    for (var cdd = 0; cdd < test_data.testData.cdd_array.length; cdd++) {
      var record = test_data.testData.cdd_array[cdd];

      // Go to CDD record
      // ★ 新環境適用' New Env Implementation
      await parent.Go_to_CDD(record.Id);

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation

      const headerBar_cdd = await $(".//header[@id='oneHeader']");
      const tabheader_cdd = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cdd = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar_cdd, tabheader_cdd, highlights_cdd],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }

    // Go to Account record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_Account();

    const headerBar_acc = await $(".//header[@id='oneHeader']");
    const tabheader_acc = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_acc = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-" +
        ssno,
      {
        hideAfterFirstScroll: [headerBar_acc, tabheader_acc, highlights_acc],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    const headerBar_ddp = await $(".//header[@id='oneHeader']");
    const tabheader_ddp = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_ddp = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-" +
        ssno,
      {
        hideAfterFirstScroll: [headerBar_ddp, tabheader_ddp, highlights_ddp],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to APP record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_APP();

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    const headerBar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-" +
        ssno,
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
