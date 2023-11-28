const user_info = require("./global_info"); // ★ 新環境適用' New Env Implementation
export const testData = {
  /**|================================================================================|
   * | VALUES TO UPDATE                                                               |
   * |================================================================================|
   */

  // Choose an existing community user
  input_birthdate: "19770101",
  kanji_name1: "前 お",

  // CLI
  input_key: "2023112413391062", // Please change value if running 0001-1 again within 30 mins
  cust_no: "0804425795", // Change customer number
  input_bra_no: "011",

  // Application form
  contact_detail:
    "GDC)Gurly Automation Test 11/24/2023 Spec70 Test 7 One Process", // ご要望事項

  // Application records
  // Please update Application names based on App records created on 0001
  app_id: "",
  app_name: "APP-0000001460", // 教育ローン(カード型)
  app_id2: "",
  app_name2: "APP-0000001461", // 保証付きカードローン（随弁型）

  // 0003 CDD input
  // Update based on birthdate of community user
  cdd_bday_val: "S520101", // 生年月日 Showa 52 (1977)
  kanji_name2: "取引 先", // choose an existing business partner/account

  // 0011 - お借入内容調整画面
  // MyPage Borrowing Adjustment Screen Inputs
  mypage_loan_date_value: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***
  mypage_loan_date_value2: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***
  mypage_borrow_amount_val: "500", // 万円 - can be left blank, automatic value will be half of original value

  /**|================================================================================|
   * | URLs                                                                           |
   * |================================================================================|
   */
  mypage_url: "",
  downloads_url: "chrome://downloads/",
  httpurl01: user_info.environmentLinks.app_form_link + "/auth?sid=70", // Authentication page // ★ 新環境適用' New Env Implementation
  httpurl02: user_info.environmentLinks.app_form_link + "/loan?pc=70&cli=", // Application form // ★ 新環境適用' New Env Implementation
  httpurl03: "o/FJ_ApplicationAccessLog__c/list?filterName=", // Application Log page
  httpurl04: "o/Account/list?filterName=", // Account listview
  httpurl05: "o/Contact/list?filterName=", // Contact listview
  httpurl06: "o/FJ_CIF_Infomation__c/new?count=1&nooverride=1", // New 新規CIF情報
  httpurl07: "o/genesis__Applications__c/list?filterName=", // App list
  httpurl08:
    "setup/ObjectManager/01I7F000002I87u/FieldsAndRelationships/00N0T00000APF14/view", // Object manage fj_NegativeCheckFlg__c

  /**|================================================================================|
   * | RECORD VALUES (INPUT/OUTPUT)                                                   |
   * |================================================================================|
   */
  // AUTHENTICATION PAGE
  // Auth Value 1 - Error
  auth_acct_name_last_value1: "1", // * 口座カナ氏名 セイ
  auth_acct_name_first_value1: "1", // * 口座カナ氏名 メイ
  auth_birth_value1: "11", // * 生年月日
  auth_acct_no_value1: "1", // * 口座番号
  auth_pinword_value1: "1", // * 暗証番号

  // Auth Value 2
  auth_acct_name_last_value2: "アーイ", // * 口座カナ氏名 セイ
  auth_acct_name_first_value2: "オウ", // * 口座カナ氏名 メイ
  auth_birth_value2: "19920131", // * 生年月日
  auth_branch_value2: "032", // * （取引店番）支店名
  auth_acct_no_value2: "1234567", // * 口座番号
  auth_pinword_value2: "1234", // * 暗証番号

  // CLI record creation values
  kana_name: "アアア アア",
  gender: "男",
  kana_add1: "ｼﾏﾈｹﾝﾏﾂｴｼｿﾃﾞｼﾁｮｳ40",
  kana_add_code: "32201056000",
  postal_code: "060-0000",
  kanji_add1: "島根県松江市袖師町４０",
  phone_no1: "0000-00-0001",
  phone_no2: "000-0000-0002",
  phone_no3: "0000-00-0000",
  annual_income: "1000",
  current_pref_code: "32",
  input_kana_name: "アアア アア",
  input_acct_type: "12",
  input_acct_no: "6901232",
  input_m_pin: "1234",
  kana_office_name: "アアアアア",
  office_name: "あああああ",

  // logic values
  isFalse: false,
  isTrue: true,
  isUndefined: undefined,

  // STEP 1
  amount_check: "1", // お借り入れ限度額審査
  loan_app_identical_person: "01", // * 健康保険証　名義
  loan_app_insurance_card_type: "01", // * 健康保険証　種類
  contact_phone_1: "0003", // * 電話番号（日中ご連絡可能な番号）1
  contact_phone_2: "03", // * 電話番号（日中ご連絡可能な番号）2
  contact_phone_3: "0003", // * 電話番号（日中ご連絡可能な番号）3

  // STEP 2
  child_name_last: "お名", // * お名前-姓
  child_name_first: "前", // * お名前-名
  child_name_kana_last: "アエ", // * お名前　フリガナ-セイ
  child_name_kana_first: "イオ", // * お名前　フリガナ-メイ
  school_kind: "01", // * 就学（予定）先
  school_name: "就学（予定）先", // 学校名
  school_faculty: "学部", // 学部、学科、コース
  grade: "04", // *  学年
  graduation_year: "2025", // * ご卒業予定　年
  graduation_month: "3", // * ご卒業予定　月
  card_password: "1234", // * 暗証番号
  immediate_borrowing_amount: "500", // 即日貸越希望額
  has_salary_transfer: "2", // * 当行での給与振込または年金受取指定（ご本人）
  has_mortgage: "2", // * 当行での住宅ローンのご利用
  living_together: "1", // * 同居ご家族の有無
  has_spouse: "1", // * 配偶者の有無
  children: "1", // * お子さまの人数
  other_family: "1", // * その他同居家族の人数
  living_type: "01", // * 現在のお住まいの種類
  residence_year: "2001", // * 現在のお住まいに住み始めた時期 年
  residence_month: "1", // * 現在のお住まいに住み始めた時期 年
  annual_income: "500", // * 前年個人年収(税込)
  income_type: "01", // * 収入の形態
  working_style: "01", // * 職業
  business_type: "04", // * お勤め先の種類
  office_name: "あああああああああああああ", // * お勤め先名称
  office_kana: "アアアアアアアアアアアアア", // * お勤め先名称フリガナ
  work_contents: "04", // * お仕事の内容
  enter_company_year: "2001", // * 入社（営業開始）年
  enter_company_month: "1", // * 入社（営業開始）月
  zip_code_1: "064", // * お勤め先住所 郵便番号 1
  zip_code_2: "0941", // * お勤め先住所 郵便番号 2
  office_address_detail: "あああああ", // ビル名など
  office_phone1: "0000", // * お勤め先電話番号1
  office_phone2: "00", // * お勤め先電話番号2
  office_phone3: "0000", // * お勤め先電話番号3
  employee_division: "01", // * 従業員数
  capital: "01", // * 資本金
  industry: "01", // 事業内容（業種）

  // STEP 3
  use_detail: "お使いみち", // * お使いみち
  introduction_branch_exist: "2", // * 紹介店 有無
  question: "01", // * アンケート

  // STEP 4
  email_err: "1111111111", // * メールアドレス
  pwd_err: "1234567", // * マイページパスワード
  combination: "1", // 同時に申し込む

  // Record Types
  acceptance_rectype: "申込受付",
  bankacct_rectype: "払込先口座登録",
  borrowing_rectype: "お借入中",
  condition_check_rectype: "条件確認",
  contract_agreement_rectype: "契約同意",
  contract_conclusion_rectype: "契約成立",
  ddp_cifline_rectype: "CIF明細選択",
  exam_result_compliance_rectype: "審査結果(応諾)",
  ini2_rectype: "銀行審査②（取引情報取得）",
  ini3_rectype: "銀行審査③（外形チェック）",
  pending_agreement_approval_rectype: "契約同意承認待ち",
  rdc1_rectype: "勤続年数確認資料",
  sec1_rectype: "外信照会①",
  ver_document_confirmation1_rectype: "①申込受付後",
  ver_document_confirmation2_rectype: "②契約手続き前",

  // Email
  mail_time: "",

  // CIF Input
  cif_no_val: "2000010", // 店別顧客番号

  // CDD Input
  cdd_kana_name_val: "ｱｱｱ ｱｱ", // カナ氏名

  // APP
  app_address_code: "", // fj_AddressCode__c

  // DDP (CIF明細選択) value
  ddp_completioninquiry_val: "取引有無照会完了", // 同一人照会ステータス
  ddp_inquirycomplete_val: "同一人照会完了", //同一人照会ステータス

  // INI (銀行審査②（取引情報取得）) input value
  ini2_linked_val: "連携済み", // クレジットカード情報連携ステータス

  // INI (銀行審査③（外形チェック）) input values
  ini3_aml_status_val: "連携済み", // AML等チェック連携ステータス
  ini3_bank_scoring_status_val: "連携済み", // スコアリング情報連携ステータス
  ini3_check_result_val: "リストに該当しませんでした。", // チェック結果文言１
  ini3_cooperation_exam_status_val: "連携済み", // 審査情報連携ステータス
  ini3_customer_aml_check_status_val: "連携済み", // 顧客AMLチェック連携ステータス
  ini3_fixed_comment_val: "該当しない", // 定型コメント
  ini3_msg1_val: "テスト１", // メッセージ文言１
  ini3_msg2_val: "テスト２", // メッセージ文言２
  ini3_notapplicable_val: "該当しない", // 所管部確認結果

  // CHI record
  chi_credit_rank_val: "S", // fj_Credit_Rank__c
  chi_fixed_deposit_val: 3000000, // fj_FixedDepositBalance__c
  chi_liquid_deposit_val: 5000000, // fj_LiquidDepositBalance__c

  // SCI record
  sci_account_open_date1_val: "2005-10-01", // fj_AccountOpenDate__c

  // ASC record
  asc_transaction_ban_code_val: "001",

  // LCD records
  // 1st LCD record
  lcd_basic_loan_account_val1: "8330002", // fj_BasicLoanAccountNo__c
  lcd_bra_no_val1: "032", // fj_BraNo__c
  lcd_collateral_classification_val1: "3", // fj_CollateralClassification__c
  lcd_credit_limit_val1: 5000000, // fj_CreditLimit__c
  lcd_current_balance_val1: 11000, // fj_CurrentBalance__c
  lcd_guarantee_no_val1: "11111", // fj_GuaranteeNo__c
  lcd_handling_no_val1: "8330003", // fj_HandlingNo__c
  lcd_initial_lending_date_val1: "2023-02-21", // fj_InitialLendingDate__c
  lcd_interest_rate_val1: "1", // fj_InterestRate__c
  lcd_last_repayment_date_val1: "2024-05-21", // fj_LastRepaymentDate__c
  lcd_loan_name_val1: "ローン", // fj_LoanName__c
  lcd_subject_code_val1: "48", // fj_SubjectCode__c

  // 2nd LCD record
  lcd_basic_loan_account_val2: "8330003", // fj_BasicLoanAccountNo__c
  lcd_bra_no_val2: "032", // fj_BraNo__c
  lcd_collateral_classification_val2: "2", // fj_CollateralClassification__c
  lcd_credit_limit_val2: 4000000, // fj_CreditLimit__c
  lcd_current_balance_val2: 12100, // fj_CurrentBalance__c
  lcd_guarantee_no_val2: "22222", // fj_GuaranteeNo__c
  lcd_handling_no_val2: "8330004", // fj_HandlingNo__c
  lcd_initial_lending_date_val2: "2023-03-22", // fj_InitialLendingDate__c
  lcd_interest_rate_val2: "2", // fj_InterestRate__c
  lcd_last_repayment_date_val2: "2024-06-22", // fj_LastRepaymentDate__c
  lcd_loan_name_val2: "ローン１", // fj_LoanName__c
  lcd_subject_code_val2: "12", // fj_SubjectCode__c

  // 3rd LCD record
  lcd_basic_loan_account_val3: "8330005", // fj_BasicLoanAccountNo__c
  lcd_bra_no_val3: "032", // fj_BraNo__c
  lcd_collateral_classification_val3: "2", // fj_CollateralClassification__c
  lcd_credit_limit_val3: 200000, // fj_CreditLimit__c
  lcd_current_balance_val3: 131000, // fj_CurrentBalance__c
  lcd_guarantee_no_val3: "33333", // fj_GuaranteeNo__c
  lcd_handling_no_val3: "8330005", // fj_HandlingNo__c
  lcd_initial_lending_date_val3: "2023-04-23", // fj_InitialLendingDate__c
  lcd_interest_rate_val3: "3", // fj_InterestRate__c
  lcd_last_repayment_date_val3: "2024-07-23", // fj_LastRepaymentDate__c
  lcd_loan_name_val3: "ローン２", // fj_LoanName__c
  lcd_subject_code_val3: "10", // fj_SubjectCode__c

  // LCD output
  lcd12_code: "12", // fj_SubjectCode__c
  lcd48_code: "48", // fj_SubjectCode__c

  // CABI record
  cabi_deposit_val: 500000, // fj_EA_Deposit__c
  cabi_deposit_subtotal_val: 500000, // fj_EA_DepositSubtotal__c
  cabi_total_deposit_val: 500000, // fj_EA_TotalDeposit__c
  cabi_domestic_stock_val: 100000, // fj_EA_DomesticStock__c
  cabi_domestic_bond_val: 100000, // fj_EA_DomesticBond__c
  cabi_other_domestic_investment_trust_val: 0, // fj_EA_OtherDomesticInvestmentTrust__c
  cabi_mrf_val: 0, // fj_EA_MRF__c
  cabi_fund_wrap_val: 0, // fj_EA_FundWrap__c
  cabi_foreign_stocks_val: 120000, // fj_EA_ForeignStocks__c
  cabi_foreign_bond_val: 180000, // fj_EA_ForeignBond__c
  cabi_other_fit_val: 0, // fj_EA_OtherFIT__c
  cabi_foreign_currency_mmf_val: 0, // fj_EA_ForeignCurrencyMMF__c
  cabi_other_val: 0, // fj_EA_Other__c

  // CABF record
  cabf_deposit_date_val: "2023-10-03", // fj_DepositDate__c
  cabf_foreign_currency_amount_val: 60000, // fj_ForeignCurrencyAmount__c
  cabf_foreign_currency_deposit_account_no_val: "0010008", // fj_ForeignCurrencyDepositAccountNo__c
  cabf_initial_deposit_amount_val: 100000, // fj_InitialDepositAmount__c
  cabf_initial_deposit_date_val: "2023-08-01", // fj_InitialDepositDate__c
  cabf_maturity_date_val: "2024-03-24", // fj_MaturityDate__c
  cabf_product_name_val: "あ", // fj_ProductName__c
  cabf_yen_amount_val: 100000, // fj_YenAmount__c

  // BLA record
  bla_basic_loan_account_no_val: "0010005", // fj_BasicLoanAccountNo__c

  // CLA record
  cla_existing_card_loan_credit_limit_val: 500, // fj_ExistingCardLoan_CreditLimit__c
  cla_existing_card_loan_interest_rate_code_val: "0.1", // fj_ExistingCardLoan_InterestRateCode__c

  // SEC1 - JICC
  jicc_status_val: "回答受信完了", // JICC照会ステータス

  // JIM (All) - 0005
  jim_type_transact_val: "融資", // 取引形態区分

  // JIM(1) - 0005
  jim_debt_val1: "JP", // 債権分類
  jim_total_bal_val1: 200000, // トータル残高金額
  jim_amt_val1: 5000000, // 契約額/極度額, 保証額
  jim_used_date_val1: "2023/10/01", // 利用日

  // JIM(2) - 0005
  jim_debt_val2: "JL", // 債権分類
  jim_total_bal_val2: 100000, // トータル残高金額
  jim_amt_val2: 2000000, // 契約額/極度額, 保証額
  jim_used_date_val2: "2023/07/01", // 利用日

  // JIM(3) - 0005
  jim_debt_val3: "OU", // 債権分類
  jim_total_bal_val3: 1000000, // トータル残高金額
  jim_amt_val3: 2000000, // 契約額/極度額, 保証額
  jim_used_date_val3: "2024/01/01", // 利用日

  // JIA(1) - 0005
  jia_code_val1: "延滞後完済", // 注意コード ( 新ファイルM )

  // JIA(2) - 0005
  jia_code_val2: "保証履行", // 注意コード ( 新ファイルM )

  // JIA(3) - 0005
  jia_code_val3: "延滞後貸倒", // 注意コード ( 新ファイルM )

  // JIB(1) - 0005
  jib_type_transact_val1: "クレジットカード（キャッシング）", // 取引形態区分
  jib_debt_val1: "AA", // 債権分類
  jib_lend_date_val1: "2023/09/02", // 貸付日
  jib_amt_val1: 5000000, // 貸付金額
  jib_bal_val1: 1000000, // 残高

  // JIB(2) - 0005
  jib_type_transact_val2: "担保付融資", // 取引形態区分
  jib_debt_val2: "BA", // 債権分類
  jib_lend_date_val2: "2023/10/01", // 貸付日
  jib_amt_val2: 4000000, // 貸付金額
  jib_bal_val2: 1000000, // 残高

  // JIB(3) - 0005
  jib_type_transact_val3: "担保付融資", // 取引形態区分
  jib_debt_val3: "RU", // 債権分類
  jib_lend_date_val3: "2023/10/01", // 貸付日
  jib_amt_val3: 1000000, // 貸付金額
  jib_bal_val3: 100000, // 残高

  // JIB(4) - 0005
  jib_type_transact_val4: "融資", // 取引形態区分
  jib_debt_val4: "JL", // 債権分類
  jib_lend_date_val4: "2023/07/01", // 貸付日
  jib_amt_val4: 5000000, // 貸付金額
  jib_bal_val4: 0, // 残高

  // JIO - 0005
  jio_overdue_val: "元本遅延なし　利息遅延なし", // 支払遅延の有無（CIC交流）

  // KIT (All) - 0005
  name_kana_val: "ｱ-ｱ-ｱ-ｱ", // 氏名（カナ）
  kit_loanamt_val: 1, // 限度額/当初貸出額

  // KIT(1) - 0005
  kit_transaction_type_val1: "カードローン", // 取引種類
  kit_guaranteeflg_val1: "3", // 担保有無
  kit_bal_val1: 100, // 残債額
  kit_loanamt_val1: 200, // 限度額/当初貸出額
  kit_contractdate_val1: "2023/10/01", // 成約日/実行日
  kit_last_repayment_val1: "2023/01/02", // 最終返済日
  kit_completiontype_val1: "01", // 完了区分
  kit_loanamt_card_val1: 200, // 内カードローン限度額

  // KIT(2) - 0005
  kit_transaction_type_val2: "手形割引", // 取引種類
  kit_guaranteeflg_val2: "1", // 担保有無
  kit_contractdate_val2: "2023/11/01", // 成約日/実行日
  kit_loanamt_val2: 200, // 限度額/当初貸出額
  kit_bal_val2: 100, // 残債額
  kit_completiontype_val2: "01", // 完了区分
  kit_last_repayment_val2: "2023/01/10", // 最終返済日

  // KIT(3) - 0005
  kit_transaction_type_val3: "証書貸付", // 取引種類
  kit_guaranteeflg_val3: "1", // 担保有無
  kit_contractdate_val3: "2023/12/01", // 成約日/実行日
  kit_loanamt_val3: 300, // 限度額/当初貸出額
  kit_bal_val3: 100, // 残債額
  kit_completiontype_val3: "02", // 完了区分
  kit_last_repayment_val3: "2023/01/16", // 最終返済日

  // KIJ - 0005
  kij_loanamt_val: 100, // 限度額/当初貸出額

  // KIL - 0005
  kil_attrib_changedate_val: "2023/01/03", // 本人属性変更日
  kil_declare_category_val: "B", // 本人申告区分
  kil_declare_date_val: "2023/03/01", // 申告日

  // KIO - 0005
  kio_official_report_val: "更正手続開始", // 官報公示項目

  // SEC1 - SecondaryChk
  sec_secondary_chk_val: "実施済OK", // 外信照会ステータス

  // EXS input values
  exs_approval_comment_val: "70-1-(22)", // 決裁コメント
  exs_exam_cooperation_status_val: "連携済み", // 審査決裁連携ステータス
  exs_pscore_limit_val: "800", //  Pスコア限度額（単位：万円）
  exs_firstmodepd_val: "0.0002", // fj_1st_ModePD__c
  exs_firstadditionalpd_val: "0.0001", // fj_1st_AdditionalPD__c

  // TRR input values
  trr_balance_val: "1000000", // 残債額
  trr_collateral_class_val: "有担保", // 担保区分
  trr_detail_type_val: "融資", // 種類
  trr_kana_name_val: "アアア アア", // 氏名カナ
  trr_lending_date_val: "2023/10/31", // 融資実行日
  trr_loan_amt_val: "5000000", // 融資金額
  trr_repayment_amt_val: "800000", // 年間返済額
  row_flag1: "2", // 再計算
  row_flag2: "5", // 再計算
  row_flag3: "8", // 再計算

  // CRE Output
  cre_product_code: "", // fj_ProductCode__c

  // CRE input
  cre_loan_terms_val:
    "シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)" +
    "シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ" +
    "70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)" +
    "シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1-(22)シナリオ70-1", // 条件確認ご融資条件

  // RDC input
  rdc_defect_reason_val: "blurred", // 不備理由
  defect_reason_no_val: "", // 不備理由

  // APP input values
  app_execution_method_val: "自動実行", // 実行方法
  app_basic_acct_no_val: "1234567", // 融資基本口座番号
  app_cif_no_val: "1234567ABC", // 全店顧客番号
  app_cif_linkage_status_val: "手動照会済み", // 顧客番号再取得連携ステータス
  app_first_phone_no_val: "0000-00-0000", // 第一電話番号_登録
  app_second_phone_no_val: "090-0000-0000", // 第二電話番号_登録
  app_third_phone_no_val: "0000-00-0000", // 第三電話番号_登録
  app_kana_office_val: "ア", // カナ勤務先_登録
  app_annual_income_val: "500", // 年収（万円）_登録
  app_kanji_office_val: "あ", // 漢字勤務先_登録
  app_loan_amt_upper_limit_val2: "6000000", // 融資額(調整上限)

  // APP - BA input values (0010)
  ba_new_deposit_type_val: "普通預金", //預金種類
  ba_new_confirmation_status_val: "確認済", // 確認ステータス // ★ 新環境適用' New Env Implementation
  ba_new_financial_inst_name_optional_val: "当行", // 金融機関名(選択)
  ba_new_financial_inst_code_val: "0001", // 金融機関コード
  ba_new_financial_inst_code_ordinary_bank_val: "0001", //金融機関コード(普通銀行)
  ba_new_financial_inst_name_ordinary_bank_val: "サンプル銀行", // 金融機関名(普通銀行)
  ba_new_branch_code_ordinary_val: "001", // 支店コード(普通銀行)
  ba_new_branch_name_ordinary_bank_val: "本店営業部", // 支店名(普通銀行)
  ba_new_account_number2_val: "4870011", // 口座番号(普通銀行)
  ba_new_financial_inst_type_val: "銀行", // 金融機関種類
  ba_new_financial_inst_name_val: "サンプル銀行", //金融機関名
  ba_new_branch_code_val: "001", // 店コード
  ba_new_branch_name_val: "本店営業部", // 店名
  ba_new_account_number1_val: "4870011", // 口座番号
  ba_new_deposit_type_ordinary_bank_val: "普通預金", // 預金種類（普通銀行）// ★ 新環境適用' New Env Implementation

  // BA output values - 0010
  // ★ 新環境適用' New Env Implementation
  ba_status_code: "0", // 未確認

  // BA record input values (0011)
  ba_transferdate_val: "2023/02/24", // 口座振替登録完了予定日
  ba_confirmation_status_val: "確認済", // 確認ステータス
  ba_deposit_type_val: "当座預金", // 預金種類
  ba_recipient_name_val: "受取", // お受取人お名前
  ba_institution_name_opt_val: "当行", // 金融機関名(選択)
  ba_recipient_name_kana_val: "ウケトリ", // お受取人カタカナ
  ba_institution_type_val: "当行", // 金融機関種類
  ba_bank_code_val: "0000", // 金融機関コード
  ba_fin_inst_name_val: "融機", // 金融機関名
  ba_branch_code_val: "001", // 支店コード
  ba_branch_name_val1: "店名", // 支店名
  ba_branch_name_val2: "支店", // 支店名
  ba_branch_name_val3: "支店名", // 支店名
  ba_account_no_val: "3476982", // 口座番号
  ba_amount_val: "450,200", // 振込金額(円)
  ba_fee_amount_val: "1500000", // 手数料額(円) // ★ 新環境適用' New Env Implementation

  // 0011 - MyPage Loan Adjustment input values (お借入れ内容調整)
  mypage_repayment_date_val1: "1", // 毎月のお利息支払日
  mypage_repayment_date_val2: "1", // 毎月のお利息支払日

  // 0011 App Page input values
  app_loan_amt_upper_limit_val: "2000000", // 融資額(調整上限)

  // AGR input values
  agr_approve_comment_val: "シナリオ70-1-(22)", // コメント

  // Exec result output values
  exec_result_err_message_actual: "", // 処理エラーメッセージ
  exec_result_err_message_expected: "Callout error: Argument 2 cannot be null", // 処理エラーメッセージ
  exec_result_processing_status_actual: "", // 処理ステータス
  exec_result_processing_status_expected: "自動実行連携失敗", // 処理ステータス

  // Exec result input values
  exec_result_handling_no_val: "0000001", // 取扱番号
  exec_result_loan_acct_no_val: "1234567", // 融資基本口座番号/カードローン口座番号
  exec_result_processing_status_val: "自動実行完了", //処理ステータス
  exec_result_status_val: "00000000", // 実行結果処理ステータス

  /**|================================================================================|
   * | TEXT/LABELS/BUTTONS                                                            |
   * |================================================================================|
   */
  // Application form accordions
  acc_app_0001_1: "注意事項",
  acc_app_0001_2: "銀行に対する個人情報の取扱いに関する同意条項",
  acc_app_0001_3: "契約規定",
  acc_app_0001_4: "お手続きマイページ利用規約",

  // Application form PDFs
  pdf_file_download_link: "PDFファイルをダウンロード",

  // Application Page Buttons
  auth_agree_btn: "（確認画面へ進む）",
  back_btn: "　戻る　",
  verify_zip_btn: "住所自動入力",

  // Common Buttons
  approve_btn: "承認",
  cancel_btn: "キャンセル",
  confirm_btn: "確認",
  sf_canceledit_btn: "CancelEdit",
  sf_saveedit_btn: "SaveEdit",
  save_btn: "保存",
  submit_type_btn: "submit",
  arent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // Record Buttons
  app_cif_no_edit_btn: "全店顧客番号を編集",
  app_execution_method_edit_btn: "実行方法を編集",
  app_first_phone_no_edit_btn: "第一電話番号_登録を編集",
  app_loan_amt_max_edit_btn: "融資額(調整上限)を編集",
  app_new_ba_record_btn: "新規銀行口座",
  app_requested_start_date_edit_btn: "ご融資希望日を編集",
  ba_status_edit_btn: "確認ステータス の編集", // ★ 新環境適用' New Env Implementation
  cdd_bra_no_edit_btn: "店番号 の編集",
  ddp_samepersoninqstatus_edit_btn: "同一人照会ステータス の編集",
  exec_result_processing_status_edit_btn: "処理ステータス の編集",
  exs_exam_cooperation_status_edit_btn: "審査決裁連携ステータス の編集",
  ini_check_result_edit_btn: "チェック結果文言１ の編集",
  ini_compilation_declaration_edit_btn:
    "職域・協会けんぽ・イクボス・ファミボス宣言 の編集",
  ini_cooperation_edit_btn: "審査情報連携ステータス の編集",
  ini_creditcard_info_linkage_edit_btn:
    "クレジットカード情報連携ステータス の編集",
  ini_executive_confirmation_edit_btn: "所管部確認結果 の編集",
  jicc_edit_pencil: "JICC照会ステータス の編集",
  ksc_edit_pencil: "KSC照会ステータス の編集",
  lcd_onloan_edit_btn: "既貸回収フラグ の編集",
  rdc_defect_reason_edit_btn: "不備理由 の編集",
  repayment_bank_account_edit_btn: "返済用銀行口座を編集",
  secondary_chk_pencil: "外信照会ステータス の編集",
  trr_recalculate_btn: "再計算",
  trr_add_row_btn: "行追加",

  // Headers
  asc_header: "反社照会", // ★ 新環境適用' New Env Implementation
  ba_header: "銀行口座", // ★ 新環境適用' New Env Implementation
  bankexam_header: "銀行審査", // ★ 新環境適用' New Env Implementation
  bottom_related_list_header: "申込の履歴",
  contact_header: "取引先責任者",
  rdc_header: "徴求書類", // ★ 新環境適用' New Env Implementation
  scroll_header: "作成者", // to go to designated header (also used in KIL/KOC records)

  // Labels
  account_lbl: "取引先",
  approval_comment_input_label: "決裁コメント", // ★ 新環境適用' New Env Implementation
  app_annual_income_lbl: "年収（万円）_登録", // ★ 新環境適用' New Env Implementation
  app_ba_field_lbl: "返済用銀行口座",
  app_basic_loan_acct_no_lbl: "融資基本口座番号", // ★ 新環境適用' New Env Implementation
  app_cif_linkage_status_lbl: "顧客番号再取得連携ステータス",
  app_cif_no_lbl: "全店顧客番号", // ★ 新環境適用' New Env Implementation
  app_execution_method_lbl: "実行方法",
  app_first_phone_no_lbl: "第一電話番号_登録", // ★ 新環境適用' New Env Implementation
  app_kana_office_name_lbl: "カナ勤務先_登録", // ★ 新環境適用' New Env Implementation
  app_loan_amt_upper_limit_lbl: "融資額(調整上限)", // ★ 新環境適用' New Env Implementation
  app_office_name_lbl: "漢字勤務先_登録", // ★ 新環境適用' New Env Implementation
  app_requested_start_date_lbl: "ご融資希望日", // ★ 新環境適用' New Env Implementation
  app_second_phone_no_lbl: "第二電話番号_登録", // ★ 新環境適用' New Env Implementation
  app_third_phone_no_lbl: "第三電話番号_登録", // ★ 新環境適用' New Env Implementation
  ba_acct_lbl: "取引先",
  ba_amount_lbl: "振込金額(円)",
  ba_app_lbl: "申込",
  ba_confirmation_status_lbl: "確認ステータス",
  ba_deposit_type_ordinary_bank_lbl: "預金種類（普通銀行）", // ★ 新環境適用' New Env Implementation
  ba_fee_amount_lbl: "手数料額(円)", // ★ 新環境適用' New Env Implementation
  ba_new_account_number1_lbl: "口座番号",
  ba_new_account_number2_lbl: "口座番号(普通銀行)",
  ba_new_branch_code_lbl: "支店コード",
  ba_new_branch_name_lbl: "支店名",
  ba_new_branch_code_ordinary_lbl: "支店コード(普通銀行)",
  ba_new_branch_name_ordinary_bank_lbl: "支店名(普通銀行)",
  ba_new_deposit_type_lbl: "預金種類",
  ba_new_financial_inst_code_lbl: "金融機関コード",
  ba_new_financial_inst_code_ordinary_bank_lbl: "金融機関コード(普通銀行)",
  ba_new_financial_inst_name_optional_lbl: "金融機関名(選択)",
  ba_new_financial_inst_name_ordinary_bank_lbl: "金融機関名(普通銀行)",
  ba_new_financial_inst_type_lbl: "金融機関種類",
  ba_new_financial_inst_name_lbl: "金融機関名",
  ba_new_repayment_flag_lbl: "返済用フラグ",
  ba_payee_flag_lbl: "振込先フラグ",
  ba_recipient_name_lbl: "お受取人お名前", // ★ 新環境適用' New Env Implementation
  ba_recipient_name_kana_lbl: "お受取人カタカナ",
  ba_transfer_date_lbl: "口座振替登録完了予定日", // ★ 新環境適用' New Env Implementation
  cdd_add1_field_lbl: "住所コード＿都道府県コード", // ★ 新環境適用' New Env Implementation
  cdd_add2_field_lbl: "住所コード＿市区町村コード", // ★ 新環境適用' New Env Implementation
  cdd_add3_field_lbl: "住所コード＿大字通称コード", // ★ 新環境適用' New Env Implementation
  cdd_add4_field_lbl: "住所コード＿字丁目コード", // ★ 新環境適用' New Env Implementation
  cdd_address_field_lbl: "住所１", // ★ 新環境適用' New Env Implementation
  cdd_bday_field_lbl: "生年月日", // ★ 新環境適用' New Env Implementation
  cdd_cust_no_field_lbl: "顧客番号", // ★ 新環境適用' New Env Implementation
  cdd_kanji_field_lbl: "漢字氏名", // ★ 新環境適用' New Env Implementation
  cdd_kana_field_lbl: "カナ氏名", // ★ 新環境適用' New Env Implementation
  cdd_phone_1_field_lbl: "第一電話番号", // ★ 新環境適用' New Env Implementation
  cdd_phone_2_field_lbl: "第二電話番号", // ★ 新環境適用' New Env Implementation
  cdd_phone_3_field_lbl: "第三電話番号", // ★ 新環境適用' New Env Implementation
  cif_bra_no_field_lbl: "店番号", // ★ 新環境適用' New Env Implementation
  cif_no_field_lbl: "店別顧客番号", // ★ 新環境適用' New Env Implementation
  cre_loan_terms_lbl: "条件確認ご融資条件",
  exec_result_handling_no_lbl: "取扱番号", // ★ 新環境適用' New Env Implementation
  exec_result_loan_account_no_lbl: "融資基本口座番号/カードローン口座番号", // ★ 新環境適用' New Env Implementation
  exec_result_processing_status_lbl: "処理ステータス",
  exec_result_status_lbl: "実行結果処理ステータス", // ★ 新環境適用' New Env Implementation
  exs_exam_cooperation_status_lbl: "審査決裁連携ステータス",
  exs_pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  fixed_comment_field_lbl: "定型コメント", // ★ 新環境適用' New Env Implementation
  ini_aml_status_lbl: "AML等チェック連携ステータス",
  ini_bank_scoring_status_lbl: "スコアリング情報連携ステータス",
  ini_cooperation_exam_status_lbl: "審査情報連携ステータス",
  ini_check_result_field_lbl: "チェック結果文言１", // ★ 新環境適用' New Env Implementation
  ini_creditcard_info_linkage_status_lbl: "クレジットカード情報連携ステータス",
  ini_customer_aml_check_status_lbl: "顧客AMLチェック連携ステータス",
  ini_child_raising_fam_lbl: "子育て家庭",
  ini_creditcard_lbl: "クレジットカード",
  ini_executive_confirmation_lbl: "所管部確認結果",
  ini_msg1_field_lbl: "メッセージ文言１", // ★ 新環境適用' New Env Implementation
  ini_msg2_field_lbl: "メッセージ文言２", // ★ 新環境適用' New Env Implementation
  jia_code_lbl: "注意コード ( 新ファイルM )",
  jicc_status_lbl: "JICC照会ステータス",
  jib_balance_field_lbl: "残高", // ★ 新環境適用' New Env Implementation
  jib_lending_date_field_lbl: "貸付日", // ★ 新環境適用' New Env Implementation
  jib_loanamt_lbl: "貸付金額",
  jid_name_kana_field_lbl: "カナ氏名", // ★ 新環境適用' New Env Implementation
  jim_debt_field_lbl: "債権分類", // ★ 新環境適用' New Env Implementation
  jim_guaranteeamt_field_lbl: "保証額", // ★ 新環境適用' New Env Implementation
  jim_loanamt_field_lbl: "契約額/極度額", // ★ 新環境適用' New Env Implementation
  jim_total_bal_field_lbl: "トータル残高金額", // ★ 新環境適用' New Env Implementation
  jim_used_date_field_lbl: "利用日", // ★ 新環境適用' New Env Implementation
  jio_overdue_lbl: "支払遅延の有無（CIC交流）",
  kil_attrib_changedate_field_lbl: "本人属性変更日", // ★ 新環境適用' New Env Implementation
  kil_declare_category_field_lbl: "本人申告区分", // ★ 新環境適用' New Env Implementation
  kil_declare_date_field_lbl: "申告日", // ★ 新環境適用' New Env Implementation
  kit_completiontype_field_lbl: "完了区分", // ★ 新環境適用' New Env Implementation
  kit_contractdate_field_lbl: "成約日/実行日", // ★ 新環境適用' New Env Implementation
  kit_balance_lbl: "残債額", // ★ 新環境適用' New Env Implementation
  kit_guaranteeflg_field_lbl: "担保有無", // ★ 新環境適用' New Env Implementation
  kit_last_repayment_field_lbl: "最終返済日", // ★ 新環境適用' New Env Implementation
  kit_loanamt_card_field_lbl: "内カードローン限度額", // ★ 新環境適用' New Env Implementation
  kit_loanamt_lbl: "限度額/当初貸出額", // ★ 新環境適用' New Env Implementation
  kit_name_kana_field_lbl: "氏名（カナ）", // ★ 新環境適用' New Env Implementation
  ksc_status_lbl: "KSC照会ステータス",
  lcd_account_closed_flag_lbl: "口座閉鎖フラグ",
  lcd_on_loan_collection_flag_lbl: "既貸回収フラグ",
  official_report_lbl: "官報公示項目",
  rdc_defect_reason_lbl: "不備理由",
  searchacct_lbl: "すべての取引先 リストビューを検索します。",
  searchcontact_lbl: "All Contacts リストビューを検索します。",
  secondary_chk_lbl: "外信照会ステータス",
  transaction_type_lbl: "取引種類",
  trr_annual_repayment_lbl: "年間返済額", // ★ 新環境適用' New Env Implementation
  trr_balance_lbl: "残債額", // ★ 新環境適用' New Env Implementation
  trr_card_lbl: "カード",
  trr_collateral_classify_lbl: "担保区分", // ★ 新環境適用' New Env Implementation
  trr_detail_type_lbl: "種類", // ★ 新環境適用' New Env Implementation
  trr_kana_name_lbl: "氏名カナ", // ★ 新環境適用' New Env Implementation
  trr_lending_date_lbl: "融資実行日", // ★ 新環境適用' New Env Implementation
  trr_loan_amount_lbl: "融資金額", // ★ 新環境適用' New Env Implementation
  trr_record_lbl: "借入明細情報一覧", // ★ 新環境適用' New Env Implementation
  type_transact_lbl: "取引形態区分", // 取引形態区分 field label (also used in JIB records)

  // MyPage buttons
  mypage_accept_contract_btn: "契約に同意する",
  mypage_app_detail_btn: "詳細を確認",
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_confirmation_btn: "確認画面へ",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_loan_adjustment_confirm_btn: "内容確認へ",
  mypage_submit_btn: "確定する",
  mypage_rdc_view_record_btn: "ご提出",

  // MyPage Labels/headers/etc
  mypage_viewall_notif_link: "すべての お知らせ を参照",
  mypage_loan_terms_and_conditions_lbl:
    "以下をご融資の条件とさせていただきます",

  // MyPage Sort
  notif_sort: "お知らせ番号",

  // Sort
  app_asc: "昇順に並び替え済み",
  appid_col: "申込ID",
  applog_no_col: "申込ログNo",
  cif_col: "CIF情報ID",

  // Texts / Others
  approved_text: "承認済み",
  app_created_txt: "お申し込みありがとうございました。",
  app_submission_data_section: "実行依頼データ",
  ba_edit_title: "編集",
  jid_rel_list_jib: "JICC結果(債権情報)",
  jio_rel_list_name: "JICC照会明細(他機関)",
  reconfirmation_txt: "再条件確認",

  /**|================================================================================|
   * | APIs                                                                        |
   * |================================================================================|
   */
  // Buttons
  api_ba_new_btn: "sfdc:StandardButton.clcommon__Bank_Account__c.New",
  api_cdd_new_btn: "sfdc:StandardButton.FJ_NameDedupe_Candidate__c.New",
  api_creditapproval_accept_btn:
    "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  api_externalscoring_accept_btn:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  api_initialcheck_accept_btn: "FJ_InitialChk__c.Fj_InitialChkAccept",
  api_jia_create_btn: "sfdc:StandardButton.FJ_JICC_InquiryResult_AM__c.New",
  api_jib_create_btn: "sfdc:StandardButton.FJ_JICC_InquiryResult_Debt__c.New",
  api_jid_inquiry_detail_new_btn:
    "sfdc:StandardButton.FJ_JICC_InquiryDetail__c.New",
  api_jim_create_btn: "sfdc:StandardButton.FJ_JICC_InquiryResult_M__c.New",
  api_jio_other_create_btn:
    "sfdc:StandardButton.FJ_JICC_InquiryDetail_Other__c.New",
  api_kic_create_btn: "sfdc:StandardButton.FJ_KSC_InquiryResult_CIC__c.New",
  api_kid_create_btn: "sfdc:StandardButton.FJ_KSC_InquiryDetail__c.New",
  api_kij_create_btn: "sfdc:StandardButton.FJ_KSC_InquiryResult_JICC__c.New",
  api_kil_create_btn: "sfdc:StandardButton.FJ_KSC_InquiryResult_Decl__c.New",
  api_kio_create_btn:
    "sfdc:StandardButton.FJ_KSC_InquiryResult_Official__c.New",
  api_kit_create_btn: "sfdc:StandardButton.FJ_KSC_InquiryResult_Tran__c.New",
  api_rdc_accept_btn: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  api_rdc_reject_btn: "FJ_RequiredDocument__c.Fj_RequiredDocument_Reject",
  api_ver_accept_btn: "FJ_Verification__c.Fj_Verification_Accept",

  /**|================================================================================|
   * | COMMON CODE VARIABLES                                                          |
   * |================================================================================|
   */
  // Listview
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",
  all_aal_listview: "すべて選択", // ★ 新環境適用' New Env Implementation
  all_account_listview: "すべての取引先", // ★ 新環境適用' New Env Implementation
  all_contact_listview: "All Contacts", // ★ 新環境適用' New Env Implementation
  all_app_listview: "すべて選択", // ★ 新環境適用' New Env Implementation

  // MyPage - commonly used
  see_app: "すべて表示",
  sort_app: "降順に並び替え済み",
  mark_as_read_btn: "既読にする",
  completion_btn: "完了",

  /**|================================================================================|
   * | IDENTIFIERS/COUNTERS                                                           |
   * |================================================================================|
   */
  auth_agree: "",
  da_record_count: 0,
  logged_status: "",
  newWin: "",
  trr_row_uncheck_count: 3, // ★ 新環境適用' New Env Implementation
  two_records_of_cif: 2, // ★ 新環境適用' New Env Implementation
  three_created_records: 3, // ★ 新環境適用' New Env Implementation
  four_created_records: 4, // ★ 新環境適用' New Env Implementation

  /**|================================================================================|
   * | QUERIES                                                                        |
   * |================================================================================|
   */
  query_0001_16_1:
    "SELECT Id, Name, CreatedDate, clcommon__Email__c, fj_BirthDate__c FROM Account where clcommon__Email__c=",
  query_0001_16_2: " and fj_Birthdate__c=",
  query_0001_45:
    "SELECT Id, Name, fj_Loan_Amount_Requested__c, fj_Loan_Amount__c, fj_Term_Requested__c, genesis__Term__c, " +
    "fj_Interest_Rate_Requested__c, genesis__Interest_Rate__c, fj_Bonus_Repayment_Requested__c, fj_Bonus_Repayment__c, " +
    "fj_Bonus_Month_Requested__c, fj_Bonus_Month__c, fj_Bonus_Percent_Requested__c, fj_Bonus_Percent__c FROM genesis__Applications__c " +
    "WHERE Name = ",
  query_0004_01:
    "SELECT Id, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name =",
  query_0005_02:
    "SELECT Id, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name =",
  query_0006_03:
    "SELECT Id, fj_InterestRate_InitialChk__c FROM genesis__Applications__c Where Name =",
  query_0006_14:
    "SELECT Id, fj_Credit_Rank__c, fj_HasOverdue__c, fj_TransactionBanCode__c, fj_WorkDurationMonth__c, " +
    "fj_RefApplication__r.fj_JICC_KSC_NegaCount__c, fj_RefApplication__r.fj_SecondaryChk_NegaCount__c FROM " +
    "FJ_ExternalScoring__c WHERE name=",
  query_0006_17:
    "SELECT Id, fj_1st_ModePD__c,fj_1st_AdditionalPD__c, fj_ApplicationProduct__c FROM FJ_ExternalScoring__c WHERE name= ",
  query_0009_04:
    "SELECT Id, fj_Loan_Amount_GuaranteeChk__c, genesis__Loan_Amount__c,fj_Term_GuaranteeChk__c, genesis__Term__c, " +
    "fj_Interest_Rate_GuaranteeChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0009_08:
    "SELECT Id, fj_Loan_Amount_Calculated__c, fj_Term_Calculated__c, fj_Interest_Rate_Calculated__c FROM " +
    "genesis__Applications__c WHERE Name =",
  query_0009_09:
    "SELECT fj_RefCLProduct__c, fj_Guarantee_Company__c, fj_SubCategory__c, fj_ProductCode__c FROM FJ_ProductCodeMaster__c " +
    "WHERE fj_DoGuaranteeChk__c = TRUE and fj_RefCLProduct__c=",
  query_0009_16:
    "SELECT Id, fj_CustomerMemo__c FROM genesis__Applications__c WHERE Name =",
  query_0012_38_1:
    "SELECT Id, CronJobDetail.Name FROM CronTrigger WHERE CronJobDetail.Name =",
  query_0012_38_2:
    "SELECT Id, ApexClass.Name, Status, ExtendedStatus, NumberOfErrors, CreatedDate, " +
    "JobType, CronTriggerId FROM AsyncApexJob WHERE Crontriggerid =",

  /**|================================================================================|
   * | CRON                                                                           |
   * |================================================================================|
   */
  batch_compiled: false,
  batch_executed: false,
  cron_id: "",
  cron_name: "自動実行バッチテスト", // DO NOT EDIT - value will be updated automatically

  /**|================================================================================|
   * | SCREENSHOT                                                                     |
   * |================================================================================|
   */
  // ★ 新環境適用' New Env Implementation
  spec70: "70-1-(22)",
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
   * | RECORDS                                                                        |
   * |================================================================================|
   */
  account_id: "",
  account_name: "",
  account_id2: "",
  account_name2: "",
  agr_id: "",
  agr_name: "",
  asc_id: "",
  asc_name: "",
  ba_id: "",
  ba_name: "",
  ba_id2: "",
  ba_name2: "",
  bla_id: "",
  bla_name: "",
  cdd_id: "",
  cdd_name: "",
  chi_id: "",
  chi_name: "",
  cif_id: "",
  cif_name: "",
  cli_id: "",
  cnt_id: "",
  cnt_name: "",
  cnt_id2: "",
  cnt_name2: "",
  contact_id: "",
  contact_name: "",
  contact_id2: "",
  contact_name2: "",
  cabi_id: "",
  cabi_name: "",
  cabf_id: "",
  cabf_name: "",
  cla_id: "",
  cla_name: "",
  cre_id: "",
  cre_name: "",
  ddp_id: "",
  ddp_name: "",
  exec_result_id: "",
  exec_result_name: "",
  exm_id: "",
  exm_name: "",
  exs_id: "",
  exs_name: "",
  jia1_id: "",
  jia1_name: "",
  jia2_id: "",
  jia2_name: "",
  jia3_id: "",
  jia3_name: "",
  jio_id: "",
  jio_name: "",
  jib1_id: "",
  jib1_name: "",
  jib2_id: "",
  jib2_name: "",
  jib3_id: "",
  jib3_name: "",
  jib4_id: "",
  jib4_name: "",
  jim1_id: "",
  jim1_name: "",
  jim2_id: "",
  jim2_name: "",
  jim3_id: "",
  jim3_name: "",
  ini_id: "",
  ini_name: "",
  jid_id: "",
  jid_name: "",
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
  kit1_id: "",
  kit1_name: "",
  kit2_id: "",
  kit2_name: "",
  kit3_id: "",
  kit3_name: "",
  listview_id: "", // ★ 新環境適用' New Env Implementation
  listview2_id: "", // ★ 新環境適用' New Env Implementation
  listview3_id: "", // ★ 新環境適用' New Env Implementation
  listview4_id: "", // ★ 新環境適用' New Env Implementation
  mnt_id: "",
  mnt_name: "",
  mnt_id2: "",
  mnt_name2: "",
  pc_id: "",
  pc_name: "",
  pro_id: "",
  pro_name: "",
  rdc_id: "",
  rdc_name: "",
  rdc_id2: "",
  rdc_name2: "",
  sci_id: "",
  sci_name: "",
  sec_id: "",
  sec_name: "",
  trr_id: "",
  trr_name: "",
  ver_id: "",
  ver_name: "",
  ver_id2: "",
  ver_name2: "",
  ver_id3: "",
  ver_name3: "",
  wnt_id: "",
  wnt_name: "",
  wnt_id2: "",
  wnt_name2: "",

  // Arrays
  ba_id_arr: [], // ★ 新環境適用' New Env Implementation
  ba_name_arr: [], // ★ 新環境適用' New Env Implementation
  da_id_arr: [],
  da_name_arr: [],
  da_account_arr: [],
  jim_id_arr: [],
  jim_name_arr: [],
  jib_id_arr: [],
  jib_name_arr: [],
  kit_id_arr: [],
  kit_name_arr: [],
  lcd_id_arr: [],
  lcd_name_arr: [],
  lcd12_id_arr: [],
  lcd12_name_arr: [],
  lcd48_id_arr: [],
  lcd48_name_arr: [],
  rdc_id_arr: [],
  rdc_name_arr: [],
};
