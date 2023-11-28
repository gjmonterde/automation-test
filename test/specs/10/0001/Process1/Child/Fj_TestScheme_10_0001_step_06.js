const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default async function suite() {
  it("Fj_TestScheme_10_0001_step_06: 契約規定・同意条項 Contract provisions and consent clauses corresponding to the product are indicated", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Open Accordions - 同意 Step
    // 注意事項 accordion
    await $(
      ".//a[contains(., '" + test_data.testData.accordion1 + "')]"
    ).click();
    await browser.pause(2000);

    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    const acc2 = await $(
      ".//a[contains(., '" + test_data.testData.accordion2 + "')]"
    );
    await acc2.scrollIntoView();
    await acc2.click();
    await browser.pause(2000);

    // 保証会社に対する個人情報の取扱いに関する同意条項 accordion
    const acc3 = await $(
      ".//a[contains(., '" + test_data.testData.accordion3 + "')]"
    );
    await acc3.scrollIntoView();
    await acc3.click();
    await browser.pause(2000);

    // 契約規定・保証委託約款 accordion
    const acc4 = await $(
      ".//a[contains(., '" + test_data.testData.accordion4 + "')]"
    );
    await acc4.scrollIntoView();
    await acc4.click();
    await browser.pause(2000);

    // お手続きマイページ利用規約 accordion
    const acc5 = await $(
      ".//a[contains(., '" + test_data.testData.accordion5 + "')]"
    );
    await acc5.scrollIntoView;
    await acc5.click();

    // Screenshot - 同意 Step - Open Accordions
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Open PDF (ContractTerms.pdf)
    const contract_terms = await $(
      ".//dl[@class='" + test_data.testData.pdf1 + "']"
    ).$(".//a[contains(., '" + test_data.testData.pdf_select + "')]");
    await contract_terms.scrollIntoView();
    const pdf_link = await contract_terms.getAttribute("href");
    await browser.newWindow(pdf_link);
    await browser.switchWindow(pdf_link);
    await browser.pause(3000);

    // Screenshot - ContractTerms.pdf
    // Note: Height is an estimate since actual height of document can't be calculated (height depends on the window size of the one running the test)
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 3.5 + "px";
    });
    await browser.pause(5000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Switch back to loan 10 window
    await browser.closeWindow();
    await browser.switchWindow(test_data.testData.httpurl03);
  });
}
