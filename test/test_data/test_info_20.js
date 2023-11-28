const user_info = require("./global_info");
export const testData = {
  /**|================================================================================|
   * | VALUES TO UPDATE                                                               |
   * |================================================================================|
   */
  app_name: "APP-0000001417", // 多目的ローン
  app2_name: "APP-0000001418", // 保証付きカードローン（随弁型）

  // Application field values - existing user
  name_last: "前", //お名前 姓 *
  name_first: "お", //お名前 名 *
  birth_year: "1977", //生年月日 年 *
  birth_month: "1", //生年月日 月 *
  birth_day: "1", //生年月日 日 *
  contact_detail: "GDC)Gizelle Automation Test 11/08/2023 Spec20 Test 1", //ご要望事項★シナリオ番号を記載 *

  // 0011
  mypage_loan_date_value: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***

  /**|================================================================================|
   * | COMMON CODE                                                                    |
   * |================================================================================|
   */
  // Select app from App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  // MyPage - commonly used
  see_app: "すべて表示",
  sort_app: "降順に並び替え済み",
  mark_as_read_btn: "既読にする",
  completion_btn: "完了",

  /**|================================================================================|
   * | URLs                                                                           |
   * |================================================================================|
   */
  httpurl01: user_info.environmentLinks.app_form_link + "/loan?pc=20", // Application form page
  httpurl02: "o/FJ_ApplicationAccessLog__c/list?filterName=", // Application Log page
  httpurl03: "o/Account/list?filterName=", // Account list view
  httpurl04: "o/Contact/list?filterName=", // Contacts list view
  httpurl05: "o/genesis__Applications__c/list?filterName=", // Applications list view
  mypage_url: "",
  downloads_url: "chrome://downloads/",

  /**|================================================================================|
   * | RECORD VALUES (INPUT/OUTPUT)                                                   |
   * |================================================================================|
   */
  //0001
  // 可変項目②
  loan_app_select_branch: "001", //（取引店番）支店名
  amount_err: "2000",
  amount: "20", //お借り入れ希望額 *
  name_kana_last: "アアア", //お名前　フリガナ セイ *
  name_kana_first: "アア", //お名前　フリガナ メイ *
  sex: "1", //性別 *
  zip_code_1: "060", //住所 郵便番号 前 *
  zip_code_2: "0000", //住所 郵便番号 後 *
  address_city: "松江市袖師町", //住所 市町村以下（全角） *
  address_detail: "部屋番号", //住所 マンション・部屋番号（全角） *
  contact_home_1: "0001", //連絡先 自宅電話番号 前 *
  contact_home_2: "01", //連絡先 自宅電話番号 中 *
  contact_home_3: "0001", //連絡先 自宅電話番号 後 *
  contact_mobile_1: "090", //連絡先 携帯電話番号 前 *
  contact_mobile_2: "0002", //連絡先 携帯電話番号 中 *
  contact_mobile_3: "0002", //連絡先 携帯電話番号 後 *
  contact_phone_1: "0003", //連絡先 勤務先電話番号 前 *
  contact_phone_2: "03", //連絡先 勤務先電話番号 中 *
  contact_phone_3: "0003", //連絡先 勤務先電話番号 後 *
  rent: "48000", //家賃 *
  annual_income: "48000", //前年個人年収(税込) *
  office_name: "株式会社うえだ", //お勤め先名称 *
  office_kana: "カブシキガイシャウエダ", //お勤め先名称フリガナ（全角カナ）*
  office_zip_code_1: "064", //お勤め先住所 郵便番号 前 *
  office_zip_code_2: "0941", //お勤め先住所 郵便番号 後 *
  office_phone2_1: "0000", //お勤め先電話番号 前 *
  office_phone2_2: "00", //お勤め先電話番号 中 *
  office_phone2_3: "0000", //お勤め先電話番号 後 *
  office_address_city: "島根県1番地", //市町村以下（全角）*
  office_address_detail: "うえだビル", //ビル名など （全角）*
  partner_name_last: "前", //配偶者のお名前 姓 *
  partner_name_first: "お", //配偶者のお名前 名 *
  partner_office_name: "アアアア", //配偶者のお勤め先名称
  partner_office_kana: "アアアアア", //配偶者のお勤め先名称フリガナ
  partner_office_zip_code_1: "064", //配偶者のお勤め先住所 郵便番号 前 *
  partner_office_zip_code_2: "0941", //配偶者のお勤め先住所 郵便番号 後 *
  partner_office_address_city: "島根県1番地", //配偶者のお勤め先住所 市町村以下（全角）*
  partner_office_address_detail: "うえだビル", //配偶者のお勤め先住所 ビル名など （全角）*
  partner_office_phone2_1: "0000", //配偶者のお勤め先電話番号 前 *
  partner_office_phone2_2: "00", //配偶者のお勤め先電話番号 中 *
  partner_office_phone2_3: "0000", //配偶者のお勤め先電話番号 後 *
  corona_checkbox: "0", //コロナ対策特別資金 *
  reference_form_number: "ab0001", //企業ＩＤ・広告番号 *

  // その他項目
  loan_app_identical_person: "01", //健康保険証　名義
  loan_app_insurance_card_type: "01", //健康保険証　種類
  loan_app_has_salary_transfer: "1", //当行での給与振込または年金受取指定（ご本人）
  loan_app_has_mortgage: "2", //当行での住宅ローンのご利用 ※住宅ローンお申込み中で審査が承認になった方（事前申込みを除く）も含みます。
  amount_check: "0", //お借り入れ限度額審査
  living_together: "1", //同居ご家族の有無
  has_spouse: "1", //配偶者の有無
  children: "1", //お子さまの人数
  other_family: "1", //その他同居家族の人数
  living_type: "02", //現在のお住まいの種類
  repayment: "48000", //住宅ローン返済額 毎月の返済額
  bonus_repayment: "49000", //住宅ローン返済額 ボーナス月の返済額
  residence_month: "1", //現在のお住まいに住み始めた時期 月
  has_bonus: "1", //住宅ローン返済額 ボーナス月の増額有無
  income_type: "01", //収入の形態
  working_style: "12", //職業
  business_type: "04", //お勤め先の種類
  partner_business_type: "04", //配偶者のお勤め先の種類
  work_contents: "01", //お仕事の内容
  partner_work_contents: "01", //配偶者のお仕事の内容
  enter_company_month: "1", //入社（営業開始）月
  partner_enter_company_month: "1", //配偶者の入社（営業開始）月
  employee_division: "01", //従業員数
  partner_employee_division: "01", //配偶者のお勤め先の従業員数
  capital: "01", //資本金
  partner_capital: "01", //配偶者のお勤め先の資本金
  industry: "01", //事業内容（業種）
  partner_industry: "01", //配偶者のお勤め先の事業内容（業種）
  repayment_year: "1", //ご返済希望 返済期間 年
  repayment_month: "0", //ご返済希望 返済期間 ヵ月
  bonus_ratio: "10", //ご返済希望 ボーナス返済の割合
  introduction_branch_exist: "1", //紹介店 有無
  select_introduction_branch: "023", //紹介店
  question: "01", //アンケート 本ローンをお申込みいただいたきっかけを教えてください
  prefecture_code: "01", //住所 都道府県
  prefecture_code2: "32",
  partner_office_prefecture_code: "01", //配偶者のお勤め先住所 市町村以下
  payment_value: "21", //お支払い予定先 金額
  borrowing_1: "100", //借入先1 お借り入れ残高
  repayment_1: "15", //借入先1 年間返済額
  borrowing_2: "10", //借入先2 お借り入れ残高
  repayment_2: "15", //借入先2 年間返済額
  residence_year: "2000", //現在のお住まいに住み始めた時期 年
  enter_company_year: "2000", //入社（営業開始）年
  partner_enter_company_year: "2000", //配偶者の入社（営業開始）年
  combination: "1", //当行保証付きカードローン（随弁型）同時申込
  attached_skip: "0", //後でお手続きマイページから登録する
  loan_app_contact_to_tel_1: "1", //ご希望の連絡先 - ご自宅
  loan_app_contact_to_tel_2: "2", //ご希望の連絡先 - 携帯電話
  use_detail: "99", //お使いみち
  use_detail_etc: "お使いみち（その他）", //お使いみち（その他）
  office_dept: "営業部", // 所属部課名（出向先名）*
  position: "営業課長", // // 役職名
  partner_office_dept: "営業部",
  partner_position: "営業課長",
  payment1: "お支払い予定先", // お支払い予定先 *
  bank1: "お支払い予定先", // 借入先 *
  bank2: "お支払い予定先",
  app_question: "その他", // // アンケート その他 *

  // RDC input - 0002
  defect_reason_val: "failed_randomness_check", // 不備理由
  memo_val: "不備です。", // メモ欄

  //  DDP Output - 0003
  ddp_status: "19",

  // DDP Input - 0003
  ddp_status_val: "同一人照会完了", // 同一人照会ステータス

  // INI(2) input - 0004
  card_linkage: "連携済み", // クレジットカード情報連携ステータス

  // CHI input - 0004
  credit_rank: "A", // fj_Credit_Rank__c
  deposit_balance: 500000, // fj_LiquidDepositBalance__c
  fixed_deposit_balace: 0, // fj_FixedDepositBalance__c
  card_loan_name: "すてきなカードローン", // fj_ExistingCardLoan_ProductName__c

  // SCI input - 0004
  acc_date: "2019-08-01", // fj_AccountOpenDate__c
  extreme_amount: 1000000, // fj_CIF_CardLoanExtremeAmount__c
  cif_lib_housing: 1, // fj_CIF_LIBHousingLoanBorrowCnt__c
  card_loan_balance: 0, // fj_CIF_CardLoanBalance__c
  cif_lib_unsecured: 0, // fj_CIF_LIBUnsecuredBorrowCnt__c
  cif_fixed: 0, // fj_CIF_FixedDepositBalance__c
  cif_lib_borrow: 2000000, // fj_CIF_LIBHousingLoanBorrowTB__c
  cif_lib_deposit: 500000, // fj_CIF_LiquidDepositAverage__c
  cif_me_balance: 0, // fj_CIF_MEBalance__c
  cif_tmra: 3200, // fj_CIF_LIBHousingLoanTMRA__c
  cif_rdd: 0, // fj_CIF_RemainDepositDeposit__c
  cif_tbra: 0, // fj_CIF_LIBUnsecuredBorrowTBRA__c
  cif_consumer_loan_me: 0, // fj_CIF_ConsumerLoanMEBalance__c
  cif_lib_tmra: 0, // fj_CIF_LIBUnsecuredBorrowTMRA__c
  cif_me_total: 2000000, // fj_CIF_METotalLoanBalance__c
  cif_lib_tbra: 80000, // fj_CIF_LIBHousingLoanTBRA__c

  // CABI input - 0004
  ea_deposit: 100000, // fj_EA_Deposit__c
  ea_deposit_sub: 100000, // fj_EA_DepositSubtotal__c
  ea_total_deposit: 100000, // fj_EA_TotalDeposit__c
  ea_domestic_stock: 100000, // fj_EA_DomesticStock__c
  ea_foreign_stock: 0, // fj_EA_ForeignStocks__c
  ea_domestic_bond: 0, // fj_EA_DomesticBond__c
  ea_foreign_bond: 0, // fj_EA_ForeignBond__c
  ea_other_dit: 0, // fj_EA_OtherDomesticInvestmentTrust__c
  ea_other_fit: 0, // fj_EA_OtherFIT__c
  ea_mrf: 0, // fj_EA_MRF__c
  ea_mmf: 0, // fj_EA_ForeignCurrencyMMF__c
  ea_fundwrap: 0, // fj_EA_FundWrap__c
  ea_other: 0, // fj_EA_Other__c

  // CABF input - 0004
  prod_name: "がいかよきん", // fj_ProductName__c
  acc_store_name: "ローマ支店", // fj_AccountStoreName__c
  currency_code: "01", // fj_CurrencyCode__c
  foreign_deposit: "8270001", // fj_ForeignCurrencyDepositAccountNo__c
  market_price: 1, // fj_MarketPrice__c
  interest_rate1: 5.0, // fj_InterestRate1__c
  init_deposit_amount: 12000, // fj_InitialDepositAmount__c
  init_deposit_date: "2022-08-23", // fj_InitialDepositDate__c
  yen_amount: 11000, // fj_YenAmount__c
  foreign_amount: 12000, // fj_ForeignCurrencyAmount__c
  maturity_date: "2023-08-23", // fj_MaturityDate__c
  renewal_type: "00", // fj_AutomaticRenewalType__c

  // BLA input - 0004
  basic_acc_no: "4870000", // fj_BasicLoanAccountNo__c

  // CLA input - 0004
  ecl_credit_limit: 200000, // fj_ExistingCardLoan_CreditLimit__c
  ecl_code: "5", // fj_ExistingCardLoan_InterestRateCode__c

  // LCD(1) input - 0004
  product_code1: "000100", // fj_ProductCode__c
  subject_code1: "48", // fj_SubjectCode__c
  col_class1: "3", // fj_CollateralClassification__c
  basic_loan_acc_no1: "4870000", // fj_BasicLoanAccountNo__c
  loan_name1: "明るいローン", // fj_LoanName__c
  dealer_name1: "本店営業部", // fj_DealerName__c
  current_balance1: 10000, // fj_CurrentBalance__c
  bra_no1: "001", // fj_BraNo__c
  init_lending_date1: "2022-02-02", // fj_InitialLendingDate__c
  handling_no1: "4870001", // fj_HandlingNo__c
  last_repayment_date1: "2022-10-02", // fj_LastRepaymentDate__c
  init_loan_amount1: 100000, // fj_InitialLoanAmount__c
  gua_organ_code1: "01", // fj_GuaranteeOrganCode__c
  int_rate1: 5.0, // fj_InterestRate__c
  gua_no1: "2022020201", // fj_GuaranteeNo__c
  credit_limit1: 100000, // fj_CreditLimit__c

  // LCD(2) input - 0004
  subject_code2: "12", // fj_SubjectCode__c
  col_class2: "3", // fj_CollateralClassification__c
  basic_loan_acc_no2: "4870001", // fj_BasicLoanAccountNo__c
  loan_name2: "ゆかいなローン", // fj_LoanName__c
  dealer_name2: "ローマ支店", // fj_DealerName__c
  current_balance2: 12000, // fj_CurrentBalance__c
  bra_no2: "002", // fj_BraNo__c
  init_lending_date2: "2022-06-07", // fj_InitialLendingDate__c
  handling_no2: "4870002", // fj_HandlingNo__c
  last_repayment_date2: "2022-10-07", // fj_LastRepaymentDate__c
  init_loan_amount2: 120000, // fj_InitialLoanAmount__c
  int_rate2: 4.5, // fj_InterestRate__c
  gua_no2: "2022101104", // fj_GuaranteeNo__c
  credit_limit2: 120000, // fj_CreditLimit__c

  // LCD(3) input - 0004
  subject_code3: "44", // fj_SubjectCode__c
  col_class3: "2", // fj_CollateralClassification__c
  basic_loan_acc_no3: "4870000", // fj_BasicLoanAccountNo__c
  loan_name3: "カードではないローン", // fj_LoanName__c
  dealer_name3: "本店営業部", // fj_DealerName__c
  current_balance3: 5000, // fj_CurrentBalance__c
  bra_no3: "000", // fj_BraNo__c
  init_lending_date3: "2021-11-30", // fj_InitialLendingDate__c
  handling_no3: "4870001", // fj_HandlingNo__c
  init_loan_amount3: 110000, // fj_InitialLoanAmount__c
  int_rate3: 10.0, // fj_InterestRate__c
  gua_no3: "2022101106", // fj_GuaranteeNo__c
  credit_limit3: 110000, // fj_CreditLimit__c

  // LCD(4) input - 0004
  subject_code4: "48", // fj_SubjectCode__c
  col_class4: "2", // fj_CollateralClassification__c
  basic_loan_acc_no4: "4870000", // fj_BasicLoanAccountNo__c
  loan_name4: "カードのローン", // fj_LoanName__c
  dealer_name4: "パリ支店", // fj_DealerName__c
  current_balance4: 4000, // fj_CurrentBalance__c
  bra_no4: "001", // fj_BraNo__c
  init_lending_date4: "2020-09-10", // fj_InitialLendingDate__c
  handling_no4: "4870003", // fj_HandlingNo__c
  last_repayment_date4: "2022-09-10", // fj_LastRepaymentDate__c
  init_loan_amount4: 54000, // fj_InitialLoanAmount__c
  int_rate4: 2.0, // fj_InterestRate__c
  gua_no4: "2022101103", // fj_GuaranteeNo__c
  credit_limit4: 54000, // fj_CreditLimit__c

  // LCD(5) input - 0004
  subject_code5: "12", // fj_SubjectCode__c
  col_class5: "2", // fj_CollateralClassification__c
  basic_loan_acc_no5: "4870000", // fj_BasicLoanAccountNo__c
  loan_name5: "ローン１２", // fj_LoanName__c
  dealer_name5: "パリ支店", // fj_DealerName__c
  current_balance5: 10000, // fj_CurrentBalance__c
  bra_no5: "001", // fj_BraNo__c
  init_lending_date5: "2022-10-10", // fj_InitialLendingDate__c
  handling_no5: "4870000", // fj_HandlingNo__c
  init_loan_amount5: 10000, // fj_InitialLoanAmount__c
  int_rate5: 12.0, // fj_InterestRate__c
  gua_no5: "2022101105", // fj_GuaranteeNo__c
  credit_limit5: 10000, // fj_CreditLimit__c

  // LCD(6) input - 0004
  subject_code6: "44", // fj_SubjectCode__c
  col_class6: "3", // fj_CollateralClassification__c
  basic_loan_acc_no6: "4870000", // fj_BasicLoanAccountNo__c
  loan_name6: "ローン４４", // fj_LoanName__c
  dealer_name6: "ローマ支店", // fj_DealerName__c
  current_balance6: 15000, // fj_CurrentBalance__c
  bra_no6: "002", // fj_BraNo__c
  init_lending_date6: "2022-01-26", // fj_InitialLendingDate__c
  handling_no6: "4870002", // fj_HandlingNo__c
  last_repayment_date6: "2022-08-26", // fj_LastRepaymentDate__c
  init_loan_amount6: 50000, // fj_InitialLoanAmount__c
  gua_organ_code6: "02", // fj_GuaranteeOrganCode__c
  int_rate6: 3.0, // fj_InterestRate__c
  gua_no6: "2022101102", // fj_GuaranteeNo__c

  // INI(3) input - 0004
  linkage1: "連携済み", // 審査情報連携ステータス
  linkage2: "連携済み", //スコアリング情報連携ステータス
  linkage3: "連携済み", // AML等チェック連携ステータス
  linkage4: "連携済み", // 顧客AMLチェック連携ステータス
  jurisdiction: "該当しない", // 所管部確認結果
  fixed_comment: "関題ありません。", // 定型コメント

  // INI(3) - AML input - 0004
  chk_result1: "リストに該当しませんでした。", // チェック結果文言１
  chk_result2: "該当しなかったのです。", // チェック結果文言２
  msg1: "めも1", // メッセージ文言１
  msg2: "めも2", // メッセージ文言２
  msg3: "めも3", // メッセージ文言３
  msg4: "めも4", // メッセージ文言４
  msg5: "めも5", // メッセージ文言５
  msg6: "めも6", // メッセージ文言６
  msg7: "めも7", // メッセージ文言７
  msg8: "めも8", // メッセージ文言８
  msg9: "めも9", // メッセージ文言９
  msg10: "めも10", // メッセージ文言１０

  // EXS input - 0006
  pscore_limit_value: 200000, // Pスコア限度額（単位：万円）
  exam_approval_collab_status_value: "連携済み", // 審査決裁連携ステータス
  approval_comment_value: "approve test", // 決裁コメント

  // LCD(1) - 0006
  subj_code1: "48", // fj_SubjectCode__c
  loan1_name: "カードのローン", // fj_LoanName__c

  // LCD(2) - 0006
  subj_code2: "44", // fj_SubjectCode__c
  loan2_name: "カードではないローン", // fj_LoanName__c
  last_repayment_date: "2023/09/30", // 最終返済日

  // TRR input - 0006
  row2_flag: "2",
  row3_flag: "3",
  row8_flag: "8",

  // GUD(1) input - 0007
  review_linkage: "連携済み", // 保証審査連携ステータス
  review_result: "否決", // 保証審査結果

  // GUD(2) input - 0007
  decision: "応諾", // 諾否判定
  guarantee_result: "条件付承認", // 保証審査結果
  gua_number: "013300000001", // 保証番号
  gua_amount: "200000", // 保証額
  reason_code0: "申込金額減額", // 事由コード
  reason_code1: "基準金利10.0％(保証会社②用)", //事由コード
  reason_code2: "選択を選択済みに移動", // 事由コード
  gua_date: "2022/12/25", // 通知日
  gua_condition: "金額・期間ともに減らします", // 保証条件
  gua_term: "108", //保証期間
  orico: "001", // チェックコード
  approval_msg: "審査役が承認します。", // GUD 承認

  // ASC input - 0008
  in_progress_status_value: "実施中", // 反社照会ステータス
  asc_results_value: "◎", // 反社照会結果
  give_receive_result_value: "正常", // 授受結果
  completed_status_value: "連携完了", // 反社照会ステータス

  // CRE input - 0009
  msg_value1: "審査宿果ご駐資条件を入力しました", // 審査結果ご融資条件
  msg_value2: "金額・期間ともに減らします。追記しました。", // 条件確認ご融資条件

  // BA input - 0010
  new_document_category_value: "その他", // 書類カテゴリ
  new_req_document_status_value: "書類追加", // 徴求書類ステータス
  new_document_master_value: "その他", // 書類マスタ

  // RDC input - 0010
  defect_reason_val2: "blurred", // 不備理由
  defect_reason_no_val: "", // 不備理由

  // APP input - 0010
  execution_method_val: "自動実行", // 実行方法
  cif_no_value: "1994041901", //全店顧客番号
  basic_loan_acc_no_value: "4870000", // 融資基本口座番号
  cust_num_reacq_linkage_status_value: "手動照会済み", // 顧客番号再取得連携ステータス

  // BA input - 0010
  new_confirmation_status_value: "確認済", // 確認ステータス
  new_deposit_type_value: "普通預金", // 預金種類
  new_financial_inst_name_optional_value: "当行", // 金融機関名(選択)
  new_financial_inst_type_value: "銀行", // 金融機関種類
  new_financial_inst_code_value: "0001", // 金融機関コード
  new_financial_inst_name_value: "サンプル銀行", // 金融機関名
  new_branch_code_value: "001", // 支店コード
  new_branch_name_value: "本店営業部", // 支店名
  new_account_number1_value: "4870011", // 口座番号
  new_financial_inst_code_ordinary_bank_value: "0001", // 金融機関コード(普通銀行)
  new_financial_inst_name_ordinary_bank_value: "サンプル銀行", // 金融機関名(普通銀行)
  new_branch_code_ordinary_value: "001", // 支店コード(普通銀行)
  new_branch_name_ordinary_bank_value: "本店営業部", // 支店名(普通銀行)
  new_account_number2_value: "4870011", // 口座番号(普通銀行)

  // BA input - 0011
  confirmation_status_value: "確認済", // 確認ステータス
  deposit_type_value: "当座預金", // 預金種類
  recipient_name_value: "丹次郎", // お受取人お名前
  institution_name_opt_value: "当行", // 金融機関名(選択)
  recipient_kana_value: "タンジロ", // お受取人カタカナ
  fin_institution_name_value: "大阪銀行", // 金融機関名
  branch_code_value: "004", // 支店コード
  branch_name_value: "大阪城", // 支店名
  account_number_value1: "4560017", // 口座番号
  account_number_value2: "7890016", // 口座番号
  transfer_amount_value1: "550000", // 振込金額(円)
  transfer_amount_value2: "340000", // 振込金額(円)
  edit_bank_acct_no_value: "8174365", // 口座番号
  ba_fee_amount_value1: "1500000", // 手数料額(円)
  ba_fee_amount_value2: "2500000", // 手数料額(円)

  // MYPAGE お借入れ内容調整 input - 0011
  mypage_borrow_amount_value: "",
  mypage_repayment_date_value: "28",
  mypage_repayment_month_value: "30",
  mypage_repayment_ratio_value: "15",

  // AGR approval input - 0011
  approve_comment_value: "OKです。", // AGR Approval

  // ER EXECUTION RESULT input - 0012
  expected_status_value: "", // 処理ステータス
  handling_no: "4789991", // 取扱番号
  loan_account_no: "4780001", // 融資基本口座番号/カードローン口座番号
  result_status: "00000000", // 実行結果処理ステータス
  auto_exec_val: "自動実行完了", // 処理ステータス

  // ER EXECUTION RESULT output - 0011
  res_results: new Array(),
  expected_status_value_before_editing: "自動実行連携失敗", // 処理ステータス

  // LCD output - 0012
  lcd48_code: "44", // fj_SubjectCode__c
  lcd44_code: "48", // fj_SubjectCode__c

  // RECORD TYPES
  gud1_rectype: "保証審査①",
  gud2_rectype: "保証審査②",
  ini2_rectype: "銀行審査②（取引情報取得）",
  ini3_rectype: "銀行審査③（外形チェック）",
  er1_record_type: "23_振込伝票",
  ver1_rectype: "①申込受付後",
  ver2_rectype: "②契約手続き前",
  condition_confirmation_record_type: "条件確認",
  contract_agreement_record_type: "契約同意",
  rdc3_rectype: "その他",
  rdc2_rectype: "資金使途確認資料（多目的）",
  rdc1_rectype: "勤続年数確認資料",
  exam_result_compliance_rectype: "審査結果(応諾)",

  // MAIL
  mail_time: "", // MNT CreatedDate
  mail_time2: "", // MNT CreatedDate

  /**|================================================================================|
   * | TEXT/LABELS/BUTTONS                                                            |
   * |================================================================================|
   */
  // App form accordion
  acc1: "お手続きマイページ利用規約",
  acc2: "契約規定・保証委託約款",
  acc3: "保証会社に対する個人情報の取扱いに関する同意条項",
  acc4: "銀行に対する個人情報の取扱いに関する同意条項",
  acc5: "注意事項",
  acc6: "agree_PersonalInfoConsentClause_Gogin_Onset", // 銀行に対する個人情報の取扱いに関する同意条項
  acc7: "agree_PersonalInfoConsentClause_Company_Onset", // 保証会社に対する個人情報の取扱いに関する同意条項
  acc8: "agree_ContractTerms_Onset", // 契約規定・保証委託約款

  // App form download
  download: "PDFファイルをダウンロード",
  pdf_name: "PersonalInfoConsentClause_Gogin.pdf",

  // LABELS
  defect_reason_lbl: "不備理由",
  memo_lbl: "メモ欄",
  other_loan_lbl: "他ローン取引",
  occupational_area_lbl: "職域・協会けんぽ・イクボス・ファミボス宣言",
  linkage_status1: "審査情報連携ステータス",
  linkage_status2: "スコアリング情報連携ステータス",
  linkage_status3: "AML等チェック連携ステータス",
  federation_status: "顧客AMLチェック連携ステータス",
  exam_approval_collab_status_lbl: "審査決裁連携ステータス",
  picklist_label: "反社照会ステータス",
  new_document_category_label: "書類カテゴリ",
  new_req_document_status_label: "徴求書類ステータス",
  new_document_master_label: "書類マスタ",
  new_app_label: "申込",
  execution_method_lbl: "実行方法",
  new_repayment_flag_label: "返済用フラグ",
  new_financial_inst_type_actual_label: "金融機関種類",
  new_financial_inst_code_label: "金融機関コード",
  new_financial_inst_code_ordinary_bank_label: "金融機関コード(普通銀行)",
  new_financial_inst_name_ordinary_bank_label: "金融機関名(普通銀行)",
  new_branch_code_ordinary_label: "支店コード(普通銀行)",
  new_branch_name_ordinary_bank_label: "支店名(普通銀行)",
  new_account_number2_label: "口座番号(普通銀行)",
  cust_num_reacq_linkage_status_lbl: "顧客番号再取得連携ステータス",
  repayment_bank_account_label: "返済用銀行口座",
  acct_label: "取引先",
  payee_flag_label: "振込先フラグ",
  confirmation_status_label: "確認ステータス",
  deposit_type_label: "預金種類",
  recipient_name_label: "お受取人お名前",
  institution_name_opt_label: "金融機関名(選択)",
  recipient_kana_label: "お受取人カタカナ",
  fin_institution_name_label: "金融機関名",
  branch_code_label: "支店コード",
  branch_name_label: "支店名",
  account_number_label: "口座番号",
  transfer_amount_label: "振込金額(円)",
  edit_phone_label: "電話番号",
  execresultdata_process_status_label: "処理ステータス",
  ba_fee_amount_lbl: "手数料額(円)",
  cre_loan_terms_lbl: "条件確認ご融資条件",
  cre_result_condition: "審査結果ご融資条件",
  asc_give_receive_rsult_lbl: "授受結果",
  gud2_decision_lbl: "諾否判定",
  gud1_status_lbl: "保証審査連携ステータス",
  gud1_guarantee_review_result_lbl: "保証審査結果",
  gua_number_lbl: "保証番号",
  gua_amount_lbl: "保証額",
  gua_date_lbl: "通知日",
  gua_condition_lbl: "保証条件",
  gua_term_lbl: "保証期間",
  gud2_orico_lbl: "チェックコード",
  ini3_comment_lbl: "定型コメント",
  ini3_checkresult1_lbl: "チェック結果文言１",
  ini3_checkresult2_lbl: "チェック結果文言２",
  ini3_message1_lbl: "メッセージ文言１",
  ini3_message2_lbl: "メッセージ文言２",
  ini3_message3_lbl: "メッセージ文言３",
  ini3_message4_lbl: "メッセージ文言４",
  ini3_message5_lbl: "メッセージ文言５",
  ini3_message6_lbl: "メッセージ文言６",
  ini3_message7_lbl: "メッセージ文言７",
  ini3_message8_lbl: "メッセージ文言８",
  ini3_message9_lbl: "メッセージ文言９",
  ini3_message10_lbl: "メッセージ文言１０",
  ini2_linkage_lbl: "クレジットカード情報連携ステータス",
  ddp_status_lbl: "同一人照会ステータス",
  ddp_completion_transaction_lbl: "取引有無照会完了",
  contact_lbl: "取引先責任者",
  pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  account_close_flag_lbl: "口座閉鎖フラグ",
  loan_collection_flag_lbl: "既貸回収フラグ",
  last_repayment_date_lbl: "最終返済日",
  approval_comment_input_label: "決裁コメント",
  basic_loan_acc_no_lbl: "融資基本口座番号",
  cif_no_lbl: "全店顧客番号",
  handling_no_label: "取扱番号",
  loan_account_no_label: "融資基本口座番号/カードローン口座番号",
  result_status_label: "実行結果処理ステータス",
  app_requested_start_date_lbl: "ご融資希望日",
  reason_code_lbl: "事由コード",
  asc_result_lbl: "反社照会結果",
  ba_deposit_type_ordinary_lbl: "預金種類（普通銀行）",

  // BUTTONS
  close_btn: "閉じる",
  save_edit_btn: "SaveEdit",
  reject_confirm_btn: "不備",
  confirm_btn: "確認",
  recalculate_btn_label: "再計算",
  reexecute_confirm: "OK",
  next_btn: "次へ",
  create_new_bank_action: "actionCreateNew",
  save_btn: "保存",
  approve_btn: "承認",
  submit_type_btn: "submit",
  clone_btn: "Clone",
  amount_reduction: "選択を選択済みに移動",
  sf_canceledit_btn: "CancelEdit",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // INPUT BOX
  rdc_memo_input: "_Memo",

  // RECORD BUTTONS
  defect_reason_edit_btn: "不備理由 の編集",
  exam_approval_collab_status_edit_btn: "審査決裁連携ステータス の編集",
  account_closure_flag_edit_btn: "口座閉鎖フラグ の編集",
  loan_collection_flag_edit_btn: "既貸回収フラグ の編集",
  execution_method_edit_btn: "実行方法を編集",
  store_wide_customer_number_edit_btn: "全店顧客番号を編集",
  repayment_bank_account_edit_btn: "返済用銀行口座を編集",
  edit_app_btn: "申込 の編集",
  er_status_edit_btn: "処理ステータス の編集",
  app_requested_start_date_edit_btn: "ご融資希望日を編集",
  asc_edit_btn: "反社照会結果 の編集",
  asc_status_edit_btn: "反社照会ステータス の編集",
  gud2_decision_edit_btn: "諾否判定 の編集",
  gud1_edit_btn: "保証審査連携ステータス の編集",
  ini3_edit_btn: "所管部確認結果 の編集",
  ini3_aml_edit_btn: "チェック結果文言１ の編集",
  other_loan_edit_btn: "他ローン取引 の編集",
  ini2_edit_btn: "クレジットカード情報連携ステータス の編集",
  ddp_edit_btn: "同一人照会ステータス の編集",

  // TEXTS
  app_created_txt: "お申し込みありがとうございました。",
  acceptance_text: "申込受付",
  stt_type_text: "反社照会申込書",
  condition_text: "条件確認",
  bankacct_text: "払込先口座登録",
  agreement_text: "契約同意",
  pending_agreement_approval_text: "契約同意承認待ち",
  contracts_text: "契約成立",
  loan_completion_text: "お借入中",
  approved_text: "承認済み",
  search_account: "すべての取引先 リストビューを検索します。",
  search_contact: "All Contacts リストビューを検索します。",

  // TEXTBOX
  search_textbox: "enter-search",

  // SECTION/HEADER
  scoring_result_section: "スコアリング結果",
  submission_data_section: "実行依頼データ",
  rdc_header: "徴求書類",
  ba_header: "銀行口座",
  approval_history_header: "承認履歴",
  sec_header: "外信照会",
  asc_header: "反社照会",
  ini3_section1: "金利優遇",
  ini3_section2: "顧客AMLチェック結果情報",
  ini3_section3: "所管部確認結果",

  // LISTVIEW
  my_bin_listview: "私のごみ箱",
  org_bin_listview: "組織のごみ箱",
  all_aal_listview: "すべて選択",
  all_account_listview: "すべての取引先",
  all_contact_listview: "All Contacts",
  all_app_listview: "すべて選択",

  // SORT
  applog_sort_col: "申込ログNo",
  app_list_sort_col: "申込ID",

  // MYPAGE BUTTONS/LINKS
  viewall_notif_link: "すべての お知らせ を参照",
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_confirmation_page_btn: "内容確認へ",
  mypage_determine_btn: "確定する",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_accept_contract_btn: "契約に同意する",
  viewall_app_link: "すべて表示",
  mypage_app_detail_btn: "詳細を確認",
  mypage_rdc_view_record_btn: "ご提出",

  // MYPAGE LABELS/HEADERS
  mypage_borrow_amount_header: "お借入れ金額をお決めください",
  mypage_refund_amount_header: "ご返済金額をご確認ください",
  mypage_bonus_use_label: "半年ごと増額返済(ボーナス返済)",
  mypage_contract_provisions_header: "契約規定・保証委託約款",

  // MYPAGE SORT
  mypage_notif_sort: "お知らせ番号",
  mypage_app_sort: "お申込番号",

  /**|================================================================================|
   * | API                                                                        |
   * |================================================================================|
   */
  // BUTTONS
  required_docu_reject_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Reject",
  delete_btn_api: "FJ_RequiredDocument__c.Fj_RequirdDocmentFileDeleter",
  rdc_approve_btn_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  ver_approve_btn_api: "FJ_Verification__c.Fj_Verification_Accept",
  reexecute_scoring_btn_api: "FJ_ExternalScoring__c.Fj_ScoringReCallOut",
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  new_rdc_btn_api: "sfdc:StandardButton.FJ_RequiredDocument__c.New",
  new_bank_acct_btn_api: "sfdc:StandardButton.clcommon__Bank_Account__c.New",
  delete_ba_api: "clcommon__Bank_Account__c.Fj_BankAccountDeleter",
  api_creditapproval_accept_btn:
    "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  api_gud2_confirm_btn: "FJ_GuaranteeChkDetail__c.FJ_GuaranteeChkDetailConfirm",
  api_initialcheck_accept_btn: "FJ_InitialChk__c.Fj_InitialChkAccept",
  gud2_approval_btn_api:
    "sfdc:StandardButton.ProcessInstanceHistory.ApprovalProcessApprove",

  /**|================================================================================|
   * | QUERIES                                                                        |
   * |================================================================================|
   */
  query_0001_44:
    "SELECT genesis__loan_amount__c,fj_Loan_Amount_Requested__c,genesis__term__c,fj_Term_Requested__c, " +
    "genesis__interest_rate__c,fj_Interest_Rate_Requested__c,fj_Bonus_Repayment__c,fj_Bonus_Repayment_Requested__c, " +
    "fj_Bonus_Month__c,fj_Bonus_Month_Requested__c,fj_Bonus_Percent__c,fj_Bonus_Percent_Requested__c " +
    "FROM genesis__Applications__c " +
    "WHERE Name=",
  query_0006_03:
    "SELECT Id, Name, fj_InterestRate_InitialChk__c FROM genesis__Applications__c WHERE Name =",
  query_0006_32:
    "SELECT Id, Name, fj_RefApplication__r.Name, fj_ApplicationAmount__c FROM FJ_ExternalScoring__c WHERE Name =",
  query_0007_02:
    "SELECT Id, Name, fj_Interest_Rate_Calculated__c, fj_Loan_Amount_Calculated__c, fj_Term_Calculated__c FROM genesis__Applications__c WHERE Name = ",
  query_0009_04:
    "SELECT Id, Name, fj_Interest_Rate_GuaranteeChk__c, fj_Loan_Amount_GuaranteeChk__c, fj_Term_GuaranteeChk__c FROM genesis__Applications__c WHERE Name = ",
  query_0011_39:
    "SELECT fj_AgreementProcess2Flg__c, fj_Interest_Rate_Changed__c, fj_LastGuaranteeCondition__c, fj_Loan_Amount_Changed__c, " +
    "fj_RefAgreementProcess2__c, fj_Term_Changed__c " +
    "FROM genesis__Applications__c " +
    "WHERE Name=",
  cron_query1:
    "SELECT Id, CronJobDetail.Name FROM CronTrigger WHERE CronJobDetail.Name =",
  cron_query2:
    "SELECT Id, ApexClass.Name, Status, ExtendedStatus, NumberOfErrors, CreatedDate, JobType, CronTriggerId FROM AsyncApexJob WHERE Crontriggerid =",

  /**|================================================================================|
   * | IDENTIFIERS/LOGICAL VALUES                                                     |
   * |================================================================================|
   */
  // IDENTIFIERS
  logged_status: "",

  // LOGICAL VALUES
  isTrue: true,
  isFalse: false,
  isUndefined: undefined,

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec20: "20-1-(01)",
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
  agr_name: "",
  agr_id: "",
  app_id: "",
  app2_id: "",
  asc_id: "",
  asc_name: "",
  ba_id: "",
  ba_name: "",
  bla_id: "",
  cabf_id: "",
  cabi_id: "",
  chi_id: "",
  chi_name: "",
  cla_id: "",
  cnt_id: "",
  cnt_name: "",
  cnt2_id: "",
  cnt2_name: "",
  contact_id: "",
  contact_name: "",
  contact_id2: "",
  contact_name2: "",
  cre_name: "",
  cre_id: "",
  dm_name: "",
  dm_id: "",
  ddp_id: "",
  exec_result_id: "",
  exec_result_name: "",
  exm_name: "",
  exm_id: "",
  exs_id: "",
  exs_name: "",
  gua_name: "",
  gua_id: "",
  gud1_id: "",
  gud1_name: "",
  gud2_id: "",
  gud2_name: "",
  ini2_id: "",
  ini3_id: "",
  ini3_name: "",
  lcd1_id: "",
  lcd1_name: "",
  lcd2_id: "",
  lcd2_name: "",
  listview_id: "",
  listview2_id: "",
  listview3_id: "",
  listview4_id: "",
  mnt_name: "",
  mnt_id: "",
  mnt2_id: "",
  mnt2_name: "",
  pro_id: "",
  pro_name: "",
  rdc1_id: "",
  rdc1_name: "",
  rdc2_id: "",
  rdc2_name: "",
  rdc3_id: "",
  rdc3_name: "",
  sci_id: "",
  sci_name: "",
  stt_id: "",
  stt_name: "",
  trr_id: "",
  trr_name: "",
  ver1_id: "",
  ver1_name: "",
  ver2_id: "",
  ver2_name: "",
  ver3_id: "",
  ver3_name: "",
  ver4_id: "",
  ver4_name: "",
  wnt_id: "",
  wnt_name: "",
  wnt2_id: "",
  wnt2_name: "",

  // Arrays
  ba_array: new Array(),
  er_array: new Array(),
  lcd_id_arr: [],
  lcd_name_arr: [],
  lcd44_id_arr: [],
  lcd44_name_arr: [],
  lcd48_id_arr: [],
  lcd48_name_arr: [],
  rdc_id_arr: [],
  rdc_name_arr: [],

  // CRON
  cron_name: "自動実行バッチテスト", // Do not edit, value is automatically assigned
  cron_id: "",
};
