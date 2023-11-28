const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0004-3");

export default async function suite() {
  it("Fj_TestScheme_30_0004_step_34: 適用利率＝基準利率-優遇利率 Applicable Rate = Base Rate - The value of Privileged Rate is displayed.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "34";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await parent.Login_As_User_In_Charge();
    }

    // ★ 新環境適用' New Env Implementation
    // Go to 銀行審査 detail page
    await parent.Go_to_INI();

    // Modify 銀行審査 detail page
    await $(
      ".//span[contains(.,'" + test_data.testData.ini3_section1 + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    await $(
      ".//button[@title='" +
        test_data.testData.ini3_subsidy_pension_edit_btn +
        "']"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//button[@title='" +
        test_data.testData.ini3_subsidy_pension_edit_btn +
        "']"
    ).click();
    await browser.pause(3000);

    await $(
      ".//*[contains(text(), '" + test_data.testData.subsidy_pension + "')]"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//*[contains(text(), '" + test_data.testData.subsidy_pension + "')]"
    ).click();
    await browser.pause(1000);

    // Take screenshot
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

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save changes
    const save = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save.waitForClickable({ timeout: 5000 });
    await save.click();
    await browser.pause(10000);

    // Take 銀行審査 screenshot
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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
