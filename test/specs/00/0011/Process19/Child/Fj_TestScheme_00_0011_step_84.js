const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-19"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0011_step_84: The following item values must be updatable: 実行方法 Execution method", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "84";

    // Go to 申込 Page
    await parent.Go_to_APP(4); // ★ 新環境適用' New Env Implementation

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Refresh page
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Edit
    // ★ 新環境適用' New Env Implementation
    const edit = await $(
      ".//button[@title='" + test_data.testData.execution_method_edit_btn + "']"
    );
    await edit.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    await edit.click();
    await browser.pause(1000);

    //Select picklist
    const execution_method_picklist = await $(
      "//button[@aria-label='" +
        test_data.testData.app_execution_method_lbl +
        "']"
    );
    await execution_method_picklist.click();
    await browser.pause(5000);

    // Select value in the picklist
    await $(
      ".//lightning-base-combobox-item[@data-value='" +
        test_data.testData.app_execution_method_val +
        "']"
    ).click();
    await browser.pause(5000);

    await browser.keys(["Escape"]);
    await browser.pause(5000);

    // Screenshot - edit page
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var middle = document.getElementsByClassName("col main-col slds-col");
      var height = middle.offsetHeight;
      this.style = "height:" + height + "px!important";
    });
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "col main-col slds-col"
      ).offsetHeight;
      this.style.marginTop = height + this.height + "px";
      (this.style.marginBottom = "-100px"), (this.style.position = "static");
    });
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click Save
    // ★ 新環境適用' New Env Implementation
    const save = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await save.click();
    await browser.pause(10000);

    // Refresh page
    await parent.Go_to_APP(4);

    // Screenshot
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );
  });
}
