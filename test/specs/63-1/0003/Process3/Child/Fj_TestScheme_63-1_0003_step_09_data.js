const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0003-3");
const util = require("../../../../../pageobjects/utility");
var ssno = 1;

export default function suite() {
  it("Fj_TestScheme_63-1_0003_step_09_data: Create CDD record manually (Data Linkage)", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to DDP record
    await parent.Open_SF_DDP_Record();

    // Screenshot - Before Data
    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_before = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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

    // ★ 新環境適用' New Env Implementation
    for (var i = 0; i < test_data.testData.two_records_of_cdd; i++) {
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
      // Set values for true record
      // Set 生年月日
      // ★ 新環境適用' New Env Implementation
      const cdd_BirthDate = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_birth_date_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" + test_data.testData.cdd_birth_date_lbl + "')]"
      );
      await cdd_BirthDate.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_BirthDate_id = await cdd_BirthDate.getAttribute("for");
      await $(".//input[@id='" + cdd_BirthDate_id + "']").setValue(
        eval("test_data.testData.cdd_birth_date_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 漢字氏名
      // ★ 新環境適用' New Env Implementation
      const cdd_kanjiName = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_kanji_name_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" + test_data.testData.cdd_kanji_name_lbl + "')]"
      );
      await cdd_kanjiName.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_kanjiName_id = await cdd_kanjiName.getAttribute("for");
      await $(".//input[@id='" + cdd_kanjiName_id + "']").setValue(
        eval("test_data.testData.cdd_kanji_name_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set カナ氏名
      // ★ 新環境適用' New Env Implementation
      const cdd_kanaName = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.kana_name_lbl +
          "']"
      ).$(".//label[contains(.,'" + test_data.testData.kana_name_lbl + "')]");
      await cdd_kanaName.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_kanaName_id = await cdd_kanaName.getAttribute("for");
      await $(".//input[@id='" + cdd_kanaName_id + "']").setValue(
        test_data.testData.input_kana_name
      );
      await browser.pause(1000);

      // Set 郵便番号
      // ★ 新環境適用' New Env Implementation
      const cdd_zipCode = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_zip_code +
          "']"
      ).$(".//label[contains(.,'" + test_data.testData.cdd_zip_code + "')]");
      await cdd_zipCode.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_zipCode_id = await cdd_zipCode.getAttribute("for");
      await $(".//input[@id='" + cdd_zipCode_id + "']").setValue(
        test_data.testData.kanji_address_zipcode
      );
      await browser.pause(1000);

      // Set 住所１
      // ★ 新環境適用' New Env Implementation
      const cdd_kanjiAdd1 = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_kanji_add1_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" + test_data.testData.cdd_kanji_add1_lbl + "')]"
      );
      await cdd_kanjiAdd1.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_kanjiAdd1_id = await cdd_kanjiAdd1.getAttribute("for");
      await $(".//input[@id='" + cdd_kanjiAdd1_id + "']").setValue(
        eval("test_data.testData.cdd_kanji_address1_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 顧客番号
      // ★ 新環境適用' New Env Implementation
      const cdd_customerName = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.customer_number_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" + test_data.testData.customer_number_lbl + "')]"
      );
      await cdd_customerName.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_customerName_id = await cdd_customerName.getAttribute("for");
      await $(".//input[@id='" + cdd_customerName_id + "']").setValue(
        eval("test_data.testData.cdd_customer_number_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 第一電話番号
      // ★ 新環境適用' New Env Implementation
      const cdd_phoneNum1 = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_phone_number1_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.cdd_phone_number1_lbl +
          "')]"
      );
      await cdd_phoneNum1.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_phoneNum1_id = await cdd_phoneNum1.getAttribute("for");
      await $(".//input[@id='" + cdd_phoneNum1_id + "']").setValue(
        eval("test_data.testData.cdd_primary_telephone_number_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 第二電話番号
      // ★ 新環境適用' New Env Implementation
      const secondPhoneNum = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_phone_number2_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.cdd_phone_number2_lbl +
          "')]"
      );
      await secondPhoneNum.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const secondPhoneNum_id = await secondPhoneNum.getAttribute("for");
      await $(".//input[@id='" + secondPhoneNum_id + "']").setValue(
        eval("test_data.testData.cdd_second_telephone_number_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 第三電話番号
      // ★ 新環境適用' New Env Implementation
      const thirdPhoneNum = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_phone_number3_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.cdd_phone_number3_lbl +
          "')]"
      );
      await thirdPhoneNum.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const thirdPhoneNum_id = await thirdPhoneNum.getAttribute("for");
      await $(".//input[@id='" + thirdPhoneNum_id + "']").setValue(
        eval("test_data.testData.cdd_third_telephone_number_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 住所コード＿都道府県コード
      // ★ 新環境適用' New Env Implementation
      const cdd_prefecturalCode = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_prefectural_code_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.cdd_prefectural_code_lbl +
          "')]"
      );
      await cdd_prefecturalCode.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_prefecturalCode_id = await cdd_prefecturalCode.getAttribute(
        "for"
      );
      await $(".//input[@id='" + cdd_prefecturalCode_id + "']").setValue(
        test_data.testData.prefectural_code
      );
      await browser.pause(1000);

      // Set 住所コード＿市区町村コード
      // ★ 新環境適用' New Env Implementation
      const cdd_cityCode = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_city_code_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" + test_data.testData.cdd_city_code_lbl + "')]"
      );
      await cdd_cityCode.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const cdd_cityCode_id = await cdd_cityCode.getAttribute("for");
      await $(".//input[@id='" + cdd_cityCode_id + "']").setValue(
        eval("test_data.testData.cdd_city_code_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 住所コード＿大字通称コード
      // ★ 新環境適用' New Env Implementation
      const oazaNameCode = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_oaza_common_name_code_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.cdd_oaza_common_name_code_lbl +
          "')]"
      );
      await oazaNameCode.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const oazaNameCode_id = await oazaNameCode.getAttribute("for");
      await $(".//input[@id='" + oazaNameCode_id + "']").setValue(
        eval("test_data.testData.cdd_oaza_common_name_code_val" + (i + 1))
      );
      await browser.pause(1000);

      // Set 住所コード＿字丁目コード
      // ★ 新環境適用' New Env Implementation
      const characterCode = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.cdd_character_code_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" +
          test_data.testData.cdd_character_code_lbl +
          "')]"
      );
      await characterCode.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const characterCode_id = await characterCode.getAttribute("for");
      await $(".//input[@id='" + characterCode_id + "']").setValue(
        eval("test_data.testData.cdd_character_code_val" + (i + 1))
      );
      await browser.pause(1000);

      // Deselect the hover/selected fields
      await util.Deselect_fields(1);

      ssno = ssno + 1;
      // Screenshot - During Data
      const headerBar_during = await $(".//header[@id='oneHeader']");
      const tabheader_during = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_during = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          ssno +
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
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await cdd_save_record_btn.waitForClickable({ timeout: 10000 });
      await cdd_save_record_btn.click();
      await browser.pause(10000);
      await browser.refresh();
      await browser.pause(10000);

      ssno = ssno + 1;
      // Screenshot- After Data
      const headerBar_after = await $(".//header[@id='oneHeader']");
      const tabheader_after = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_after = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-" +
          ssno +
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
    }

    // Get CDD records
    await parent.Get_CDD_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.cdd_array = test_data.testData.cdd_array.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

    // Loop through the array to determine CDD records
    for (var cdd = 0; cdd < test_data.testData.cdd_array.length; cdd++) {
      var record = test_data.testData.cdd_array[cdd];

      // Go to CDD record
      await util.Open_SF_Record_URL(1, user_info.object.cdd_obj, record.Id);

      ssno = ssno + 1;
      // Screenshot - After Data - New record
      const headerBar_new_after = await $(".//header[@id='oneHeader']");
      const tabheader_new_after = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_new_after = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
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
            tabheader_new_after,
            highlights_new_after,
          ],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
