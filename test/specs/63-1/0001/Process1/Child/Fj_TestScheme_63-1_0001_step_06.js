const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-1");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_06: Contract provisions and consent clauses corresponding to the product are indicated", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Go to Loan 63 application form
    await parent.Open_Application_Form();
    const getAppHeader = await browser.getTitle();
    await browser.pause(5000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Open Accordions-1
    // 注意事項 accordion
    const acc1 = await $(
      ".//a[contains(., '" + test_data.testData.accordion1 + "')]"
    );
    await acc1.scrollIntoView();
    await acc1.click();
    await browser.pause(1000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Close latest accordion
    await acc1.scrollIntoView();
    await acc1.click();

    // Open Accordions-2
    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    const acc2 = await $(
      ".//a[contains(., '" + test_data.testData.accordion2 + "')]"
    );
    await acc2.scrollIntoView();
    await acc2.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Get PDF 1 selector
    const pdf_link1 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf1_step_06 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click links to download PDF1
    await pdf_link1.scrollIntoView({
      block: "center",
    });
    await browser.pause(1000);
    await pdf_link1.click();
    await browser.pause(2000);

    // Show downloads tab PDF1
    await browser.newWindow(test_data.testData.httpurl02);
    await browser.url(test_data.testData.downloads_url);
    await browser.refresh();
    await browser.pause(2000);

    // Screenshot downloads PDF1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );

    // Open PDF1
    await parent.Open_PDF();

    // Switch to PDF1 window
    await browser.switchWindow(test_data.testData.pdf02);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF1
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 2 + "px";
    });
    await browser.pause(1000);

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(1000);

    // Close window
    await browser.closeWindow();

    // Go to App Form
    await browser.switchWindow(getAppHeader);
    await browser.pause(1000);

    // Close latest accordion
    await acc2.scrollIntoView();
    await acc2.click();

    // Open Accordions-3
    // 保証会社に対する個人情報の取扱いに関する同意条項 accordion
    const acc3 = await $(
      ".//a[contains(., '" + test_data.testData.accordion3 + "')]"
    );
    await acc3.scrollIntoView();
    await acc3.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-6"
    );

    // Get PDF 2 selector
    const pdf_link2 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf2_step_06 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click links to download PDF
    await pdf_link2.scrollIntoView({
      block: "center",
    });
    await browser.pause(1000);
    await pdf_link2.click();
    await browser.pause(1000);

    // Show downloads tab PDF2
    await browser.switchWindow("Downloads");
    await browser.refresh();
    await browser.pause(2000);

    // Screenshot downloads PDF2
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-7"
    );

    // Open PDF2
    await parent.Open_PDF();

    // Switch to PDF2 window
    await browser.switchWindow(test_data.testData.pdf03);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF2
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 2 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-8"
    );
    await browser.pause(1000);

    // Close window
    await browser.closeWindow();

    // Switch to application form
    await browser.switchWindow(getAppHeader);

    // Close latest accordion
    await acc3.scrollIntoView();
    await acc3.click();

    // Open Accordion-4
    // 契約規定 accordion
    const acc4 = await $(
      ".//a[contains(., '" + test_data.testData.accordion4 + "')]"
    );
    await acc4.scrollIntoView();
    await acc4.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-9"
    );
    await browser.pause(2000);

    // Get PDF 3 selector
    const pdf_link3 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf3_step_06 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click links to download PDF
    await pdf_link3.scrollIntoView({
      block: "center",
    });
    await browser.pause(1000);
    await pdf_link3.click();
    await browser.pause(1000);

    // Show downloads tab PDF3
    await browser.switchWindow("Downloads");
    await browser.refresh();
    await browser.pause(1000);

    // Screenshot downloads PDF3
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-10"
    );

    // Open PDF3
    await parent.Open_PDF();

    // Switch to PDF3 window
    await browser.switchWindow(test_data.testData.pdf04);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF3
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 4 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-11"
    );
    await browser.pause(1000);

    // Close window
    await browser.closeWindow();

    // Switch to application form
    await browser.switchWindow(getAppHeader);

    // Close latest accordion
    await acc4.scrollIntoView();
    await acc4.click();

    // Open Accordion-5
    // お手続きマイページ利用規約 accordion
    const acc5 = await $(
      ".//a[contains(., '" + test_data.testData.accordion5 + "')]"
    );
    await acc5.scrollIntoView();
    await acc5.click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-12"
    );
    await browser.pause(2000);

    // Get PDF 4 selector
    const pdf_link4 = await $(
      ".//dl[@class[contains(., '" + test_data.testData.pdf4_step_06 + "')]]"
    ).$(".//a[contains(.,'" + test_data.testData.pdf_select + "')]");

    // Click links to download PDF
    await pdf_link4.scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await pdf_link4.click();
    await browser.pause(3000);

    // Show downloads tab PDF4
    await browser.switchWindow("Downloads");
    await browser.refresh();
    await browser.pause(2000);

    // Screenshot downloads PDF4
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-13"
    );
    await browser.pause(2000);

    // Open PDF4
    await parent.Open_PDF();

    // Switch to PDF4 window
    await browser.switchWindow(test_data.testData.pdf05);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot PDF4
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 5.5 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-14"
    );
    await browser.pause(1000);

    // Close window
    await browser.closeWindow();
    await browser.switchWindow("Downloads");
    await browser.closeWindow();

    // Switch to application form
    await browser.switchWindow(getAppHeader);
    await browser.pause(3000);
  });
}
