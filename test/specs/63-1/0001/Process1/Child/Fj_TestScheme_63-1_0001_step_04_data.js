const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_04_data: Create CLI record manually (Data Linkage)", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Login to org as admin for creating CLI record
    await parent.Login_as_Admin();

    // Go to 顧客元帳照会 CLI list record page
    await browser.url(
      user_info.userInformation.var_sf_sfurl + test_data.testData.httpurl03
    );
    await browser.pause(5000);

    // Click New
    const create_new_cli = await $(
      ".//li[@data-target-selection-name='" +
        test_data.testData.new_cli_btn +
        "']"
    );
    await create_new_cli.waitForClickable({ timeout: 10000 });
    await create_new_cli.click();
    await browser.pause(5000);

    // Call util.modal_fullpage function
    await util.modal_fullpage();

    // Dialog box
    const dialog = await $("//div[@data-aura-class='oneRecordActionWrapper']");

    // Set values for CLI record
    // Set 顧客番号
    // ★ 新環境適用' New Env Implementation
    const customerNumber = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.customer_number_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.customer_number_lbl + "')]"
      );
    await customerNumber.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const customerNumber_id = await customerNumber.getAttribute("for");
    await $(".//input[@id='" + customerNumber_id + "']").setValue(
      test_data.testData.customer_number
    );

    // ★ 新環境適用' New Env Implementation
    // Set カナ氏名
    const kanaName = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.kana_name_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.kana_name_lbl + "')]");
    await kanaName.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanaName_id = await kanaName.getAttribute("for");
    await $(".//input[@id='" + kanaName_id + "']").setValue(
      test_data.testData.kana_name
    );

    // Set 漢字氏名
    // ★ 新環境適用' New Env Implementation
    const kanjiName = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.kanji_name_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.kanji_name_lbl + "')]");
    await kanjiName.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanjiName_id = await kanjiName.getAttribute("for");
    await $(".//input[@id='" + kanjiName_id + "']").setValue(
      test_data.testData.kanji_name
    );

    // ★ 新環境適用' New Env Implementation
    // Set 性別
    const genderLabel = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.gender_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.gender_lbl + "')]");
    await genderLabel.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const genderLabel_id = await genderLabel.getAttribute("for");
    await $(".//input[@id='" + genderLabel_id + "']").setValue(
      test_data.testData.gender
    );

    // Set カナ住所１
    // ★ 新環境適用' New Env Implementation
    const kanaAdd1 = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.kana_add1_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.kana_add1_lbl + "')]");
    await kanaAdd1.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanaAdd1_id = await kanaAdd1.getAttribute("for");
    await $(".//input[@id='" + kanaAdd1_id + "']").setValue(
      test_data.testData.kana_address_1
    );

    // ★ 新環境適用' New Env Implementation
    // Set 住所コード
    const addressCode = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.address_code_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.address_code_lbl + "')]");
    await addressCode.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const addressCode_id = await addressCode.getAttribute("for");
    await $(".//input[@id='" + addressCode_id + "']").setValue(
      test_data.testData.address_code
    );

    // ★ 新環境適用' New Env Implementation
    // Set 漢字住所（郵便番号）
    const postalCode = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.postal_code_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.postal_code_lbl + "')]");
    await postalCode.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const postalCode_id = await postalCode.getAttribute("for");
    await $(".//input[@id='" + postalCode_id + "']").setValue(
      test_data.testData.kanji_address_zipcode
    );

    // ★ 新環境適用' New Env Implementation
    // Set 漢字住所（住所１)
    const kanjiAdd1 = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.kanji_add1_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.kanji_add1_lbl + "')]");
    await kanjiAdd1.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanjiAdd1_id = await kanjiAdd1.getAttribute("for");
    await $(".//input[@id='" + kanjiAdd1_id + "']").setValue(
      test_data.testData.kanji_address_1
    );

    // ★ 新環境適用' New Env Implementation
    // Set 第一電話番号
    const primaryTelNum = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.primary_tel_num_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.primary_tel_num_lbl + "')]"
      );
    await primaryTelNum.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const primaryTelNum_id = await primaryTelNum.getAttribute("for");
    await $(".//input[@id='" + primaryTelNum_id + "']").setValue(
      test_data.testData.primary_telephone_number
    );

    // ★ 新環境適用' New Env Implementation
    // Set 第二電話番号
    const secondTelNum = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.secondary_tel_num_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.secondary_tel_num_lbl +
          "')]"
      );
    await secondTelNum.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const secondTelNum_id = await secondTelNum.getAttribute("for");
    await $(".//input[@id='" + secondTelNum_id + "']").setValue(
      test_data.testData.second_telephone_number
    );

    // ★ 新環境適用' New Env Implementation
    // Set 第三電話番号
    const thirdTelNum = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.third_tel_num_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.third_tel_num_lbl + "')]"
      );
    await thirdTelNum.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const thirdTelNum_id = await thirdTelNum.getAttribute("for");
    await $(".//input[@id='" + thirdTelNum_id + "']").setValue(
      test_data.testData.third_telephone_number
    );

    // ★ 新環境適用' New Env Implementation
    // Set 年収（万円）
    const annualIncome = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.annual_income_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.annual_income_lbl + "')]"
      );
    await annualIncome.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const annualIncome_id = await annualIncome.getAttribute("for");
    await $(".//input[@id='" + annualIncome_id + "']").setValue(
      test_data.testData.annual_income
    );

    // ★ 新環境適用' New Env Implementation
    // Set カナ勤務先名・事業所名
    const kanaWorkplace = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.kana_name_workplace_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.kana_name_workplace_lbl +
          "')]"
      );
    await kanaWorkplace.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanaWorkplace_id = await kanaWorkplace.getAttribute("for");
    await $(".//input[@id='" + kanaWorkplace_id + "']").setValue(
      test_data.testData.kana_name_of_workplace_and_office
    );

    // ★ 新環境適用' New Env Implementation
    // Set 勤務先名・事業所名
    const nameWorkplace = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.name_workplace_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.name_workplace_lbl + "')]"
      );
    await nameWorkplace.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const nameWorkplace_id = await nameWorkplace.getAttribute("for");
    await $(".//input[@id='" + nameWorkplace_id + "']").setValue(
      test_data.testData.name_of_workplace_and_office
    );

    // ★ 新環境適用' New Env Implementation
    // Set 現都道府県コード
    const prefecturalCode = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.prefectural_code_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.prefectural_code_lbl +
          "')]"
      );
    await prefecturalCode.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const prefecturalCode_id = await prefecturalCode.getAttribute("for");
    await $(".//input[@id='" + prefecturalCode_id + "']").setValue(
      test_data.testData.prefectural_code
    );

    // ★ 新環境適用' New Env Implementation
    // Set 入力キー
    const inputKey = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.input_key_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.input_key_lbl + "')]");
    await inputKey.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const inputKey_id = await inputKey.getAttribute("for");
    await $(".//input[@id='" + inputKey_id + "']").setValue(
      test_data.testData.input_key
    );

    // Set 入力_カナ氏名
    // ★ 新環境適用' New Env Implementation
    const inputKananame = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.input_kananame_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.input_kananame_lbl + "')]"
      );
    await inputKananame.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const inputKananame_id = await inputKananame.getAttribute("for");
    await $(".//input[@id='" + inputKananame_id + "']").setValue(
      test_data.testData.input_kana_name
    );

    // Set 入力_生年月日
    // ★ 新環境適用' New Env Implementation
    const inputBirthday = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.input_birthdate_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.input_birthdate_lbl + "')]"
      );
    await inputBirthday.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const inputBirthday_id = await inputBirthday.getAttribute("for");
    await $(".//input[@id='" + inputBirthday_id + "']").setValue(
      test_data.testData.input_birth_date
    );

    // Set 入力_支店番号
    // ★ 新環境適用' New Env Implementation
    const inputBranchNum = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.input_branch_number_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.input_branch_number_lbl +
          "')]"
      );
    await inputBranchNum.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const inputBranchNum_id = await inputBranchNum.getAttribute("for");
    await $(".//input[@id='" + inputBranchNum_id + "']").setValue(
      test_data.testData.input_branch_number
    );

    // Set 入力_預金科目
    // ★ 新環境適用' New Env Implementation
    const inputAcctType = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.input_acct_type_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.input_acct_type_lbl + "')]"
      );
    await inputAcctType.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const inputAcctType_id = await inputAcctType.getAttribute("for");
    await $(".//input[@id='" + inputAcctType_id + "']").setValue(
      test_data.testData.input_deposit_item
    );

    // Set 入力_口座番号
    // ★ 新環境適用' New Env Implementation
    const inputAcctNum = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.input_acct_num_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.input_acct_num_lbl + "')]"
      );
    await inputAcctNum.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const inputAcctNum_id = await inputAcctNum.getAttribute("for");
    await $(".//input[@id='" + inputAcctNum_id + "']").setValue(
      test_data.testData.entry_account_number
    );

    // Deselect the hover/selected fields
    await util.Deselect_fields(1);

    // Screenshot - During Data
    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_during = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_during,
          tabheader_during,
          highlights_during,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save record
    const cli_save_record_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await cli_save_record_btn.waitForClickable({ timeout: 10000 });
    await cli_save_record_btn.click();
    await browser.pause(10000);
    await browser.refresh();
    await browser.pause(5000);

    // Screenshot - After Data
    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_after,
          tabheader_after,
          highlights_after,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
