const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_34: You must be able to update the check box for 金利優遇適用 preferential interest rates. (set randomly)", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "uic") {
      // login as tantou
      await parent.Login_as_tantou();
    }
    // Go to INI record
    await parent.Go_to_INI();

    const edit = await $(
      ".//button[@title='" +
        test_data.testData.ini_compilation_declaration_edit_btn +
        "']"
    );
    await edit.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await edit.waitForClickable({ timeout: 10000 });
    await edit.click();
    await browser.pause(5000);

    // クレジットカード
    const ini_creditcard_lbl = await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.ini_creditcard_lbl +
        "']/@for]"
    );
    await browser.execute((ini_creditcard_lbl) => {
      ini_creditcard_lbl.click();
    }, ini_creditcard_lbl);
    await browser.pause(1000);

    // 子育て家庭
    const ini_child_raising_fam_lbl = await $(
      ".//*[contains(text(), '" +
        test_data.testData.ini_child_raising_fam_lbl +
        "')]"
    );
    await ini_child_raising_fam_lbl.waitForClickable({
      timeout: 10000,
    });
    await ini_child_raising_fam_lbl.click();
    await browser.pause(1000);

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Save
    const saveedit = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await saveedit.scrollIntoView({ block: "center" });
    await saveedit.click();
    await browser.pause(10000);

    // Screenshot
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
