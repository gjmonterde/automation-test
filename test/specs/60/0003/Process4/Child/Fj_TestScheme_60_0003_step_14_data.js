const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0003-4");

export default async function suite() {
  it("Fj_TestScheme_60_0003_step_14_data: 同一人照会 Same person inquiry status is「自動OK」Auto OK (Data Linkage)", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Login to org as admin
    await parent.Login_As_Admin();

    // Go to 同一人照会 detail page
    await parent.Open_DDP_Record();

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Modify 同一人照会 detail page
    await $(
      ".//button[@title='" + test_data.testData.ddp_status_lbl + " の編集']"
    ).click();
    await browser.pause(1000);

    await $(
      ".//label[contains(.,'" + test_data.testData.ddp_status_lbl + "')]"
    ).click();

    await $(".//span[@title='" + test_data.testData.ddp_val1 + "']").click();
    await browser.pause(3000);

    // Take 同一人照会 screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(15000);

    // Take modified 同一人照会 screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Refresh browser
    browser.refresh();
    await browser.pause(10000);

    // Take 同一人照会 screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Modify 同一人照会 detail page
    await $(
      ".//button[@title='" + test_data.testData.ddp_status_lbl + " の編集']"
    ).click();
    await browser.pause(1000);

    await $(
      ".//label[contains(.,'" + test_data.testData.ddp_status_lbl + "')]"
    ).click();
    await browser.pause(3000);
    await $(
      ".//span[@title='" + test_data.testData.ddp_val2 + "']"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(3000);
    await $(".//span[@title='" + test_data.testData.ddp_val2 + "']").click();
    await browser.pause(3000);

    // Take 同一人照会 screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-5" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    await browser.pause(3000);

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    ).click();
    await browser.pause(50000);

    // Take 同一人照会 screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-6" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
