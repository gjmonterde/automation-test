const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0012-1");

export default async function suite() {
  it("Fj_TestScheme_00_0012_step_26: one 実行依頼データ execution submission data item of record type「13_普通預金_貸越契約」has been created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "26";

    // Go to APP record
    await parent.Open_APP_Record();

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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await browser.pause(2000);

    // Go to Exec Request Record
    await parent.Get_ER_Record(test_data.testData.er_13_rectype); // ★ 新環境適用' New Env Implementation
    await parent.Open_ER_Record(test_data.testData.er_id); // ★ 新環境適用' New Env Implementation

    // Screenshot
    const highlights_er = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_er = await $(".//header[@id='oneHeader']");
    const tabheader_er = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_er, tabheader_er, highlights_er],
      }
    );
  });
}
