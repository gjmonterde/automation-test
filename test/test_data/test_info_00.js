export const testData = {
  /**|================================================================================|
   * | VALUES TO UPDATE                                                               |
   * |================================================================================|
   */
  // Application record
  app_name: "APP-0000001219", //  Existing/new user; Enter application name created in 0001
  contact_detail: "GDC)Emman 04282023", // ご要望事項* for identification || Application form
  input_key: "2023033121291979", // recommended to be unique CLI Record - Expires after 30 minutes - need to execute step_04 data again if it expires

  // APP record
  user_status: 0, // 0 for existing user, 1 for new user

  // if user_status = 0 (Existing) - choose an existing community user (used for PG)
  input_birthdate_old: "19770101",
  kanji_name_old: "前 お",

  // if user_status = 1 (New) - create a new community user (used for testing)
  // NOTE: Also update the community username and password (2) in global_info
  input_birthdate_new: "19900501",
  kanji_name_new: "七 野",

  // For 0012_step31
  // Note: before running schedulable apex class make sure to change the
  // sched_minute, and sched_hour variables in the test info file and
  // make sure the time is advanced by 1 hour and 6 minutes (Japan time)
  sched_minute: "30",
  sched_hour: "01",

  /**|================================================================================|
   * | RECORDS                                                                        |
   * |================================================================================|
   */
  account_name: "",
  account_id: "",
  agr_id: "",
  agr_name: "",
  agr2_id: "",
  agr2_name: "",
  app_id: "",
  asc_id: "",
  asc_name: "",
  ba_id: "",
  ba_name: "",
  ba2_id: "",
  ba2_name: "",
  cli_id: "",
  cli_name: "",
  cl_prod_id: "",
  cl_prod_name: "",
  cnt_id: "",
  cnt_name: "",
  contact_id: "",
  contact_name: "",
  cre_id: "",
  cre_name: "",
  cron_id: "",
  ddp_id: "",
  ddp_name: "",
  er_id: "",
  exec_result_name: "",
  exec_result_id: "",
  exm_id: "",
  exm_name: "",
  exs_id: "",
  exs_name: "",
  gua_id: "",
  gua_name: "",
  gud_id: "",
  gud_name: "",
  ini_id: "",
  ini_name: "",
  ini3_id: "",
  ini3_name: "",
  jia_id: "",
  jia_name: "",
  jid_id: "",
  jid_name: "",
  jio_id: "",
  jio_name: "",
  kic_id: "",
  kic_name: "",
  kid_id: "",
  kid_name: "",
  kij_id: "",
  kij_name: "",
  kil_id: "",
  kil_name: "",
  kio_id: "",
  kio_name: "",
  mnt_id: "",
  mnt_name: "",
  mnt2_id: "",
  mnt2_name: "",
  pc_id: "", // ★ 新環境適用' New Env Implementation
  pc_name: "", // ★ 新環境適用' New Env Implementation
  product_code: "",
  pro_id: "",
  pro_name: "",
  rdc1_id_of_ver1: "",
  rdc1_name_of_ver1: "",
  rdc1_id_of_ver2: "",
  rdc1_name_of_ver2: "",
  rdc3_id_of_ver2: "",
  rdc3_name_of_ver2: "",
  sec1_id: "",
  sec1_name: "",
  stt_id: "",
  stt_name: "",
  trr_id: "",
  trr_name: "",
  ver1_id: "",
  ver1_name: "",
  ver2_id: "",
  ver2_name: "",
  wnt_id: "",
  wnt_name: "",
  wnt2_id: "",
  wnt2_name: "",

  // ListView
  listview1_id: "",
  listview2_id: "",
  listview3_id: "",
  listview4_id: "",
  listview5_id: "",
  listview6_id: "",

  // Arrays
  cdd_array: new Array(),
  cif_array: new Array(),
  er_array: new Array(),
  asc_id_arr: [], // ★ 新環境適用' New Env Implementation
  asc_name_arr: [], // ★ 新環境適用' New Env Implementation
  ba_id_arr: [], // ★ 新環境適用' New Env Implementation
  ba_name_arr: [],
  bla_id_arr: [],
  bla_name_arr: [],
  cabf_id_arr: [],
  cabf_name_arr: [],
  cabi_id_arr: [],
  cabi_name_arr: [],
  chi_id_arr: [],
  chi_name_arr: [],
  cla_id_arr: [],
  cla_name_arr: [],
  sci_id_arr: [],
  sci_name_arr: [],
  kit_id_arr: [], // ★ 新環境適用' New Env Implementation
  kit_name_arr: [], // ★ 新環境適用' New Env Implementation
  lcd_id_arr: [],
  lcd_name_arr: [],
  lcd_id_arr2: [],
  lcd_name_arr2: [],
  jim_id_arr: [], // ★ 新環境適用' New Env Implementation
  jim_name_arr: [], // ★ 新環境適用' New Env Implementation
  jib_id_arr: [], // ★ 新環境適用' New Env Implementation
  jib_name_arr: [], // ★ 新環境適用' New Env Implementation
  rdc_id_arr: [], // ★ 新環境適用' New Env Implementation
  rdc_name_arr: [], // ★ 新環境適用' New Env Implementation

  /**|================================================================================|
   * | URLs                                                                           |
   * |================================================================================|
   */
  mypage_url: "",
  httpurl01:
    "https://clstdfes--clstdfes.sandbox.my.salesforce-sites.com/auth?sid=10",
  httpurl02:
    "https://clstdfes--clstdfes.sandbox.my.salesforce-sites.com/loan?pc=10",
  httpurl03: "o/FJ_CustomerLedgerInquiry__c/list?filterName=Recent", // CLI list view
  httpurl04: "o/FJ_ApplicationAccessLog__c/list?filterName=", // ALL Application Log page    // ★ 新環境適用' New Env Implementation
  httpurl05: "o/genesis__Applications__c/list?filterName=", // ALL Application page    // ★ 新環境適用' New Env Implementation
  httpurl06: "o/FJ_Branch__c/list?filterName=", // All 店舗 page    // ★ 新環境適用' New Env Implementation
  httpurl07: "o/Account/list?filterName=", // All Account page    // ★ 新環境適用' New Env Implementation
  httpurl08: "o/Contact/list?filterName=", // All Contact page    // ★ 新環境適用' New Env Implementation
  httpurl09: "o/FJ_MuCooperationApp__c/list?filterName=00B0T000001SIJ0UAO", // CSV連携データ(申込)    // ★ 新環境適用' New Env Implementation
  httpurl10: "o/genesis__Applications__c/list?filterName=Recent", // Recent Application list page // ★ 新環境適用' New Env Implementation
  downloads_url: "chrome://downloads/",

  /**|================================================================================|
   * | PDFs                                                                           |
   * |================================================================================|
   */
  pdf01: "AcceptableUsePolicy_Auth.pdf",
  pdf02: "PersonalInfoConsentClause_Gogin.pdf",
  pdf03: "PersonalInfoConsentClause_Company_Oneset.pdf",
  pdf04: "ContractTerms_OneSetCardLoan.pdf",
  pdf05: "TermsOfUsage_MyPage.pdf",
  pdf06: "ContractTerms.pdf",
  pdf07: "PersonalInfoConsentClause_Company.pdf",

  // PDF Selectors
  pdf1_step_01: "agree_AcceptableUsePolicy_Auth",
  pdf_select: "PDFファイルをダウンロード",
  pdf1_step_06: "agree_PersonalInfoConsentClause_Gogin",
  pdf2_step_06: "agree_PersonalInfoConsentClause_Company",
  pdf3_step_06: "agree_ContractTerms",
  pdf4_step_06: "agree_TermsOfUsage_MyPage",

  /**|================================================================================|
   * | ACCORDIONS                                                                     |
   * |================================================================================|
   */
  accordion1: "注意事項",
  accordion2: "銀行に対する個人情報の取扱いに関する同意条項",
  accordion3: "保証会社に対する個人情報の取扱いに関する同意条項",
  accordion4: "契約規定・保証委託約款",
  accordion5: "お手続きマイページ利用規約",

  /**|================================================================================|
   * | QUERIES                                                                        |
   * |================================================================================|
   */
  query_0001_22:
    "SELECT Name,fj_CoronaFundFlg__c,genesis__CL_Product__r.fj_CoronaFundFlg__c FROM genesis__applications__c WHERE Name =", // Will also be used in IDK 23
  query_0001_31: "SELECT Id, Name, CreatedDate FROM Account WHERE Name = ",
  query_0001_44:
    "Select Name, genesis__Loan_Amount__c, fj_Loan_Amount_Requested__c, genesis__Term__c, fj_Term_Requested__c, genesis__Interest_Rate__c, " +
    "fj_Interest_Rate_Requested__c, fj_Bonus_Repayment__c, fj_Bonus_Repayment_Requested__c, fj_Bonus_Month__c, fj_Bonus_Month_Requested__c, " +
    "fj_Bonus_Percent__c, fj_Bonus_Percent_Requested__c from genesis__Applications__c Where Name=", // Will also be used in IDK 24 and 25
  query_0006_03:
    "SELECT Name, fj_InterestRate_InitialChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name=", // used also in IDK 02
  query_0006_21_1:
    "SELECT Id, Name, fj_1st_ModePD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=", // will also be used in IDK 20
  query_0006_21_2:
    "SELECT Id, Name, fj_1st_AdditionalPD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=", // will also be used in IDK 20
  query_0006_31_1:
    "SELECT Id, Name, fj_1st_ModePD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=",
  query_0006_31_2:
    "SELECT Id, Name, fj_1st_AdditionalPD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=",
  query_0006_32_1:
    "SELECT Id, Name, fj_1st_ModePD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=",
  query_0006_32_2:
    "SELECT Id, Name, fj_1st_AdditionalPD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=",
  query_0006_41:
    "SELECT Id, Name, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =", // will also used in IDK 40
  query_0007_02:
    "Select Name, fj_Loan_Amount_Calculated__c, fj_Term_Calculated__c, fj_Interest_Rate_Calculated__c, genesis__Loan_Amount__c, genesis__Term__c, " +
    "genesis__Interest_Rate__c from genesis__Applications__c where Name=",
  query_0009_04:
    "Select Name, fj_Loan_Amount_GuaranteeChk__c, fj_Term_GuaranteeChk__c, fj_Interest_Rate_GuaranteeChk__c, genesis__Loan_Amount__c, genesis__Term__c, " +
    "genesis__Interest_Rate__c from genesis__Applications__c where Name =",
  query_0009_08:
    "SELECT Id, Name, fj_Interest_Rate_Calculated__c, fj_Loan_Amount_Calculated__c, fj_Term_Calculated__c FROM genesis__Applications__c WHERE Name = '",
  query_0012_31_cron_query1:
    "SELECT Id, CronJobDetail.Name FROM CronTrigger WHERE CronJobDetail.Name =",
  query_0012_31_cron_query2:
    "SELECT Id, ApexClass.Name, Status, ExtendedStatus, NumberOfErrors, CreatedDate, JobType, CronTriggerId FROM AsyncApexJob WHERE Crontriggerid =",
  query_0012_35:
    "SELECT Id, Name, fj_SlipOutputFlg__c FROM genesis__Applications__c WHERE Name = ",

  /**|================================================================================|
   * | RECORD VALUES (INPUT/OUTPUT)                                                   |
   * |================================================================================|
   */

  // logic values
  isFalse: false,
  isTrue: true,
  isUndefined: undefined,
  isChecked: "checked",

  // Account authentication error values - 0001
  error_loan_app_account_name_last: "kanji",
  error_loan_app_account_name_first: "漢字",
  error_loan_app_birth: "199178",
  error_loan_app_account_number: "あああ",
  error_loan_app_pinword: "あああ",

  // Account authentication valid values - 0001
  loan_app_account_name_last: "アーア",
  loan_app_account_name_first: "アーア",
  loan_app_birth: "19770101",
  loan_app_select_branch: "013",
  loan_app_account_number: "6500001",
  loan_app_pinword: "1234",

  // CLI record values creation - 0001
  customer_number: "1977010100",
  kana_name: "アアア アア",
  kanji_name: "前　お", // GDC specific field values
  gender: "男",
  kana_address_1: "ｼﾏﾈｹﾝﾏﾂｴｼ1-1-1",
  address_code: "32201001000",
  kanji_address_zipcode: "690-0000",
  kanji_address_1: "島根県松江市１－１－１",
  primary_telephone_number: "0000-00-0000",
  second_telephone_number: "0000-00-0001",
  third_telephone_number: "0003-00-0003",
  annual_income: "10000",
  kana_name_of_workplace_and_office: "アアアアア",
  name_of_workplace_and_office: "あああああ",
  prefectural_code: 32, // fixed
  input_kana_name: "ｱｱｱ ｱｱ",
  input_birth_date: "19770101", // GDC specific field values
  input_deposit_item: "12",
  input_branch_number: "013",
  entry_account_number: "6500001",

  // Application form step 1 error values - 0001
  error_loan_app_contact_phone_1: "0あ",
  error_loan_app_contact_phone_2: "000a",
  error_loan_app_contact_phone_3: "000+",

  // Application form - 0001
  amount: "1000", // お借り入れ希望額/ご契約極度額 *
  amount_err: "10000", // お借り入れ希望額/ご契約極度額 *
  amount_check: "0", // お借入れ金額診断/極度額診断 *
  name_last: "前", // お名前（姓）* GDC specific field values
  name_first: "お", // お名前（名）* GDC specific field values
  name_kana_last: "アアア", //お名前　フリガナ セイ *
  name_kana_first: "アア", //お名前　フリガナ メイ *
  sex: "2", //性別 *
  birth_year: "1977", // 生年月日* GDC specific field values
  birth_month: "01", // 生年月日* GDC specific field values
  birth_day: "01", // 生年月日* GDC specific field values
  zip_code_1: "690", // 住所 郵便番号 *
  zip_code_2: "0001", // 住所 郵便番号 *
  prefecture_code2: "", // 住所 都道府県  *
  address_city: "松江市袖師町", // 住所 市町村以下 *
  address_detail: "マンション202", // 住所 マンション・部屋番号 *
  contact_home_1: "0001", // 連絡先 自宅電話番号 *
  contact_home_2: "01", // 連絡先 自宅電話番号 *
  contact_home_3: "0001", // 連絡先 自宅電話番号 *
  contact_mobile_1: "090", // 連絡先 携帯電話番号 *
  contact_mobile_2: "0002", // 連絡先 携帯電話番号 *
  contact_mobile_3: "0002", // 連絡先 携帯電話番号 *
  contact_phone_1: "0003", // 連絡先 職場電話番号*
  contact_phone_2: "03", // 連絡先 職場電話番号 *
  contact_phone_3: "0003", // 連絡先 職場電話番号 *
  loan_app_identical_person: "01", // 健康保険証　名義 *
  loan_app_insurance_card_type: "01", // 健康保険証　種類 *
  loan_app_contact_to_tel_1: "03", // ご希望の連絡先 *
  loan_app_contact_to_tel_2: "03", // ご希望の連絡先 *
  loan_app_has_salary_transfer: "1", // 当行での給与振込または年金受取指定（ご本人）*
  loan_app_has_mortgage: "1", // 当行での住宅ローンまたは住宅金融支援機構のご利用 *

  // Step 2 - 0001
  living_together: "1", // 同居ご家族の有無 *
  has_spouse: "1", // 配偶者の有無 *
  children: "1", // お子さまの人数 *
  other_family: "1", // その他同居家族の人数 *
  living_type: "02", // 現在のお住まいの種類 *
  residence_year: "2000", // 現在のお住まいに住み始めた時期 年 *
  residence_month: "1", // 現在のお住まいに住み始めた時期 月 *
  repayment: "9000", // 住宅ローン返済額 毎月の返済額（半角） *
  has_bonus: "2", // 住宅ローン返済額 ボーナス月の増額有無 *
  bonus_repayment: "25000", // 住宅ローン返済額 ボーナス月の返済額(半角) *
  rent: "0", // 家賃 *
  annual_income: "420", // 前年個人年収(税込) *
  income_type: "01", // 収入の形態 *
  working_style: "01", // 職業 *
  business_type: "04", // お勤め先の種類 *
  office_name: "株式会社てすと", // お勤め先名称 *
  office_kana: "カブシキガイシャテスト", // お勤め先名称フリガナ *
  office_dept: "営業部", // 所属部課名（出向先名）*
  position: "課長", // 役職名 *
  work_contents: "01", // お仕事の内容 *
  enter_company_year: "2010", // 入社（営業開始）年 *
  enter_company_month: "4", // 入社（営業開始）月 *
  office_zip_code_1: "690", // お勤め先住所 郵便番号 *
  office_zip_code_2: "0000", // お勤め先住所 郵便番号 *
  prefecture_code: "01", // 都道府県 *
  office_address_city: "松江市1-2-3", // 市町村以下 *
  office_address_detail: "カナビル", // ビル名など *
  office_phone2_1: "0003", // お勤め先電話番号（半角）*
  office_phone2_2: "00", // お勤め先電話番号（半角）*
  office_phone2_3: "0003", // お勤め先電話番号（半角）*
  employee_division: "01", // 従業員数 *
  capital: "01", // 資本金 *
  industry: "01", // 事業内容（業種）*
  repayment_year: "", // ご返済希望 *
  repayment_month: "", // ご返済希望 *
  bonus_ratio: "", // ボーナス返済の割合 *
  partner_business_type: "04", //配偶者のお勤め先の種類
  partner_name_last: "前", //配偶者のお名前 姓 *
  partner_name_first: "お", //配偶者のお名前 名 *
  partner_name_kana_last: "アアア", //配偶者のお名前 フリガナ セイ *
  partner_name_kana_first: "アア", //配偶者のお名前 フリガナ メイ *
  partner_office_name: "アアアア", //配偶者のお勤め先名称
  partner_office_kana: "アアアアア", //配偶者のお勤め先名称フリガナ
  partner_office_zip_code_1: "690", //配偶者のお勤め先住所 郵便番号 前 *
  partner_office_zip_code_2: "0001", //配偶者のお勤め先住所 郵便番号 後 *
  partner_office_address_city: "島根県1番地", //配偶者のお勤め先住所 市町村以下（全角）*
  partner_office_address_detail: "うえだビル", //配偶者のお勤め先住所 ビル名など （全角）*
  partner_office_phone2_1: "0000", //配偶者のお勤め先電話番号 前 *
  partner_office_phone2_2: "00", //配偶者のお勤め先電話番号 中 *
  partner_office_phone2_3: "0000", //配偶者のお勤め先電話番号 後 *
  partner_employee_division: "01", //配偶者のお勤め先の従業員数
  partner_capital: "01", //配偶者のお勤め先の資本金
  partner_industry: "01", //配偶者のお勤め先の事業内容（業種）

  // Step 3 - 0001
  use_detail: "資金使途です", // お使いみち *
  payment1: "", // お支払い予定先 *
  payment_value: "", // お支払い予定先 *
  bank1: "", // 借入先 *
  bank2: "お支払い予定先",
  borrowing_1: "", // 借入先 *
  borrowing_2: "10", //借入先2 お借り入れ残高
  repayment_1: "", // 借入先 *
  repayment_2: "15", //借入先2 年間返済額
  introduction_branch_exist: "1", // 紹介店 有無 *
  select_introduction_branch: "023", // 紹介店 *
  reference_form_number: "ab0001", // 企業ＩＤ・広告番号 *
  question: "16", // アンケートへのご協力をお願いします。
  app_question: "口コミサイト", // アンケート その他 *
  use_detail_etc: "お使いみち（その他）", //お使いみち（その他）

  // Final Step append to Step 3 - 0001
  use_detail_append: "資金使途です修正",

  // BRA - 0001
  branch_number_value: "013", // 店舗

  // Account -0001
  new_manager_value: "担当者1", // 担当者

  // RDC - 0002
  defect_reason_val: "不鮮明のため読み取れない", // 不備理由

  // True Values - 0003
  cdd_birth_date_value: "S520101", //生年月日
  cdd_kanji_name_value: "前　おい", //漢字氏名
  cdd_kanji_address1_value: "島根県松江市", //住所１
  cdd_customer_number_value: "1977010101", //顧客番号
  cdd_city_code_value: "202", //住所コード＿市区町村コード
  cdd_oaza_common_name_code_value: "001", //住所コード＿大字通称コード
  cdd_character_code_value: "000", //住所コード＿字丁目コード

  // Fake Values - 0003
  cdd_fake_birth_date_value: "S520101", //生年月日
  cdd_fake_kanji_name_value: "前　お", //漢字氏名
  cdd_fake_postal_code_value: "690-0002", //郵便番号
  cdd_fake_kanji_address1_value: "島根県松江市１", //住所１
  cdd_fake_customer_number_value: "1977010100", //顧客番号
  cdd_fake_oaza_common_name_code_value: "000", //住所コード＿大字通称コード

  // DDP values - 0003
  ddp_status_value: "取引有無照会完了", // 同一人照会ステータス
  ddp_status_value2: "同一人照会完了", // 同一人照会ステータス

  // CDD values - 0003
  cdd_bra_no_value: "013", // 店番号
  cdd_cif_no_value: "1977010", // 店別顧客番号

  // CHI(1) - 0004
  chi_credit_rank_val1: "B", // fj_Credit_Rank__c
  chi_liquid_deposit_val1: 11000, // fj_LiquidDepositBalance__c
  chi_fixed_deposit_val1: 12000, // fj_FixedDepositBalance__c
  chi_existing_card_val: "カードローンです", // fj_ExistingCardLoan_ProductName__c
  chi_joined_debtor_val: "8330000001", // fj_JointDebtorCIF__c

  // CHI(2) - 0004
  chi_credit_rank_val2: "S", // fj_Credit_Rank__c
  chi_liquid_deposit_val2: 21000, // fj_LiquidDepositBalance__c
  chi_fixed_deposit_val2: 22000, // fj_FixedDepositBalance__c

  // SCI(1) - 0004
  sci_account_open_date1: "2023-02-28", // fj_AccountOpenDate__c
  sci_cif_card_extreme_amount1: 31000, //  fj_CIF_CardLoanExtremeAmount__c
  sci_cif_libhousing_borrow_cnt1: 1, // fj_CIF_LIBHousingLoanBorrowCnt__c
  sci_cif_cardloan_balance1: 32000, // fj_CIF_CardLoanBalance__c
  sci_cif_libunsecured_borrow_cnt1: 2, // fj_CIF_LIBUnsecuredBorrowCnt__c
  sci_cif_fixed_deposit_balance1: 33000, // fj_CIF_FixedDepositBalance__c
  sci_cif_libhousing_borrow_tb1: 34000, //  fj_CIF_LIBHousingLoanBorrowTB__c
  sci_cif_liquid_deposit_average1: 35000, // fj_CIF_LiquidDepositAverage__c
  sci_cif_libunsecured_borrow_tb1: 36000, // fj_CIF_LIBUnsecuredBorrowTB__c
  sci_cif_mebalance1: 37000, // fj_CIF_MEBalance__c
  sci_cif_libhousing_loan_tmra1: 38000, // fj_CIF_LIBHousingLoanTMRA__c
  sci_cif_remaindeposit1: 39000, // fj_CIF_RemainDepositDeposit__c
  sci_cif_libunsecured_borrow_tbra1: 31100, // fj_CIF_LIBUnsecuredBorrowTBRA__c
  sci_cif_consumer_loan_mebalance1: 31200, // fj_CIF_ConsumerLoanMEBalance__c
  sci_cif_libunsecured_borrow_tmra1: 31300, // fj_CIF_LIBUnsecuredBorrowTMRA__c
  sci_cif_me_total_balance1: 31300, // fj_CIF_METotalLoanBalance__c
  sci_cif_libhousing_loan_tbra1: 31400, // fj_CIF_LIBHousingLoanTBRA__c

  // SCI(2) - 0004
  sci_account_open_date2: "2023-01-16", // fj_AccountOpenDate__c
  sci_cif_card_extreme_amount2: 41000, // fj_CIF_CardLoanExtremeAmount__c
  sci_cif_libhousing_borrow_cnt2: 41100, // fj_CIF_LIBHousingLoanBorrowCnt__c
  sci_cif_cardloan_balance2: 41200, // fj_CIF_CardLoanBalance__c
  sci_cif_libunsecured_borrow_cnt2: 41300, // fj_CIF_LIBUnsecuredBorrowCnt__c
  sci_cif_fixed_deposit_balance2: 41400, // fj_CIF_FixedDepositBalance__c
  sci_cif_libhousing_borrow_tb2: 41500, // fj_CIF_LIBHousingLoanBorrowTB__c
  sci_cif_liquid_deposit_average2: 41600, // fj_CIF_LiquidDepositAverage__c
  sci_cif_libunsecured_borrow_tb2: 41700, // fj_CIF_LIBUnsecuredBorrowTB__c
  sci_cif_mebalance2: 41800, // fj_CIF_MEBalance__c
  sci_cif_libhousing_loan_tmra2: 41900, //  fj_CIF_LIBHousingLoanTMRA__c
  sci_cif_remaindeposit2: 42000, // fj_CIF_RemainDepositDeposit__c
  sci_cif_libunsecured_borrow_tbra2: 42100, // fj_CIF_LIBUnsecuredBorrowTBRA__c
  sci_cif_consumer_loan_mebalance2: 42300, // fj_CIF_ConsumerLoanMEBalance__c
  sci_cif_libunsecured_borrow_tmra2: 42400, // fj_CIF_LIBUnsecuredBorrowTMRA__c
  sci_cif_me_total_balance2: 42500, // fj_CIF_METotalLoanBalance__c
  sci_cif_libhousing_loan_tbra2: 42600, // fj_CIF_LIBHousingLoanTBRA__c

  // LCD(1) - 0004
  lcd_subject_code_1: "48", // fj_SubjectCode__c
  lcd_collateral_classification_1: "3", // fj_CollateralClassification__c
  lcd_basic_loan_account_1: "8330002", // fj_BasicLoanAccountNo__c
  lcd_handling_no_1: "8330003", // fj_HandlingNo__c
  lcd_loan_name_1: "あ 1-1", // fj_LoanName__c
  lcd_current_balance_1: 11000, // fj_CurrentBalance__c
  lcd_bra_no_1: "001", // fj_BraNo__c
  lcd_initial_lending_date_1: "2023-02-21", // fj_InitialLendingDate__c
  lcd_last_repayment_date_1: "2024-05-21", // fj_LastRepaymentDate__c
  lcd_interest_rate_1: "1", // fj_InterestRate__c
  lcd_guarantee_no_1: "11111", // fj_GuaranteeNo__c
  lcd_credit_limit1: 11200, // fj_CreditLimit__c

  // LCD(2) - 0004
  lcd_basic_loan_account_2: "8330003", // fj_BasicLoanAccountNo__c
  lcd_loan_name_2: "あ 1-2", // fj_LoanName__c
  lcd_current_balance_2: 12100, // fj_CurrentBalance__c
  lcd_bra_no_2: "002", // fj_BraNo__c
  lcd_initial_lending_date_2: "2023-03-22", // fj_InitialLendingDate__c
  lcd_last_repayment_date_2: "2024-06-22", // fj_LastRepaymentDate__c
  lcd_handling_no_2: "8330004", // fj_HandlingNo__c
  lcd_interest_rate_2: "2", // fj_InterestRate__c
  lcd_guarantee_no_2: "22222", // fj_GuaranteeNo__c
  lcd_credit_limit2: 12300, // fj_CreditLimit__c

  // LCD(3) - 0004
  lcd_subject_code_2: "12", // fj_SubjectCode__c
  lcd_collateral_classification_2: "2", // fj_CollateralClassification__c
  lcd_basic_loan_account_3: "8330005", // fj_BasicLoanAccountNo__c
  lcd_loan_name_3: "あ 2-1", // fj_LoanName__c
  lcd_current_balance_3: 131000, // fj_CurrentBalance__c
  lcd_bra_no_3: "003", // fj_BraNo__c
  lcd_initial_lending_date_3: "2023-04-23", // fj_InitialLendingDate__c
  lcd_last_repayment_date_3: "2024-07-23", // fj_LastRepaymentDate__c
  lcd_handling_no_3: "8330005", // fj_HandlingNo__c
  lcd_interest_rate_3: "3", // fj_InterestRate__c
  lcd_guarantee_no_3: "33333", // fj_GuaranteeNo__c
  lcd_credit_limit3: 133000, // fj_CreditLimit__c

  // LCD(4) - 0004
  lcd_basic_loan_account_4: "8330004", // fj_BasicLoanAccountNo__c
  lcd_loan_name_4: "あ 2-1", // fj_LoanName__c
  lcd_current_balance_4: 14100, // fj_CurrentBalance__c
  lcd_bra_no_4: "004", // fj_BraNo__c
  lcd_initial_lending_date_4: "2023-04-24", // fj_InitialLendingDate__c
  lcd_last_repayment_date_4: "2024-08-24", // fj_LastRepaymentDate__c
  lcd_handling_no_4: "8330005", // fj_HandlingNo__c
  lcd_interest_rate_4: "4", // fj_InterestRate__c
  lcd_guarantee_no_4: "44444", // fj_GuaranteeNo__c
  lcd_credit_limit4: 145000, // fj_CreditLimit__c

  // LCD(5) - 0004
  lcd_subject_code_3: "10", // fj_SubjectCode__c
  lcd_collateral_classification_3: "2", // fj_CollateralClassification__c
  lcd_basic_loan_account_5: "8330000", // fj_BasicLoanAccountNo__c
  lcd_loan_name_5: "あ 3-1", // fj_LoanName__c
  lcd_current_balance_5: 5000, // fj_CurrentBalance__c
  lcd_bra_no_5: "005", // fj_BraNo__c
  lcd_initial_lending_date_5: "2023-05-25", // fj_InitialLendingDate__c
  lcd_last_repayment_date_5: "2023-09-25", // fj_LastRepaymentDate__c
  lcd_handling_no_5: "8330001", // fj_HandlingNo__c
  lcd_interest_rate_5: "5", // fj_InterestRate__c
  lcd_guarantee_no_5: "55555", // fj_GuaranteeNo__c

  // LCD(6) - 0004
  lcd_basic_loan_account_6: "8330001", // fj_BasicLoanAccountNo__c
  lcd_loan_name_6: "あ 3-2", // fj_LoanName__c
  lcd_current_balance_6: 1300000, // fj_CurrentBalance__c
  lcd_bra_no_6: "006", // fj_BraNo__c
  lcd_initial_lending_date_6: "2023-06-26", // fj_InitialLendingDate__c
  lcd_last_repayment_date_6: "2023-10-26", // fj_LastRepaymentDate__c
  lcd_handling_no_6: "8330003", // fj_HandlingNo__c
  lcd_interest_rate_6: "6", // fj_InterestRate__c
  lcd_guarantee_no_6: "66666", // fj_GuaranteeNo__c

  // LCD (other)
  lcd_subject_code_44: "44", // ★ 新環境適用' New Env Implementation

  // CABI record creation input - 0004
  cabi_deposit: 10000, // fj_EA_Deposit__c
  cabi_deposit_subtotal: 11000, // fj_EA_DepositSubtotal__c
  cabi_total_deposit: 12000, // fj_EA_TotalDeposit__c
  cabi_domestic_stock: 13000, // fj_EA_DomesticStock__c
  cabi_domestic_bond: 15000, // fj_EA_DomesticBond__c
  cabi_other_domestic_investment_trust: 17000, //fj_EA_OtherDomesticInvestmentTrust__c
  cabi_mrf: 0, // fj_EA_MRF__c
  cabi_fund_wrap: 0, //  fj_EA_FundWrap__c
  cabi_foreign_stocks: 14000, // fj_EA_ForeignStocks__c
  cabi_foreign_bond: 16000, // fj_EA_ForeignBond__c
  cabi_other_fit: 0, // fj_EA_OtherFIT__c
  cabi_foreign_currency_mmf: 0, // fj_EA_ForeignCurrencyMMF__c
  cabi_other: 0, // fj_EA_Other__c

  // CABF record creation input - 0004
  cabf_product_name: "あ", // fj_ProductName__c
  cabf_currency_code: "01", // fj_CurrencyCode__c
  cabf_market_price: 10000, // fj_MarketPrice__c
  cabf_initial_deposit_amount: 120000, // fj_InitialDepositAmount__c
  cabf_yen_amount: 130000, // fj_YenAmount__c
  cabf_foreign_currency_amount: 100000, // fj_ForeignCurrencyAmount__c
  cabf_automatic_renewal_type: "1", // fj_AutomaticRenewalType__c
  cabf_account_store_name: "ああ", // fj_AccountStoreName__c
  cabf_foreign_currency_deposit_account_no: "1234000", // fj_ForeignCurrencyDepositAccountNo__c
  cabf_interest_rate_1: "5", // fj_InterestRate1__c
  cabf_initial_deposit_date: "2023-08-01", // fj_InitialDepositDate__c
  cabf_deposit_date: "2023-10-03", // fj_DepositDate__c
  cabf_maturity_date: "2024-03-24", // fj_MaturityDate__c

  // BLA record creation input
  bla_basic_loan_account_no: "8330000", // fj_BasicLoanAccountNo__c

  // CLA record creation input
  cla_existing_card_loan_credit_limit: 100, // fj_ExistingCardLoan_CreditLimit__c
  cla_existing_card_loan_interest_rate_code: "8", // fj_ExistingCardLoan_InterestRateCode__c

  // INI(3) - 0004
  ini_check_result_1_value: "リストに該当しませんでした。", // チェック結果文言１
  ini_message_1_value: "もんごん1", // メッセージ文言１
  ini_message_2_value: "もんごん2", // メッセージ文言２
  ini3_fixed_comment_value: "定型コメント", // 定型コメント
  ini3_applicable_value: "該当する", // 所管部確認結果
  ini_jurisdiction_confirmation_result_value: "該当しない", // 所管部確認結果
  ini_standard_comment_value: "あああああ", // 定型コメント

  // Common values 0005
  card_linkage: "連携済み",
  name_kana_value: "ｱ-ｱ-ｱ-ｱ", // (JID) カナ氏名 / (KIC/KIJ/KIT) 氏名（カナ）
  loanamt_val: 100, // 限度額/当初貸出額

  // JIO - 0005
  jio_overdue_value: "元本遅延なし　利息遅延なし", // 支払遅延の有無（CIC交流）

  // SEC(1) -- 0005
  sec_status_value: "回答受信完了", // JICC照会ステータス
  sec_secondary_chk_val: "実施済OK", // 外信照会ステータス

  // JIM(1) - 0005
  jim1_debt_val: "JP", // 債権分類
  jim1_total_bal_value: 200000, // トータル残高金額
  jim1_amt_val: 5000000, // 契約額/極度額
  jim1_used_date_val: "2023/10/01", // 保証額

  // JIM(2) - 0005
  jim2_debt_val: "JL", // 債権分類
  jim2_total_bal_value: 100000, // トータル残高金額
  jim2_amt_val: 2000000, // 契約額/極度額
  jim2_used_date_val: "2023/07/01", // 保証額

  // JIM(3) - 0005
  jim3_debt_val: "OU", // 債権分類
  jim3_total_bal_value: 1000000, // トータル残高金額
  jim3_amt_val: 2000000, // 契約額/極度額
  jim3_used_date_val: "2024/01/01", // 保証額

  // JIA(1) - 0005
  jia1_code_value: "延滞後完済", // 注意コード ( 新ファイルM )

  // JIA(2) - 0005
  jia2_code_value: "保証履行", // 注意コード ( 新ファイルM )

  // JIA(3) - 0005
  jia3_code_value: "延滞後貸倒", // 注意コード ( 新ファイルM )

  // JIB(1) - 0005
  jib1_type_transact_val: "クレジットカード（キャッシング）", // 取引形態区分
  jib1_debt_val: "RU", // 債権分類
  jib1_cont_date_val: "2023/09/02", // 貸付金額
  jib1_amt_val: 5000000, // 保証額
  jib1_bal_val: 1000000, // 残高

  // JIB(2) - 0005
  jib2_type_transact_val: "担保付融資", // 取引形態区分
  jib2_debt_val: "BA", // 債権分類
  jib2_cont_date_val: "2023/10/01", // 貸付金額
  jib2_amt_val: 4000000, // 保証額
  jib2_bal_val: 1000000, // 残高

  // JIB(3) - 0005
  jib3_type_transact_val: "担保付融資", // 取引形態区分
  jib3_debt_val: "RU", // 債権分類
  jib3_cont_date_val: "2023/10/01", // 貸付金額
  jib3_amt_val: 1000000, // 保証額
  jib3_bal_val: 100000, // 残高

  // KIT(1) - 0005
  kit1_transaction_type_val: "カードローン", // 取引種類
  kit1_guaranteeflg_val: "3", // 担保有無
  kit1_contractdate_val: "2023/10/01", // 成約日/実行日
  kit1_loanamt_val: 200, //  限度額/当初貸出額
  kit1_bal_val: 100, // 残債額
  kit1_completiontype_val: "01", // 完了区分
  kit1_loanamt_card_val: 200, // 内カードローン限度額
  kit1_last_repayment_val: "2023/01/02", // 最終返済日

  // KIT(2) - 0005
  kit2_transaction_type_val: "手形割引", // 取引種類
  kit2_guaranteeflg_val: "1", // 担保有無
  kit2_contractdate_val: "2023/11/01", // 成約日/実行日
  kit2_loanamt_val: 200, //  限度額/当初貸出額
  kit2_bal_val: 100, // 残債額
  kit2_completiontype_val: "01", // 完了区分
  kit2_last_repayment_val: "2023/01/10", // 最終返済日

  // KIT(3) - 0005
  kit3_transaction_type_val: "証書貸付", // 取引種類
  kit3_guaranteeflg_val: "1", // 担保有無
  kit3_contractdate_val: "2023/12/01", // 成約日/実行日
  kit3_loanamt_val: 300, //  限度額/当初貸出額
  kit3_bal_val: 100, // 残債額
  kit3_completiontype_val: "02", // 完了区分
  kit3_last_repayment_val: "2023/01/16", // 最終返済日

  // KIL - 0005
  kil_attrib_changedate_val: "2023/01/03", // 本人属性変更日
  kil_declare_category_val: "B", // 本人申告区分
  kil_declare_date_val: "2023/03/01", // 申告日

  // EXS - 0006
  exs_cancelation_comment_value: "あああああ", // 取下げ事由
  exs_rejection_comment_value: "あああああ", // 決裁コメント
  exs_pscore_limit_val: 750, // Pスコア限度額（単位：万円）
  exs_approval_comment_value:
    "審直役が承認します。審査決裁です。ああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああああ" +
    "ああぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁ", // 決裁コメント
  exs_withdrawal_val: "再審査キャンセル", // 取下げ事由を選択
  exs_pscore_limit_credit_value: 400, // Pスコア限度額(修正)（単位：万円）

  // TRR input values - 0006
  // ★ 新環境適用' New Env Implementation
  trr_detail_type_val: "融資", // 種類
  trr_kana_name_val: "ｱ-ｱ", // 氏名カナ
  trr_lending_date_val: "2023/09/01", // 融資実行日
  trr_loan_amount_val: 5000000, // 融資金額
  trr_balance_val: 1000000, // 残債額
  trr_annual_repayment_val: 800000, // 年間返済額
  trr_collateral_classify_val: "有担保", // 担保区分
  trr_row_flag_1: "2", // 再計算
  trr_row_flag_2: "3", // 再計算
  trr_row_flag_3: "8", // 再計算

  // GUD - 0007
  gud_guarantee_result_rejection: "否決", // 保証審査結果
  gud_loan_amount_term: "", // 保証期間 - value updated through JSforce
  gud_approved_amount: "", // 保証額 - value updated through JSforce
  gud_decision: "応諾", // 諾否判定
  gud_guarantee_result: "条件付承認", // 保証審査結果
  gud_gua_number: "013300000001", // 保証番号
  gud_reason_code0: "申込金額減額", // 事由コード
  gud_reason_code1: "基準金利10.0％(保証会社②用)", //事由コード
  gud_reason_code2: "選択を選択済みに移動", // 事由コード
  gud_gua_date: "2022/12/25", // 通知日
  gud_gua_condition: "金額・期間ともに減らします", // 保証条件
  gud_orico: "001", // チェックコード
  gud_reject_confirm: "謝絶", // 諾否判定
  gud_guarantee_chk_result_val: "条件付承認", // 保証審査結果
  gud_guarantee_approval_date: "2023/03/03", // 通知日
  gud_guarantee_no_val: "13400001", // 保証番号
  gud_guarantee_condition_val: "減額しています。", // 保証条件
  gud_guarantee_exp_date_val: "2024/10/31", // 保証有効期限
  gud_result_based_interest_val: 14, // 審査結果基準利率(%)
  gud_process_approval_comment: "承認中請が面から承認します",

  // ASC input values - 0008
  asc_antisocial_inquiry_status_value: "連携完了", // 反社照会ステータス
  asc_antisocial_results_value1: "×", // 反社照会結果
  asc_antisocial_results_value2: "◎", // 反社照会結果

  // CRE values
  cre_msg_value1:
    "審査結里ご社資条件を入力あああああああああああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああ", // 審査結果ご融資条件
  cre_msg_value2:
    "追記します。ああああああああああああああああああ" +
    "ああああああああああああああああああああああああああああ", // 条件確認ご融資条件

  // APP - 0010
  app_loan_upper_limit_value: 840000, // 融資額(調整上限)
  app_cif_linkage_status_value: "手動照会済み", // 顧客番号再取得連携ステータス
  app_cif_no_value: "1234567ABC", // 全店顧客番号
  app_loan_acct_no_value: "6380001", // 融資基本口座番号

  // BA - 0010
  ba_confirmation_status_value: "確認済", // 確認ステータス
  ba_deposit_type_value: "普通預金", // 預金種類
  ba_financial_inst_name_optional_value: "当行", // 金融機関名(選択)
  ba_financial_inst_type_value: "銀行", //  金融機関種類
  ba_financial_inst_code_value: "0001", // 金融機関コード
  ba_financial_inst_name_value: "サンプル銀行", // 金融機関名
  ba_branch_code_value: "001", // 支店コード
  ba_branch_name_value: "本店営業部", // 支店名
  ba_account_number1_value: "4870011", // 口座番号
  ba_deposit_type_ordinary_bank_value: "普通預金", // 預金種類（普通銀行）
  ba_financial_inst_code_ordinary_bank_value: "0001", // 金融機関コード(普通銀行)
  ba_financial_inst_name_ordinary_bank_value: "サンプル銀行", // 金融機関名(普通銀行)
  ba_branch_code_ordinary_value: "001", // 支店コード(普通銀行)
  ba_branch_name_ordinary_bank_value: "本店営業部", // 支店名(普通銀行)
  ba_account_number2_value: "4870011", //口座番号(普通銀行)

  // MyPage Borrowing Adjustment Screen Inputs - 0011 IDK 24
  mypage_loan_bonus_use_toggle_24: true, // 半年ごと増額返済(ボーナス返済)
  mypage_loan_date_value_24: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by client locale settings***
  mypage_repayment_date_value_24: "1", // 毎月の返済日
  mypage_repayment_month_value_24: "10", // 増額返済月
  mypage_repayment_ratio_value_24: "05", // 増額返済割合

  // MyPage Borrowing Adjustment Screen Inputs - 0011 IDK 25
  mypage_borrow_amount_value_25: "", // 金額
  mypage_loan_bonus_use_toggle_25: true, // 半年ごと増額返済(ボーナス返済)
  mypage_loan_date_value_25: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by client locale settings***
  mypage_repayment_date_value_25: "1", // 毎月の返済日
  mypage_repayment_month_value_25: "10", // 増額返済月
  mypage_repayment_ratio_value_25: "05", // 増額返済割合

  // MyPage Borrowing Adjustment Screen Inputs - 0011 IDK 26
  mypage_duration_value_26: "", // 期間
  mypage_loan_bonus_use_toggle_26: true, // 半年ごと増額返済(ボーナス返済)
  mypage_loan_date_value_26: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by client locale settings***
  mypage_repayment_date_value_26: "1", // 毎月の返済日
  mypage_repayment_month_value_26: "10", // 増額返済月
  mypage_repayment_ratio_value_26: "05", // 増額返済割合

  // MyPage Borrowing Adjustment Screen Inputs - 0011 IDK 27
  mypage_borrow_amount_value_27: "", // 金額
  mypage_duration_value_27: "", // 期間
  mypage_loan_bonus_use_toggle_27: true, // 半年ごと増額返済(ボーナス返済)
  mypage_loan_date_value_27: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by client locale settings***
  mypage_repayment_date_value_27: "1", // 毎月の返済日
  mypage_repayment_month_value_27: "10", // 増額返済月
  mypage_repayment_ratio_value_27: "05", // 増額返済割合

  // APP Loan adjustment input values -  0011 IDK 30
  app_preferred_loan_date_value_30: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by locale settings***

  // APP Loan adjustment input values -  0011 IDK 31
  app_borrow_amount_value_31: "", // 金額
  app_preferred_loan_date_value_31: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by locale settings***

  // APP Loan adjustment input values -  0011 IDK 32
  app_duration_value_32: "", // 期間
  app_preferred_loan_date_value_32: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by locale settings***

  // MyPage Borrowing Adjustment Screen Inputs - 0011 IDK 39
  mypage_borrow_amount_value_39: "", // 期間
  mypage_loan_bonus_use_toggle_39: true, // 半年ごと増額返済(ボーナス返済)
  mypage_loan_date_value_39: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by client locale settings***
  mypage_repayment_date_value_39: "1", // 毎月の返済日
  mypage_repayment_month_value_39: "10", // 増額返済月
  mypage_repayment_ratio_value_39: "05", // 増額返済割合

  // MyPage Borrowing Adjustment Screen Inputs - 0011 IDK 40
  mypage_duration_value_40: "", // 期間
  mypage_loan_bonus_use_toggle_40: true, // 半年ごと増額返済(ボーナス返済)
  mypage_loan_date_value_40: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by client locale settings***
  mypage_repayment_date_value_40: "1", // 毎月の返済日
  mypage_repayment_month_value_40: "10", // 増額返済月
  mypage_repayment_ratio_value_40: "05", // 増額返済割合

  // MyPage Borrowing Adjustment Screen Inputs - 0011 IDK 41
  mypage_borrow_amount_value_41: "", // 期間
  mypage_duration_value_41: "", // 期間
  mypage_loan_bonus_use_toggle_41: true, // 半年ごと増額返済(ボーナス返済)
  mypage_loan_date_value_41: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by client locale settings***
  mypage_repayment_date_value_41: "1", // 毎月の返済日
  mypage_repayment_month_value_41: "10", // 増額返済月
  mypage_repayment_ratio_value_41: "05", // 増額返済割合

  // APP Loan adjustment input values -  0011 IDK 43
  app_borrow_amount_value_43: "", // 金額
  app_preferred_loan_date_value_43: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by locale settings***

  // APP Loan adjustment input values -  0011 IDK 44
  app_duration_value_44: "", // 期間
  app_preferred_loan_date_value_44: "002023/10/30", // ご融資希望日 ***NOTE: date format will be affected by locale settings***

  // Bank Acct 1 - 0011
  ba_fin_inst_1: "当行", // 金融機関名(選択)
  ba_branch_name_1: "ああ金1", // 支店名
  ba_deposit_type_1: "普通預金", // 預金種類
  ba_acct_no_1: "1200000", // 口座番号
  ba_recipient_name_1: "えーえ1", // お受取人お名前
  ba_recipient_name_kana_1: "エーエ", // お受取人カタカナ
  ba_transfer_amount_1: "1000000", // 振込金額(円)

  // Bank Acct 2- 0011
  ba_fin_inst_2: "当行", // 金融機関名(選択)
  ba_branch_name_2: "ああ金2", // 支店名
  ba_deposit_type_2: "普通預金", // 預金種類
  ba_acct_no_2: "1200001", // 口座番号
  ba_recipient_name_2: "えーえ2", // お受取人お名前
  ba_recipient_name_kana_2: "エーエ", // お受取人カタカナ
  ba_transfer_amount_2: "1100000", // 振込金額(円)

  // Bank Acct 3- 0011
  ba_fin_inst_3: "当行", // 金融機関名(選択)
  ba_branch_name_3: "ああ金3", // 支店名
  ba_deposit_type_3: "普通預金", // 預金種類
  ba_acct_no_3: "1200002", // 口座番号
  ba_recipient_name_3: "えーえ3", // お受取人お名前
  ba_recipient_name_kana_3: "エーエ", // お受取人カタカナ
  ba_transfer_amount_3: "1200000", // 振込金額(円)

  // BA record input values
  ba_status_value: "確認済", // 確認ステータス
  ba_branch_code_value: "143", // 支店コード
  ba_fee_amount_value: "1500000", // 手数料額(円) // ★ 新環境適用' New Env Implementation
  ba_fee_amount_value2: "1300000", // 手数料額(円) // ★ 新環境適用' New Env Implementation

  // Bank Acct CL 1
  ba_deposit_type_val: "当座預金", // 預金種類
  ba_recipient_name_val: "丹次郎", // お受取人お名前
  ba_institution_name_opt_val: "当行", // 金融機関名(選択)
  ba_recipient_kana_val: "タンジロ", // お受取人カタカナ
  ba_fin_institution_name_val: "大阪銀行", // 金融機関名
  ba_branch_code_val: "004", // 支店コード
  ba_branch_name_val: "大阪城", // 支店名
  ba_account_number_val1: "4560017", // 口座番号
  ba_transfer_amount_val1: "550000", // 振込金額(円)

  // Bank Acct CL 2
  ba_account_number_val2: "7890016", // 口座番号
  ba_transfer_amount_val2: "340000", // 振込金額(円)

  // APP 0011 83
  app_annual_income_value: "500", // 年収（万円）_登録
  app_annual_income_value1: "12000", // 年収（万円）_登録
  app_first_phone_value1: "070-1234-5678", // 第一電話番号_登録
  app_second_phone_value1: "070-1234-9101", // 第二電話番号_登録
  app_third_phone_value1: "070-1234-1121", // 第三電話番号_登録
  app_kana_office_name_value1: "アアアアイ", // カナ勤務先_登録
  app_kana_office_value: "ア", // カナ勤務先_登録
  app_kanji_office_value: "あ", // 漢字勤務先_登録
  app_office_name_value1: "あああああいい", // 漢字勤務先_登録
  app_second_phone_no_value: "090-0000-0000", // 第二電話番号_登録
  app_third_phone_no_value: "0000-00-0000", // 第三電話番号_登録

  // APP 0011
  app_execution_method_val: "自動実行", // 実行方法

  // AGR Reject 0011
  agr_reject_comment: "却下します。", // AGR 却下

  // Exec Values - 0012
  cancel_processing_status_value: "キャンセル", // 処理ステータス
  expected_status_value: "", // fj_status__c
  expected_status_value_before_editing: "自動実行連携失敗", // fj_status__c
  handling_no: "4789991", // 融資基本口座番号/カードローン口座番号
  processing_status_value: "自動実行完了", // 処理ステータス
  result_status: "00000000", // 実行結果処理ステータス
  batch_compiled: "", // CRON
  batch_executed: "", // CRON

  // App Values
  edit_desired_loan_date: "ご融資希望日を編集", // ご融資希望日
  cron_name: "自動実行バッチテスト", // DO NOT EDIT - will be updated automatically
  borrowing_status_dropdown: "実行済み", // 借入ステータス
  handling_number_value: "0000001", // 取扱番号(口座番号)

  // Record Types
  acceptance_text: "申込受付",
  bank_account_registration_rectype: "払込先口座登録",
  clProd_name: "フリーローン", //商品名
  ddp_record_type2: "CIF明細選択",
  condition_check_rectype: "条件確認",
  contract_agreement_rectype: "契約同意",
  contract_conclusion_rectype: "契約成立",
  borrowing_rectype: "お借入中", // ★ 新環境適用' New Env Implementation
  er_2_rectype: "2_融資基本_開設",
  er_6_rectype: "6_証書貸付_返済条件登録",
  er_7_rectype: "7_証書貸付_実行",
  er_12_rectype: "12_カードローン_口座開設",
  er_13_rectype: "13_普通預金_貸越契約",
  er_14_rectype: "14_カードローン回収",
  er_19_rectype: "19_カードローン実行",
  er_21_rectype: "21_カードローン口座閉鎖",
  er_23_rectype: "23_振込伝票",
  ini2_rectype: "銀行審査②（取引情報取得）",
  ini3_rectype: "銀行審査③（外形チェック）",
  pending_agreement_approval_rectype: "契約同意承認待ち",
  ver1_record_type: "①申込受付後", // ★ 新環境適用' New Env Implementation
  ver2_record_type: "②契約手続き前", // ★ 新環境適用' New Env Implementation
  sec1_rectype: "外信照会①", // ★ 新環境適用' New Env Implementation
  gud1_rectype: "保証審査①", // ★ 新環境適用' New Env Implementation
  gud2_rectype: "保証審査②", // ★ 新環境適用' New Env Implementation
  gud3_rectype: "保証審査③", // ★ 新環境適用' New Env Implementation
  recondition_confirmation: "再条件確認",
  exam_result_compliance_rectype: "審査結果(応諾)", // ★ 新環境適用' New Env Implementation
  rdc1_rectype: "勤務先確認資料", // ★ 新環境適用' New Env Implementation
  rdc3_rectype: "その他", // ★ 新環境適用' New Env Implementation

  // Email
  mail_time: "",

  /**|================================================================================|
   * | TEXT/LABELS/BUTTONS                                                            |
   * |================================================================================|
   */

  // Buttons
  approve_btn: "承認",
  back_btn: "　戻る　",
  clone_btn: "Clone",
  confirm_btn: "確認",
  save_btn: "保存",
  sf_saveedit_btn: "SaveEdit",
  submit_type_btn: "submit",
  addline_btn_lbl: "行追加",
  addrow_submit_btn: "登録",
  gud_amount_reduction_btn: "選択を選択済みに移動",
  recalculate_btn_label: "再計算",
  approved_text: "承認済み",
  close_btn_img: "閉じる",
  delete_confirm_btn: "確認",
  next_btn: "次へ",
  reexecute_confirm: "OK",
  reject_confirm_btn: "不備",
  slip_output_btn: "伝票出力",
  return_btn: "戻る",
  app_new_ba_record_btn: "新規銀行口座",
  confirm_btn_cdd: "確定",

  // Headers/Sections
  aml_section: "顧客AMLチェック結果情報",
  app_fourth_tab_edit_section: "実行依頼データ",
  asc_header: "反社照会",
  ba_header: "銀行口座",
  foreigninq_header: "外信照会",
  jid_rel_list_jib: "JICC結果(債権情報)",
  jio_rel_list_name: "JICC照会明細(他機関)",
  rdc_header: "徴求書類",
  run_registration_sectionrun_registration_section: "実行登録",
  scoring_result_section: "スコアリング結果",
  scroll_header: "作成者", // to go to designated header (also used in KIL/KOC records)

  // Record Buttons
  acceptance_judgement_edit_btn: "諾否判定 の編集",
  app_cif_no_edit_btn: "全店顧客番号を編集",
  app_first_phone_no_edit_btn: "第一電話番号_登録を編集",
  asc_antisocial_results_edit_btn: "反社照会結果 の編集",
  assurance_review_edit_btn: "保証審査連携ステータス の編集",
  ba_display_flag_edit_btn: "銀行口座表示フラグを編集",
  ba_status_edit_btn: "確認ステータス の編集",
  borrowing_status_edit_btn: "借入ステータスを編集",
  ddp_status_edit_pencil: "同一人照会ステータス の編集",
  defect_reason_edit_btn: "不備理由 の編集",
  edit_pencil_cdd: "店番号 の編集",
  exam_approval_collab_status_edit_btn: "審査決裁連携ステータス の編集",
  execution_method_edit_btn: "実行方法を編集",
  ini_executive_confirmation_edit_btn: "所管部確認結果 の編集",
  ini2_linkage_status_pencil: "クレジットカード情報連携ステータス の編集",
  loan_upper_limit_edit: "融資額(調整上限)を編集",
  manager_edit_button: "担当者を編集",
  pscore_edit_btn: "Pスコア限度額（単位：万円） の編集",
  lcd_onloan_edit_btn: "既貸回収フラグ の編集",
  jicc_edit_pencil: "JICC照会ステータス の編集",
  ksc_edit_pencil: "KSC照会ステータス の編集",
  secondary_chk_pencil: "外信照会ステータス の編集",
  app_repayment_bank_account_edit_btn: "返済用銀行口座を編集", // ★ 新環境適用' New Env Implementation

  // Labels
  // 0001
  app_manager_label: "担当者",
  bra_search_lbl: "すべて選択 リストビューを検索します。", // ★ 新環境適用' New Env Implementation

  // 0003
  // ★ 新環境適用' New Env Implementation
  cdd_birth_date: "生年月日",
  cdd_zip_code: "郵便番号",
  cdd_phone_number1: "第一電話番号",
  cdd_phone_number2: "第二電話番号",
  cdd_phone_number3: "第三電話番号",
  cdd_prefectural_code: "住所コード＿都道府県コード",
  cdd_city_code: "住所コード＿市区町村コード",
  cdd_oaza_common_name_code: "住所コード＿大字通称コード",
  cdd_character_code: "住所コード＿字丁目コード",
  cdd_kanji_name: "漢字氏名",
  cdd_kanji_add1: "住所１",
  cdd_customer_number: "顧客番号",
  cdd_bra_no_label: "店番号",
  ddp_status: "同一人照会ステータス",
  cdd_cif_no_lbl: "店別顧客番号", // ★ 新環境適用' New Env Implementation

  // 0004
  lcd_account_closed_flag_label: "口座閉鎖フラグ",
  ini_aml_etc_check_linkage_status_label: "AML等チェック連携ステータス",
  ini_customer_aml_check_federation_status_label:
    "顧客AMLチェック連携ステータス",
  ini2_linkage_status_lbl: "クレジットカード情報連携ステータス",
  ini3_jurisdiction_confirmation_result_label: "所管部確認結果",
  lcd_on_loan_collection_flag_label: "既貸回収フラグ",
  ini3_other_3_label: "その他3",
  ini3_review_information_linkage_status_label: "審査情報連携ステータス",
  ini3_scoring_information_linkage_status_label:
    "スコアリング情報連携ステータス",
  ini3_solar_storage_battery_label: "ソーラー・蓄電池",
  ini3_subsidy_pension_label: "給振・年金",
  ini3_fixed_comment_field: "定型コメント", // ★ 新環境適用' New Env Implementation
  ini3_check_result_1_title: "チェック結果文言１",
  ini3_message_1: "メッセージ文言１", // ★ 新環境適用' New Env Implementation
  ini3_message_2: "メッセージ文言２", // ★ 新環境適用' New Env Implementation

  // 0005
  jia_code_label: "注意コード ( 新ファイルM )",
  jio_overdue_label: "支払遅延の有無（CIC交流）", // 支払遅延の有無（CIC交流）field
  jicc_status_label: "JICC照会ステータス",
  ksc_status_label: "KSC照会ステータス",
  secondary_chk_label: "外信照会ステータス",
  kit_kana_lbl: "氏名（カナ）",
  kit_loanamt_lbl: "限度額/当初貸出額",
  jib_loan_amt_lbl: "貸付金額",
  jim_type_transact_val: "融資", // For all JIM records
  kit_loanamtcard_lbl: "内カードローン限度額",
  kit_contractdate_lbl: "成約日/実行日",
  kit_balance_lbl: "残債額",
  kit_last_repayment_date_lbl: "最終返済日",
  kit_transaction_type_lbl: "取引種類", // 取引種類 field
  kil_attribchangedate_lbl: "本人属性変更日",
  kil_declarecategory_lbl: "本人申告区分",
  kil_declaredate_lbl: "申告日",
  trr_lbl: "借入明細情報一覧", // ★ 新環境適用' New Env Implementation
  type_transact_lbl: "取引形態区分", // 取引形態区分 field label (also used in JIB records)
  debt_lbl: "債権分類",
  total_bal_lbl: "トータル残高金額",
  loan_amt_lbl: "契約額/極度額",
  used_date_lbl: "利用日",
  balance_lbl: "残高",
  lendingdate_lbl: "貸付日",
  guaranteeflg_lbl: "担保有無",

  // 0006
  exs_exam_approval_collab_status_lbl: "審査決裁連携ステータス",
  exs_withdrawal_reason_lbl: "取下げ事由を選択",
  exs_pscore_limit_lbl: "Pスコア限度額（単位：万円）", // ★ 新環境適用' New Env Implementation
  exs_pscore_limit_credit_lbl: "Pスコア限度額(修正)（単位：万円）", // ★ 新環境適用' New Env Implementation
  exs_approval_comment_input_label: "決裁コメント", // ★ 新環境適用' New Env Implementation
  exs_cancel_comment_lbl: "取下げ事由", // ★ 新環境適用' New Env Implementation
  trr_detail_type_lbl: "種類", // ★ 新環境適用' New Env Implementation
  trr_kana_name_lbl: "氏名カナ", // ★ 新環境適用' New Env Implementation
  trr_lending_date_lbl: "融資実行日", // ★ 新環境適用' New Env Implementation
  trr_loan_amount_lbl: "融資金額", // ★ 新環境適用' New Env Implementation
  trr_balance_lbl: "残債額", // ★ 新環境適用' New Env Implementation
  trr_annual_repayment_lbl: "年間返済額", // ★ 新環境適用' New Env Implementation

  // 0007
  gud_guarantee_no_lbl: "保証番号",
  gud_guarantee_date_lbl: "通知日",
  gud_guarantee_condition_lbl: "保証条件",
  gud_orico_lbl: "チェックコード",
  gud_exp_date_lbl: "保証有効期限",
  gud_result_based_interest_lbl: "審査結果基準利率(%)",
  gud_assurance_review_lbl: "保証審査連携ステータス",
  gud_decision_lbl: "諾否判定",
  gud_guarantee_term_lbl: "保証期間", // ★ 新環境適用' New Env Implementation
  gud_review_result_lbl: "保証審査結果",
  gud_review_decision: "自動応諾",

  // 0008
  asc_antisocial_inquiry_status_lbl: "反社照会ステータス",
  asc_antisocial_results_lbl: "反社照会結果",

  // 0009
  cre_examination_result_loan_conditions_label: "審査結果ご融資条件",
  cre_loan_terms_lbl: "条件確認ご融資条件",

  // 0010
  app_cif_no_lbl: "全店顧客番号",
  app_cif_linkage_status_lbl: "顧客番号再取得連携ステータス",
  app_basic_loan_acc_no_lbl: "融資基本口座番号",
  rdc_app_label: "申込",
  rdc_document_category_label: "書類カテゴリ",
  rdc_req_document_status_label: "徴求書類ステータス",
  ver_error_toast_lbl: "エラー",
  rdc_document_category_value: "その他",
  rdc_req_document_status_value: "書類追加",
  app_loan_upper_limit_lbl: "融資額(調整上限)", // ★ 新環境適用' New Env Implementation
  app_repayment_bank_account_label: "返済用銀行口座", // ★ 新環境適用' New Env Implementation
  ba_repayment_flag_label: "返済用フラグ", // ★ 新環境適用' New Env Implementation
  ba_financial_inst_code_label: "金融機関コード", // ★ 新環境適用' New Env Implementation
  ba_institution_type_label: "金融機関種類", // ★ 新環境適用' New Env Implementation
  ba_deposit_type_ordinary_bank_label: "預金種類（普通銀行）", // ★ 新環境適用' New Env Implementation
  ba_financial_inst_code_ordinary_bank_label: "金融機関コード(普通銀行)", // ★ 新環境適用' New Env Implementation
  ba_financial_inst_name_ordinary_bank_label: "金融機関名(普通銀行)", // ★ 新環境適用' New Env Implementation
  ba_branch_code_ordinary_label: "支店コード(普通銀行)", // ★ 新環境適用' New Env Implementation
  ba_branch_name_ordinary_bank_label: "支店名(普通銀行)", // ★ 新環境適用' New Env Implementation
  ba_account_number2_label: "口座番号(普通銀行)", // ★ 新環境適用' New Env Implementation

  // 0011
  agr_contract_acceptance_flag_lbl: "契約同意フラグ",
  agr_contract_agreement_datetime_lbl: "契約同意確認日時",
  agr_date_lbl: "日付",
  agr_time_lbl: "時間",
  agr_reject_label: "却下",
  app_annual_income_lbl: "年収（万円）_登録",
  app_firstphone_lbl: "第一電話番号_登録",
  app_kanaoffice_lbl: "カナ勤務先_登録",
  app_officename_lbl: "漢字勤務先_登録",
  app_secondphone_lbl: "第二電話番号_登録",
  app_thirdphone_lbl: "第三電話番号_登録",
  ba_acct_lbl: "取引先",
  ba_branch_code_lbl: "支店コード",
  ba_deposit_type_lbl: "預金種類",
  ba_display_flag_lbl: "銀行口座表示フラグ",
  ba_fin_institution_name_lbl: "金融機関名",
  ba_input_acct_no_lbl: "口座番号",
  ba_input_acct_type_lbl: "預金種類",
  ba_input_branch_name_lbl: "支店名",
  ba_input_fin_inst_lbl: "金融機関名(選択)",
  ba_input_rcp_name_lbl: "お受取人お名前",
  ba_input_rcp_name_kana_lbl: "お受取人カタカナ",
  ba_payee_flag_lbl: "振込先フラグ",
  ba_status_lbl: "確認ステータス",
  ba_transfer_amount_lbl: "振込金額(円)",
  ba_account_fee_label: "手数料額(円)", // ★ 新環境適用' New Env Implementation

  // 0012
  app_borrowing_status_label: "借入ステータス",
  app_handling_number_label: "取扱番号(口座番号)",
  app_preferred_loan_date_label: "ご融資希望日",
  execresult_processing_status_label: "処理ステータス",
  handling_no_label: "取扱番号", // ★ 新環境適用' New Env Implementation
  loan_account_no_label: "融資基本口座番号/カードローン口座番号", // ★ 新環境適用' New Env Implementation
  result_status_label: "実行結果処理ステータス", // ★ 新環境適用' New Env Implementation

  // PRO
  pro_base_rate: "ベースレート",
  pro_cloan_interest_rate_usage_flag_lbl: "カードローン金利利用フラグ",
  pro_housewife_husband_app_flg: "主婦/主夫申込可能フラグ",
  pro_pref_interest_rates_other: "優遇利率(他ローン取引)",
  pro_min_amount_eligible_pref_interest_rates: "金利優遇対象下限額(超)",
  pro_view: "優遇利率(スコアリングランクC)", //In order to view the 金利優遇対象下限額(超)

  // Common
  kana_name_lbl: "カナ氏名", // ★ 新環境適用' New Env Implementation
  guarantee_amt_lbl: "保証額",
  app_execution_method_lbl: "実行方法",
  rdc_defect_reason_lbl: "不備理由",

  // MyPage Labels/headers/etc
  mypage_bonus_use_lbl: "半年ごと増額返済(ボーナス返済)",
  mypage_loan_terms_and_conditions_lbl:
    "以下をご融資の条件とさせていただきます",

  // MyPage Buttons
  completion_btn: "完了",
  mark_as_read_btn: "既読にする",
  mypage_accept_contract_btn: "契約に同意する",
  mypage_next_btn: "決定", // ★ 新環境適用' New Env Implementation
  mypage_ba_new_btn: "登録", // ★ 新環境適用' New Env Implementation
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_confirmation_btn: "確認画面へ",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_loan_adjustment_confirm_btn: "内容確認へ",
  mypage_submit_btn: "確定する",

  // Sort
  app_asc: "昇順に並び替え済み",
  app_desc: "降順に並び替え済み",
  appid_col: "申込ID",
  appdate_col: "作成日",
  applog_no_col: "申込ログNo",
  lcd_sort: "貸出共通明細番号",
  mypage_app_status_sort: "お手続き状況",
  mypage_amount_sort: "お借入希望額",
  recycle_date_sort: "削除日",
  sort_app_col: "お申込番号",
  sort_control_no_header: "管理番号",
  sort_wnt_col: "お知らせ番号",

  // Listview
  cif_rel_list: "勤務先情報",
  my_bin_listview: "私のごみ箱",
  org_bin_listview: "組織のごみ箱",
  // ★ 新環境適用' New Env Implementation
  all_account_listview: "すべての取引先",
  all_contact_listview: "すべての取引先責任者",
  all_app_listview: "☆Ａｌｌ",
  all_listview: "すべて選択",
  all_mu_listview: "★すべて選択",

  // Text
  search_textbox: "enter-search",
  alert_txt: "一致チェック結果を更新して宜しいでしょうか？",
  downloads_text: "Downloads", // ★ 新環境適用' New Env Implementation
  app_success: "お申し込みありがとうございました。",

  /**|================================================================================|
   * | APIs                                                                           |
   * |================================================================================|
   */
  // Buttons
  api_agr_confirm_btn: "FJ_AgreementProcess__c.Fj_AgreementProcessConfirm",
  api_agr_reject_btn:
    "sfdc:StandardButton.ProcessInstanceWorkitem.ApprovalProcessReject",
  api_asc_reject_btn: "FJ_AntiSocial__c.Fj_AntiSocial_Reject",
  api_ba_new_btn: "sfdc:StandardButton.clcommon__Bank_Account__c.New",
  api_ba_delete_btn: "clcommon__Bank_Account__c.Fj_BankAccountDeleter",
  api_initialcheck_accept_btn: "FJ_InitialChk__c.Fj_InitialChkAccept",
  api_initialcheck_cancel_btn: "FJ_InitialChk__c.Fj_InitialChk_Cancel",
  api_initialcheck_reject_btn: "FJ_InitialChk__c.Fj_InitialChkReject",
  api_rdc_accept_btn: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  api_ver_accept_btn: "FJ_Verification__c.Fj_Verification_Accept",
  cdd_create: "sfdc:StandardButton.FJ_NameDedupe_Candidate__c.New",
  cre_approval_button: "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  cre_cancel_button: "FJ_CreditApproval__c.Fj_CreditApproval_Cancel",
  cre_reject_button: "FJ_CreditApproval__c.Fj_CreditApproval_Reject",
  delete_btn_api: "FJ_RequiredDocument__c.Fj_RequirdDocmentFileDeleter",
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  external_scoring_cancel_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoring_Cancel",
  external_scoring_reject_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringReject",
  guarantee_confirm_api:
    "FJ_GuaranteeChkDetail__c.FJ_GuaranteeChkDetailConfirm",
  new_rdc_btn_api: "sfdc:StandardButton.FJ_RequiredDocument__c.New",
  pscore_limit_credit: "fj_PScore_Credit_Limit_Edit__c",
  process_instance_approve_api:
    "sfdc:StandardButton.ProcessInstanceWorkitem.ApprovalProcessApprove",
  reexecute_scoring_btn_api: "FJ_ExternalScoring__c.Fj_ScoringReCallOut",
  requested_start_date_api: "fj_Requested_Start_Date__c",
  required_docu_reject_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Reject",
  verify_docu_accept_api: "FJ_Verification__c.Fj_Verification_Accept",
  jid_create: "sfdc:StandardButton.FJ_JICC_InquiryDetail__c.New",
  kio_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Official__c.New",
  kil_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Decl__c.New",
  kic_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_CIC__c.New",
  kij_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_JICC__c.New",
  kit_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Tran__c.New",
  kid_create: "sfdc:StandardButton.FJ_KSC_InquiryDetail__c.New",
  jib_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_Debt__c.New",
  jia_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_AM__c.New",
  jim_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_M__c.New",
  jio_other_create: "sfdc:StandardButton.FJ_JICC_InquiryDetail_Other__c.New",
  asc_accept_btn_api: "FJ_AntiSocial__c.Fj_AntiSocial_Accept",

  /**|================================================================================|
   * | COMMON CODE VARIABLES                                                          |
   * |================================================================================|
   */
  // Select app from App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  // MyPage - commonly used
  home_mypage: "ホーム",
  see_app: "すべて表示",
  see_wnt: "すべての お知らせ を参照",

  /**|================================================================================|
   * | IDENTIFIERS/COUNTERS                                                           |
   * |================================================================================|
   */
  ba_new_record_no_value: 3,
  jib_new_record_no_value: 3,
  jim_new_record_no_value: 3,
  kit_new_record_no_value: 3,
  trr_flag_no_of_unchecked: 3,
  logged_status: "",

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec00: "00",
  data: "_data",
  tab0001: "0001",
  tab0002: "0002",
  tab0003: "0003",
  tab0004: "0004",
  tab0005: "0005",
  tab0006: "0006",
  tab0007: "0007",
  tab0008: "0008",
  tab0009: "0009",
  tab0010: "0010",
  tab0011: "0011",
  tab0012: "0012",

  /**|================================================================================|
   * | CSV APPLICATION CREATION                                                           |
   * |================================================================================|
   */
  // ★ 新環境適用' New Env Implementation
  // File name
  application_csv_filename: "CSV連携データ(申込)_00.csv",

  // Record 1
  csv_value1_requesterkanji: "藤井　六", // 氏名漢字
  csv_value1_requestermailaddress: "dummymail07192301@fujitsu.com", // メールアドレス
  csv_value1_systemacceptno: "2307190001", // システム受付番号
  csv_value1_birthday: "19600101", // 生年月日

  // Record 2
  csv_value2_requesterkanji: "藤本　六", // 氏名漢字
  csv_value2_requestermailaddress: "dummymail07192302@fujitsu.com", // メールアドレス
  csv_value2_systemacceptno: "2307190002", // システム受付番号
  csv_value2_birthday: "19610202", // 生年月日

  // Record 3
  csv_value3_requesterkanji: "藤田　六", // 氏名漢字
  csv_value3_requestermailaddress: "dummymail07192303@fujitsu.com", // メールアドレス
  csv_value3_systemacceptno: "2307190003", // システム受付番号
  csv_value3_birthday: "19620303", // 生年月日

  // API headers
  csv_head_requesterkanji: "fj_Requester_Kanji_Name__c",
  csv_head_requestermailaddress: "fj_Requester_Mail_Address__c",
  csv_head_systemacceptno: "fj_System_Acception_No__c",
  csv_head_storeno: "fj_Store_Number__c",
  csv_head_accountno: "fj_Account_No__c",
  csv_head_requestdate: "fj_Request_Date__c",
  csv_head_requesterkana: "fj_Requester_Kana_Name__c",
  csv_head_sextype: "fj_Sex_Type__c",
  csv_head_birthday: "fj_Birthday__c",
  csv_head_postcode: "fj_Home_Post_Code__c",
  csv_head_homeaddress: "fj_Home_Address__c",
  csv_head_homekanaaddress: "fj_Home_Kana_Address2__c",
  csv_head_homephoneno: "fj_Home_Phone_No__c",
  csv_head_mobilephoneno: "fj_Mobile_Phone_No__c",
  csv_head_familystructure: "fj_Family_Structure_Type__c",
  csv_head_dependentcount: "fj_Dependent_With_Principal_Count__c",
  csv_head_residentialtype: "fj_Residential_Type__c",
  csv_head_residentialcopayment: "fj_Residential_Copayment_Monthly_Money__c",
  csv_head_residentialyears: "fj_Sms_Residential_Years__c",
  csv_head_companykana: "fj_Company_Kana_Name__c",
  csv_head_companykanji: "fj_Company_Kanji_Name__c",
  csv_head_department: "fj_Department__c",
  csv_head_businesscode: "fj_Sms_Business_Code__c",
  csv_head_employeecount: "fj_Employee_Count_Type__c",
  csv_head_companypostcode: "fj_Company_Post_Code__c",
  csv_head_workaddress: "fj_Work_Address__c",
  csv_head_workphone: "fj_Work_Phone_No__c",
  csv_head_workcode: "fj_Sms_Work_Code__c",
  csv_head_managerialposition: "fj_Sms_Managerial_Position_Code__c",
  csv_head_employmentformats: "fj_Sms_Employment_Formats_Code__c",
  csv_head_companykind: "fj_Sms_Company_Kind_Code__c",
  csv_head_fyincome: "fj_Preceding_Fiscal_Year_Income__c",
  csv_head_workyears: "fj_Sms_Work_Years__c",
  csv_head_insurancetype: "fj_Sms_Insurance_Type__c",
  csv_head_residentialmonthlymoney: "fj_Residential_Monthly_Money_For_Years__c",
  csv_head_residentioalbonusmoney: "fj_Residential_Bonus_Money_For_Years__c",
  csv_head_maidenkana: "fj_Maiden_Kana_Name__c",
  csv_head_maidenkanji: "fj_Maiden_Kanji_Name__c",
  csv_head_productcode: "fj_Product_Code__c",
  csv_head_requesttype: "fj_Request_Type__c",
  csv_head_requestprice: "fj_Request_Price__c",
  csv_head_term: "fj_Term__c",
  csv_head_usepurpose: "fj_Use_Purpose_Type__c",
  csv_head_mediatype: "fj_Pr_Media_Type__c",
  csv_head_applicationtype: "fj_Application_Type__c",
  csv_head_cardinsurancetype: "fj_InsuranceCardNameType__c", // ★ 新環境適用' New Env Implementation
  csv_head_preferredcontact: "fj_PreferredContact__c", // ★ 新環境適用' New Env Implementation
  csv_head_incometype: "fj_IncomeType__c", // ★ 新環境適用' New Env Implementation
  csv_head_noofchildren: "fj_NumberOfChildren__c", // ★ 新環境適用' New Env Implementation

  // Record 1
  csv_value1_storeno: "001", // 取引支店（預金口座店番）
  csv_value1_accountno: "0101011", // 返済用口座番号（預金口座番号）
  csv_value1_requestdate: "20230101", // 申込日
  csv_value1_requesterkana: "イノウエ　ナナ", // 氏名カナ
  csv_value1_sextype: "1", // 性別
  csv_value1_postcode: "0600000", // 郵便番号
  csv_value1_homeaddress: "島根県松江市大正町０４２８２０２３０１", // 自宅住所漢字
  csv_value1_homekanaaddress: "アーアアア０４２８２０２３０１", // 自宅住所カナ
  csv_value1_homephoneno: "9001-01-0001", // 自宅電話番号
  csv_value1_mobilephoneno: "900-2002-0002", // 携帯電話番号
  csv_value1_familystructure: "A", // ご家族（同一生計家族）コード
  csv_value1_dependentcount: "0", // その他同居家族の人数
  csv_value1_residentialtype: "A", // お住まい（住居）コード
  csv_value1_residentialcopayment: "", // 家賃
  csv_value1_residentialyears: "10.0", // 居住年数
  csv_value1_companykana: "カブシキガイシャダイイチキンムサキ", // 勤務先カナ
  csv_value1_companykanji: "株式会社第一勤務先", // 勤務先漢字
  csv_value1_department: "製造部", // 勤務先所属部
  csv_value1_businesscode: "AO", // 事業内容（勤務先業種）コード
  csv_value1_employeecount: "1", // 従業員数
  csv_value1_companypostcode: "0640941", // 勤務先郵便番号
  csv_value1_workaddress: "島根県松江市袖師町１－１０１", // 勤務先住所漢字
  csv_value1_workphone: "9003-03-0003", // 勤務先電話番号
  csv_value1_workcode: "A", // お仕事の内容コード
  csv_value1_managerialposition: "B", // 役職コード
  csv_value1_employmentformats: "D", // 就業形態コード
  csv_value1_companykind: "C", // 勤務先の種類コード
  csv_value1_fyincome: "5500000.0", // 前年度年収
  csv_value1_workyears: "10", // 勤続年数
  csv_value1_insurancetype: "A", // 健康保険証の種類コード
  csv_value1_residentialmonthlymoney: "", // 住宅ローン返済額(年間)
  csv_value1_residentioalbonusmoney: "", // 住宅ローン返済額(増額返済月)
  csv_value1_maidenkana: "タナカ　イチ", // 旧姓カナ
  csv_value1_maidenkanji: "島　一", // 旧姓漢字
  csv_value1_productcode: "63000001", // 商品コード
  csv_value1_requesttype: "1", // 新規増額区分
  csv_value1_requestprice: "150000.0", // 申込金額
  csv_value1_term: "36.0", // 融資期間
  csv_value1_usepurpose: "BD", // おつかいみち（資金使途）コード
  csv_value1_mediatype: "A", // 申込きっかけコード
  csv_value1_applicationtype: "1", // 申込形態
  csv_value1_cardinsurancetype: "01", // 健康保険証名義 // ★ 新環境適用' New Env Implementation
  csv_value1_preferredcontact: "1", // ご希望の連絡先 // ★ 新環境適用' New Env Implementation
  csv_value1_incometype: "01", // 収入の形態 // ★ 新環境適用' New Env Implementation
  csv_value1_noofchildren: "2", // 子供数 // ★ 新環境適用' New Env Implementation

  // Record 2
  csv_value2_storeno: "002", // 取引支店（預金口座店番）
  csv_value2_accountno: "0101012", // 返済用口座番号（預金口座番号）
  csv_value2_requestdate: "20230101", // 申込日
  csv_value2_requesterkana: "イノウエ　ハチ", // 氏名カナ
  csv_value2_sextype: "1", // 性別
  csv_value2_postcode: "0600000", // 郵便番号
  csv_value2_homeaddress: "島根県松江市大正町０４２８２０２３０２", // 自宅住所漢字
  csv_value2_homekanaaddress: "アーアアア０４２８２０２３０２", // 自宅住所カナ
  csv_value2_homephoneno: "9001-01-0001", // 自宅電話番号
  csv_value2_mobilephoneno: "900-2002-0002", // 携帯電話番号
  csv_value2_familystructure: "A", // ご家族（同一生計家族）コード
  csv_value2_dependentcount: "0", // その他同居家族の人数
  csv_value2_residentialtype: "A", // お住まい（住居）コード
  csv_value2_residentialcopayment: "", // 家賃
  csv_value2_residentialyears: "10.0", // 居住年数
  csv_value2_companykana: "カブシキガイシャダイイチキンムサキ", // 勤務先カナ
  csv_value2_companykanji: "株式会社第一勤務先", // 勤務先漢字
  csv_value2_department: "製造部", // 勤務先所属部
  csv_value2_businesscode: "AO", // 事業内容（勤務先業種）コード
  csv_value2_employeecount: "1", // 従業員数
  csv_value2_companypostcode: "0640941", // 勤務先郵便番号
  csv_value2_workaddress: "島根県松江市袖師町１－１０１", // 勤務先住所漢字
  csv_value2_workphone: "9003-03-0003", // 勤務先電話番号
  csv_value2_workcode: "A", // お仕事の内容コード
  csv_value2_managerialposition: "B", // 役職コード
  csv_value2_employmentformats: "D", // 就業形態コード
  csv_value2_companykind: "C", // 勤務先の種類コード
  csv_value2_fyincome: "5500000.0", // 前年度年収
  csv_value2_workyears: "10", // 勤続年数
  csv_value2_insurancetype: "A", // 健康保険証の種類コード
  csv_value2_residentialmonthlymoney: "", // 住宅ローン返済額(年間)
  csv_value2_residentioalbonusmoney: "", // 住宅ローン返済額(増額返済月)
  csv_value2_maidenkana: "タナカ　ニ", // 旧姓カナ
  csv_value2_maidenkanji: "島　ニ", // 旧姓漢字
  csv_value2_productcode: "63000001", // 商品コード
  csv_value2_requesttype: "1", // 新規増額区分
  csv_value2_requestprice: "400000.0", // 申込金額
  csv_value2_term: "5.0", // 融資期間
  csv_value2_usepurpose: "BD", // おつかいみち（資金使途）コード
  csv_value2_mediatype: "A", // 申込きっかけコード
  csv_value2_applicationtype: "1", // 申込形態
  csv_value2_cardinsurancetype: "01", // 健康保険証名義 // ★ 新環境適用' New Env Implementation
  csv_value2_preferredcontact: "1", // ご希望の連絡先 // ★ 新環境適用' New Env Implementation
  csv_value2_incometype: "01", // 収入の形態 // ★ 新環境適用' New Env Implementation
  csv_value2_noofchildren: "2", // 子供数 // ★ 新環境適用' New Env Implementation

  // Record 3
  csv_value3_storeno: "003", // 取引支店（預金口座店番）
  csv_value3_accountno: "0101013", // 返済用口座番号（預金口座番号）
  csv_value3_requestdate: "20230101", // 申込日
  csv_value3_requesterkana: "イノウエ　キュウ", // 氏名カナ
  csv_value3_sextype: "1", // 性別
  csv_value3_postcode: "0600000", // 郵便番号
  csv_value3_homeaddress: "島根県松江市大正町０４２８２０２３０３", // 自宅住所漢字
  csv_value3_homekanaaddress: "アーアアア０４２８２０２３０３", // 自宅住所カナ
  csv_value3_homephoneno: "9001-01-0001", // 自宅電話番号
  csv_value3_mobilephoneno: "900-1001-0002", // 携帯電話番号
  csv_value3_familystructure: "A", // ご家族（同一生計家族）コード
  csv_value3_dependentcount: "0", // その他同居家族の人数
  csv_value3_residentialtype: "A", // お住まい（住居）コード
  csv_value3_residentialcopayment: "", // 家賃
  csv_value3_residentialyears: "10.0", // 居住年数
  csv_value3_companykana: "カブシキガイシャダイイチキンムサキ", // 勤務先カナ
  csv_value3_companykanji: "株式会社第一勤務先", // 勤務先漢字
  csv_value3_department: "製造部", // 勤務先所属部
  csv_value3_businesscode: "AO", // 事業内容（勤務先業種）コード
  csv_value3_employeecount: "1", // 従業員数
  csv_value3_companypostcode: "0640941", // 勤務先郵便番号
  csv_value3_workaddress: "島根県松江市袖師町１－１０１", // 勤務先住所漢字
  csv_value3_workphone: "9001-01-0003", // 勤務先電話番号
  csv_value3_workcode: "A", // お仕事の内容コード
  csv_value3_managerialposition: "B", // 役職コード
  csv_value3_employmentformats: "D", // 就業形態コード
  csv_value3_companykind: "C", // 勤務先の種類コード
  csv_value3_fyincome: "5500000.0", // 前年度年収
  csv_value3_workyears: "10", // 勤続年数
  csv_value3_insurancetype: "A", // 健康保険証の種類コード
  csv_value3_residentialmonthlymoney: "", // 住宅ローン返済額(年間)
  csv_value3_residentioalbonusmoney: "", // 住宅ローン返済額(増額返済月)
  csv_value3_maidenkana: "タナカ　サン", // 旧姓カナ
  csv_value3_maidenkanji: "島　さん", // 旧姓漢字
  csv_value3_productcode: "63000001", // 商品コード
  csv_value3_requesttype: "1", // 新規増額区分
  csv_value3_requestprice: "500000.0", // 申込金額
  csv_value3_term: "10.0", // 融資期間
  csv_value3_usepurpose: "BD", // おつかいみち（資金使途）コード
  csv_value3_mediatype: "A", // 申込きっかけコード
  csv_value3_applicationtype: "1", // 申込形態
  csv_value3_cardinsurancetype: "01", // 健康保険証名義 // ★ 新環境適用' New Env Implementation
  csv_value3_preferredcontact: "1", // ご希望の連絡先 // ★ 新環境適用' New Env Implementation
  csv_value3_incometype: "01", // 収入の形態 // ★ 新環境適用' New Env Implementation
  csv_value3_noofchildren: "2", // 子供数 // ★ 新環境適用' New Env Implementation
};
