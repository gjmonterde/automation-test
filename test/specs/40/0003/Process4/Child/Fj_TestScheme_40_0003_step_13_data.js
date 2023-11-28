const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0003-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0003_step_13_data: Manual update of 同一人照会ステータス field (for data linkage)", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Login to org - admin
    await parent.Login_as_admin();

    // Go to DDP Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ddp_obj,
      test_data.testData.ddp_id
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
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,

      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Edit Same person Inquiry 同一人照会 - 取引有無照会完了
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.ddp_samepersoninqstatus_edit_btn +
        "']"
    );
    await edit_btn.waitForClickable({ timeout: 10000 });
    await edit_btn.click();
    await browser.pause(2000);
    await $(
      "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
    ).click();
    await browser.pause(2000);

    // Scroll
    await $(
      "//span[@title='" + test_data.testData.ddp_completioninquiry_value + "']"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//span[@title='" + test_data.testData.ddp_completioninquiry_value + "']"
    ).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    // Save
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(15000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Edit Same person Inquiry 同一人照会 - 同一人照会完了
    const edit_btn2 = await $(
      "//button[@title='" +
        test_data.testData.ddp_samepersoninqstatus_edit_btn +
        "']"
    );
    await edit_btn2.waitForClickable({ timeout: 10000 });
    await edit_btn2.click();
    await browser.pause(2000);
    await $(
      "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
    ).click();
    await browser.pause(2000);

    // ★ 新環境適用' New Env Implementation
    await $(
      "//span[@title='" + test_data.testData.ddp_inquirycomplete_value + "']"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });

    await $(
      "//span[@title='" + test_data.testData.ddp_inquirycomplete_value + "']"
    ).click();
    await browser.pause(3000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data
    );

    // Save
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(50000);

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
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-5" +
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
