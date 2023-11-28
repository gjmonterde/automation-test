const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0008-2"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0008_step_10: The 入力内容input can be saved", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

    // Login as shinsa
    await parent.Login_as_shinsa1(); // ★ 新環境適用' New Env Implementation

    // Go to ASC record
    await parent.Open_ASC_Record(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
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
    await edit_btn.scrollIntoView({
      block: "center",
    });
    await edit_btn.waitForClickable({
      timeout: 5000,
    });
    await edit_btn.click();
    await browser.pause(3000);

    // 反社照会結果＝「×」
    const results_lbl = await $(
      "//label[contains(., '" +
        test_data.testData.asc_antisocial_results_lbl +
        "')]"
    );
    await results_lbl.waitForClickable({ timeout: 5000 });
    await results_lbl.click();
    await browser.pause(2000);
    const results_val = await $(
      "//span[@title='" + test_data.testData.asc_antisocial_results_value + "']"
    );
    await results_val.scrollIntoView({ block: "center" });
    await results_val.waitForClickable({ timeout: 5000 });
    await results_val.click();
    await browser.pause(2000);

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [highlights2, headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await saveedit.waitForClickable({ timeout: 30000 });
    await saveedit.click();
    await browser.pause(25000);

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
  });
}
