const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0003-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0003_step_09_data: Manual creation of new candidate record (data linkage)", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "admin") {
      await parent.Login_as_admin();
    }
    // Go to DDP Record
    await parent.Open_SF_DDP_Record();

    // Show dropdown for same person candidate
    const cdd_btn = await $(".//div[@class='listWrapper'][1]").$(
      ".//*[@data-target-reveals='" + test_data.testData.api_cdd_new_btn + "']"
    );
    await cdd_btn.waitForClickable({ timeout: 50000 });
    await cdd_btn.click();

    // Screenshot - DDP record
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Click new
    const cdd_new = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.api_cdd_new_btn +
        "']"
    );
    await cdd_new.waitForClickable({ timeout: 50000 });
    await cdd_new.click();
    await browser.pause(5000);

    // full page modal
    await util.modal_fullpage();

    // ★ 新環境適用' New Env Implementation
    // 生年月日
    const cddBirthday = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_bday_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_bday_field_lbl + "')]"
    );
    await cddBirthday.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const cddBirthday_id = await cddBirthday.getAttribute("for");
    await $(".//input[@id='" + cddBirthday_id + "']").setValue(
      test_data.testData.cdd_bday_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 漢字氏名
    const kanjiField = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_kanji_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_kanji_field_lbl + "')]"
    );
    await kanjiField.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanjiField_id = await kanjiField.getAttribute("for");
    await $(".//input[@id='" + kanjiField_id + "']").setValue(
      test_data.testData.account_name
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // カナ氏名
    const kanaField = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_kana_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_kana_field_lbl + "')]"
    );
    await kanaField.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanaField_id = await kanaField.getAttribute("for");
    await $(".//input[@id='" + kanaField_id + "']").setValue(
      test_data.testData.cdd_kana_name_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 住所１
    const kanjiAdd1 = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_address_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_address_field_lbl + "')]"
    );
    await kanjiAdd1.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const kanjiAdd1_id = await kanjiAdd1.getAttribute("for");
    await $(".//input[@id='" + kanjiAdd1_id + "']").setValue(
      test_data.testData.kanji_add1
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 顧客番号
    const customerNo = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_cust_no_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_cust_no_field_lbl + "')]"
    );
    await customerNo.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const customerNo_id = await customerNo.getAttribute("for");
    await $(".//input[@id='" + customerNo_id + "']").setValue(
      test_data.testData.cust_no
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 第一電話番号
    const phoneOne = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_phone_1_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_phone_1_field_lbl + "')]"
    );
    await phoneOne.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const phoneOne_id = await phoneOne.getAttribute("for");
    await $(".//input[@id='" + phoneOne_id + "']").setValue(
      test_data.testData.phone_no1
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 第二電話番号
    const phoneTwo = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_phone_2_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_phone_2_field_lbl + "')]"
    );
    await phoneTwo.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const phoneTwo_id = await phoneTwo.getAttribute("for");
    await $(".//input[@id='" + phoneTwo_id + "']").setValue(
      test_data.testData.phone_no2
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 第三電話番号
    const phoneThree = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_phone_3_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_phone_3_field_lbl + "')]"
    );
    await phoneThree.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const phoneThree_id = await phoneThree.getAttribute("for");
    await $(".//input[@id='" + phoneThree_id + "']").setValue(
      test_data.testData.phone_no3
    );
    await browser.pause(1000);

    var add1, add2, add3, add4;
    var stringadd = test_data.testData.app_address_code;
    add1 = stringadd.substring(0, 2);
    add2 = stringadd.substring(2, 5);
    add3 = stringadd.substring(5, 8);
    add4 = stringadd.substring(8, 11);

    // ★ 新環境適用' New Env Implementation
    // 住所コード＿都道府県コード
    const addOne = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_add1_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_add1_field_lbl + "')]"
    );
    await addOne.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const addOne_id = await addOne.getAttribute("for");
    await $(".//input[@id='" + addOne_id + "']").setValue(add1);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 住所コード＿市区町村コード
    const addTwo = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_add2_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_add2_field_lbl + "')]"
    );
    await addTwo.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const addTwo_id = await addTwo.getAttribute("for");
    await $(".//input[@id='" + addTwo_id + "']").setValue(add2);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 住所コード＿大字通称コード
    const addThree = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_add3_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_add3_field_lbl + "')]"
    );
    await addThree.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const addThree_id = await addThree.getAttribute("for");
    await $(".//input[@id='" + addThree_id + "']").setValue(add3);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 住所コード＿字丁目コード
    const addFour = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.cdd_add4_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.cdd_add4_field_lbl + "')]"
    );
    await addFour.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const addFour_id = await addFour.getAttribute("for");
    await $(".//input[@id='" + addFour_id + "']").setValue(add4);
    await browser.pause(1000);

    // Screenshot - CDD record
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Save
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();

    // Toast
    await util.Toast_Message();

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - DDP record
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Get CDD record
    await parent.Get_CDD();

    // Go to CDD Record
    await parent.Open_SF_CDD_Record();

    // Screenshot - CDD record
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-5" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );
    // logout
    await parent.Logout();
  });
}
