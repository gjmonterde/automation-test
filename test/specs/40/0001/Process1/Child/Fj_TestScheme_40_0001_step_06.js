const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0001-1");

export default async function suite() {
  it("Fj_TestScheme_40_0001_step_06: 契約規定・同意条項 Contract provisions and consent clauses corresponding to the product are indicated", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    if (
      (await browser.getUrl) !=
      test_data.testData.httpurl02 + test_data.testData.input_key
    ) {
      // Open application form
      await parent.Open_ApplicationForm();
    }

    // Open Accordions - 同意 Step
    // 注意事項 accordion
    const acc1 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_1 + "')]"
    );
    await acc1.scrollIntoView();
    await acc1.click();
    await browser.pause(2000);
    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    const acc2 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_2 + "')]"
    );
    await acc2.scrollIntoView();
    await acc2.click();
    await browser.pause(2000);
    // 保証会社に対する個人情報の取扱いに関する同意条項 accordion
    const acc3 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_3 + "')]"
    );
    await acc3.scrollIntoView();
    await acc3.click();
    await browser.pause(2000);
    // 契約規定・保証委託約款 accordion
    const acc4 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_4 + "')]"
    );
    await acc4.scrollIntoView();
    await acc4.click();
    await browser.pause(2000);
    // お手続きマイページ利用規約 accordion
    const acc5 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_5 + "')]"
    );
    await acc5.scrollIntoView;
    await acc5.click();

    // Screenshot - 同意 Step - Open Accordions
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Open PDF (PersonalInfoConsentClause_Bank.pdf)
    const info_bank = await $(
      ".//dl[@class='c_acc js_acc agree_PersonalInfoConsentClause_Gogin']"
    ).$(
      ".//a[contains(., '" + test_data.testData.pdf_file_download_link + "')]"
    );
    await info_bank.scrollIntoView();
    await info_bank.click();
    const pdf_link1 = await info_bank.getAttribute("href");
    await browser.newWindow(pdf_link1);
    await browser.switchWindow(pdf_link1);
    await browser.pause(3000);

    // Screenshot - PersonalInfoConsentClause_Bank.pdf
    // Note: Height is an estimate since actual height of document can't be calculated (height depends on the window size of the one running the test)
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 2.5 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Switch back to loan 40 window
    await browser.closeWindow();
    await browser.switchWindow(
      test_data.testData.httpurl02 + test_data.testData.input_key
    );

    // Open PDF (ContractTerms.pdf)
    const contract_terms = await $(
      ".//dl[@class='c_acc js_acc agree_ContractTerms']"
    ).$(
      ".//a[contains(., '" + test_data.testData.pdf_file_download_link + "')]"
    );
    await contract_terms.scrollIntoView();
    await contract_terms.click();
    const pdf_link2 = await contract_terms.getAttribute("href");
    await browser.newWindow(pdf_link2);
    await browser.switchWindow(pdf_link2);
    await browser.pause(3000);

    // Screenshot - ContractTerms.pdf
    // Note: Height is an estimate since actual height of document can't be calculated (height depends on the window size of the one running the test)
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 4.5 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Switch back to loan 40 window
    await browser.closeWindow();
    await browser.switchWindow(
      test_data.testData.httpurl02 + test_data.testData.input_key
    );

    // Open PDF (TermsOfUsage_MyPage.pdf)
    const usage_terms = await $(
      ".//dl[@class='c_acc js_acc agree_TermsOfUsage_MyPage']"
    ).$(
      ".//a[contains(., '" + test_data.testData.pdf_file_download_link + "')]"
    );
    await usage_terms.scrollIntoView();
    await usage_terms.click();
    const pdf_link3 = await usage_terms.getAttribute("href");
    await browser.newWindow(pdf_link3);
    await browser.switchWindow(pdf_link3);
    await browser.pause(3000);

    // Screenshot - TermsOfUsage_MyPage.pdf
    // Note: Height is an estimate since actual height of document can't be calculated (height depends on the window size of the one running the test)
    await $("embed").$(function () {
      this.style = "height:" + window.innerHeight * 5.5 + "px";
    });
    await browser.pause(1000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );

    // Switch back to loan 40 window
    await browser.closeWindow();
    await browser.switchWindow(
      test_data.testData.httpurl02 + test_data.testData.input_key
    );
  });
}
