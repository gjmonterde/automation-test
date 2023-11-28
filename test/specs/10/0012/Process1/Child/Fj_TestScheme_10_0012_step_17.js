const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0012_step_17: 実行依頼データSubmit data of record type「22_証書貸付_回収」 22 _ Loan _ Collection of deeds is created acoording to the number of  貸出共通明細 (既貸回収 flag=TRUE and 科目コード=44)", async () => {
    const stepNum = "17"; // ★ 新環境適用' New Env Implementation

    // Go to 3rd INI related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    // Save 3rd INI Record Page Full Screen
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
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
    await browser.pause(20000);

    // Screenshot INI related record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);

    var ssno = 1;
    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.lcd_id_arr.length > 0) {
      // Go to LCD related list view
      await util.Open_SF_Record_URL(
        2,
        user_info.object.ini_obj,
        test_data.testData.ini3_id,
        user_info.object.ini_lcd_rel
      );

      ssno = ssno + 1;
      // Screenshot LCD related list
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
      await browser.pause(5000);

      for (var i = 0; i < test_data.testData.lcd_id_arr.length; i++) {
        // Go to LCD record
        await util.Open_SF_Record_URL(
          1,
          user_info.object.lcd_obj,
          test_data.testData.lcd_id_arr[i]
        );

        ssno = ssno + 1;
        // Screenshot
        const headerBar = await $(".//header[@id='oneHeader']");
        const tabheader = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        const highlights = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        await browser.saveFullPageScreen(
          // ★ 新環境適用' New Env Implementation
          user_info.userInformation.screenshot +
            test_data.testData.spec10 +
            "_" +
            test_data.testData.tab0012 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar, tabheader, highlights],
            fullPageScrollTimeout: 3000,
          }
        );
        await browser.pause(5000);
      }
    }

    // Go to ER list record
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_execrequest_rel
    );

    ssno = ssno + 1;
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-" +
        ssno
    );
    await browser.pause(2000);
  });
}
