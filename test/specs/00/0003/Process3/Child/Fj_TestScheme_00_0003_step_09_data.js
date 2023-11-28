const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_09_data: Create CDD record manually (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "9";

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    // Screenshot - Before Data
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_before,
          tabheader_before,
          highlights_before,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

    // Click 同一人候補 arrow
    const cdd_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.cdd_create + "']"
    );
    await cdd_arrow.waitForClickable({ timeout: 10000 });
    await cdd_arrow.click();
    await browser.pause(5000);

    // 新規 -- click New
    const create_new_cdd_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.cdd_create +
        "']"
    );
    await create_new_cdd_btn.waitForClickable({ timeout: 10000 });
    await create_new_cdd_btn.click();
    await browser.pause(5000);

    // Call util.modal_fullpage function
    await util.modal_fullpage();

    // Set values for CDD record
    // Set values for test_data.testData.isTrue, record
    // Set 生年月日
    // ★ 新環境適用' New Env Implementation
    const cdd_birth_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_birth_date +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_birth_date + "')]");
    await cdd_birth_date.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_birth_date_id = await cdd_birth_date.getAttribute("for");
    await $(".//input[@id='" + cdd_birth_date_id + "']").setValue(
      test_data.testData.cdd_birth_date_value
    );
    await browser.pause(1000);

    // Set 漢字氏名
    // ★ 新環境適用' New Env Implementation
    const cdd_kanji_name = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_kanji_name +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_kanji_name + "')]");
    await cdd_kanji_name.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_kanji_name_id = await cdd_kanji_name.getAttribute("for");
    await $(".//input[@id='" + cdd_kanji_name_id + "']").setValue(
      test_data.testData.cdd_kanji_name_value
    );
    await browser.pause(1000);

    // Set カナ氏名
    // ★ 新環境適用' New Env Implementation
    const cdd_kana_name = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kana_name_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.kana_name_lbl + "')]");
    await cdd_kana_name.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_kana_name_id = await cdd_kana_name.getAttribute("for");
    await $(".//input[@id='" + cdd_kana_name_id + "']").setValue(
      test_data.testData.input_kana_name
    );
    await browser.pause(1000);

    // Set 郵便番号
    // ★ 新環境適用' New Env Implementation
    const cdd_zip_code = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_zip_code +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_zip_code + "')]");
    await cdd_zip_code.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_zip_code_id = await cdd_zip_code.getAttribute("for");
    await $(".//input[@id='" + cdd_zip_code_id + "']").setValue(
      test_data.testData.kanji_address_zipcode
    );
    await browser.pause(1000);

    // Set 住所１
    // ★ 新環境適用' New Env Implementation
    const cdd_kanji_add1 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_kanji_add1 +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_kanji_add1 + "')]");
    await cdd_kanji_add1.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_kanji_add1_id = await cdd_kanji_add1.getAttribute("for");
    await $(".//input[@id='" + cdd_kanji_add1_id + "']").setValue(
      test_data.testData.cdd_kanji_address1_value
    );
    await browser.pause(1000);

    // Set 顧客番号
    // ★ 新環境適用' New Env Implementation
    const cdd_customer_number = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_customer_number +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_customer_number + "')]"
    );
    await cdd_customer_number.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_customer_number_id = await cdd_customer_number.getAttribute(
      "for"
    );
    await $(".//input[@id='" + cdd_customer_number_id + "']").setValue(
      test_data.testData.cdd_customer_number_value
    );
    await browser.pause(1000);

    // Set 第一電話番号
    // ★ 新環境適用' New Env Implementation
    const cdd_phone_number1 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_phone_number1 +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_phone_number1 + "')]");
    await cdd_phone_number1.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_phone_number1_id = await cdd_phone_number1.getAttribute("for");
    await $(".//input[@id='" + cdd_phone_number1_id + "']").setValue(
      test_data.testData.primary_telephone_number
    );
    await browser.pause(1000);

    // Set 住所コード＿都道府県コード
    // ★ 新環境適用' New Env Implementation
    const cdd_prefectural_code = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_prefectural_code +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_prefectural_code + "')]"
    );
    await cdd_prefectural_code.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_prefectural_code_id = await cdd_prefectural_code.getAttribute(
      "for"
    );
    await $(".//input[@id='" + cdd_prefectural_code_id + "']").setValue(
      test_data.testData.prefectural_code
    );
    await browser.pause(1000);

    // Set 住所コード＿市区町村コード
    // ★ 新環境適用' New Env Implementation
    const cdd_city_code = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_city_code +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_city_code + "')]");
    await cdd_city_code.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_city_code_id = await cdd_city_code.getAttribute("for");
    await $(".//input[@id='" + cdd_city_code_id + "']").setValue(
      test_data.testData.cdd_city_code_value
    );
    await browser.pause(1000);

    // Set 住所コード＿大字通称コード
    // ★ 新環境適用' New Env Implementation
    const cdd_oaza_common_name_code = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_oaza_common_name_code +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.cdd_oaza_common_name_code +
        "')]"
    );
    await cdd_oaza_common_name_code.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_oaza_common_name_code_id =
      await cdd_oaza_common_name_code.getAttribute("for");
    await $(".//input[@id='" + cdd_oaza_common_name_code_id + "']").setValue(
      test_data.testData.cdd_oaza_common_name_code_value
    );
    await browser.pause(1000);

    // Set 住所コード＿字丁目コード
    // ★ 新環境適用' New Env Implementation
    const cdd_character_code = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_character_code +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_character_code + "')]"
    );
    await cdd_character_code.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_character_code_id = await cdd_character_code.getAttribute("for");
    await $(".//input[@id='" + cdd_character_code_id + "']").setValue(
      test_data.testData.cdd_character_code_value
    );
    await browser.pause(1000);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(1);

    // Screenshot - During Data
    const headerBar_during = await $(".//header[@id='oneHeader']");
    const tabheader_during = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_during = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
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
    const cdd_save_record_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await cdd_save_record_btn.waitForClickable({ timeout: 10000 });
    await cdd_save_record_btn.click();
    await browser.pause(10000);
    await browser.refresh();
    await browser.pause(10000);

    // Set values for fake record
    // Click 同一人候補 arrow
    await cdd_arrow.waitForClickable({ timeout: 20000 });
    await cdd_arrow.click();
    await browser.pause(5000);

    // 新規 -- click New
    await create_new_cdd_btn.waitForClickable({ timeout: 20000 });
    await create_new_cdd_btn.click();
    await browser.pause(5000);

    // Call util.modal_fullpage function
    await util.modal_fullpage();

    // Set values for CDD record
    // Set 生年月日
    // ★ 新環境適用' New Env Implementation
    const cdd_birth_date2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_birth_date +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_birth_date + "')]");
    await cdd_birth_date2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_birth_date_id2 = await cdd_birth_date2.getAttribute("for");
    await $(".//input[@id='" + cdd_birth_date_id2 + "']").setValue(
      test_data.testData.cdd_fake_birth_date_value
    );

    // Set 漢字氏名
    // ★ 新環境適用' New Env Implementation
    const cdd_kanji_name2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_kanji_name +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_kanji_name + "')]");
    await cdd_kanji_name2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_kanji_name_id2 = await cdd_kanji_name2.getAttribute("for");
    await $(".//input[@id='" + cdd_kanji_name_id2 + "']").setValue(
      test_data.testData.cdd_fake_kanji_name_value
    );

    // Set カナ氏名
    // ★ 新環境適用' New Env Implementation
    const cdd_kana_name2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kana_name_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.kana_name_lbl + "')]");
    await cdd_kana_name2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_kana_name_id2 = await cdd_kana_name2.getAttribute("for");
    await $(".//input[@id='" + cdd_kana_name_id2 + "']").setValue(
      test_data.testData.input_kana_name
    );

    // Set 郵便番号
    // ★ 新環境適用' New Env Implementation
    const cdd_zip_code2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_zip_code +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_zip_code + "')]");
    await cdd_zip_code2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_zip_code_id2 = await cdd_zip_code2.getAttribute("for");
    await $(".//input[@id='" + cdd_zip_code_id2 + "']").setValue(
      test_data.testData.cdd_fake_postal_code_value
    );

    // Set 住所１
    // ★ 新環境適用' New Env Implementation
    const cdd_kanji_add1_2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_kanji_add1 +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_kanji_add1 + "')]");
    await cdd_kanji_add1_2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_kanji_add1_id_2 = await cdd_kanji_add1_2.getAttribute("for");
    await $(".//input[@id='" + cdd_kanji_add1_id_2 + "']").setValue(
      test_data.testData.cdd_fake_kanji_address1_value
    );

    // Set 顧客番号
    // ★ 新環境適用' New Env Implementation
    const customer_number = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.customer_number +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_customer_number + "')]"
    );
    await customer_number.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const customer_number_id = await customer_number.getAttribute("for");
    await $(".//input[@id='" + customer_number_id + "']").setValue(
      test_data.testData.cdd_fake_customer_number_value
    );

    // Set 第一電話番号
    // ★ 新環境適用' New Env Implementation
    const cdd_phone_number1_2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_phone_number1 +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_phone_number1 + "')]");
    await cdd_phone_number1_2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_phone_number1_id_2 = await cdd_phone_number1_2.getAttribute(
      "for"
    );
    await $(".//input[@id='" + cdd_phone_number1_id_2 + "']").setValue(
      test_data.testData.primary_telephone_number
    );

    // Set 第二電話番号
    // ★ 新環境適用' New Env Implementation
    const cdd_phone_number2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_phone_number2 +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_phone_number2 + "')]");
    await cdd_phone_number2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_phone_number2_id = await cdd_phone_number2.getAttribute("for");
    await $(".//input[@id='" + cdd_phone_number2_id + "']").setValue(
      test_data.testData.second_telephone_number
    );

    // Set 第三電話番号
    // ★ 新環境適用' New Env Implementation
    const cdd_phone_number3 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_phone_number3 +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_phone_number3 + "')]");
    await cdd_phone_number3.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_phone_number3_id = await cdd_phone_number3.getAttribute("for");
    await $(".//input[@id='" + cdd_phone_number3_id + "']").setValue(
      test_data.testData.third_telephone_number
    );

    // Set 住所コード＿都道府県コード
    // ★ 新環境適用' New Env Implementation
    const cdd_prefectural_code2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_prefectural_code +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_prefectural_code + "')]"
    );
    await cdd_prefectural_code2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_prefectural_code_id2 = await cdd_prefectural_code2.getAttribute(
      "for"
    );
    await $(".//input[@id='" + cdd_prefectural_code_id2 + "']").setValue(
      test_data.testData.prefectural_code
    );

    // Set 住所コード＿市区町村コード
    // ★ 新環境適用' New Env Implementation
    const cdd_city_code2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_city_code +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.cdd_city_code + "')]");
    await cdd_city_code2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_city_code_id2 = await cdd_city_code2.getAttribute("for");
    await $(".//input[@id='" + cdd_city_code_id2 + "']").setValue(
      test_data.testData.cdd_city_code_value
    );

    // Set 住所コード＿大字通称コード
    // ★ 新環境適用' New Env Implementation
    const cdd_oaza_common_name_code2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_oaza_common_name_code +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.cdd_oaza_common_name_code +
        "')]"
    );
    await cdd_oaza_common_name_code2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_oaza_common_name_code_id2 =
      await cdd_oaza_common_name_code2.getAttribute("for");
    await $(".//input[@id='" + cdd_oaza_common_name_code_id2 + "']").setValue(
      test_data.testData.cdd_fake_oaza_common_name_code_value
    );

    // Set 住所コード＿字丁目コード
    // ★ 新環境適用' New Env Implementation
    const cdd_character_code2 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_character_code +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_character_code + "')]"
    );
    await cdd_character_code2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cdd_character_code_id2 = await cdd_character_code2.getAttribute(
      "for"
    );
    await $(".//input[@id='" + cdd_character_code_id2 + "']").setValue(
      test_data.testData.cdd_character_code_value
    );

    // Deselect the hover/selected fields
    await util.Deselect_fields(1);

    // Screenshot - During Data
    const headerBar_during2 = await $(".//header[@id='oneHeader']");
    const tabheader_during2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_during2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [
          headerBar_during2,
          tabheader_during2,
          highlights_during2,
        ],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save record
    await cdd_save_record_btn.waitForClickable({ timeout: 10000 });
    await cdd_save_record_btn.click();
    await browser.pause(10000);
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot- After Data
    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_after = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-4" +
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

    await parent.Get_CDD_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.cdd_array = test_data.testData.cdd_array.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    let ssno = 4; // ★ 新環境適用' New Env Implementation
    // Loop through the array to determine CDD records
    for (var cdd = 0; cdd < test_data.testData.cdd_array.length; cdd++) {
      var record = test_data.testData.cdd_array[cdd];

      // Go to CDD record
      // ★ 新環境適用' New Env Implementation
      await parent.Go_to_CDD(record.Id);

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation

      // Screenshot - After Data - New record
      const headerBar_new_after = await $(".//header[@id='oneHeader']");
      const tabheader__new_after = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_new_after = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          ssno +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [
            headerBar_new_after,
            tabheader__new_after,
            highlights_new_after,
          ],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
