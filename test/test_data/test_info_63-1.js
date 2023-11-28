const user_info = require("../test_data/global_info");
export const testData = {
  /**
   * CHECK FIRST BEFORE EXECUTE THE SCRIPT
   */
  app_name: "APP-0000001534", // Prerequisite before running 0001 Process2
  contact_detail: "GDC)Gizelle Automation Test 09/14/2023 Spec63-1 Test 1", // ご要望事項* for identification || Application form
  input_key: "2023091411000103", // recommended to be unique CLI Record - Expires after 30 minutes - need to execute step_04 data again if it expires

  // For 0012_step24
  // Note: before running schedulable apex class make sure to change the
  // sched_minute, and sched_hour variables in the test info file and
  // make sure the time is advanced by 1 hour and 6 minutes (Japan time)
  sched_minute: "39",
  sched_hour: "7",

  // 0011 - お借入内容調整画面
  // MyPage Borrowing Adjustment Screen Inputs
  // ご融資希望日 ***NOTE: date format will be affected by locale settings***
  // JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY
  mypage_loan_date_value: "12/29/2023",
  mypage_loan_date_value_final: "12/29/2023",

  // Record variables - ALPHABETICAL
  app_id: "",
  agr1_id: "",
  agr1_name: "",
  agr2_id: "",
  agr2_name: "",
  asc_id: "",
  asc_name: "",
  cli_id: "",
  cli_name: "",
  account_id: "",
  account_name: "",
  ba_id: "",
  ba_name: "",
  bla_id: "",
  bla_name: "",
  cabi_id: "",
  cabi_name: "",
  cabf_id: "",
  cabf_name: "",
  cla_id: "",
  cla_name: "",
  contact_id: "",
  cnt_id: "",
  cnt_name: "",
  cre_id: "",
  cre_name: "",
  ddp_id: "",
  ddp_name: "",
  er_id: "",
  er_name: "",
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
  ini2_id: "",
  ini2_name: "",
  ini3_id: "",
  ini3_name: "",
  listview_id: "",
  listview_id2: "",
  listview_id3: "",
  listview_id4: "",
  listview_id5: "",
  mnt1_id: "",
  mnt1_name: "",
  mnt2_id: "",
  mnt2_name: "",
  mnt11_id: "",
  mnt11_name: "",
  pro_id: "",
  pro_name: "",
  rdc1_id_of_ver1: "",
  rdc1_name_of_ver1: "",
  rdc1_id_of_ver2: "",
  rdc1_name_of_ver2: "",
  stt_id: "",
  stt_name: "",
  trr_id: "",
  trr_name: "",
  ver1_id: "",
  ver1_name: "",
  ver2_id: "",
  ver2_name: "",
  wnt1_id: "",
  wnt1_name: "",
  wnt2_id: "",
  wnt2_name: "",

  // Record arrays - ALPHABETICAL
  asc_array: new Array(),
  ba_array: new Array(),
  cdd_array: new Array(),
  chi_array: new Array(),
  cif_array: new Array(),
  er_array: new Array(),
  lcd_array1: new Array(),
  lcd_array2: new Array(),
  res_results: new Array(),
  sci_array: new Array(),

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec63_1: "63-1-(01)",
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

  // Logged Status
  logged_status: "",

  // Mail
  mail_time: "",
  acceptance_text: "申込受付",

  // Outlook
  e_email: "email",
  e_pw: "password",
  e_no: "idBtn_Back",
  submit_btn: "submit",

  sf_user: "",
  save_btn: "SaveEdit",
  close_btn_img: "閉じる",
  heading: "住宅ローン利用者限定フリーローンお申込み",
  back_btn: "　戻る　",

  // Select app from App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  // MyPage - commonly used
  home_mypage: "ホーム",
  mypage_url: "",
  m_login: "button",
  see_app: "すべて表示",
  see_wnt: "すべての お知らせ を参照",
  sort_latest: "降順に並び替え済み", // descending
  sort_app_asc: "昇順に並び替え済み", // ascending
  mark_read: "既読にする",
  mark_comp: "完了",
  sort_app_col: "お申込番号",
  sort_wnt_col: "お知らせ番号",
  new_btn: "登録", // ★ 新環境適用' New Env Implementation
  mypage_next_btn: "決定", // ★ 新環境適用' New Env Implementation

  // Sort Title
  app_logs_sort: "申込ログNo",
  app_id_sort: "申込ID",
  app_date_sort: "作成日",
  recycle_date_sort: "削除日",
  mypage_app_status_sort: "お手続き状況",
  mypage_amount_sort: "お借入希望額",
  lcd_sort: "貸出共通明細番号",

  // API Label
  customer_number_lbl: "顧客番号",
  kana_name_lbl: "カナ氏名",
  kanji_name_lbl: "漢字氏名",
  gender_lbl: "性別",
  kana_add1_lbl: "カナ住所１",
  address_code_lbl: "住所コード",
  postal_code_lbl: "漢字住所（郵便番号）",
  kanji_add1_lbl: "漢字住所（住所１）",
  primary_tel_num_lbl: "第一電話番号",
  secondary_tel_num_lbl: "第二電話番号",
  third_tel_num_lbl: "第三電話番号",
  annual_income_lbl: "年収（万円）",
  kana_name_workplace_lbl: "カナ勤務先名・事業所名",
  name_workplace_lbl: "勤務先名・事業所名",
  prefectural_code_lbl: "現都道府県コード",
  input_key_lbl: "入力キー",
  input_kananame_lbl: "入力_カナ氏名",
  input_birthdate_lbl: "入力_生年月日",
  input_branch_number_lbl: "入力_支店番号",
  input_acct_type_lbl: "入力_預金科目",
  input_acct_num_lbl: "入力_口座番号",

  // Textboxes
  search_textbox: "enter-search",

  // New Button - Data Target
  agr_reject_api:
    "sfdc:StandardButton.ProcessInstanceWorkitem.ApprovalProcessReject",
  approve_agr_btn:
    "sfdc:StandardButton.ProcessInstanceHistory.ApprovalProcessApprove",
  cdd_create: "sfdc:StandardButton.FJ_NameDedupe_Candidate__c.New",
  confirm_btn_name: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  cre_approval_button: "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  delete_btn_api: "FJ_RequiredDocument__c.Fj_RequirdDocmentFileDeleter",
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  guarantee_chk_confirm_btn_api:
    "FJ_GuaranteeChkDetail__c.FJ_GuaranteeChkDetailConfirm",
  initial_chk_accept: "FJ_InitialChk__c.Fj_InitialChkAccept",
  new_cli_btn: "sfdc:StandardButton.FJ_CustomerLedgerInquiry__c.New",
  process_instance_approve_api:
    "sfdc:StandardButton.ProcessInstanceWorkitem.ApprovalProcessApprove",
  required_docu_reject_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Reject",
  rdc_approve_btn_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  ver_approve_btn_api: "FJ_Verification__c.Fj_Verification_Accept",

  // URLs
  httpurl01: user_info.environmentLinks.app_form_link + "/auth?sid=63",
  httpurl02: user_info.environmentLinks.app_form_link + "/loan?pc=63",
  httpurl03: "o/FJ_CustomerLedgerInquiry__c/list?filterName=Recent", // CLI list view
  httpurl04: "o/FJ_ApplicationAccessLog__c/list?filterName=", // ALL Application Log page
  httpurl05: "o/genesis__Applications__c/list?filterName=", // ALL Application page
  httpurl06: "o/FJ_Branch__c/list?filterName=", // All 店舗 page
  httpurl07: "o/Account/list?filterName=", // All Account page
  httpurl08: "o/Contact/list?filterName=", // All Contact page
  downloads_url: "chrome://downloads/",

  // PDF names
  pdf01: "AcceptableUsePolicy_Auth.pdf",
  pdf02: "PersonalInfoConsentClause_Gogin.pdf",
  pdf03: "PersonalInfoConsentClause_Company_Oneset.pdf",
  pdf04: "ContractTerms_OneSetCardLoan.pdf",
  pdf05: "TermsOfUsage_MyPage.pdf",

  // MyPage buttons
  accept_contract_btn: "契約に同意する",
  loan_details_adjustment_btn: "お借入れ内容調整",
  mypage_confirmation_page_btn: "内容確認へ",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_determine_btn: "確定する",
  mypage_rdc_view_record_btn: "ご提出",
  completion_btn: "完了",

  // Common buttons
  accept_confirm_btn: "確認",
  approve_confirm: "承認",
  reconfirmation_btn: "再条件確認",
  reject_confirm_btn: "不備",
  sf_canceledit_btn: "CancelEdit",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // Listview
  all_aal_listview: "すべて選択",
  all_account_listview: "すべての取引先",
  all_apps_listview: "すべて選択",
  all_contact_listview: "All Contacts",

  // Common values
  linkage_status_val: "連携済み",

  // SECTION/HEADER
  asc_header: "反社照会",
  rdc_header: "徴求書類",
  exm_scroll: "外信照会",

  // Queries
  query_0001_45:
    "Select Name, genesis__Loan_Amount__c, fj_Loan_Amount_Requested__c, genesis__Term__c, fj_Term_Requested__c, genesis__Interest_Rate__c, " +
    "fj_Interest_Rate_Requested__c, fj_Bonus_Repayment__c, fj_Bonus_Repayment_Requested__c, fj_Bonus_Month__c, fj_Bonus_Month_Requested__c, " +
    "fj_Bonus_Percent__c, fj_Bonus_Percent_Requested__c from genesis__Applications__c Where Name=",
  query_0006_03:
    "SELECT Name, fj_InterestRate_InitialChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name=",
  query_0006_36:
    "SELECT Name, fj_RefApplication__r.Name, fj_ApplicationAmount__c FROM FJ_ExternalScoring__c WHERE Name=",
  query_0007_02:
    "Select Name, fj_Loan_Amount_Calculated__c, fj_Term_Calculated__c, fj_Interest_Rate_Calculated__c, genesis__Loan_Amount__c, genesis__Term__c, " +
    "genesis__Interest_Rate__c from genesis__Applications__c where Name=",
  query_0009_04:
    "Select Name, fj_Loan_Amount_GuaranteeChk__c, fj_Term_GuaranteeChk__c, fj_Interest_Rate_GuaranteeChk__c, genesis__Loan_Amount__c, genesis__Term__c, " +
    "genesis__Interest_Rate__c from genesis__Applications__c where Name =",
  query_0011_09:
    "Select Name, fj_RefApplication__r.Name, fj_IsForPayment__c from clcommon__Bank_Account__c where fj_RefApplication__c =",
  query_0011_39:
    "SELECT Name, fj_Interest_Rate_Changed__c, fj_Loan_Amount_Changed__c, fj_Term_Changed__c FROM genesis__Applications__c WHERE Name =", // used also in step 119
  query_0012_24_cron_query1:
    "SELECT Id, CronJobDetail.Name FROM CronTrigger WHERE CronJobDetail.Name =",
  query_0012_24_cron_query2:
    "SELECT Id, ApexClass.Name, Status, ExtendedStatus, NumberOfErrors, CreatedDate, JobType, CronTriggerId FROM AsyncApexJob WHERE Crontriggerid =",

  // Record Types
  agr1_record_type: "条件確認",
  agr2_record_type: "契約同意",
  ddp_record_type2: "CIF明細選択",
  er1_record_type: "13_普通預金_貸越契約",
  er2_record_type: "14_カードローン回収",
  er3_record_type: "21_カードローン口座閉鎖",
  gud3_record_type: "保証審査③",
  ini2_record_type: "銀行審査②（取引情報取得）",
  ini3_record_type: "銀行審査③（外形チェック）",
  rdc1_record_type: "所得確認資料",
  stt_type_text: "反社照会申込書",
  ver1_record_type: "①申込受付後",
  ver2_record_type: "②契約手続き前",

  // WNT Types
  wnt_type: "W009",
  wnt1_type: "W030",
  wnt2_type: "W032",
  wnt5_type: "W033",
  wnt6_type: "W035",
  wnt7_type: "W034",
  wnt8_type: "W012",
  wnt11_type: "W031",

  // MNT Types
  mnt_type: "M009",
  mnt1_type: "M030",
  mnt2_type: "M032",
  mnt5_type: "M033",
  mnt6_type: "M035",
  mnt7_type: "M034",
  mnt8_type: "M012",
  mnt11_type: "M031",

  // Listview
  my_bin_listview: "私のごみ箱",
  org_bin_listview: "組織のごみ箱",

  // 0001 ---------------------------------------------------
  // Accordions
  accordion1: "注意事項",
  accordion2: "銀行に対する個人情報の取扱いに関する同意条項",
  accordion3: "保証会社に対する個人情報の取扱いに関する同意条項",
  accordion4: "契約規定・保証委託約款",
  accordion5: "お手続きマイページ利用規約",

  // PDF Selectors
  pdf1_step_01: "agree_AcceptableUsePolicy_Auth",
  pdf_select: "PDFファイルをダウンロード",
  pdf1_step_06: "agree_PersonalInfoConsentClause_Gogin",
  pdf2_step_06: "agree_PersonalInfoConsentClause_Company",
  pdf3_step_06: "agree_ContractTerms",
  pdf4_step_06: "agree_TermsOfUsage_MyPage",

  // Account authentication error values
  error_loan_app_account_name_last: "kanji",
  error_loan_app_account_name_first: "漢字",
  error_loan_app_birth: "199178",
  error_loan_app_account_number: "あああ",
  error_loan_app_pinword: "あああ",

  // Account authentication valid values
  loan_app_account_name_last: "アーア",
  loan_app_account_name_first: "アーア",
  loan_app_birth: "19770101",
  loan_app_select_branch: "013",
  loan_app_account_number: "6500001",
  loan_app_pinword: "1234",

  // CLI record values creation
  customer_number: "1977010100",
  kana_name: "アアア アア",
  kanji_name: "前　お", // GDC specific field values
  gender: "男",
  kana_address_1: "ｼﾏﾈｹﾝﾏﾂｴｼ1-1-1",
  address_code: "32201001000",
  kanji_address_zipcode: "690-0000",
  kanji_address_1: "島根県松江市１－１－１",
  primary_telephone_number: "000-00-0000",
  second_telephone_number: "000-00-0001",
  third_telephone_number: "003-00-0003",
  annual_income: "10000",
  kana_name_of_workplace_and_office: "アアアアア",
  name_of_workplace_and_office: "あああああ",
  prefectural_code: 32, // fixed
  input_kana_name: "ｱｱｱ ｱｱ",
  input_birth_date: "19770101", // GDC specific field values
  input_deposit_item: "12",
  input_branch_number: "013",
  entry_account_number: "6500001",

  // Application form step 1 error values
  error_loan_app_contact_phone_1: "0あ",
  error_loan_app_contact_phone_2: "000a",
  error_loan_app_contact_phone_3: "000+",

  // Application form
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
  zip_code_1: "060", // 住所 郵便番号 *
  zip_code_2: "0000", // 住所 郵便番号 *
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
  loan_app_has_mortgage: "2", // 当行での住宅ローンまたは住宅金融支援機構のご利用 *

  // Step 2
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
  office_zip_code_1: "064", // お勤め先住所 郵便番号 *
  office_zip_code_2: "0941", // お勤め先住所 郵便番号 *
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

  // Step 3
  use_detail: "資金使途です", // お使いみち *
  payment1: "", // お支払い予定先 *
  payment_value: "", // お支払い予定先 *
  bank1: "", // 借入先 *
  borrowing_1: "", // 借入先 *
  repayment_1: "", // 借入先 *
  introduction_branch_exist: "1", // 紹介店 有無 *
  select_introduction_branch: "023", // 紹介店 *
  reference_form_number: "ab0001", // 企業ＩＤ・広告番号 *
  question: "16", // アンケートへのご協力をお願いします。
  app_question: "口コミサイト", // アンケート その他 *

  // Final Step append to Step 3
  use_detail_append: "資金使途です修正",

  // Final Step
  app_success: "お申し込みありがとうございました。",

  // Values
  branch_number_value: "013",

  // CDD
  // APIs Label
  cdd_birth_date_lbl: "生年月日",
  cdd_kanji_name_lbl: "漢字氏名",
  cdd_zip_code: "郵便番号",
  cdd_kanji_add1_lbl: "住所１",
  cdd_phone_number1_lbl: "第一電話番号",
  cdd_phone_number2_lbl: "第二電話番号",
  cdd_phone_number3_lbl: "第三電話番号",
  cdd_prefectural_code_lbl: "住所コード＿都道府県コード",
  cdd_city_code_lbl: "住所コード＿市区町村コード",
  cdd_oaza_common_name_code_lbl: "住所コード＿大字通称コード",
  cdd_character_code_lbl: "住所コード＿字丁目コード",
  bra_no_lbl: "店番号",
  cif_no_lbl: "店別顧客番号",
  two_records_of_cdd: 2,

  // True Values for loop
  cdd_birth_date_val1: "S520101",
  cdd_kanji_name_val1: "前　おい",
  cdd_kanji_address1_val1: "島根県松江市",
  cdd_customer_number_val1: "1977010101",
  cdd_primary_telephone_number_val1: "000-00-0000",
  cdd_second_telephone_number_val1: "",
  cdd_third_telephone_number_val1: "",
  cdd_city_code_val1: "202",
  cdd_oaza_common_name_code_val1: "001",
  cdd_character_code_val1: "000",

  // Fake Values for loop
  cdd_birth_date_val2: "S520101",
  cdd_kanji_name_val2: "前　お",
  cdd_kanji_address1_val2: "島根県松江市１",
  cdd_customer_number_val2: "1977010100",
  cdd_primary_telephone_number_val2: "000-00-0000",
  cdd_second_telephone_number_val2: "000-00-0001",
  cdd_third_telephone_number_val2: "000-00-0003",
  cdd_city_code_val2: "",
  cdd_oaza_common_name_code_val2: "000",
  cdd_character_code_val2: "",

  // 同一人照会ステータス
  ddp_status: "同一人照会ステータス",
  ddp_status_edit_pencil: "同一人照会ステータス の編集",
  ddp_status_value: "取引有無照会完了",
  ddp_status_value2: "同一人照会完了",

  // Radio buttons
  first_rec_name: "0",
  second_rec_name: "1",
  val_button: "2",

  // Button
  confirm_btn_cdd: "確定",
  ba_status_edit_btn: "確認ステータス の編集",

  // Alert
  alert_txt: "一致チェック結果を更新して宜しいでしょうか？",

  // CDD update values
  edit_pencil_cdd: "店番号 の編集",
  bra_no_label: "店番号",
  bra_no_value: "013",
  cif_no_value: "1977010",

  // Go to (view only)
  cif_rel_list: "勤務先情報",

  // 0004 --------------------------------
  // INI-2 status
  ini2_linkage_status_lbl: "クレジットカード情報連携ステータス",
  ini2_linkage_status_pencil: "クレジットカード情報連携ステータス の編集",

  // INI-3 status
  review_information_linkage_status_label: "審査情報連携ステータス",
  scoring_information_linkage_status_label: "スコアリング情報連携ステータス",
  aml_etc_check_linkage_status_label: "AML等チェック連携ステータス",
  customer_aml_check_federation_status_label: "顧客AMLチェック連携ステータス",

  // Step_20_data values
  // First CHI record
  credit_rank_val1: "B",
  liquid_deposit_val1: 11000,
  fixed_deposit_val1: 12000,
  has_existing_card: true,
  existing_card_val: "カードローンです",
  has_joint_debt: true,
  joined_debtor_val: "8330000001",
  has_joint_guarantee: true,
  has_housing_withdrawal: true,

  // Second CHI record
  credit_rank_val2: "S",
  liquid_deposit_val2: 21000,
  fixed_deposit_val2: 22000,
  has_payroll_transfer: true,

  // Step_21_data values
  // First SCI record
  account_open_date1: "2023-02-28",
  has_cif_card_loan1: true,
  has_cif_payroll_transfer: true,
  has_cif_housing_loan: true,
  has_cif_jcb: true,
  has_cif_nhk: true,
  cif_card_extreme_amount1: 31000,
  cif_libhousing_borrow_cnt1: 1,
  cif_cardloan_balance1: 32000,
  cif_libunsecured_borrow_cnt1: 2,
  cif_fixed_deposit_balance1: 33000,
  cif_libhousing_borrow_tb1: 34000,
  cif_liquid_deposit_average1: 35000,
  cif_libunsecured_borrow_tb1: 36000,
  cif_mebalance1: 37000,
  cif_libhousing_loan_tmra1: 38000,
  cif_remaindeposit1: 39000,
  cif_libunsecured_borrow_tbra1: 31100,
  cif_consumer_loan_mebalance1: 31200,
  cif_libunsecured_borrow_tmra1: 31300,
  cif_me_total_balance1: 31300,
  cif_libhousing_loan_tbra1: 31400,

  // Second SCI record
  account_open_date2: "2023-01-16",
  has_cif_card_loan2: true,
  has_cif_property_accum: true,
  has_cif_housingloan_jfc: true,
  has_cif_pensionloan: true,
  has_educate_eliteloan: true,
  cif_card_extreme_amount2: 41000,
  cif_libhousing_borrow_cnt2: 41100,
  cif_cardloan_balance2: 41200,
  cif_libunsecured_borrow_cnt2: 41300,
  cif_fixed_deposit_balance2: 41400,
  cif_libhousing_borrow_tb2: 41500,
  cif_liquid_deposit_average2: 41600,
  cif_libunsecured_borrow_tb2: 41700,
  cif_mebalance2: 41800,
  cif_libhousing_loan_tmra2: 41900,
  cif_remaindeposit2: 42000,
  cif_libunsecured_borrow_tbra2: 42100,
  cif_consumer_loan_mebalance2: 42300,
  cif_libunsecured_borrow_tmra2: 42400,
  cif_me_total_balance2: 42500,
  cif_libhousing_loan_tbra2: 42600,

  // Step_22_data
  transaction_ban_code1: "001;141",
  transaction_ban_code2: "005",

  // Step 23 data
  aml_section: "顧客AMLチェック結果情報",
  check_result_1_title: "チェック結果文言１",
  check_result_1: "fj_ChkResult1__c",
  message_1_lbl: "メッセージ文言１",
  message_2_lbl: "メッセージ文言２",

  // Values
  check_result_1_value: "リストに該当しませんでした。",
  message_1_value: "もんごん1",
  message_2_value: "もんごん2",

  // Step 25 LCD1
  has_existing_loan_collection: false,
  has_include_sum: true,
  has_over_due: true,

  // 1st record
  subject_code_1: "48", // will be used in 2nd record
  collateral_classification_1: "3", // will be used in 2nd record
  basic_loan_account_1: "8330002",
  handling_no_1: "8330003",
  loan_name_1: "あ 1-1",
  current_balance_1: 11000,
  bra_no_1: "001",
  initial_lending_date_1: "2023-02-21",
  last_repayment_date_1: "2024-05-21",
  interest_rate_1: "1",
  guarantee_no_1: "11111",
  credit_limit1: 11200,

  // 2nd record
  basic_loan_account_2: "8330003",
  loan_name_2: "あ 1-2",
  current_balance_2: 12100,
  bra_no_2: "002",
  initial_lending_date_2: "2023-03-22",
  last_repayment_date_2: "2024-06-22",
  handling_no_2: "8330004",
  interest_rate_2: "2",
  guarantee_no_2: "22222",
  credit_limit2: 12300,

  // 3rd record
  subject_code_2: "12", // will be used in 4th record
  collateral_classification_2: "2", // will be used in 4th record
  basic_loan_account_3: "8330005",
  loan_name_3: "あ 2-1",
  current_balance_3: 131000,
  bra_no_3: "003",
  initial_lending_date_3: "2023-04-23",
  last_repayment_date_3: "2024-07-23",
  handling_no_3: "8330005",
  interest_rate_3: "3",
  guarantee_no_3: "33333",
  credit_limit3: 133000,

  // 4th record
  basic_loan_account_4: "8330004",
  loan_name_4: "あ 2-1",
  current_balance_4: 14100,
  bra_no_4: "004",
  initial_lending_date_4: "2023-04-24",
  last_repayment_date_4: "2024-08-24",
  handling_no_4: "8330005",
  interest_rate_4: "4",
  guarantee_no_4: "44444",
  credit_limit4: 145000,

  // 5th record
  subject_code_3: "10", // will be used in 6th record
  collateral_classification_3: "2", // will be used in 6th record
  basic_loan_account_5: "8330000",
  loan_name_5: "あ 3-1",
  current_balance_5: 5000,
  bra_no_5: "005",
  initial_lending_date_5: "2023-05-25",
  last_repayment_date_5: "2023-09-25",
  handling_no_5: "8330001",
  interest_rate_5: "5",
  guarantee_no_5: "55555",

  // 6th record
  basic_loan_account_6: "8330001",
  loan_name_6: "あ 3-2",
  current_balance_6: 1300000,
  bra_no_6: "006",
  initial_lending_date_6: "2023-06-26",
  last_repayment_date_6: "2023-10-26",
  handling_no_6: "8330003",
  interest_rate_6: "6",
  guarantee_no_6: "66666",

  // Step 28 CABI record
  ea_deposit: 10000,
  ea_deposit_subtotal: 11000,
  ea_total_deposit: 12000,
  ea_domestic_stock: 13000,
  ea_domestic_bond: 15000,
  ea_other_domestic_investment_trust: 17000,
  ea_mrf: 0,
  ea_fund_wrap: 0,
  ea_foreign_stocks: 14000,
  ea_foreign_bond: 16000,
  ea_other_fit: 0,
  ea_foreign_currency_mmf: 0,
  ea_other: 0,

  // Step 28 CABF record
  product_name: "あ",
  currency_code: "01",
  market_price: 10000,
  initial_deposit_amount: 120000,
  yen_amount: 130000,
  foreign_currency_amount: 100000,
  automatic_renewal_type: "1",
  account_store_name: "ああ",
  foreign_currency_deposit_account_no: "1234000",
  interest_rate_1: "5",
  initial_deposit_date: "2023-08-01",
  deposit_date: "2023-10-03",
  maturity_date: "2024-03-24",

  // Step 28 BLA record
  basic_loan_account_no: "8330000",

  // Step 28 CLA record
  existing_card_loan_credit_limit: 100,
  existing_card_loan_interest_rate_code: "8",

  // Step 34
  subsidy_pension_label: "給振・年金",
  other_3_label: "その他3",
  solar_storage_battery_label: "ソーラー・蓄電池",

  // Step 26
  account_closed_flag_label: "口座閉鎖フラグ",
  on_loan_collection_flag_label: "既貸回収フラグ",

  // Step 35
  jurisdiction_confirmation_result_label: "所管部確認結果",
  jurisdiction_confirmation_result_value: "該当しない",
  standard_comment_lbl: "定型コメント",
  standard_comment_value: "あああああ",

  // 0006 --------------------------------
  scoring_result_section: "スコアリング結果",
  exam_approval_collab_status_lbl: "審査決裁連携ステータス",
  pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  pscore_limit_val: 90,
  approval_comment_input_lbl: "決裁コメント",
  approval_comment_value:
    "審直役が承認します。審査決裁です。ああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああああ" +
    "ああぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁ",

  // 0007 --------------------------------
  accept_or_reject_label: "諾否判定",
  accept_or_reject_val: "応諾",
  guarantee_chk_result_label: "保証審査結果",
  guarantee_chk_result_val: "条件付承認",
  guarantee_approval_date_lbl: "通知日",
  guarantee_approval_date: "2023/03/03",
  guarantee_no_lbl: "保証番号",
  guarantee_no_val: "13400001",
  guarantee_condition_lbl: "保証条件",
  guarantee_condition_val: "減額しています。",
  guarantee_amount_lbl: "保証額",
  guarantee_amount_val: 950000,
  guarantee_exp_date_lbl: "保証有効期限",
  guarantee_exp_date_val: "2024/10/31",
  result_based_interest_lbl: "審査結果基準利率(%)",
  result_based_interest_val: 14,
  process_approval_comment: "承認中請が面から承認します",
  approve_status: "承認済み",

  // 0008 --------------------------------
  // Step 7
  anti_social_inquiry_result_label: "反社照会結果",
  giving_receiving_label: "授受結果",
  anti_social_inquiry_status_label: "反社照会ステータス",
  asc_results_value: "◎",
  give_receive_result_value: "正常",
  completed_status_value: "連携完了",

  // 0009 -----------------------------------
  examination_result_loan_conditions_label: "審査結果ご融資条件",
  msg_value1:
    "審査結里ご社資条件を入力あああああああああああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああ",
  msg_value2:
    "追記します。ああああああああああああああああああ" +
    "ああああああああああああああああああああああああああああ",
  msg_value2_full_value:
    "追記します。ああああああああああああああああああああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああああああああああ" +
    "あああああああああああああああああああああああああああああああああああああああああ",

  // 0010 -----------------------------------
  ba_status_code: "0", // 未確認
  ba_confirmation_status_label: "確認ステータス",
  defect_reason_edit_btn: "不備理由 の編集",
  defect_reason_lbl: "不備理由",
  defect_reason_val: "blurred",

  // APP Record
  loan_upper_limit_edit: "融資額(調整上限)を編集",
  loan_upper_limit_lbl: "融資額(調整上限)",
  loan_upper_limit_value: 840000,
  loan_upper_limit_value_error: 600000, // used also in step 107
  phone_edit: "第一電話番号_登録を編集",
  first_phone_lbl: "第一電話番号_登録",
  second_phone_lbl: "第二電話番号_登録",
  third_phone_lbl: "第三電話番号_登録",
  kana_office_lbl: "カナ勤務先_登録",
  annual_income_app_lbl: "年収（万円）_登録",
  office_name_lbl: "漢字勤務先_登録",
  execution_method_edit: "実行方法を編集",
  execution_method_label: "実行方法",
  execution_method_value: "自動実行",
  submission_data_section: "実行依頼データ",
  cif_edit: "全店顧客番号を編集",
  cif_lbl: "全店顧客番号",
  cif_value: "1977010100",
  basic_loan_lbl: "融資基本口座番号",
  basic_loan_value: "833000",
  customer_ledger_label: "顧客番号再取得連携ステータス",
  customer_ledger_value: "手動照会済み",

  // 0011 -----------------------------------
  comment_label: "コメント",
  report_comment_label: "帳票コメント",
  flag_management: "フラグ管理",
  applicant_information: "申込人情報",
  bank_account_display_flag: "銀行口座表示フラグ",
  edit_bank_account_display_flag: "銀行口座表示フラグを編集",
  has_bank_display_flag: "",

  // BA Records
  ba_new_record_no_value: 2,
  confirmation_status_label: "確認ステータス",
  confirmation_status_value: "確認済",
  branch_code_label: "支店コード",
  branch_code_value: "00",
  new_account_fee_label: "手数料額(円)", // ★ 新環境適用' New Env Implementation
  ba_fee_amount_value: "1500000",
  ba_status_edit_title: "確認ステータス",

  // Labels and buttons
  financial_institution_name_optional_label: "金融機関名(選択)",
  financial_institution_name_label: "金融機関名",
  branch_name_label: "支店名",
  deposit_type_label: "預金種類",
  deposit_type_value1: "普通預金",
  account_number_label: "口座番号",
  recipient_name_label: "お受取人お名前",
  recipient_katakana_label: "お受取人カタカナ",
  transfer_amount_label: "振込金額(円)",
  confirmation_screen_button: "確認画面へ",
  determine_button: "確定する",

  // 1st record BA values
  financial_institution_name_optional_value1: "当行",
  financial_institution_name_value1: "",
  branch_name_value1: "本店営業部",
  account_number_value1: "6500001",
  recipient_name_value1: "富士通太郎",
  recipient_katakana_value1: "フジツウタロウ",
  transfer_amount_value1: "5000000",

  // 2nd record BA values
  financial_institution_name_optional_value2: "当行以外",
  financial_institution_name_value2: "第二銀行",
  branch_name_value2: "パリ 支店",
  deposit_type_value2: "当座預金",
  account_number_value2: "6500002",
  recipient_name_value2: "富士通次郎",
  recipient_katakana_value2: "フジツウジロウ",
  transfer_amount_value2: "4000000",

  // MyPage
  datepicker_id_mypage: "page:pb1:form1:datePicker",
  mypage_borrow_amount_header: "お借入れ金額をお決めください",
  mypage_borrow_amount_value: "",
  loan_date_mypage_header: "ご融資希望日をお決めください",
  terms_and_conditions_mypage_header: "以下をご融資の条件とさせていただきます",
  branch_name_change_value: "本店営異部こうしん",
  accordion_contract: "契約規定・保証委託約款",

  // Reject
  reject_comment: "却下します。",
  reject_label: "却下",

  // Approve
  approval_comment: "融資日には保証期限日が切れていますがかまわず承認します。",
  approve_status: "実施済OK",
  approval_history: "承認履歴",

  // 0012 -----------------------------------
  // JQuery API
  account_close_flag_api: "fj_AccountClose_flg__c",
  refund_flag_api: "fj_ExistingLoanCollectionFlg__c",

  // EXEC
  preferred_loan_date_label: "ご融資希望日",
  edit_desired_loan_date: "ご融資希望日を編集",
  cron_name: "自動実行バッチテスト",
  expected_status_value: "",
  expected_status_value_before_editing: "自動実行連携失敗",
  processing_status_label: "処理ステータス",
  processing_status_value: "自動実行完了",
  handling_no_label: "取扱番号",
  handling_no: "4789991",
  loan_account_no_label: "融資基本口座番号/カードローン口座番号",
  loan_account_no: "4780001",
  result_status_label: "実行結果処理ステータス",
  result_status: "00000000",
  error_message_label: "処理エラーメッセージ",
};
