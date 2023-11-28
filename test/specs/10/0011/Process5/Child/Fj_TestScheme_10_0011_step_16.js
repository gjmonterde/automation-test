const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0011-5");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0011_step_16: The sub screen is displayed and the delete operation is possible", async () => {
    const stepNum = "16"; // ★ 新環境適用' New Env Implementation

    // Go to BA Page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    // click Delete button
    await $(
      ".//button[@name='" + test_data.testData.ba_delete_button_api + "']"
    ).click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Confirm Delete
    await $("button=" + test_data.testData.confirm_btn).click();

    // Toast
    await util.Toast_Message();

    // Screenshot - toast
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Login as admin
    await parent.Login_as_Admin();

    // Go to ごみ箱 Page
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.recycle_bin_url
    );
    await browser.pause(8000);

    // Go to 組織のごみ箱 list view
    await $("span=" + test_data.testData.my_bin_listview).click();
    await $("span=" + test_data.testData.org_bin_listview).click();
    await browser.pause(3000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
