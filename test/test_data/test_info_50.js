// ★ 新環境適用' New Env Implementation
const user_info = require("../test_data/global_info");
export const testData = {
  // If there is need to create new user; set values first in Step 4 before running 0001 Process 1 script
  user_status: 1, // 0 for existing, 1 for new user

  // App - make sure that app_name value is blank when running 0001 Process 1 script
  app_name: "APP-0000001647", // input value before running 0001 Process 2 script
  contact_detail: "GDC)Gizelle Automation Test 10/16/2023 Spec50 Test 4", //ご要望事項★シナリオ番号を記載 *

  // GDC specific field values
  name_last_old: "前", //お名前 姓 *
  name_first_old: "前", //お名前 名 *
  birth_year_old: "1977", //生年月日 年 *
  birth_month_old: "1", //生年月日 月 *
  birth_day_old: "1", //生年月日 日 *
  // if user_status=1 (Create New User) -- Please update the fields below and the email/password in global_info file
  name_last_new: "ての", //お名前 姓 *
  name_first_new: "知ら", //お名前 名 *
  birth_year_new: "1982", //生年月日 年 *
  birth_month_new: "6", //生年月日 月 *
  birth_day_new: "8", //生年月日 日 *

  // Date - 0011 Process8 - step31
  mypage_loan_date_value: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***

  // Salesforce org - commonly used
  close_btn_img: "閉じる",
  save_btn: "SaveEdit",
  viewall_notif_link: "すべての お知らせ を参照",
  mark_as_read_btn: "既読にする",
  confirm_text: "完了",

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec50: "50-1-(01)",
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
  tab0015: "0015",

  // MyPage - commonly used
  home_mypage: "ホーム",
  see_app: "すべて表示",
  app_num: "お申込番号",
  mypage_next_btn: "決定", // ★ 新環境適用' New Env Implementation
  mypage_rdc_view_record_btn: "ご提出",
  completion_btn: "完了",

  // App Form
  back_btn_appform: "　戻る　",
  app_success: "お申し込みありがとうございました。",

  // Other
  isTrue: true,
  sf_user: "",
  logged_status: "",

  // Records
  account_id: "",
  account_name: "",
  app_id: "",
  contact_id: "",
  contact_name: "",
  wnt_id: "",
  wnt_name: "",
  cnt_id: "",
  cnt_name: "",
  rdc1_id_of_ver1: "",
  rdc1_name_of_ver1: "",
  rdc1_id_of_ver2: "",
  rdc1_name_of_ver2: "",
  ver1_id: "",
  ver1_name: "",
  ver2_id: "",
  ver2_name: "",
  ddp_id2: "",
  ddp_name2: "",
  exm_id: "",
  exm_name: "",
  trr_id: "",
  trr_name: "",
  wnt1_id: "",
  wnt1_name: "",
  mnt1_id: "",
  mnt1_name: "",
  wnt2_id: "",
  wnt2_name: "",
  mnt2_id: "",
  mnt2_name: "",
  cre_id: "",
  cre_name: "",
  agr_id: "",
  agr_name: "",
  ba_id: "",
  ba_name: "",
  ini_id2: "",
  ini_id3: "",
  ini_name3: "",
  exs_id: "",
  exs_name: "",
  clProd_id: "",
  clProd_name: "", //商品名
  gua_id: "",
  gua_name: "",
  gud_id1: "",
  gud_name1: "",
  prodmaster_id: "",
  prodmaster_name: "",
  stt_id: "",
  stt_name: "",
  gud_id2: "",
  gud_name2: "",
  asc_id: "",
  asc_name: "",
  rdc2_id_of_ver2: "",
  rdc2_name_of_ver2: "",
  rdc1_id: "",
  rdc1_name: "",
  listview_id: "",

  // Arrays
  rdc_name_arr: [],
  rdc_id_arr: [],

  // App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  // Record types - constant
  ddp_record_type: "CIF明細選択",
  ini_record_type2: "銀行審査②（取引情報取得）",
  ini_record_type3: "銀行審査③（外形チェック）",
  ver1_record_type: "①申込受付後",
  ver2_record_type: "②契約手続き前",
  gud_record_type: "保証審査①",
  gud2_record_type: "保証審査②",
  rdc1_record_type: "勤続年数確認資料",
  rdc2_record_type: "所得確認資料",
  condition_confirmation_record_type: "条件確認",
  contract_agreement_record_type: "契約同意",

  // URLs
  downloads_url: "chrome://downloads/",
  httpurl03: user_info.environmentLinks.app_form_link + "/loan?pc=50", // ★ 新環境適用' New Env Implementation
  httpurl04: "o/FJ_ApplicationAccessLog__c/list?filterName=", // Application Log page

  // Accordions
  acc1: "注意事項",
  acc2: "銀行に対する個人情報の取扱いに関する同意条項",
  acc3: "保証会社に対する個人情報の取扱いに関する同意条項",
  acc4: "契約規定・保証委託約款",
  acc5: "お手続きマイページ利用規約",

  // PDF
  pdf01: "agree_PersonalInfoConsentClause_Gogin",
  pdf02: "agree_PersonalInfoConsentClause_Company",
  pdf03: "agree_ContractTerms",
  pdf04: "agree_TermsOfUsage_MyPage",
  pdf_select: "PDFファイルをダウンロード",
  pdf_window01: "TermsOfUsage_MyPage.pdf",
  pdf_window02: "ContractTerms.pdf",
  pdf_window03: "PersonalInfoConsentClause_Company.pdf",
  pdf_window04: "PersonalInfoConsentClause_Gogin.pdf",

  // Sort Listview and Type
  applogs_no: "申込ログNo",
  wnt_not_table: "お知らせ番号",
  sort_app: "降順に並び替え済み",

  // Listview Filter
  all_aal_listview: "すべて選択",

  // Scroll view
  asc_scroll: "反社照会",
  applicant_scroll: "申込人基本属性",
  clpro_scroll1: "書類不要上限金額(未満)",
  clpro_scroll2: "銀行審査②フラグ",
  exm_scroll: "外信照会",
  ini_scroll: "金利優遇",
  ini_scroll2: "顧客AMLチェック結果情報",
  ver_rdc_scroll: "徴求書類",

  // Edit
  manager_edit_button: "担当者を編集",
  external_flag_edit_button: "外国人・外字（旧字体）フラグを編集",

  // Labels
  approval_comment_input_label: "決裁コメント", // ★ 新環境適用' New Env Implementation
  manager_label: "担当者",
  external_flag_label: "外国人・外字（旧字体）フラグ",
  credit_card_status_label: "クレジットカード情報連携ステータス",
  subsidy_pension_label: "給振・年金",
  jurisdiction_label: "所管部確認結果",
  pscore_limit_textbox: "Pスコア限度額（単位：万円）",
  guarantee_check_label: "保証審査連携ステータス",
  guarantee_checkresult_label: "保証審査結果",
  accept_or_reject_label: "諾否判定",
  gua_number_label: "保証番号",
  gua_amount_label: "保証額",
  gua_approval_date_label: "通知日",
  gua_condition_label: "保証条件",
  gua_term_label: "保証期間",
  orico_label: "チェックコード",
  result_based_interest_rate_label: "審査結果基準利率(%)",
  asc_label: "反社照会ステータス",
  asc_results_label: "反社照会結果",
  cre_label: "審査結果ご融資条件",

  // Values
  new_manager_value: "担当者1",
  card_linkage: "連携済み",

  // Buttons
  approve_confirm: "承認",
  confirm_btn: "確認",
  submit_btn: "submit",
  cancel_btn: "CancelEdit",
  edit_btn: "Edit",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // API
  rdc_approve_btn_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  ver_approve_btn_api: "FJ_Verification__c.Fj_Verification_Accept",
  approve_btn_api: "FJ_InitialChk__c.Fj_InitialChkAccept",
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  api_app_customeledgerstatus_field:
    "sfdc:RecordField.genesis__Applications__c.fj_CustomerLedgerStatus__c",
  gua_check_detail_confirm_btn_api:
    "FJ_GuaranteeChkDetail__c.FJ_GuaranteeChkDetailConfirm",
  anti_social_accept_btn_api: "FJ_AntiSocial__c.Fj_AntiSocial_Accept",

  credit_approval_btn_api: "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  ba_delete_btn_api: "clcommon__Bank_Account__c.Fj_BankAccountDeleter",

  delete_btn_api: "FJ_RequiredDocument__c.Fj_RequirdDocmentFileDeleter",
  new_bank_acct_btn_api: "sfdc:StandardButton.clcommon__Bank_Account__c.New",
  required_docu_reject_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Reject",

  // Queries
  query_0001_17:
    "SELECT Id, fj_Birthdate__c, clcommon__Email__c FROM Account where ",
  query_0001_32: "SELECT Id, Name, CreatedDate FROM Account WHERE Name = ",
  query_0001_25:
    "SELECT Id,Name, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = ",
  query_0001_45:
    "SELECT Id, Name, fj_Interest_Rate_Requested__c, genesis__Interest_Rate__c, fj_Bonus_Repayment_Requested__c, " +
    "fj_Bonus_Repayment__c, fj_Bonus_Month_Requested__c, fj_Bonus_Month__c, fj_Bonus_Percent_Requested__c, fj_Bonus_Percent__c FROM genesis__Applications__c WHERE Name = ",
  query_0004_46:
    "SELECT Id, Name, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0006_36:
    "SELECT Id, Name, fj_RefApplication__r.Name, fj_ApplicationAmount__c FROM FJ_ExternalScoring__c WHERE Name =",
  query_0006_03:
    "SELECT Id, Name, fj_InterestRate_InitialChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0006_39:
    "SELECT Id, Name, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0007_02:
    "SELECT Id, Name, fj_Loan_Amount_Calculated__c, genesis__Loan_Amount__c, fj_Term_Calculated__c, genesis__Term__c, fj_Interest_Rate_Calculated__c, " +
    "genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = '",
  query_0007_35:
    "SELECT Id, Name, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0009_04:
    "SELECT Id, Name, fj_Loan_Amount_GuaranteeChk__c, genesis__Loan_Amount__c, fj_Term_GuaranteeChk__c, genesis__Term__c, fj_Interest_Rate_GuaranteeChk__c, " +
    "genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = ",
  query_0009_16:
    "SELECT Id, Name, fj_Loan_Amount_Approved__c, fj_Term_Approved__c, fj_Interest_Rate_Approved__c, fj_CustomerMemo__c FROM genesis__Applications__c WHERE Name = ",
  query_0012_39:
    "SELECT Id, Name, fj_SlipOutputFlg__c FROM genesis__Applications__c WHERE Name = ",

  // RDC
  document_category1: "本人確認資料",
  close_search_criteria_btn: "検索条件を閉じる",

  // 0001 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Step 1
  amount: "500",
  name_kana_last: "アアア", //お名前　フリガナ セイ *
  name_kana_first: "アア", //お名前　フリガナ メイ *
  sex: "1", //性別 *
  zip_code_1: "060", //住所 郵便番号 前 *
  zip_code_2: "0000", //住所 郵便番号 後 *
  prefecture_code: "32", // 住所 都道府県  *
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
  loan_app_identical_person: "01", //健康保険証　名義
  loan_app_insurance_card_type: "01", //健康保険証　種類
  loan_app_has_salary_transfer: "1", //当行での給与振込または年金受取指定（ご本人）
  loan_app_has_mortgage: "2", //当行での住宅ローンのご利用 ※住宅ローンお申込み中で審査が承認になった方（事前申込みを除く）も含みます。
  amount_check: "0", //お借り入れ限度額審査
  select_introduction_branch: "023", //紹介店
  question: "01", //アンケート 本ローンをお申込みいただいたきっかけを教えてください
  prefecture_code2: "32",
  loan_app_contact_to_tel_: "1", //ご希望の連絡先

  // Step 2
  living_together: "1", //同居ご家族の有無 *
  has_spouse: "1", //配偶者の有無 *
  children: "1", //お子さまの人数 *
  other_family: "2", //その他同居家族の人数 *
  living_type: "02", //現在のお住まいの種類 *
  residence_year: "2001", //現在のお住まいに住み始めた時期 年 *
  residence_month: "2", //現在のお住まいに住み始めた時期 月 *
  repayment: "48000", //住宅ローン返済額 毎月の返済額 *
  has_bonus: "1", //住宅ローン返済額 ボーナス月の増額有無 *
  bonus_repayment: "49000", //住宅ローン返済額 ボーナス月の返済額 *
  rent: "48000", //家賃 *
  annual_income: "800", //前年個人年収(税込) *
  income_type: "01", //収入の形態 *
  working_style: "01", //職業 *
  business_type: "01", //お勤め先の種類 *
  office_name: "株式会社うえだ", //お勤め先名称 *
  office_kana: "カブシキガイシャウエダ", //お勤め先名称フリガナ（全角カナ）*
  office_dept: "営業部", // 所属部課名（出向先名）
  position: "営業課長", // 役職名
  work_contents: "01", //お仕事の内容 *
  enter_company_year: "2001", //入社（営業開始）年 *
  enter_company_month: "1", //入社（営業開始）月 *
  office_zip_code_1: "064", //お勤め先住所 郵便番号 前 *
  office_zip_code_2: "0941", //お勤め先住所 郵便番号 後 *
  office_prefecture_code: "32", //住所 都道府県 *
  office_address_city: "島根県1番地", //市町村以下（全角）*
  office_address_detail: "うえだビル", //ビル名など （全角）
  office_phone2_1: "0000", //お勤め先電話番号 前 *
  office_phone2_2: "00", //お勤め先電話番号 中 *
  office_phone2_3: "0002", //お勤め先電話番号 後 *
  employee_division: "07", //従業員数 *
  capital: "01", //資本金 *
  industry: "10", //事業内容（業種） *

  // Step 3
  repayment_year: "5", //ご返済希望 返済期間 年 *
  repayment_month: "6", //ご返済希望 返済期間 ヵ月 *
  bonus_ratio: "05", //ご返済希望 ボーナス返済の割合 *
  use_detail: "03", //お使いみち *
  introduction_branch_exist: "2", //紹介店 有無 *
  reference_form_number: "ab0001", //企業ＩＤ・広告番号

  // Step 4
  birthdate_api: "fj_BirthDate__c",
  email_api: "clcommon__Email__c",
  heading: "住宅ローン利用者限定フリーローンお申込み",
  acceptance_text: "申込受付",
  mypage_url: "",
  mail_time: "",

  // 0003 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ddp_status: "19",
  same_person_inquiry_status_label: "同一人照会ステータス",
  same_person_inquiry_status_value: "同一人照会完了",

  // 0004 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  linkage_status1: "審査情報連携ステータス",
  linkage_status2: "スコアリング情報連携ステータス",
  linkage_status3: "AML等チェック連携ステータス",
  federation_status: "顧客AMLチェック連携ステータス",
  jurisdiction: "該当しない",
  system_info: "システム情報",

  // 0006--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  recalculate_btn_label: "再計算",
  pscore_limit_value: 45,
  exam_approval_collab_status_edit_btn: "審査決裁連携ステータス の編集",
  exam_approval_collab_status_lbl: "審査決裁連携ステータス",
  approval_comment_value: "approve test",
  cloan_interest_rate_usage_flag_lbl: "カードローン金利利用フラグ",
  housewife_husband_app_flg: "主婦/主夫申込可能フラグ",
  pref_interest_rates_other: "優遇利率(他ローン取引)",
  base_rate: "ベースレート",

  // 0007 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  guarantee_company: "10",
  subcategory: "",
  review_result: "否決",
  decision: "応諾",
  picklist_select: "選択を選択済みに移動",
  gua_result: "条件付承認",
  gua_number: "000000000001",
  gua_amount: "450000",
  already_paid_off: "既貸完済",
  gua_date: "2022/10/10",
  gua_condition: "保証条件テスト",
  gua_term: "12",
  orico: "",
  result_based_interest_rate: "12.5000",
  approval_msg: "コメントテスト",
  min_amount_eligible_pref_interest_rates: "金利優遇対象下限額(超)",

  // 0008 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  stt_type_text: "反社照会申込書",
  anti_social_inquiry_status_value: "連携完了",
  asc_results_value: "◎",

  // 0009 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  product_code: "",
  msg_value1: "審置結果ご融資条件テスト",
  msg_value2: "条件確認ご融資条件テスト",

  // 0010 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  rdc_header: "徴求書類",
  ba_header: "銀行口座",
  defect_reason_edit_btn: "不備理由 の編集",
  defect_reason_lbl: "不備理由",
  defect_reason_val2: "invalid_document",
  reject_confirm_btn: "不備",
  bottom_related_list_header: "申込の履歴",
  history_header: "承認履歴",
  repayment_bank_account_edit_btn: "返済用銀行口座を編集",
  repayment_bank_account_label: "返済用銀行口座",
  new_acct_name_value: "", // ★ 新環境適用' New Env Implementation
  new_acct_id_value: "", // ★ 新環境適用' New Env Implementation
  new_acct_label: "取引先",
  new_repayment_flag_label: "返済用フラグ",
  new_deposit_type_label: "預金種類",
  new_deposit_type_value: "普通預金",
  new_financial_inst_name_optional_label: "金融機関名(選択)",
  new_financial_inst_name_optional_value: "当行",
  new_financial_inst_type_label: "金融機関種類",
  new_financial_inst_type_value: "当行",
  new_financial_inst_code_label: "金融機関コード",
  new_financial_inst_code_value: "0001",
  new_financial_inst_name_label: "金融機関名",
  new_financial_inst_name_value: "金融機関名",
  new_branch_code_label: "支店コード",
  new_branch_code_value: "支店コ",
  new_branch_name_value: "支店名",
  new_account_number1_label: "口座番号",
  new_account_number1_value: "0000001",
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
  keep: "保存",
  submission_data_section: "実行依頼データ",
  bankdisplay_flag_section: "フラグ管理",
  store_wide_customer_number_edit_btn: "全店顧客番号を編集",
  cif_no_label: "全店顧客番号",
  cif_no_value: "0010001",
  basic_loan_acc_no_label: "融資基本口座番号",
  basic_loan_acc_no_value: "0010001",
  cust_num_reacq_linkage_status_lbl: "顧客番号再取得連携ステータス",
  cust_num_reacq_linkage_status_value: "手動照会済み",
  run_registration_section: "実行登録",
  my_bin_listview: "私のごみ箱",
  org_bin_listview: "組織のごみ箱",

  // 0011 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // MyPage
  mypage_url_0011: "",
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_borrow_amount_header: "お借入れ金額をお決めください",
  mypage_borrow_amount_value: "",
  mypage_repayment_date_value: "28",
  mypage_repayment_month_value: "30",
  mypage_repayment_ratio_value: "15",
  mypage_refund_amount_header: "ご返済金額をご確認ください",
  mypage_confirmation_page_btn: "内容確認へ",
  mypage_determine_btn: "確定する",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_accept_contract_btn: "契約に同意する",
  contracts_text: "契約成立",
  mypage_new_ba_btn: "登録",
  confirmation_btn: "確認画面へ",

  // SF-BA
  new_account_fee_label: "手数料額(円)", // ★ 新環境適用' New Env Implementation
  ba_fee_amount_value: "1500000",
  pending_agreement_approval_text: "契約同意承認待ち",
  ba_display_label: "銀行口座表示フラグ",
  ba_edit_btn: "銀行口座表示フラグを編集",
  condition_text: "条件確認",
  agreement_text: "契約同意",
  ba_submit_btn: "確定する",
  ba_input_fin_inst_lbl: "金融機関名(選択)",
  ba_input_branch_name_lbl: "支店名",
  ba_input_acct_type_lbl: "預金種類",
  ba_input_acct_no_lbl: "口座番号",
  ba_input_rcp_name_lbl: "お受取人お名前",
  ba_input_rcp_name_kana_lbl: "お受取人カタカナ",
  ba1_fin_inst: "当行",
  ba1_branch_name: "支店名銀行",
  ba1_deposit_type: "普通預金",
  ba1_acct_no: "0000002",
  ba1_recipient_name: "いいい",
  ba1_recipient_name_kana: "イイイ",
  ba1_transfer_amount: "1000000",
  ba_status_label: "確認ステータス",
  ba_status_edit_title: "確認ステータス の編集",
  ba_status_value: "確認済",
  ba_branch_code_value2: "あああ",
  ba_branch_name_value3: "支店名いいい",
  approve_comment_value: "OKです。",

  // 0012 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  slip_output_btn: "伝票出力",
  return_btn: "戻る",
  borrowing_status_edit_btn: "借入ステータスを編集",
  borrowing_status_label: "借入ステータス",
  borrowing_status_dropdown: "実行済み",
  handling_number_label: "取扱番号(口座番号)",
  handling_number_value: "0000001",
  loan_completion_text: "お借入中",

  // 0015 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  fujitsu_image: "sfdcCbImage",
  mypage_textbox_value1: "text test 1",
  mypage_textbox_value2: "text test 2",
  mypage_textbox_value3: "text test 3",
  mypage_textbox_button: "クリックするか、Ctrl+Enter キーを押します",
  chatter_button: "cuf-submit",
  show_more_comments_button: "コメントをさらに表示",
};
