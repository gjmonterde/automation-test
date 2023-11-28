const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0009-3");

export default function suite() {
  it("Fj_TestScheme_00_0009_step_20: 結果通知ステータス Result notification status is「承認済NG」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    // Go to CRE record detail screen
    await parent.Open_CRE_Record(); // ★ 新環境適用' New Env Implementation

    // Click 承認
    await $(
      ".//button[@name='" + test_data.testData.cre_approval_button + "']"
    ).click();
    await browser.pause(3000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Click button
    await $(".//button[@type='" + test_data.testData.submit_type_btn + "']").click();

    // To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    const highlights_toast_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_toast_after = await $(".//header[@id='oneHeader']");
    const tabheader_toast_after = await $(
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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [
          tabheader_toast_after,
          headerBar_toast_after,
          highlights_toast_after,
        ],
      }
    );
    await browser.pause(3000);

    // Go to APP record detail screen
    await parent.Open_APP_Record(3); // ★ 新環境適用' New Env Implementation

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
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Get MNT, WNT record
    await parent.Get_WNT_MNT_Records(); // ★ 新環境適用' New Env Implementation

    // Go to MNT related list record
    await parent.Open_MNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(2000);

    // Go to WNT related list record
    await parent.Open_WNT_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-6"
    );
    await browser.pause(2000);

    // Go to MNT record
    await parent.Open_MNT_Rel(); // ★ 新環境適用' New Env Implementation

    const highlights_mnt = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_mnt = await $(".//header[@id='oneHeader']");
    const tabheader_mnt = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [highlights_mnt, headerBar_mnt, tabheader_mnt],
      }
    );
    await browser.pause(2000);

    // Go to WNT record
    await parent.Open_WNT_Record(); // ★ 新環境適用' New Env Implementation

    const highlights_wnt = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_wnt = await $(".//header[@id='oneHeader']");
    const tabheader_wnt = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-8",
      {
        hideAfterFirstScroll: [highlights_wnt, headerBar_wnt, tabheader_wnt],
      }
    );
    await browser.pause(2000);
  });
}
