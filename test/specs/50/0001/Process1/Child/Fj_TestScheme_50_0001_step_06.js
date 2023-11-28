const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0001-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0001_step_06: 契約規定・同意条項 Contract provisions and consent clauses corresponding to the product are indicated", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Show downloads tab
    await browser.url(test_data.testData.downloads_url);
    await browser.pause(10000);

    await browser.newWindow(test_data.testData.httpurl03);
    await browser.pause(10000);

    // Remove header
    await util.Remove_header(2);

    // Open Accordions - 同意 Step
    // 注意事項 accordion
    await $(".//a[contains(., '" + test_data.testData.acc1 + "')]").click();
    await browser.pause(2000);

    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    const acc2 = await $(
      ".//a[contains(., '" + test_data.testData.acc2 + "')]"
    );
    await acc2.scrollIntoView();
    await acc2.click();
    await browser.pause(2000);

    // 保証会社に対する個人情報の取扱いに関する同意条項 accordion
    const acc3 = await $(
      ".//a[contains(., '" + test_data.testData.acc3 + "')]"
    );
    await acc3.scrollIntoView();
    await acc3.click();
    await browser.pause(2000);

    // 契約規定・保証委託約款 accordion
    const acc4 = await $(
      ".//a[contains(., '" + test_data.testData.acc4 + "')]"
    );
    await acc4.scrollIntoView();
    await acc4.click();
    await browser.pause(2000);

    // お手続きマイページ利用規約 accordion
    const acc5 = await $(
      ".//a[contains(., '" + test_data.testData.acc5 + "')]"
    );
    await acc5.scrollIntoView;
    await acc5.click();

    // Screenshot - 同意 Step - Open Accordions
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Get PDF link selectors
    const pdf_link1 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf01 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    const pdf_link2 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf02 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    const pdf_link3 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf03 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    const pdf_link4 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf04 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click link1 to download PDF
    await pdf_link1.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link1.click();
    await browser.pause(3000);

    // Click link2 to download PDF
    await pdf_link2.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link2.click();
    await browser.pause(3000);

    // Click link3 to download PDF
    await pdf_link3.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link3.click();
    await browser.pause(3000);

    // Click link4 to download PDF
    await pdf_link4.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link4.click();
    await browser.pause(3000);

    // Close Accordions - 同意 Step
    // 注意事項 accordion
    await $(".//a[contains(., '" + test_data.testData.acc1 + "')]").click();
    await browser.pause(2000);

    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    await acc2.scrollIntoView();
    await acc2.click();
    await browser.pause(2000);

    // 保証会社に対する個人情報の取扱いに関する同意条項 accordion

    await acc3.scrollIntoView();
    await acc3.click();
    await browser.pause(2000);

    // 契約規定・保証委託約款 accordion
    await acc4.scrollIntoView();
    await acc4.click();
    await browser.pause(2000);

    // お手続きマイページ利用規約 accordion
    await acc5.scrollIntoView;
    await acc5.click();

    // Screenshot - 同意 Step - Close Accordions
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Show downloads tab
    await browser.switchWindow(test_data.testData.downloads_url);
    await browser.pause(10000);

    // Screenshot downloads
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(10000);

    // Open PDF1
    for (var i = 0; i < 4; i++) {
      await browser.keys(["Tab"]);
    }
    await browser.keys(["Enter"]);
    await browser.pause(5000);

    // Open PDF2
    await parent.Open_PDF();

    // Open PDF3
    await parent.Open_PDF();

    // Open PDF4
    await parent.Open_PDF();

    // Switch to PDF1 window
    await browser.switchWindow(test_data.testData.pdf_window01);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF1
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 5.5 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(1000);

    // Switch to PDF2 window
    await browser.switchWindow(test_data.testData.pdf_window02);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF2
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 3.8 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(1000);

    // Switch to PDF3 window
    await browser.switchWindow(test_data.testData.pdf_window03);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF3
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 1.9 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-6"
    );
    await browser.pause(1000);

    // Switch to PDF4 window
    await browser.switchWindow(test_data.testData.pdf_window04);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF4
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 1.9 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-7"
    );
    await browser.pause(1000);

    // Switch back to loan window
    await browser.closeWindow();
    await browser.switchWindow(test_data.testData.httpurl03);
  });
}
