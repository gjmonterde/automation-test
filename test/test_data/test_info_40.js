const user_info = require("../test_data/global_info");
export const testData = {
  /**|================================================================================|
   * | VALUES TO UPDATE                                                               |
   * |================================================================================|
   */
  // 0001 - Application Preparation - CLI User Information
  user_status: 1, // 0 for existing user, 1 for new user
  logged_status: "",

  // if user_status = 0 (Existing) - choose an existing community user (used for PG)
  input_birthdate_old: "19770101",
  kanji_name_old: "お 前",

  // if user_status = 1 (New) - create a new community user (used for testing)
  // NOTE: Also update the community username and password (2) in global_info
  input_birthdate_new: "19870401",
  kanji_name_new: "円 円",

  // CLI input key
  input_key: "202310102121013", // Please change value if running 0001-1 again within 30 mins

  // Application form
  contact_detail: "GDC)Gizelle Automation Test 10/10/2023 Spec40 Test 1", // ご要望事項

  // Application records
  // Please update Application names based on App records created on 40_0001-1
  app_id: "",
  app_name: "APP-0000001604", // リフォームローン
  app_id2: "",
  app_name2: "APP-0000001605", // 保証付きカードローン（随弁型）

  // 0011 - お借入内容調整画面
  // MyPage Borrowing Adjustment Screen Inputs
  mypage_loan_date_value: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***

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
  ba_id_arr: [],
  ba_name_arr: [],
  cnt_id: "",
  cnt_name: "",
  cnt_id2: "",
  cnt_name2: "",
  contact_id: "",
  contact_name: "",
  contact_id2: "",
  contact_name2: "",
  cre_id: "",
  cre_name: "",
  ddp_id: "",
  ddp_name: "",
  er_2_id: "",
  er_2_name: "",
  er_4_id: "",
  er_4_name: "",
  er_6_id: "",
  er_6_name: "",
  er_7_id: "",
  er_7_name: "",
  exec_result_id: "",
  exec_result_name: "",
  exm_id: "",
  exm_name: "",
  exs_id: "",
  exs_name: "",
  gua_id: "",
  gua_name: "",
  gud_id: "",
  gud_name: "",
  gud_id2: "",
  gud_name2: "",
  ini_id: "",
  ini_name: "",
  ini_id2: "",
  ini_name2: "",
  ini_id3: "",
  ini_name3: "",
  listview_id: "",
  listview2_id: "",
  listview3_id: "",
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
  rdc_id_arr: [],
  rdc_name_arr: [],
  rdc_id2: "",
  rdc_name2: "",
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

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec40: "40-1-(01)",
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
   * | URLs                                                                           |
   * |================================================================================|
   */
  mypage_url: "",
  // ★ 新環境適用' New Env Implementation
  httpurl01: user_info.environmentLinks.app_form_link + "/auth?sid=40", // Authentication page
  httpurl02: user_info.environmentLinks.app_form_link + "/loan?pc=40&cli=", // Application form
  httpurl03: "o/FJ_ApplicationAccessLog__c/list?filterName=", // Application Log page
  httpurl04: "o/Account/list?filterName=", // Account listview
  httpurl05: "o/Contact/list?filterName=", // Contact listview
  httpurl06:
    "setup/ObjectManager/01I7F0000010Mqz/FieldsAndRelationships/00N7F00000SZvKb/view", // Object Manager 審査ステータス field

  /**|================================================================================|
   * | LISTVIEW                                                                       |
   * |================================================================================|
   */
  all_aal_listview: "すべて選択",
  all_account_listview: "すべての取引先",
  all_contact_listview: "All Contacts",

  /**|================================================================================|
   * | RECORD VALUES (INPUT/OUTPUT)                                                   |
   * |================================================================================|
   */
  // AUTHENTICATION PAGE
  // Auth Value 1
  auth_acct_name_last_value1: "アーイ", // * 口座カナ氏名 セイ
  auth_acct_name_first_value1: "オウ", // * 口座カナ氏名 メイ
  auth_birth_value1: "19920131", // * 生年月日
  auth_branch_value1: "001", // * （取引店番）支店名
  auth_acct_no_value1: "1234567", // * 口座番号
  auth_pinword_value1: "1234", // * 暗証番号

  // Auth Value 2
  auth_acct_name_last_value2: "エウオ", // * 口座カナ氏名 セイ
  auth_acct_name_first_value2: "アーア", // * 口座カナ氏名 メイ
  auth_birth_value2: "19890628", // * 生年月日
  auth_branch_value2: "004", // * （取引店番）支店名
  auth_acct_no_value2: "4789321", // * 口座番号
  auth_pinword_value2: "8899", // * 暗証番号

  // Auth Value 3 - Error
  auth_acct_name_last_value3: "123", // * 口座カナ氏名 セイ
  auth_acct_name_first_value3: "45", // * 口座カナ氏名 メイ
  auth_birth_value3: "04", // * 生年月日
  auth_branch_value3: "", // * （取引店番）支店名
  auth_acct_no_value3: "66667", // * 口座番号
  auth_pinword_value3: "89", // * 暗証番号

  // CLI record creation values
  cust_no: "1981010100",
  kana_name: "チャラララン パッパーヤ",
  gender: "男",
  kana_add1: "ｼﾏﾈｹﾝﾏﾂｴｼｿﾃﾞｼﾁｮｳ40",
  kana_add_code: "32201056000",
  postal_code: "060-0000",
  kanji_add1: "島根県松江市袖師町４０",
  phone_no1: "000-0000-0001",
  phone_no2: "000-0000-0002",
  phone_no3: "000-0000-0003",
  annual_income: "1000",
  current_pref_code: "32",
  input_kana_name: "チャラララン パッパーヤ",
  input_bra_no: "013",
  input_acct_type: "12",
  input_acct_no: "6901232",
  input_m_pin: "1234",
  kana_office_name: "アアアアア",
  office_name: "あああああ",

  // APPLICATION RECORD CREATION - STEP 1
  // Error
  amount_err: "=", // * お借り入れ希望額
  contact_phone_1_err: "=", // * 電話番号（日中ご連絡可能な番号）1
  contact_phone_2_err: "=", // * 電話番号（日中ご連絡可能な番号）2
  contact_phone_3_err: "=", // * 電話番号（日中ご連絡可能な番号）3

  // Error2
  contact_phone_1_err2: "-", // * 電話番号（日中ご連絡可能な番号）1
  contact_phone_2_err2: "-", // * 電話番号（日中ご連絡可能な番号）2
  contact_phone_3_err2: "-", // * 電話番号（日中ご連絡可能な番号）3

  // No Error
  amount_check: "1", // お借り入れ限度額審査
  loan_app_identical_person: "01", // * 健康保険証　名義
  loan_app_insurance_card_type: "01", // * 健康保険証　種類
  contact_phone_1: "003", // * 電話番号（日中ご連絡可能な番号）1
  contact_phone_2: "0300", // * 電話番号（日中ご連絡可能な番号）2
  contact_phone_3: "0003", // * 電話番号（日中ご連絡可能な番号）3

  // No Value
  amount_noVal: "", // * お借り入れ希望額
  contact_phone_1_noVal: "", // * 電話番号（日中ご連絡可能な番号）1
  contact_phone_2_noVal: "", // * 電話番号（日中ご連絡可能な番号）2
  contact_phone_3_noVal: "", // * 電話番号（日中ご連絡可能な番号）3

  // APPLICATION RECORD CREATION - STEP 2
  loan_app_has_salary_transfer: "2", // * 当行での給与振込または年金受取指定（ご本人）
  loan_app_solar_system: "2", // * ソーラーシステム、蓄電池等の購入・設置
  loan_app_has_mortgage: "2", // * 当行での住宅ローンまたは住宅金融支援機構のご利用
  loan_app_has_sekisyu: "2", // * ご自宅について 助成対象資材の使用
  loan_app_has_security_residence: "2", // * ご自宅について 「防犯推進住宅」の認定
  loan_app_living_together: "2", // * 同居ご家族の有無
  loan_app_has_spouse: "2", // * 配偶者の有無
  loan_app_children: "0", // * お子さまの人数
  loan_app_other_family: "0", // * その他同居家族の人数
  loan_app_living_type: "01", // * 現在のお住まいの種類
  loan_app_residence_year: "2021", // * 現在のお住まいに住み始めた時期 年
  loan_app_residence_month: "1", // * 現在のお住まいに住み始めた時期 月
  loan_app_annual_income: "400", // * 前年個人年収(税込)
  loan_app_income_type: "01", // * 収入の形態
  loan_app_working_style: "05", // * 職業

  // APPLICATION RECORD CREATION - STEP 3
  loan_app_use_detail: "03", // * お使いみち
  loan_app_introduction_branch_exist: "2", // * 紹介店 有無
  loan_app_question: "01", // * アンケート

  // APPLICATION RECORD CREATION - STEP 4
  combination: "1", // 同時に申し込む

  // logic values
  isFalse: false,
  isTrue: true,
  isUndefined: undefined,

  // E-mail
  mail_time: "",
  mail_time2: "",

  // Record Types
  acceptance_rectype: "申込受付",
  borrowing_rectype: "お借入中",
  condition_check_rectype: "条件確認",
  contract_agreement_rectype: "契約同意",
  contract_conclusion_rectype: "契約成立",
  ddp_cifline_rectype: "CIF明細選択",
  er_2_rectype: "2_融資基本_開設",
  er_6_rectype: "6_証書貸付_返済条件登録",
  er_7_rectype: "7_証書貸付_実行",
  er_22_rectype: "22_証書貸付_回収",
  er_23_rectype: "23_振込伝票",
  er_4_rectype: "4_顧客属性データ設定変更",
  exam_result_compliance_rectype: "審査結果(応諾)",
  gud1_rectype: "保証審査①",
  gud2_rectype: "保証審査②",
  ini1_rectype: "銀行審査①（申込チェック）",
  ini2_rectype: "銀行審査②（取引情報取得）",
  ini3_rectype: "銀行審査③（外形チェック）",
  pending_agreement_approval_rectype: "契約同意承認待ち",
  rdc1_category: "資金使途確認資料（リフォーム）",
  ver_document_confirmation1_rectype: "①申込受付後",
  ver_document_confirmation2_rectype: "②契約手続き前",

  // DDP (CIF明細選択) value
  ddp_completioninquiry_value: "取引有無照会完了", // 同一人照会ステータス
  ddp_inquirycomplete_value: "同一人照会完了", //同一人照会ステータス

  // INI (銀行審査②（取引情報取得）) input value
  ini2_linked_value: "連携済み", // クレジットカード情報連携ステータス

  // INI (銀行審査③（外形チェック）) input values
  ini3_aml_status_value: "連携済み", // AML等チェック連携ステータス
  ini3_bank_scoring_status_value: "連携済み", // スコアリング情報連携ステータス
  ini3_cooperation_exam_status_value: "連携済み", // 審査情報連携ステータス
  ini3_customer_aml_check_status_value: "連携済み", // 顧客AMLチェック連携ステータス
  ini3_fixed_comment_value: "定型コメント", // 定型コメント
  ini3_notapplicable_value: "該当しない", // 所管部確認結果

  // EXS input values
  exs_exam_cooperation_status_value: "連携済み", // 審査決裁連携ステータス
  exs_pscore_limit_value: "1000", //  Pスコア限度額（単位：万円）

  // PC Output values
  product_code: "", // 商品コード

  // GUD (保証審査①) input values
  gud_assurance_review_value: "連携済み", // 保証審査連携ステータス
  gud_guarantee_amount_value: "", // 保証額
  gud_guarantee_review_result_value: "条件付承認", //保証審査結果
  gud_guarantee_term_value: "12", // 保証期間

  // GUD (保証審査②) input values
  gud2_acceptance_judgement_value: "応諾", // 諾否判定
  gud2_approval_date_value: "2023/01/05", // 通知日
  gud2_guarantee_amount_value: "9000000", // 保証額 (Value below 申込.融資額)
  gud2_guarantee_condition_value: "abcdef12345", //保証条件
  gud2_guarantee_no_value: "123456789011", // 保証番号 (12 digits)
  gud2_guarantee_review_result_value: "条件付承認", // 保証審査結果
  gud2_guarantee_term_value: "", // 保証期間＝申込.期間
  gud2_result_based_interest_rate_value: "2.8", // 審査結果基準利率(%) value different from 申込.利率

  // ASC input values
  asc_antisocial_inquiry_status_value: "連携完了", // 反社照会ステータス
  asc_antisocial_results_value: "◎", // 反社照会結果

  // APP input values
  app_execution_method_value: "自動実行", // 実行方法
  app_cif_no_value: "1234567ABC", // 全店顧客番号
  app_cif_linkage_status_value: "手動照会済み", // 顧客番号再取得連携ステータス
  app_first_phone_no_value: "0000-00-0000", // 第一電話番号_登録
  app_second_phone_no_value: "090-0000-0000", // 第二電話番号_登録
  app_third_phone_no_value: "0000-00-0000", // 第三電話番号_登録
  app_kana_office_value: "ア", // カナ勤務先_登録
  app_annual_income_value: "500", // 年収（万円）_登録
  app_kanji_office_value: "あ", // 漢字勤務先_登録

  // Bank Acct 1
  ba_fin_inst_1: "当行", // 金融機関名(選択)
  ba_branch_name_1: "ああ金1", // 支店名
  ba_deposit_type_1: "普通預金", // 預金種類
  ba_acct_no_1: "1200000", // 口座番号
  ba_recipient_name_1: "えーえ1", // お受取人お名前
  ba_recipient_name_kana_1: "エーエ", // お受取人カタカナ
  ba_transfer_amount_1: "1000000", // 振込金額(円)

  // Bank Acct 2
  ba_fin_inst_2: "当行", // 金融機関名(選択)
  ba_branch_name_2: "ああ金2", // 支店名
  ba_deposit_type_2: "普通預金", // 預金種類
  ba_acct_no_2: "1200001", // 口座番号
  ba_recipient_name_2: "えーえ2", // お受取人お名前
  ba_recipient_name_kana_2: "エーエ", // お受取人カタカナ
  ba_transfer_amount_2: "1100000", // 振込金額(円)

  // Bank Acct 3
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
  ba_branch_name_value: "支店名ああ金3", // 支店名
  ba_branch_name_value_err: "支店名3エエ金4", // 支店名
  ba_account_no_value: "1234567", // 口座番号

  // BA output values
  ba_status_code: "0", // 未確認

  // MyPage Borrowing Adjustment Screen Inputs
  mypage_repayment_date_value: "1", // 毎月の返済日
  mypage_repayment_month_value: "10", // 増額返済月
  mypage_repayment_ratio_value: "05", // 増額返済割合

  // LCD output values
  lcd_subject_code: "44", // 科目コード

  // Exec result output values
  exec_result_err_message_actual: "", // 処理エラーメッセージ
  exec_result_err_message_expected: "Callout error: Argument 2 cannot be null", // 処理エラーメッセージ
  exec_result_processing_status_actual: "", // 処理ステータス
  exec_result_processing_status_expected: "自動実行連携失敗", // 処理ステータス

  // Exec result input values
  exec_result_handling_no_value: "0000001", // 取扱番号
  exec_result_processing_status_value: "自動実行完了", //処理ステータス
  exec_result_status_value: "00000000", // 実行結果処理ステータス

  /**|================================================================================|
   * | TEXT/LABELS/BUTTONS                                                            |
   * |================================================================================|
   */
  // Applciation form accordions
  acc_app_0001_1: "注意事項",
  acc_app_0001_2: "銀行に対する個人情報の取扱いに関する同意条項",
  acc_app_0001_3: "保証会社に対する個人情報の取扱いに関する同意条項",
  acc_app_0001_4: "契約規定・保証委託約款",
  acc_app_0001_5: "お手続きマイページ利用規約",

  // Application form PDFs
  pdf_0001_01: "AcceptableUsePolicy_Auth.pdf",
  pdf_file_download_link: "PDFファイルをダウンロード",

  // Application Page Buttons
  auth_agree_btn: "（確認画面へ進む）",
  back_btn: "　戻る　",

  // Common Buttons
  approve_btn: "承認",
  cancel_btn: "キャンセル",
  confirm_btn: "確認",
  sf_saveedit_btn: "SaveEdit",
  submit_type_btn: "submit",
  save_btn: "保存",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // MyPage buttons
  mypage_ba_new_btn: "登録", // ★ 新環境適用' New Env Implementation
  mypage_back_btn: "戻る", // ★ 新環境適用' New Env Implementation
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_confirmation_btn: "確認画面へ",
  mypage_loan_adjustment_confirm_btn: "内容確認へ",
  mypage_next_btn: "決定", // ★ 新環境適用' New Env Implementation
  mypage_submit_btn: "確定する",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_accept_contract_btn: "契約に同意する",
  mypage_rdc_view_record_btn: "ご提出",

  // Record Buttons
  app_cif_no_edit_btn: "全店顧客番号を編集",
  app_execution_method_edit_btn: "実行方法を編集",
  app_first_phone_no_edit_btn: "第一電話番号_登録を編集",
  app_requested_start_date_edit_btn: "ご融資希望日を編集",
  asc_antisocial_results_edit_btn: "反社照会結果 の編集",
  ba_display_flag_edit_btn: "銀行口座表示フラグを編集",
  ba_status_edit_btn: "確認ステータス の編集",
  ddp_samepersoninqstatus_edit_btn: "同一人照会ステータス の編集",
  exec_result_processing_status_edit_btn: "処理ステータス の編集",
  exs_exam_cooperation_status_edit_btn: "審査決裁連携ステータス の編集",
  gud_acceptance_judgement_edit_btn: "諾否判定 の編集",
  gud_assurance_review_edit_btn: "保証審査連携ステータス の編集",
  ini_compilation_declaration_edit_btn:
    "職域・協会けんぽ・イクボス・ファミボス宣言 の編集",
  ini_cooperation_edit_btn: "審査情報連携ステータス の編集",
  ini_creditcard_info_linkage_edit_btn:
    "クレジットカード情報連携ステータス の編集",
  ini_executive_confirmation_edit_btn: "所管部確認結果 の編集",

  // Headers
  app_first_tab_lastheader: "配偶者情報",
  app_fourth_tab_edit_section: "実行依頼データ",
  account_header: "取引先",
  agr_header: "最終確認",
  asc_header: "反社照会",
  apphistory_header: "申込の履歴",
  approval_history_header: "承認履歴",
  ba_header: "銀行口座",
  bankexam_header: "銀行審査",
  bottom_related_list_header: "申込の履歴",
  contact_header: "取引先責任者",
  cre_header: "結果通知",
  er_header: "実行結果データ",
  exs_header: "審査決裁",
  flag_header: "フラグ管理",
  foreigninq_header: "外信照会",
  history_header: "承認履歴",
  submission_data_section: "実行依頼データ",
  execution_result_section: "実行登録",
  rdc_header: "徴求書類",

  // Labels
  app_cif_linkage_status_lbl: "顧客番号再取得連携ステータス",
  app_execution_method_lbl: "実行方法",
  app_requested_start_date_lbl: "ご融資希望日",
  asc_antisocial_inquiry_status_lbl: "反社照会ステータス",
  asc_antisocial_results_lbl: "反社照会結果",
  ba_display_flag_lbl: "銀行口座表示フラグ",
  ba_input_fin_inst_lbl: "金融機関名(選択)",
  ba_input_fin_inst_name_lbl: "金融機関名",
  ba_input_branch_name_lbl: "支店名",
  ba_input_acct_type_lbl: "預金種類",
  ba_input_acct_no_lbl: "口座番号",
  ba_input_rcp_name_lbl: "お受取人お名前",
  ba_input_rcp_name_kana_lbl: "お受取人カタカナ",
  ba_status_lbl: "確認ステータス",
  exec_result_processing_status_lbl: "処理ステータス",
  exs_exam_cooperation_status_lbl: "審査決裁連携ステータス",
  exs_pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  gud_acceptance_judgement_lbl: "諾否判定",
  gud_assurance_review_lbl: "保証審査連携ステータス",
  gud_guarantee_amount_lbl: "保証額",
  gud_guarantee_term_lbl: "保証期間",
  gud_guarantee_review_result_lbl: "保証審査結果",
  ini_aml_status_lbl: "AML等チェック連携ステータス",
  ini_bank_scoring_status_lbl: "スコアリング情報連携ステータス",
  ini_compilation_declaration_lbl: "職域・協会けんぽ・イクボス・ファミボス宣言",
  ini_cooperation_exam_status_lbl: "審査情報連携ステータス",
  ini_creditcard_info_linkage_status_lbl: "クレジットカード情報連携ステータス",
  ini_customer_aml_check_status_lbl: "顧客AMLチェック連携ステータス",
  ini_executive_confirmation_lbl: "所管部確認結果",
  pro_pref_interest_rate2_lbl: "審査フロー設定",
  pro_lower_limit_lbl: "金利優遇対象下限額(超)",
  searchacct_lbl: "すべての取引先 リストビューを検索します。",
  searchcontact_lbl: "All Contacts リストビューを検索します。",
  ver_error_toast_lbl: "エラー",

  // MyPage Labels/headers/etc
  mypage_bonus_repayment_lbl: "半年ごと増額返済(ボーナス返済)",
  mypage_loan_terms_and_conditions_lbl:
    "以下をご融資の条件とさせていただきます",
  mypage_notif_header_lbl: "お知らせ番号",
  mypage_notifications_header: "お客さまへのお知らせ",
  mypage_viewall_notif_link: "すべての お知らせ を参照",

  // Sort
  app_asc: "昇順に並び替え済み",
  app_desc: "降順に並び替え済み",
  appid_col: "申込ID",
  applog_no_col: "申込ログNo",

  // Texts
  agr_approve_error:
    "申込の振込用銀行口座が未確認、或いは、手数料未入力のため、契約同意承認できません。",
  app_created_txt: "お申し込みありがとうございました。",
  approved_text: "承認済み",

  /**|================================================================================|
   * | APIs                                                                           |
   * |================================================================================|
   */
  // Buttons
  api_ba_delete_btn: "clcommon__Bank_Account__c.Fj_BankAccountDeleter",
  api_creditapproval_accept_btn:
    "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  api_externalscoring_accept_btn:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  api_guarantee_check_confirm_btn:
    "FJ_GuaranteeChkDetail__c.FJ_GuaranteeChkDetailConfirm",
  api_initialcheck_accept_btn: "FJ_InitialChk__c.Fj_InitialChkAccept",
  api_rdc_accept_btn: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  delete_btn_api: "FJ_RequiredDocument__c.Fj_RequirdDocmentFileDeleter",
  api_ver_accept_btn: "FJ_Verification__c.Fj_Verification_Accept",

  // Fields
  app_requested_start_date_field: "ご融資希望日",
  annual_income_field: "年収（万円）_登録",
  ba_bank_account_no_field: "口座番号",
  ba_branch_code_field: "支店コード",
  ba_branch_name_field: "支店名",
  cif_no_field: "全店顧客番号",
  er_handling_no_field: "取扱番号",
  er_result_status_field: "実行結果処理ステータス",
  first_phone_no_field: "第一電話番号_登録",
  result_based_interest_rate_field: "審査結果基準利率(%)",
  guarantee_approval_date_field: "通知日",
  guarantee_condition_field: "保証条件",
  guarantee_number_field: "保証番号",
  kana_office_name_field: "カナ勤務先_登録",
  office_name_field: "漢字勤務先_登録",
  second_phone_no_field: "第二電話番号_登録",
  third_phone_no_field: "第三電話番号_登録",

  /**|================================================================================|
   * | COMMON CODE VARIABLES                                                          |
   * |================================================================================|
   */
  // Select app from App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  // MyPage - commonly usedhome_mypage: "ホーム",
  see_app: "すべて表示",
  sort_app: "降順に並び替え済み",
  mark_as_read_btn: "既読にする",
  completion_btn: "完了",

  /**|================================================================================|
   * | IDENTIFIERS/COUNTERS                                                           |
   * |================================================================================|
   */
  auth_agree: "",
  ba_fortransfer_count: 0,
  ba_new_record_no_value: 3,
  er_22_count: 0,
  er_23_count: 0,
  lcd_subjcode44_count: 0,

  /**|================================================================================|
   * | QUERIES                                                                        |
   * |================================================================================|
   */
  query_0001_17:
    "SELECT Id, LastName, FirstName, Name, Email, Birthdate FROM Contact where Email = ",
  query_0001_44:
    "SELECT Id, Name, fj_Loan_Amount_Requested__c, fj_Loan_Amount__c, fj_Term_Requested__c, genesis__Term__c, fj_Interest_Rate_Requested__c, " +
    "genesis__Interest_Rate__c, fj_Bonus_Repayment_Requested__c, fj_Bonus_Repayment__c, fj_Bonus_Month_Requested__c, fj_Bonus_Month__c, " +
    "fj_Bonus_Percent_Requested__c, fj_Bonus_Percent__c FROM genesis__Applications__c WHERE Name=",
  query_0003_05:
    "SELECT Id, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0004_01:
    "SELECT Id, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0006_14:
    "SELECT Id,Name, fj_HasOverdue__c,fj_Credit_Rank__c,fj_TransactionBanCode__c,fj_WorkDurationMonth__c " +
    "FROM FJ_ExternalScoring__c WHERE Name = ",
  query_0007_02:
    "SELECT Id, genesis__Interest_Rate__c, genesis__Loan_Amount__c, genesis__Term__c, fj_Interest_Rate_Calculated__c, fj_Loan_Amount_Calculated__c, " +
    "fj_Term_Calculated__c FROM genesis__Applications__c WHERE Name = ",
  query_0009_04:
    "SELECT Id, fj_Loan_Amount_GuaranteeChk__c,fj_Term_GuaranteeChk__c,fj_Interest_Rate_GuaranteeChk__c,genesis__Loan_Amount__c," +
    "genesis__Term__c,genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",

  /**|================================================================================|
   * | 0012 JSFORCE BATCH EXECUTION                                                   |
   * |================================================================================|
   */
  cron_name: "自動実行バッチテスト",
  batch_executed: "",
  batch_compiled: "",
};
