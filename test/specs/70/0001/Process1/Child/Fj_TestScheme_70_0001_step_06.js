const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-1");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_06: 契約規定・同意条項Contract provisions and consent clauses corresponding to the product are indicated", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    if (
      (await browser.getUrl) !=
      test_data.testData.httpurl02 + test_data.testData.input_key
    ) {
      // Open applciation form
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
    // 契約規定 accordion
    const acc3 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_3 + "')]"
    );
    await acc3.scrollIntoView();
    await acc3.click();
    await browser.pause(2000);
    // お手続きマイページ利用規約 accordion
    const acc4 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_4 + "')]"
    );
    await acc4.scrollIntoView();
    await acc4.click();
    await browser.pause(2000);

    // Screenshot - 同意 Step - Open Accordions
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
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

    // Open PDF (ContractTerms.pdf)
    const contract_terms = await $(
      ".//dl[@class='c_acc js_acc agree_ContractTerms']"
    ).$(
      ".//a[contains(., '" + test_data.testData.pdf_file_download_link + "')]"
    );
    await contract_terms.scrollIntoView();
    await contract_terms.click();

    // Open PDF (TermsOfUsage_MyPage.pdf)
    const usage_terms = await $(
      ".//dl[@class='c_acc js_acc agree_TermsOfUsage_MyPage']"
    ).$(
      ".//a[contains(., '" + test_data.testData.pdf_file_download_link + "')]"
    );
    await usage_terms.scrollIntoView();
    await usage_terms.click();

    // Show downloads tab
    await browser.url(test_data.testData.downloads_url);
    await browser.pause(10000);

    // Screenshot - downloads
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Open application form
    await parent.Open_ApplicationForm();

    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(10000);

    const cookie = await $(".//button[@id='onetrust-accept-btn-handler']");
    await cookie.waitForClickable({
      timeout: 10000,
    });

    // Screenshot - back
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    await cookie.click();

    await browser.pause(5000);
  });
}
