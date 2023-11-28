const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_31: 所管部確認結果 The results of the department's confirmation and 定型コメントthe fixed comments can be updated.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "31";

    // Modify 所管部確認結果 section
    await $(
      ".//span[contains(.,'" + test_data.testData.ini3_section1 + "')]"
    ).scrollIntoView();
    await browser.pause(3000);
    await $(
      ".//span[contains(.,'" + test_data.testData.ini3_section2 + "')]"
    ).scrollIntoView();
    await browser.pause(3000);
    await $(
      ".//span[contains(.,'" + test_data.testData.ini3_section3 + "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(3000);

    await $(
      ".//button[@title='" + test_data.testData.ini3_edit_btn + "']"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//button[@title='" + test_data.testData.ini3_edit_btn + "']"
    ).click();
    await browser.pause(3000);

    // 所管部確認結果
    await $(
      "//label[contains(.,'" + test_data.testData.ini3_section3 + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    const input = await $(
      ".//button[@aria-label[contains(., '" +
        test_data.testData.ini3_section3 +
        "')]]"
    );
    await input.click();
    await browser.pause(1000);
    await $(
      "//label[contains(.,'" + test_data.testData.ini3_section3 + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const comboboxid = await input.getAttribute("aria-controls");
    await $(".//div[@id='" + comboboxid + "']")
      .$("span=" + test_data.testData.jurisdiction)
      .click();
    await browser.pause(1000);

    // 定型コメント
    await $(
      "//label[contains(.,'" + test_data.testData.ini3_comment_lbl + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.ini3_comment_lbl +
        "']/@for]"
    ).setValue(test_data.testData.fixed_comment);
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
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

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(10000);

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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
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
  });
}
