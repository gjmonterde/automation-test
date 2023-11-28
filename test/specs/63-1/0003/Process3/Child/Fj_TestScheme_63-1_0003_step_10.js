const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0003-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0003_step_10: The 処理 processing status of the application is 'Waiting for confirmation of inquiry by the same person'", async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation

    // Go to DDP record
    await parent.Open_SF_DDP_Record();

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
      await util.Open_SF_Record_URL(1, user_info.object.cdd_obj, record.Id);

      var screenshotCountCDD = 1 + cdd;

      const headerBar_cdd = await $(".//header[@id='oneHeader']");
      const tabheader_cdd = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_cdd = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          // ★ 新環境適用' New Env Implementation
          user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          screenshotCountCDD,
        {
          hideAfterFirstScroll: [headerBar_cdd, tabheader_cdd, highlights_cdd],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }

    // Go to Account record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    const headerBar_acc = await $(".//header[@id='oneHeader']");
    const tabheader_acc = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_acc = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar_acc, tabheader_acc, highlights_acc],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to DDP record
    await parent.Open_SF_DDP_Record();

    const headerBar_ddp = await $(".//header[@id='oneHeader']");
    const tabheader_ddp = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_ddp = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_ddp, tabheader_ddp, highlights_ddp],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
