const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_23_data: Manually update values in INI record (data Linkage)", async () => {
    const stepNum = "23"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "admin") {
      // login as admin
      await parent.Login_as_admin();
    }

    // Go to INI record
    await parent.Go_to_INI();

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    const editbtn = await $(
      ".//button[@title='" + test_data.testData.ini_check_result_edit_btn + "']"
    );
    await editbtn.scrollIntoView({ clock: "center" });
    await editbtn.waitForClickable({ timeout: 20000 });
    await editbtn.click();
    await browser.pause(5000);

    //チェック結果文言１
    const checkResult = await $(
      "//label[contains(.,'" +
        test_data.testData.ini_check_result_field_lbl +
        "')]"
    );
    await checkResult.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    const checkResultVal = await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.ini_check_result_field_lbl +
        "']/@for]"
    );
    await checkResultVal.setValue(test_data.testData.ini3_check_result_val);
    await browser.pause(3000);

    //メッセージ文言１
    const msgOne = await $(
      "//label[contains(.,'" + test_data.testData.ini_msg1_field_lbl + "')]"
    );
    await msgOne.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    const msgOneVal = await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.ini_msg1_field_lbl +
        "']/@for]"
    );
    await msgOneVal.setValue(test_data.testData.ini3_msg1_val);
    await browser.pause(3000);

    //メッセージ文言２
    const msgTwo = await $(
      "//label[contains(.,'" + test_data.testData.ini_msg2_field_lbl + "')]"
    );
    await msgTwo.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    const msgTwoVal = await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.ini_msg2_field_lbl +
        "']/@for]"
    );
    await msgTwoVal.setValue(test_data.testData.ini3_msg2_val);
    await browser.pause(3000);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Save
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(20000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        fullPageScrollTimeout: 1000,
      }
    );

    // logout
    await parent.Logout();
  });
}
