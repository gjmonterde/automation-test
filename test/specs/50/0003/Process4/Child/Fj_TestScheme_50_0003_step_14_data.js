const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0003-4");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0003_step_14_data: Update 2nd DDP record (Data Linkage)", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Login to org as admin
    await parent.Login_as_Admin();

    // Go to 2nd DDP related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ddp_obj,
      test_data.testData.ddp_id2
    );

    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data
    );

    await browser.pause(5000);

    // Edit Same person Inquiry 同一人照会
    await $(
      "//button[@title='" +
        test_data.testData.same_person_inquiry_status_label +
        " の編集']"
    ).click();
    await browser.pause(2000);
    await $(
      "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
    ).click();
    await browser.pause(5000);
    await $(
      ".//span[@title='" +
        test_data.testData.same_person_inquiry_status_value +
        "']"
    ).$(function () {
      this.scrollIntoView();
    });
    await $(
      ".//span[@title='" +
        test_data.testData.same_person_inquiry_status_value +
        "']"
    ).click();
    await browser.pause(5000);

    // Screenshot - During Data
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );
    await browser.pause(5000);

    // Save
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(50000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - After Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data
    );
  });
}
