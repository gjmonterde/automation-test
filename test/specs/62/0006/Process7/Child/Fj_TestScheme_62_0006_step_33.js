const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0006-7");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_62_0006_step_33: The 審査決裁 examination Approval Status is changed to 「承認済OK」Approved OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "33";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_as_shinsa();
    }
    // Go to EXS record detail screen
    await parent.Go_to_EXS();

    // Click 承認
    const acceptbtn = await $(
      ".//button[@name='" +
        test_data.testData.api_externalscoring_accept_btn +
        "']"
    );
    await acceptbtn.waitForClickable({ timeout: 30000 });
    await acceptbtn.click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // ★ 新環境適用' New Env Implementation
    // Input approval comment
    const lbl = await $(
      "//label[contains(.,'" +
        test_data.testData.exs_approval_comment_lbl +
        "')]"
    );
    await lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $(
      "//textarea[@id=//label[normalize-space(.)='" +
        test_data.testData.exs_approval_comment_lbl +
        "']/@for]"
    ).setValue(test_data.testData.exs_approval_comment_value);
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );

    // Confirm
    const confirm = await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    );
    await confirm.waitForClickable({ timeout: 30000 });
    await confirm.click();

    // Toast message screenshot
    await util.Toast_Message();
    await browser.pause(1000);
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

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
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
