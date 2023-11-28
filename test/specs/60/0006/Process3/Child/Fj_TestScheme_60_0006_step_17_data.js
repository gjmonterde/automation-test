const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0006-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0006_step_17_data: Update 1st_モデルPD（上乗せ後PD）and 1st_上乗せPD fields", async () => {
    const stepNum = "17"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_17_1 +
        "'" +
        test_data.testData.exs_name +
        "'"
    );

    // Screenshot - developer console --Before update
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data
    );

    // Update fj_1st_ModePD__c
    await parent.Update_1st_ModePD();
    await browser.pause(5000);

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_17_1 +
        "'" +
        test_data.testData.exs_name +
        "'"
    );

    // Screenshot - developer console --After update
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_17_2 +
        "'" +
        test_data.testData.exs_name +
        "'"
    );

    // Screenshot - developer console --Before update
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data
    );

    // Update fj_1st_AdditionalPD__c
    await parent.Update_1st_AdditionalPD();
    await browser.pause(5000);

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_17_2 +
        "'" +
        test_data.testData.exs_name +
        "'"
    );

    // Screenshot - developer console --After update
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data
    );
  });
}
