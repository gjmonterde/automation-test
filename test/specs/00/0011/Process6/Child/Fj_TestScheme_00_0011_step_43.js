const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-6");

export default async function suite() {
  it("Fj_TestScheme_00_0011_step_43: The返済シミュレーション画面 repayment simulation screen is deactivated", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "43";

    // Login
    await parent.Login_to_Salesforce();

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
        fullPageScrollTimeout: 5000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Switch frame
    const form_frame = await browser.$(
      ".//iframe[@name[contains(., 'vfFrameId_')]]"
    );
    await form_frame.scrollIntoView();
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Open accordion
    await browser.execute(() => {
      const acc = document.getElementsByClassName("slds-accordion__summary")[0];
      acc.click();
    });

    // Input amount
    const input1 = await $(".//input[@id='page:pb1:form1:input1']");
    await input1.click();
    var inp1 = await input1.getValue();
    await browser.execute((val) => {
      val.value = null;
    }, input1);
    if (
      test_data.testData.app_borrow_amount_value_43 === "" ||
      test_data.testData.app_borrow_amount_value_43 >= inp1
    ) {
      test_data.testData.app_borrow_amount_value_43 = Math.floor(inp1 / 2);
    }
    await input1.setValue(test_data.testData.app_borrow_amount_value_43);

    // Input date
    await $(".//input[@name='page:pb1:form1:datePicker']").setValue(
      test_data.testData.app_preferred_loan_date_value_43
    );

    // Go back to parent frame
    await browser.switchToParentFrame();

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
        fullPageScrollTimeout: 5000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Switch frame
    const form_frame2 = await browser.$(
      ".//iframe[@name[contains(., 'vfFrameId_')]]"
    );
    await form_frame2.scrollIntoView();
    await browser.pause(3000);
    await browser.switchToFrame(form_frame2);

    // Click button
    await $(".//input[@name='page:pb1:form1:j_id92']").click();
    await browser.pause(25000);

    // Go back to parent frame
    await browser.switchToParentFrame();

    // Open app
    await parent.Open_App();

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
        fullPageScrollTimeout: 5000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );
  });
}
