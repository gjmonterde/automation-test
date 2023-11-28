const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");

export default async function suite() {
  it("Fj_TestScheme_60_0001_step_06: 契約規定・同意条項 Contract provisions and consent clauses corresponding to the product are indicated", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    await browser.execute("document.body.style.zoom='80%'");

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    await browser.execute("document.body.style.zoom='100%'");

    // Open Accordions - 同意 Step
    // 注意事項 accordion
    const acc1 = await $(
      ".//a[contains(., '" + test_data.testData.acc2 + "')]"
    );
    await acc1.scrollIntoView({
      block: "center",
    });
    await acc1.click();
    await browser.pause(2000);

    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    const acc2 = await $(
      ".//a[contains(., '" + test_data.testData.acc3 + "')]"
    );
    await acc2.scrollIntoView({
      block: "center",
    });
    await acc2.click();
    await browser.pause(2000);

    // 契約規定 accordion
    const acc3 = await $(
      ".//a[contains(., '" + test_data.testData.acc4 + "')]"
    );
    await acc3.scrollIntoView({
      block: "center",
    });
    await acc3.click();
    await browser.pause(2000);

    // お手続きマイページ利用規約 accordion
    const acc4 = await $(
      ".//a[contains(., '" + test_data.testData.acc1 + "')]"
    );
    await acc4.scrollIntoView({
      block: "center",
    });
    await acc4.click();
    await browser.pause(2000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Get PDF 1 selector
    const pdf_link1 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf01 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click links to download PDF
    await pdf_link1.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link1.click();
    await browser.pause(3000);

    // Get PDF 2 selector
    const pdf_link2 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf02 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click links to download PDF
    await pdf_link2.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link2.click();
    await browser.pause(3000);

    // Get PDF 3 selector
    const pdf_link3 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf03 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click links to download PDF
    await pdf_link3.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link3.click();
    await browser.pause(3000);

    // Show downloads tab
    await browser.url(test_data.testData.downloads_url);
    await browser.pause(10000);

    // Screenshot downloads
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Open PDF1
    for (var i = 0; i < 4; i++) {
      await browser.keys(["Tab"]);
    }
    await browser.keys(["Enter"]);
    await browser.pause(5000);

    // Open PDF2
    await browser.switchWindow(test_data.testData.downloads_url);
    await browser.keys(["ArrowDown"]);
    await browser.keys(["Enter"]);
    await browser.pause(5000);

    // Open PDF3
    await browser.switchWindow(test_data.testData.downloads_url);
    await browser.keys(["ArrowDown"]);
    await browser.keys(["Enter"]);
    await browser.pause(5000);

    // Switch to PDF1 window
    await browser.switchWindow(test_data.testData.pdf_win01);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF1
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 5.5 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(1000);

    // Switch to PDF2 window
    await browser.switchWindow(test_data.testData.pdf_win02);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF2
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 3.6 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-6"
    );
    await browser.pause(1000);

    // Switch to PDF3 window
    await browser.switchWindow(test_data.testData.pdf_win03);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF3
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 1.9 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(1000);

    // Go to Loan 60 application page
    await browser.url(test_data.testData.httpurl01);
    await browser.pause(10000);

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(3000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-7"
    );
  });
}
