const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0003-4");

export default function suite() {
  it("Fj_TestScheme_63-2_0003_step_13_data: Data Linkage Manual Change", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_As_Admin();

    // Go to DDP record
    await parent.Open_Record_URL(
      user_info.object.ddp_obj,
      test_data.testData.ddp2_id
    );

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);

    // Edit 同一人照会 detail page
    const edit_ddp_status = await $(
      "//button[@title='" + test_data.testData.ddp_status_label + " の編集']"
    );
    await edit_ddp_status.waitForDisplayed({ timeout: 10000 });
    await browser.pause(5000);
    await edit_ddp_status.waitForClickable({ timeout: 10000 });
    await $(
      "//button[@title='" + test_data.testData.ddp_status_label + " の編集']"
    ).click();
    await browser.pause(5000);

    const edit_ddp_status_lbl = await $(
      "label=" + test_data.testData.ddp_status_label
    );
    await edit_ddp_status_lbl.waitForClickable({ timeout: 10000 });
    await edit_ddp_status_lbl.click();
    await browser.pause(5000);

    const dpp_status_value = await $(
      "//span[@title='" + test_data.testData.ddp_status_value + "']"
    );
    await dpp_status_value.scrollIntoView();
    await dpp_status_value.waitForClickable({ timeout: 10000 });
    await dpp_status_value.click();
    await browser.pause(5000);

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );
    const headerBar_edit = await $(".//header[@id='oneHeader']");
    const tabheader_edit = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_edit = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot - During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
      }
    );
    await browser.pause(2000);

    // Save changes
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(50000);

    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot - After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_after,
          tabheader_after,
          highlights_after,
        ],
      }
    );
    await browser.pause(2000);
  });
}
