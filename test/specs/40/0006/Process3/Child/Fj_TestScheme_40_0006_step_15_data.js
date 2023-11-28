const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0006-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0006_step_15_data: Manual process for 審査決裁 record update (data linkage)", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_Admin();

    // Go to EXS record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );

    // Screenshot
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Edit 審査決裁連携ステータス value
    const exam_approval_collab_status_edit_btn = await $(
      "//button[@title='" +
        test_data.testData.exs_exam_cooperation_status_edit_btn +
        "']"
    );
    // ★ 新環境適用' New Env Implementation
    await exam_approval_collab_status_edit_btn.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });

    await exam_approval_collab_status_edit_btn.waitForClickable({
      timeout: 5000,
    });
    await exam_approval_collab_status_edit_btn.click();
    await browser.pause(3000);

    // Click 審査決裁連携ステータス label
    const exam_approval_collab_status_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.exs_exam_cooperation_status_lbl +
        "')]"
    );
    await exam_approval_collab_status_lbl.click();
    await browser.pause(2000);

    // Select 審査決裁連携ステータス picklist value
    const examval = await $(
      "//span[@title='" +
        test_data.testData.exs_exam_cooperation_status_value +
        "']"
    );
    // ★ 新環境適用' New Env Implementation
    await examval.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await examval.waitForClickable({ timeout: 10000 });
    await examval.click();
    await browser.pause(2000);

    // Edit Pスコア限度額（単位：万円）value
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.exs_pscore_limit_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.exs_pscore_limit_lbl +
        "']/@for]"
    ).setValue(test_data.testData.exs_pscore_limit_value);
    await browser.pause(3000);
    await $(
      "//label[contains(., '" + test_data.testData.exs_pscore_limit_lbl + "')]"
    ).click();

    // Screenshot
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
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await saveedit.waitForClickable({ timeout: 10000 });
    await saveedit.click();
    await browser.pause(20000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Logout
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);
  });
}
