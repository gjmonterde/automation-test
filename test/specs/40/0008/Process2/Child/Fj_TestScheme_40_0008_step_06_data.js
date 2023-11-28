const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0008-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0008_step_06_data: Manual process for 反社照会 record field update (data linkage)", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_admin();

    // Go to ASC record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.asc_obj,
      test_data.testData.asc_id
    );

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Click edit btn
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.asc_antisocial_results_edit_btn +
        "']"
    );

    // ★ 新環境適用' New Env Implementation
    await edit_btn.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });

    await edit_btn.waitForClickable({
      timeout: 10000,
    });
    await edit_btn.click();
    await browser.pause(3000);

    // 反社照会結果＝「◎」
    const results_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.asc_antisocial_results_lbl +
        "')]"
    );
    await results_lbl.click();
    await browser.pause(2000);
    const results_val = await $(
      "//span[@title='" + test_data.testData.asc_antisocial_results_value + "']"
    );

    await results_val.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await results_val.waitForClickable({ timeout: 10000 });
    await results_val.click();
    await browser.pause(2000);

    // 反社照会結果＝連携完了
    const status_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.asc_antisocial_inquiry_status_lbl +
        "')]"
    );
    await status_lbl.click();
    await browser.pause(2000);
    const status_val = await $(
      "//span[@title='" +
        test_data.testData.asc_antisocial_inquiry_status_value +
        "']"
    );

    await status_val.$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });

    await status_val.waitForClickable({ timeout: 10000 });
    await status_val.click();
    await browser.pause(2000);
    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "record-body-container"
      ).offsetheight;
      this.style.marginTop = height - this.offsetHeight + "px";
      this.style.position = "static";
    });
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [highlights2, headerBar2, tabheader2],
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
    await browser.pause(30000);

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Logout
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);
  });
}
