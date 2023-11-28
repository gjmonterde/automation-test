const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0003-4");

export default async function suite() {
  it("Fj_TestScheme_62_0003_step_18_data: Manual update of 同一人照会ステータス field (for data linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    // Login to org - admin
    await parent.Login_as_admin();

    // Go to DDP Record
    await parent.Go_to_DDP(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
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

    // Edit Same person Inquiry 同一人照会 - 同一人照会完了
    const edit_btn = await $(
      "//button[@title='" +
        test_data.testData.ddp_samepersoninqstatus_edit_btn +
        "']"
    );
    await edit_btn.waitForClickable({ timeout: 30000 });
    await edit_btn.click();
    await browser.pause(2000);
    const dropdown = await $(
      "//button[@class='slds-combobox__input slds-input_faux slds-combobox__input-value']"
    );
    await dropdown.waitForClickable({ timeout: 5000 });
    await dropdown.click();
    await browser.pause(2000);
    await $(
      "//span[@title='" + test_data.testData.ddp_inquirycomplete_value + "']"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    const val = await $(
      "//span[@title='" + test_data.testData.ddp_inquirycomplete_value + "']"
    );
    await val.waitForClickable({ timeout: 5000 });
    await val.click();
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
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0003 +
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
    const save = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save.waitForClickable({ timeout: 30000 });
    await save.click();
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
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Logout
    await parent.Logout();
  });
}
