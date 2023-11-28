const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0008-2");

export default function suite() {
  it("Fj_TestScheme_20_0008_step_06_data: Data linkage manual edit of fields", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    if (test_data.testData.logged_status != "admin") {
      // Login as admin
      await parent.Login_as_admin();
    }

    // Go to ASC record
    await parent.Go_to_ASC();

    // Screenshot - Before
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
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

    // ★ 新環境適用' New Env Implementation
    // Insert value in 反社照会結果 field
    const edit = await $(
      "//button[@title='" + test_data.testData.asc_edit_btn + "']"
    );
    await edit.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await edit.waitForDisplayed({
      timeout: 5000,
    });
    await browser.pause(5000);
    await edit.click();
    await browser.pause(5000);

    // 反社照会結果
    const result = await $(
      ".//label[contains(.,'" + test_data.testData.asc_result_lbl + "')]"
    );
    await result.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await result.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.asc_results_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // Insert value in 授受結果 field
    const receive_result = await $(
      ".//label[contains(.,'" +
        test_data.testData.asc_give_receive_rsult_lbl +
        "')]"
    );
    await receive_result.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await receive_result.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.give_receive_result_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // Update value of 反社照会ステータス field
    const status = await $(
      ".//label[contains(.,'" + test_data.testData.picklist_label + "')]"
    );
    await status.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await status.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.completed_status_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // Screenshot - during
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Click 保存 button
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(30000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - After
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
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
    await parent.Logout();
  });
}
