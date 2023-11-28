const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");

export default async function suite() {
  it("Fj_TestScheme_20_0001_step_06: 契約規定・同意条項Contract provisions and consent clauses corresponding to the product are indicated", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // Scroll to the top
    await $(".//body").scrollIntoView();
    await browser.pause(1000);

    // Open all sections
    await $("//a[contains(text(),'" + test_data.testData.acc1 + "')]").click();
    await browser.pause(250);
    await $("//a[contains(text(),'" + test_data.testData.acc2 + "')]").click();
    await browser.pause(250);
    await $("//a[contains(text(),'" + test_data.testData.acc3 + "')]").click();
    await browser.pause(250);
    await $("//a[contains(text(),'" + test_data.testData.acc4 + "')]").click();
    await browser.pause(250);
    await $("//a[contains(.,'" + test_data.testData.acc5 + "')]").click();
    await browser.pause(250);

    // Screenshot - 同意 page (open accordion)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Get PDF selector
    const pdf_link = await $(
      "//a[contains(.,'" + test_data.testData.download + "')]"
    );

    // Click links to download PDF
    await pdf_link.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link.click();
    await browser.pause(5000);

    // Show downloads tab
    await browser.url(test_data.testData.downloads_url);
    await browser.pause(10000);

    // Screenshot downloads
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Open PDF
    for (var i = 0; i < 4; i++) {
      await browser.keys(["Tab"]);
    }
    await browser.keys(["Enter"]);
    await browser.pause(10000);

    // Switch to PDF window
    await browser.switchWindow(test_data.testData.pdf_name);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 1.9 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
