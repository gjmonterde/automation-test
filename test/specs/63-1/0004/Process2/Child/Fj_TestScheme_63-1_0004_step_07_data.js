const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_07_data: Credit card information linkage status (Data Linkage)", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_As_Admin();

    // Open INI-2 record detail
    await parent.Open_INI_2nd_Record();

    // Scroll to view the related list
    await util.Second_INI_Record_Scrolling();

    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_before, tabheader_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Go to 審査情報連携ステータス
    await $(
      ".//span[contains(.,'" +
        test_data.testData.ini2_linkage_status_lbl +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    // Edit the クレジットカード情報連携ステータス
    const edit_linkage_status = await $(
      ".//button[@title='" +
        test_data.testData.ini2_linkage_status_pencil +
        "']"
    );
    await edit_linkage_status.waitForClickable({ timeout: 10000 });
    await edit_linkage_status.click();
    await browser.pause(3000);

    await $(
      "//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });

    const edit_linkage_status_lbl = await $(
      "label=" + test_data.testData.ini2_linkage_status_lbl
    );
    await edit_linkage_status_lbl.waitForClickable({ timeout: 10000 });
    await edit_linkage_status_lbl.click();
    await browser.pause(3000);

    const edit_linkage_status_value = await $(
      "//span[@title='" + test_data.testData.linkage_status_val + "']"
    );
    await edit_linkage_status_value.$(function () {
      this.scrollIntoView();
    });
    await edit_linkage_status_value.waitForClickable({ timeout: 10000 });
    await edit_linkage_status_value.click();
    await browser.pause(5000);

    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );

    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot - During Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [headerBar_during, tabheader_during],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save record
    const ini2_save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await ini2_save_btn.waitForClickable({ timeout: 10000 });
    await ini2_save_btn.click();
    await browser.pause(20000);
    await browser.refresh();
    await browser.pause(10000);

    // Scroll to view the related list
    await util.Second_INI_Record_Scrolling();

    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot - After Data
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
