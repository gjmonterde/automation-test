const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");

export default async function suite() {
  it("Fj_TestScheme_60_0004_step_35: 所管部確認結果 The results of the department's confirmation and 定型コメント the fixed comments can be updated.", async () => {
    const stepNum = "35"; // ★ 新環境適用' New Env Implementation

    // Modify 所管部確認結果 section
    await $(".//span[contains(.,'" + test_data.testData.ini3_scroll + "')]").$(
      function () {
        this.scrollIntoView();
      }
    );
    await browser.pause(3000);
    await $(
      ".//span[contains(.,'" + test_data.testData.ini3_scroll_aml + "')]"
    ).scrollIntoView();
    await browser.pause(3000);
    await $(
      ".//span[contains(.,'" +
        test_data.testData.jurisdiction_confirmation +
        "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    const jurisdiction_edit = await $(
      ".//button[@title='" +
        test_data.testData.jurisdiction_confirmation +
        " の編集']"
    );
    await jurisdiction_edit.waitForClickable({
      timeout: 10000,
    });
    await jurisdiction_edit.click();
    await browser.pause(3000);

    const input = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.jurisdiction_confirmation +
        "')]]"
    );
    await input.click();
    await browser.pause(1000);
    const comboboxid = await input.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid + "']")
      .$("span=" + test_data.testData.jurisdiction)
      .click();
    await browser.pause(1000);

    await browser.keys(["Escape"]);
    await browser.pause(3000);

    // Take screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
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
    await browser.pause(20000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 6000,
      }
    );
    await browser.pause(3000);

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(20000);

    // Take screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
    await browser.pause(20000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 6000,
      }
    );
    await browser.pause(3000);
  });
}
