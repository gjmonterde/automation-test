const user_info = require("../test_data/global_info");
export const testData = {
  /**|================================================================================|
   * | VALUES TO UPDATE                                                               |
   * |================================================================================|
   */
  // Application form
  name_last: "前", //お名前 姓 *
  name_first: "お", //お名前 名 *
  birth_year: "1977", //生年月日 年 *
  birth_month: "1", //生年月日 月 *
  birth_day: "1", //生年月日 日 *
  contact_detail: "GDC)Gizelle Automation Test 09/28/2023 Spec60 Test 1", // ご要望事項

  // Application records
  // Please update Application names based on App records created on 60_0001-1
  // Prerequisite before running 0001 Process2
  app_id: "",
  app_name: "APP-0000001572",

  // 0011 - お借入内容調整画面
  // MyPage Borrowing Adjustment Screen Inputs
  // ご融資希望日 ***NOTE: date format will be affected by locale settings***
  // JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY
  mypage_loan_date_value: "12/29/2023",
  mypage_loan_date_value2: "12/29/2023",

  /**|================================================================================|
   * | RECORDS                                                                        |
   * |================================================================================|
   */
  account_id: "",
  account_name: "",
  agr1_id: "",
  agr1_name: "",
  agr2_id: "",
  agr2_name: "",
  asc_id: "",
  asc_name: "",
  ba_id: "",
  ba_name: "",
  ba1_id: "",
  ba1_name: "",
  ba2_id: "",
  ba2_name: "",
  clProd_id: "",
  cl_prod_id: "",
  cl_prod_name: "",
  cnt_id: "",
  cnt_name: "",
  contact_id: "",
  contact_name: "",
  cre_id: "",
  cre_name: "",
  ddp_id2: "",
  ddp_name: "",
  exec_result_name: "",
  exec_result_id: "",
  exm_id: "",
  exm_name: "",
  exs_id: "",
  exs_name: "",
  ini_id2: "",
  ini_name2: "",
  ini_id3: "",
  ini_name3: "",
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
  mnt1_id: "",
  mnt1_name: "",
  mnt2_id: "",
  mnt2_name: "",
  listview_id: "",
  pro_name: "",
  rdc1_id_of_ver1: "",
  rdc1_name_of_ver1: "",
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
  wnt1_id: "",
  wnt1_name: "",
  wnt2_id: "",
  wnt2_name: "",

  // Arrays
  ba_id_arr: [],
  ba_name_arr: [],
  jib_id_arr: [],
  jib_name_arr: [],
  jim_id_arr: [],
  jim_name_arr: [],
  kit_id_arr: [],
  kit_name_arr: [],
  rdc_name_arr: [],
  rdc_id_arr: [],

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec60: "60-1-(01)",
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
  downloads_url: "chrome://downloads/",
  httpurl01: user_info.environmentLinks.app_form_link + "/loan?pc=60",
  httpurl02: "o/genesis__Applications__c/list?filterName=", // Applications List
  httpurl03: "o/FJ_ApplicationAccessLog__c/list?filterName=", // Application Log page
  mypage_url_0001: "",
  mypage_url_0011: "",

  /**|================================================================================|
   * | RECORD LABELS VALUES (INPUT/OUTPUT)                                            |
   * |================================================================================|
   */
  // Application Form
  // Step 1 - Error
  name_kana_last_err: "", //お名前　フリガナ セイ *
  name_kana_first_err: "", //お名前　フリガナ メイ *
  contact_home_1_err: "", //連絡先 自宅電話番号 前 *
  contact_home_2_err: "", //連絡先 自宅電話番号 中 *
  contact_home_3_err: "", //連絡先 自宅電話番号 後 *
  contact_mobile_1_err: "", //連絡先 携帯電話番号 前 *
  contact_mobile_2_err: "", //連絡先 携帯電話番号 中 *
  contact_mobile_3_err: "", //連絡先 携帯電話番号 後 *
  contact_phone_1_err: "", //連絡先 勤務先電話番号 前 *
  contact_phone_2_err: "", //連絡先 勤務先電話番号 中 *
  contact_phone_3_err: "", //連絡先 勤務先電話番号 後 *

  // Step 1 - OK
  amount: "500",
  name_kana_last: "アアア", //お名前　フリガナ セイ *
  name_kana_first: "アア", //お名前　フリガナ メイ *
  sex: "1", //性別 *
  zip_code_1: "060", //住所 郵便番号 前 *
  zip_code_2: "0000", //住所 郵便番号 後 *
  prefecture_code: "32", // 住所 都道府県  *
  address_city: "松江市袖師町", //住所 市町村以下（全角） *
  address_detail: "マンション202", //住所 マンション・部屋番号（全角） *
  contact_home_1: "0001", //連絡先 自宅電話番号 前 *
  contact_home_2: "01", //連絡先 自宅電話番号 中 *
  contact_home_3: "0001", //連絡先 自宅電話番号 後 *
  contact_mobile_1: "090", //連絡先 携帯電話番号 前 *
  contact_mobile_2: "0002", //連絡先 携帯電話番号 中 *
  contact_mobile_3: "0002", //連絡先 携帯電話番号 後 *
  contact_phone_1: "0003", //連絡先 勤務先電話番号 前 *
  contact_phone_2: "03", //連絡先 勤務先電話番号 中 *
  contact_phone_3: "0003", //連絡先 勤務先電話番号 後 *
  loan_app_contact_to_tel_1: "1", //ご希望の連絡先 - ご自宅
  loan_app_contact_to_tel_2: "2", //ご希望の連絡先 - 携帯電話
  loan_app_identical_person: "01", //健康保険証　名義
  loan_app_insurance_card_type: "01", //健康保険証　種類

  // Step 2
  loan_app_card_password: "9534", //New
  card_password_confirmation: "9534", //New
  loan_app_immediate_borrowing_amount: "400", //New

  living_together: "1", //同居ご家族の有無 *
  has_spouse: "1", //配偶者の有無 *
  children: "1", //お子さまの人数 *
  other_family: "1", //その他同居家族の人数 *
  living_type: "02", //現在のお住まいの種類 *
  residence_year: "2000", //現在のお住まいに住み始めた時期 年 *
  residence_month: "1", //現在のお住まいに住み始めた時期 月 *
  repayment: "48000", //住宅ローン返済額 毎月の返済額 *
  has_bonus: "1", //住宅ローン返済額 ボーナス月の増額有無 *
  bonus_repayment: "49000", //住宅ローン返済額 ボーナス月の返済額 *
  rent: "48000", //家賃 *
  annual_income: "4800", //前年個人年収(税込) *
  income_type: "01", //収入の形態 *
  working_style: "01", //職業 *
  business_type: "04", //お勤め先の種類 *
  office_name: "あああああ", //お勤め先名称 *
  office_kana: "アアアアア", //お勤め先名称フリガナ（全角カナ）*
  office_dept: "営業部", // 所属部課名（出向先名）
  position: "営業課長", // 役職名
  work_contents: "01", //お仕事の内容 *
  enter_company_year: "2000", //入社（営業開始）年 *
  enter_company_month: "1", //入社（営業開始）月 *
  office_zip_code_1: "064", //お勤め先住所 郵便番号 前 *
  office_zip_code_2: "0941", //お勤め先住所 郵便番号 後 *
  office_prefecture_code: "01", //住所 都道府県 *
  office_address_city: "島根県1番地", //市町村以下（全角）*
  office_address_detail: "うえだビル", //ビル名など （全角）
  office_phone2_1: "0000", //お勤め先電話番号 前 *
  office_phone2_2: "00", //お勤め先電話番号 中 *
  office_phone2_3: "0000", //お勤め先電話番号 後 *
  employee_division: "01", //従業員数 *
  capital: "01", //資本金 *
  industry: "01", //事業内容（業種） *

  // Step 3
  bank_1: "信販A", // お借り入れ金融機関の名称
  bank_2: "信販B", // お借り入れ金融機関の名称
  bank_3: "信販C", // お借り入れ金融機関の名称
  bank_4: "信販D", // お借り入れ金融機関の名称
  bank_5: "信販E", // お借り入れ金融機関の名称
  bank_6: "信販F", // お借り入れ金融機関の名称
  bank_7: "信販G", // お借り入れ金融機関の名称
  bank_8: "信販H", // お借り入れ金融機関の名称
  bank_9: "信販I", // お借り入れ金融機関の名称
  bank_10: "信販J", // お借り入れ金融機関の名称
  borrowing_1: "100", //借入先1 お借り入れ残高
  borrowing_2: "100", //借入先1 お借り入れ残高
  borrowing_3: "100", //借入先1 お借り入れ残高
  borrowing_4: "100", //借入先1 お借り入れ残高
  borrowing_5: "100", //借入先1 お借り入れ残高
  borrowing_6: "100", //借入先1 お借り入れ残高
  borrowing_7: "100", //借入先1 お借り入れ残高
  borrowing_8: "100", //借入先1 お借り入れ残高
  borrowing_9: "100", //借入先1 お借り入れ残高
  borrowing_10: "100", //借入先1 お借り入れ残高
  repayment_1: "100", //借入先1 年間返済額
  repayment_2: "100", //借入先1 年間返済額
  repayment_3: "100", //借入先1 年間返済額
  repayment_4: "100", //借入先1 年間返済額
  repayment_5: "100", //借入先1 年間返済額
  repayment_6: "100", //借入先1 年間返済額
  repayment_7: "100", //借入先1 年間返済額
  repayment_8: "100", //借入先1 年間返済額
  repayment_9: "100", //借入先1 年間返済額
  repayment_10: "100", //借入先1 年間返済額
  introduction_branch_exist: "2", //紹介店 有無 *
  reference_form_number_1: "AA0000", //企業ＩＤ・広告番号
  question: "01", //アンケート 本ローンをお申込みいただいたきっかけを教えてください *
  app_question: "アンケート", // アンケート（その他）*

  // Step 4
  reference_form_number_2: "AA0001", //企業ＩＤ・広告番号
  birth_date: "",
  email: "",
  app_success: "お申し込みありがとうございました。",
  h3_app: "お客さまについて",
  h3_app02: "ご家族・お住まいについて",

  // logic values
  isFalse: false,
  isTrue: true,
  isUndefined: undefined,

  // E-mail
  mail_datetime: "",
  mail_time: "",
  mail_time2: "",
  mail_time_0001: "",
  mail_time_0011: "",
  mail_date_0011: "",

  // Record Types
  acceptance_text: "申込受付",
  agreement: "契約同意",
  agreement_text: "契約同意",
  agr1_record_type: "条件確認",
  agr2_record_type: "0127F000001CfBZQA0",
  agr2_record_type_b: "0127F000001CfBZ",
  awaiting_approval_text: "契約同意承認待ち",
  bankacct_text: "払込先口座登録",
  conclusion_text: "契約成立",
  condition_text: "条件確認",
  ini_record_type2: "銀行審査②（取引情報取得）",
  ini_record_type3: "銀行審査③（外形チェック）",
  loan_completion_text: "お借入中",
  reconfirmation_text: "再条件確認",
  sec1_record_type: "外信照会①",
  ver1_record_type: "①申込受付後",
  ver2_record_type: "②契約手続き前",
  wnt_type: "W009",
  mnt_type: "M009",

  // AGR approve
  approve_comment_value: "OKです。",

  // Scroll
  ini3_scroll: "金利優遇",
  ini3_scroll_aml: "顧客AMLチェック結果情報",
  pro_scroll: "基準利率",
  webcontrol_item_settings_section: "Web制御項目設定",
  max_loan_amt_lbl: "最大融資額",
  doc_settings_sec: "審査フロー設定",
  asc_scroll: "反社照会",
  clpro_scroll1: "書類不要上限金額(未満)",
  clpro_scroll2: "銀行審査②フラグ",

  // DDP  
  ddp_status: "19",
  ddp_status_lbl: "同一人照会ステータス",
  ddp_val1: "取引有無照会完了",
  ddp_val2: "同一人照会完了",

  // INI
  card_linkage: "連携済み",
  federation_status: "顧客AMLチェック連携ステータス",
  fixed_comment: "シナリオ60-1-(15)",
  ini2_status_lbl: "クレジットカード情報連携ステータス",
  jurisdiction: "該当しない",
  jurisdiction_confirmation: "所管部確認結果",
  linkage_status1: "審査情報連携ステータス",
  linkage_status2: "スコアリング情報連携ステータス",
  linkage_status3: "AML等チェック連携ステータス",
  pension: "給振・年金",

  // EXS
  exam_approval_collab_status_edit_btn: "審査決裁連携ステータス の編集",
  exam_approval_collab_status_lbl: "審査決裁連携ステータス",
  first_mode_pd: 0.0002,
  first_additional_pd: 0.0001,
  pscore_a_lbl: "Pスコア_ランクA上限(以下)",
  pscore_edit_btn: "Pスコア限度額（単位：万円） の編集",
  pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  pscore_limit: 750,
  scoring_result_section: "スコアリング結果",

  // JIA
  jia_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_AM__c.New",
  jia_code_label: "注意コード ( 新ファイルM )",

  // JIB
  jib_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_Debt__c.New",
  lending_date_lbl: "貸付日",
  balance_lbl: "残高",

  // JID
  jid_create: "sfdc:StandardButton.FJ_JICC_InquiryDetail__c.New",
  trr_lbl: "借入明細情報一覧", // 借入明細情報一覧 field (also used in KID record)
  jid_date_lbl: "日付",
  jid_date_val: "2023/04/06",
  jid_name_lbl: "氏名",
  jid_name_val: "おおお おお",
  jid_birth_date_lbl: "生年月日",
  jid_birth_date_val: "1977/01/01",
  jid_sex_lbl: "性別",
  jid_sex_val: "1: 男",

  // JIB(1) - 0005
  jib_type_transact_val1: "融資", // fixed, any value
  jib_debt_val1: "AA", // fixed, One of the following * 2 alphabetic characters: AA, BA, CA, CS, DA, EE, FH, GD, HF, IJ, IZ
  jib_lend_date_val1: "2022/10/13", // YYYY/MM/DD (any date/value)
  jib_amt_val1: 3500000, // fixed, 貸付金額 & 保証額 - More than 3 million
  jib_bal_val1: 500000, // any value

  // JIB(2) - 0005
  jib_type_transact_val2: "クレジットカード（キャッシング）", // fixed, any value
  jib_debt_val2: "BA", // fixed, One of the following * 2 alphabetic characters: AA, BA, CA, CS, DA, EE, FH, GD, HF, IJ, IZ
  jib_lend_date_val2: "2022/10/13", // YYYY/MM/DD (any date/value)
  jib_amt_val2: 2000000, // fixed, 貸付金額 & 保証額 - 3 million or less
  jib_bal_val2: 500000, // any value

  // JIB(3) - 0005
  jib_type_transact_val3: "役務提携融資", // fixed, any value
  jib_debt_val3: "JL", // fixed, Any other than the following * 2 alphanumeric characters: AA, BA, CA, CS, DA, EE, FH, GD, HF, JL, JM, JO, JP, IJ, IZ
  jib_lend_date_val3: "2022/10/13", // YYYY/MM/DD (any date/value)
  jib_amt_val3: 4000000, // fixed, 貸付金額 & 保証額 - More than 3 million
  jib_bal_val3: 500000, // any value

  // JIM (Related Records)
  jim_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_M__c.New",
  debt_lbl: "債権分類", //also used in JIB records
  type_transact_lbl: "取引形態区分",
  loanamt_lbl: "契約額/極度額",
  guaranteeamt_lbl: "保証額",
  used_date_lbl: "利用日",
  total_bal_lbl: "トータル残高金額",

  // JIM (All) - 0005
  jim_type_transact_val: "融資", // 取引形態区分

  // JIM(1) - 0005
  jim_debt_val_1: "JP", // 債権分類
  jim_total_bal_value_1: 200000, // トータル残高金額
  jim_amt_val_1: 500, // 契約額/極度額, 保証額
  jim_used_date_val_1: "2023/10/01", // 利用日

  // JIM(2) - 0005
  jim_debt_val_2: "JL", // 債権分類
  jim_total_bal_value_2: 100000, // トータル残高金額
  jim_amt_val_2: 2000000, // 契約額/極度額, 保証額
  jim_used_date_val_2: "2023/07/01", // 利用日

  // JIM(3) - 0005
  jim_debt_val_3: "OU", // 債権分類
  jim_total_bal_value_3: 1000000, // トータル残高金額
  jim_amt_val_3: 2000000, // 契約額/極度額, 保証額
  jim_used_date_val_3: "2024/01/01", // 利用日

  // JIA(1) - 0005
  jia_code_value_1: "延滞後完済", // 注意コード ( 新ファイルM )

  // JIA(2) - 0005
  jia_code_value_2: "保証履行", // 注意コード ( 新ファイルM )

  // JIA(3) - 0005
  jia_code_value_3: "延滞後貸倒", // 注意コード ( 新ファイルM )

  // JIO
  jio_rel_list_name: "JICC照会明細(他機関)",
  jio_other_create: "sfdc:StandardButton.FJ_JICC_InquiryDetail_Other__c.New",
  jio_overdue_label: "支払遅延の有無（CIC交流）", // 支払遅延の有無（CIC交流）field
  jio_overdue_value: "元本遅延なし　利息遅延なし",

  // KIC - 0005
  kic_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_CIC__c.New",
  scroll_header: "作成者", // to go to designated header (also used in KIL/KOC records)

  // KID
  kid_create: "sfdc:StandardButton.FJ_KSC_InquiryDetail__c.New",

  // KIJ - 0005
  kij_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_JICC__c.New",
  loanamt_val: 100,

  // KIL - 0005
  kil_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Decl__c.New",
  attrib_changedate_lbl: "本人属性変更日",
  attrib_changedate_val: "2023/01/03",
  declare_category_lbl: "本人申告区分",
  declare_category_val: "B",
  declare_date_lbl: "申告日",
  declare_date_val: "2023/03/01",

  // KIO - 0005
  kio_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Official__c.New",
  official_report_lbl: "官報公示項目",
  official_report_val: "更正手続開始",

  // KIT
  kit_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Tran__c.New",
  name_kana_lbl: "カナ氏名",
  kit_kana_lbl: "氏名（カナ）",
  kit_balance_lbl: "残債額",
  kit_loanamt_lbl: "限度額/当初貸出額",
  name_kana_value: "ｱｱｱ ｱｱ", // Name of business partner (one-byte kana)
  transaction_type_lbl: "取引種類",
  guaranteeflg_lbl: "担保有無",
  contractdate_lbl: "成約日/実行日",
  completiontype_lbl: "完了区分",
  loanamt_card_lbl: "内カードローン限度額",
  last_repayment_lbl: "最終返済日",
  kit_loanamt_val: 1, // For KIT 2 & 3

  // KIT(1) - 0005
  kit_transaction_type_val1: "カードローン", // fixed, One of the following: カードローン、キャッシング、クレジットカード
  kit_guaranteeflg_val1: "3", // fixed
  kit_contractdate_val1: "2023/10/01", // Any value
  kit_loanamt_val1: 200, // Any value - yen in thousands
  kit_bal_val1: 100, // Any value - yen in thousands
  kit_completiontype_val1: "01", // fixed
  kit_loanamt_card_val1: 200, // Any value - yen in thousands
  kit_last_repayment_val1: "2023/01/02", // Date before today

  // KIT(2) - 0005 // test_info
  kit_transaction_type_val2: "証書貸付", // fixed, Other than one of the following: カードローン、キャッシング、クレジットカード
  kit_guaranteeflg_val2: "1", // fixed
  kit_contractdate_val2: "2023/11/01", // Any value
  kit_loanamt_val2: 200, // Any value - yen in thousands
  kit_bal_val2: 100, // Any value - yen in thousands
  kit_completiontype_val2: "01", // fixed
  kit_last_repayment_val2: "2023/01/10", // Date before today

  // KIT(3) - 0005 // test_info
  kit_transaction_type_val3: "手形貸付", // fixed, Other than one of the following: カードローン、キャッシング、クレジットカード
  kit_guaranteeflg_val3: "1", // fixed
  kit_contractdate_val3: "2023/12/01", // Any value
  kit_loanamt_val3: 300, // Any value - yen in thousands
  kit_bal_val3: 100, // Any value - yen in thousands
  kit_completiontype_val3: "02", // fixed
  kit_last_repayment_val3: "2023/01/16", // Date before today

  // PC
  pc_master: "",

  // SEC1 (Related Records)
  jicc_status_label: "JICC照会ステータス",
  jicc_edit_pencil: "JICC照会ステータス の編集",
  status_value: "回答受信完了", // also used in KSC records
  ksc_status_label: "KSC照会ステータス",
  ksc_edit_pencil: "KSC照会ステータス の編集",
  secondary_chk_label: "外信照会ステータス",
  secondary_chk_pencil: "外信照会ステータス の編集",
  secondary_chk_val: "実施済OK",

  // ASC
  asc_edit_btn: "反社照会結果 の編集",
  asc_result_lbl: "反社照会結果",
  asc_status_lbl: "反社照会ステータス",

  // APP
  basic_loan_acc_no_value: "0000001",
  basic_loan_acc_no_lbl: "融資基本口座番号",
  new_acct_label: "取引先",
  new_app_label: "申込",
  create_new_bank_action: "actionCreateNew",
  cif_no_value: "0000001",
  cif_no_lbl: "全店顧客番号",
  cust_att_data: "顧客属性データ",
  cust_num_reacq_linkage_status_lbl: "顧客番号再取得連携ステータス",
  cust_num_reacq_linkage_status_value: "手動照会済み",
  repayment_bank_account_label: "返済用銀行口座",
  repayment_bank_account_edit_btn: "返済用銀行口座を編集",
  store_wide_customer_number_edit_btn: "全店顧客番号を編集",
  submission_data_section: "実行依頼データ",
  obj_mgr_app_id: "01I7F0000010Mqz",
  obj_mng_brw_id: "00N0T00000APEvm",
  borrowing_status_label: "借入ステータス",
  borrowing_status_dropdown: "実行済み",
  handling_number_label: "取扱番号(口座番号)",
  handling_number_value: "0000003",
  mail_completion_time: "",
  borrowing_status_edit_btn: "借入ステータスを編集",

  // New BA
  finc_insti_name_lbl: "金融機関名(選択)",

  // BA
  ba_confirmation_status_label: "確認ステータス",
  ba_confirmation_status_value: "確認済",
  ba_deposit_type_label: "預金種類",
  ba_display_flag_lbl: "銀行口座表示フラグ",
  flag_management: "フラグ管理",
  flag_management_edit: "銀行口座表示フラグを編集",
  flag_management_value: "",
  flag_management_lbl: "Recordfj_BankDisplayFlg__cField",
  new_repayment_flag_label: "返済用フラグ",
  new_confirmation_status_value: "未確認",
  new_deposit_type_label: "預金種類",
  new_deposit_type_value: "普通預金",
  new_financial_inst_name_optional_label: "金融機関名(選択)",
  new_financial_inst_name_optional_value: "当行",
  new_financial_inst_type_label: "金融機関種類",
  new_financial_inst_type_actual_label: "金融機関種類",
  new_financial_inst_type_value: "銀行",
  new_financial_inst_code_label: "金融機関コード",
  new_financial_inst_code_value: "0001",
  new_financial_inst_name_label: "金融機関名",
  new_financial_inst_name_value: "サンプル銀行",
  new_branch_code_label: "支店コード",
  new_branch_code_value: "001",
  new_branch_code_value1: "101",
  new_branch_code_value2: "102",
  new_branch_name_label: "支店名",
  new_branch_name_value: "本店営業部",
  new_account_number1_label: "口座番号",
  new_account_number1_value: "4870011",
  new_deposit_type_ordinary_bank_label: "預金種類（普通銀行）, --なし--",
  new_deposit_type_ordinary_bank_value: "普通預金",
  new_financial_inst_code_ordinary_bank_label: "金融機関コード(普通銀行)",
  new_financial_inst_code_ordinary_bank_value: "0001",
  new_financial_inst_name_ordinary_bank_label: "金融機関名(普通銀行)",
  new_financial_inst_name_ordinary_bank_value: "サンプル銀行",
  new_branch_code_ordinary_label: "支店コード(普通銀行)",
  new_branch_code_ordinary_value: "001",
  new_branch_name_ordinary_bank_label: "支店名(普通銀行)",
  new_branch_name_ordinary_bank_value: "本店営業部",
  new_account_number2_label: "口座番号(普通銀行)",
  new_account_number2_value: "4870011",
  branch_acc_class: "BankAccountNumber",
  bank_acc_type_lbl: "預金種類",
  bank_name_class: "bankAccountName",
  bank_acc_name_class: "bankAccountName_LocalChar",
  bank_amount_class: "slds-input BankAmount",
  branch_name_normal: "支店名C",
  finc_insti_name_val: "当行",
  branch_name1: "支店名A",
  branch_name2: "支店名B",
  branch_name3: "支店名C",
  branch_acc: "0000001",
  bank_acc_type: "普通預金",
  bank_name: "いい",
  bank_acc_name: "イイ",
  bank_amount: "1000000",

  // CRE
  cre_result_condition: "審査結果ご融資条件",
  msg_value1: "審査宿果ご駐資条件を入力しました",
  msg_value2: "金額・期間ともに減らします。追記しました。",
  msg_value_max:
    "条件確認ご融資条件テストいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい" +
    "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい" +
    "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい" +
    "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい" +
    "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい" +
    "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい" +
    "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい" +
    "いいいいいいいいいいいいいいいいいいいいいいいいいい",

  /**|================================================================================|
   * | TEXT/BUTTONS                                                                   |
   * |================================================================================|
   */
  // Table head
  th01: "借入先1",
  th02: "借入先2",
  th03: "借入先3",
  th04: "借入先4",
  th05: "借入先5",
  th06: "借入先6",
  th07: "借入先7",
  th08: "借入先8",
  th09: "借入先9",
  th10: "借入先10",

  // Application form accordions
  acc1: "お手続きマイページ利用規約",
  acc2: "注意事項",
  acc3: "銀行に対する個人情報の取扱いに関する同意条項",
  acc4: "契約規定",

  // Application form PDFs
  pdf01: "agree_PersonalInfoConsentClause_Gogin",
  pdf02: "agree_ContractTerms",
  pdf03: "agree_TermsOfUsage_MyPage",
  pdf_win01: "TermsOfUsage_MyPage.pdf",
  pdf_win02: "ContractTerms_CardLoan_CashBankNeoLoan.pdf",
  pdf_win03: "PersonalInfoConsentClause_Gogin.pdf",
  pdf_select: "PDFファイルをダウンロード",

  // Application Page Buttons
  agreement_btn: "genesis__Applications__c.fj_ReAgreementProcess2",

  // Common Buttons
  approve_btn: "承認",
  app_new_ba_record_btn: "新規銀行口座",
  back_btn: "　戻る　",
  cancel_edit_btn: "CancelEdit",
  confirm_scr_btn: "確認画面へ",
  confirm_btn: "確認",
  edit_btn: "Edit",
  save_btn_lbl: "保存",
  save_edit_btn: "SaveEdit",
  submit_btn: "submit",
  recalculate_btn_label: "再計算",
  return_btn: "戻る",
  slip_output_btn: "伝票出力",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // MyPage buttons
  mypage_next_btn: "決定",
  new_btn: "登録",
  expand_btn: "詳細を確認",
  mark_read: "既読にする",
  mark_comp: "完了",
  mypage_rdc_view_record_btn: "ご提出",
  completion_btn: "完了",

  // Listview
  all_aal_listview: "すべて選択",

  // OTHERS
  approval_comment_input_lbl: "決裁コメント",
  approval_comment_value: "approve test",
  doc_required_max_amount: "書類不要上限金額(未満)",
  loan_amount_lbl: "貸付金額",
  stt_type_text: "反社照会申込書",
  asc_results_value: "◎",
  completed_status_value: "連携完了",
  registration_section: "実行登録",
  approved_text: "承認済み",

  // Headers
  asc_header: "反社照会",
  ba_header: "銀行口座",
  rdc_header: "徴求書類",
  sec_header: "外信照会",

  // MyPage
  home_mypage: "ホーム",
  see_app: "すべて表示",
  app_num: "お申込番号",
  see_wnt: "すべての お知らせ を参照",
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_borrow_amount_header: "お借入れ金額をお決めください",
  mypage_borrow_amount_value: "",
  mypage_date_value: "以下をご融資の条件とさせていただきます",
  mypage_borrow_amount_value2: "",
  mypage_confirmation_page_btn: "内容確認へ",
  mypage_determine_btn: "確定する",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_accept_contract_btn: "契約に同意する",
  viewall_notif_link: "すべての お知らせ を参照", // see_wnt: "すべての お知らせ を参照",

  // Sort
  sort_app: "降順に並び替え済み",
  sort_wnt_col: "お知らせ番号",
  app_logs_sort: "申込ログNo",
  sort_app_asc: "昇順に並び替え済み", // ascending

  // Texts

  /**|================================================================================|
   * | APIs                                                                        |
   * |================================================================================|
   */
  // Buttons
  rdc_approve_btn_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  ver_approve_btn_api: "FJ_Verification__c.Fj_Verification_Accept",
  initial_check_accept_api: "FJ_InitialChk__c.Fj_InitialChkAccept",
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  cre_approval_btn: "FJ_CreditApproval__c.Fj_CreditApproval_Accept",

  /**|================================================================================|
   * | COMMON CODE VARIABLES                                                          |
   * |================================================================================|
   */
  // Select app from App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  /**|================================================================================|
   * | IDENTIFIERS/COUNTERS                                                           |
   * |================================================================================|
   */
  logged_status: "",
  ba_new_record_no_value: 2,
  three_no_of_records: 3,

  /**|================================================================================|
   * | QUERIES                                                                        |
   * |================================================================================|
   */
  query_0001_45:
    "SELECT Id, Name, fj_Interest_Rate_Requested__c, genesis__Interest_Rate__c, fj_Bonus_Repayment_Requested__c, " +
    "fj_Bonus_Repayment__c, fj_Bonus_Month_Requested__c, fj_Bonus_Month__c, " +
    "fj_Bonus_Percent_Requested__c, fj_Bonus_Percent__c " +
    "FROM genesis__Applications__c WHERE Name=",
  query1_0001_31:
    "SELECT Id, Name, CreatedDate, fj_BirthDate__c, clcommon__Email__c FROM Account WHERE clcommon__Email__c = '",
  query2_0001_31: "' AND fj_BirthDate__c = ",
  query_0006_03:
    "SELECT Id, Name, fj_InterestRate_InitialChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0006_17_1:
    "SELECT Id, Name, fj_1st_ModePD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=",
  query_0006_17_2:
    "SELECT Id, Name, fj_1st_AdditionalPD__c " +
    "FROM FJ_ExternalScoring__c WHERE Name=",
  query_0009_04:
    "SELECT Id, Name, fj_Loan_Amount_GuaranteeChk__c, genesis__Loan_Amount__c, fj_Term_GuaranteeChk__c, genesis__Term__c, fj_Interest_Rate_GuaranteeChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = '",
  query_0009_08:
    "SELECT Id, Name, fj_Interest_Rate_Calculated__c, fj_Loan_Amount_Calculated__c, fj_Term_Calculated__c FROM genesis__Applications__c WHERE Name = '",
  query_0009_16:
    "SELECT Id, Name, fj_Loan_Amount_Approved__c, fj_Term_Approved__c, fj_Interest_Rate_Approved__c, fj_CustomerMemo__c FROM genesis__Applications__c WHERE Name = '",
  query_0011_22:
    "SELECT Id, Name, fj_LastGuaranteeCondition__c FROM genesis__Applications__c WHERE Name =",
  query_0011_110:
    "SELECT Id, name, fj_Borrowing_Status__c FROM genesis__Applications__c WHERE Name = '",
  query_0012_39:
    "SELECT Id, Name, fj_SlipOutputFlg__c FROM genesis__Applications__c WHERE Name = ",

  /**|================================================================================|
   * | 0012 JSFORCE BATCH EXECUTION                                                   |
   * |================================================================================|
   */
  cron_name: "自動実行バッチテスト",
  batch_executed: "",
  batch_compiled: "",
};
