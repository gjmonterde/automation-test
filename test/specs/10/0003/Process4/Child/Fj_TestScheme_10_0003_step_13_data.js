const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0003-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_10_0003_step_13_data: Manual update of 同一人照会ステータス field (for data linkage)", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Login to org - admin
    await parent.Login_as_Admin();

    // Go to DDP Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ddp_obj,
      test_data.testData.ddp_id
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data
    );

    // Edit Same person Inquiry 同一人照会
    await $("//button[@title='" + test_data.testData.ddp_edit + "']").click();
    await browser.pause(2000);
    await $(
      "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
    ).click();
    await browser.pause(5000);
    await $("//span[@title='" + test_data.testData.auto_ok_value + "']").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await $(
      "//span[@title='" + test_data.testData.auto_ok_value + "']"
    ).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    // Save
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(50000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data
    );
    await browser.pause(2000);
  });
}
