export const testData = {
  /**
   * CHECK FIRST BEFORE EXECUTE THE SCRIPT
   */
  app_name: "APP-0000001654", // Prerequisite before running 0001 Process2
  user_status: 1, // 0 for existing user, 1 for new user
  logged_status: "",

  // Passwords - to be used in 0015
  password1: "WelcomeFujitsu3",
  password2: "gdcFujitsu1231",
  password3: "gdcFujitsu1232",
  password4: "gdcFujitsu1234",

  // 0011 - お借入内容調整画面
  // MyPage Borrowing Adjustment Screen Inputs
  // ご融資希望日 ***NOTE: date format will be affected by locale settings***
  // JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY
  mypage_loan_date_value: "12/29/2023", // ***NOTE: date format will be affected by client locale settings***

  // Record variables - ALPHABETICAL
  account_id: "",
  account_name: "",
  app_id: "",
  asc_id: "",
  asc_name: "",
  agr1_id: "",
  agr1_name: "",
  agr2_id: "",
  agr2_name: "",
  ba_id: "",
  ba_name: "",
  cl_product_id: "",
  cnt_id: "",
  cnt_name: "",
  cre_id: "",
  cre_name: "",
  ddp1_id: "",
  ddp1_name: "",
  ddp2_id: "",
  ddp2_name: "",
  er4_id: "",
  er4_name: "",
  er13_id: "",
  er13_name: "",
  exec_result_id: "",
  exec_result_name: "",
  exm_id: "",
  exm_name: "",
  exs_id: "",
  exs_name: "",
  gua_id: "",
  gua_name: "",
  gud3_id: "",
  gud3_name: "",
  ini2_id: "",
  ini2_name: "",
  ini3_id: "",
  ini3_name: "",
  mnt1_id: "",
  mnt1_name: "",
  mnt2_id: "",
  mnt2_name: "",
  mnt3_id: "",
  mnt3_name: "",
  mnt5_id: "",
  mnt5_name: "",
  mnt6_id: "",
  mnt6_name: "",
  mnt7_id: "",
  mnt7_name: "",
  mnt8_id: "",
  mnt8_name: "",
  pc_id: "",
  pc_name: "",
  pro_name: "",
  product18_code: "",
  rdc1_id_of_ver1: "",
  rdc1_name_of_ver1: "",
  rdc1_id_of_ver2: "",
  rdc1_name_of_ver2: "",
  stt1_id: "",
  stt1_name: "",
  stt2_id: "",
  stt2_name: "",
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
  wnt3_id: "",
  wnt3_name: "",
  wnt5_id: "",
  wnt5_name: "",
  wnt6_id: "",
  wnt6_name: "",
  wnt7_id: "",
  wnt7_name: "",
  wnt8_id: "",
  wnt8_name: "",

  // Record arrays - ALPHABETICAL
  ba_array: new Array(),
  ba_array_new: new Array(),
  er_array: new Array(),
  rdc_id_arr: [],
  rdc_name_arr: [],

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec63_2: "63-2-(01)",
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

  // Record types - no need to change
  agr1_record_type: "条件確認",
  agr2_record_type: "契約同意",
  ddp1_record_type: "自動(CIF明細取得)",
  ddp2_record_type: "CIF明細選択",
  er4_record_type: "4_顧客属性データ設定変更",
  er13_record_type: "13_普通預金_貸越契約",
  gud3_record_type: "保証審査③",
  ini2_record_type: "銀行審査②（取引情報取得）",
  ini3_record_type: "銀行審査③（外形チェック）",
  mnt2_type: "M009",
  mnt3_type: "M030",
  mnt5_type: "M033",
  mnt6_type: "M035",
  mnt7_type: "M012",
  mnt8_type: "M031",
  rdc1_record_type: "所得確認資料",
  stt1_text_type: "(～商品名)保証依頼書",
  stt2_text_type: "反社照会申込書",
  wnt2_type: "W009",
  wnt3_type: "W030",
  wnt5_type: "W033",
  wnt6_type: "W035",
  wnt7_type: "W012",
  wnt8_type: "W031",
  ver1_record_type: "①申込受付後",
  ver2_record_type: "②契約手続き前",

  // Common used buttons
  save_btn: "SaveEdit",
  confirm_btn: "確認",
  cancel_edit_btn: "CancelEdit",
  submit_btn: "submit",
  m_login: "button",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // Select app from App Launcher
  originate_app: "Q2 Origination",

  // URL
  downloads_url: "chrome://downloads/",

  // Headers
  asc_scroll: "反社照会",
  ba_scroll: "銀行口座",
  bank_accounts_scroll: "徴求書類",
  rdc_header: "徴求書類",
  sec_header: "外信照会",
  submission_data_section: "実行依頼データ",
  registration_section: "実行登録",
  execution_result_section: "実行登録",

  // Mail
  mail_time: "",
  acceptance_text: "申込受付",

  // Record No
  ba_new_record_no_value: 2,

  // MyPage - commonly used
  home_mypage: "ホーム",
  confirmation_screen_button: "確認画面へ",
  determine_button: "確定する",
  see_app: "すべて表示",
  see_wnt: "すべての お知らせ を参照",
  sort_latest: "降順に並び替え済み", // descending
  sort_app_asc: "昇順に並び替え済み", // ascending
  mark_read: "既読にする",
  mark_comp: "完了",
  sort_app_col: "お申込番号",
  sort_wnt_col: "お知らせ番号",
  search_textbox: "enter-search",
  mypage_next_btn: "決定",
  new_btn: "登録",
  loan_details_adjustment_btn: "お借入れ内容調整",
  mypage_contract_details_btn: "ご契約内容確認",
  accept_contract_btn: "契約に同意する",
  mypage_url: "",
  datepicker_id_mypage: "page:pb1:form1:datePicker",
  mypage_borrow_amount_header: "お借入れ金額をお決めください",
  loan_date_mypage_header: "ご融資希望日をお決めください",
  terms_and_conditions_mypage_header: "以下をご融資の条件とさせていただきます",
  mypage_confirmation_page_btn: "内容確認へ",
  mypage_determine_btn: "確定する",
  mypage_rdc_view_record_btn: "ご提出",
  completion_btn: "完了",

  // Sort Title
  mypage_app_status_sort: "お手続き状況",
  mypage_amount_sort: "お借入希望額",

  // Queries
  query_0001_27:
    "SELECT Id, IsDeleted, Name, CreatedDate, CreatedById, LastModifiedDate, " +
    "LastModifiedById, SystemModstamp, fj_RefCLProduct__c, fj_InterestRate__c, fj_Maximun_Amount__c, " +
    "fj_Minimum_Amount__c FROM FJ_CardLoanInterestRateTable__c WHERE fj_RefCLProduct__c = ",
  query_0001_44:
    "Select Id, Name, fj_Interest_Rate_Requested__c, genesis__Interest_Rate__c, " +
    "fj_Bonus_Repayment_Requested__c, fj_Bonus_Repayment__c, fj_Bonus_Month_Requested__c, fj_Bonus_Month__c, " +
    "fj_Bonus_Percent_Requested__c, fj_Bonus_Percent__c FROM genesis__Applications__c WHERE Name = ",
  query_0003_05:
    "SELECT Id, Name, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0004_11:
    "SELECT Id, Name, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0004_13:
    "SELECT Id, Name, fj_User_SubStatus__c, fj_Employee_SubStatus__c, fj_Linkage_SubStatus__c FROM genesis__Applications__c WHERE Name = ",
  query_0004_32:
    "SELECT Id, Name, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0005_12:
    "SELECT Id, Name, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0006_03:
    "SELECT Id, Name, fj_InterestRate_InitialChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = ",
  query_0006_29:
    "SELECT Id, Name, fj_CreditScoring_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0007_02:
    "SELECT Id, Name, fj_Loan_Amount_Calculated__c, genesis__Loan_Amount__c, fj_Term_Calculated__c, genesis__Term__c, " +
    "fj_Interest_Rate_Calculated__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = ",
  query_0007_21:
    "SELECT Id, Name, fj_GuaranteeChk_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0007_35:
    "SELECT Id, Name, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0009_04:
    "SELECT Id, Name, fj_Loan_Amount_GuaranteeChk__c, genesis__Loan_Amount__c, fj_Term_GuaranteeChk__c, genesis__Term__c, " +
    "fj_Interest_Rate_GuaranteeChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = ",
  query_0009_13:
    "SELECT Id, Name, fj_CreditApprovement_Status__c FROM genesis__Applications__c WHERE Name = ",
  query_0011_23:
    "SELECT Id, Name, fj_LastGuaranteeCondition__c FROM genesis__Applications__c WHERE Name = ",
  query_0011_39:
    "SELECT Id, Name, fj_Loan_Amount_Changed__c, fj_Term_Changed__c FROM genesis__Applications__c Where Name = ",
  query_0012_39:
    "SELECT Id, Name, fj_SlipOutputFlg__c FROM genesis__Applications__c Where Name = ",

  // Button API
  api_app_customeledgerstatus_field:
    "sfdc:RecordField.genesis__Applications__c.fj_CustomerLedgerStatus__c",
  bank_account_delete_btn: "clcommon__Bank_Account__c.Fj_BankAccountDeleter",
  confirm_btn_name: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  cre_approval_button: "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  guarantee_chk_confirm_btn_api:
    "FJ_GuaranteeChkDetail__c.FJ_GuaranteeChkDetailConfirm",
  ini3_approval_modal_button: "FJ_InitialChk__c.Fj_InitialChkAccept",
  process_instance_approve_api:
    "sfdc:StandardButton.ProcessInstanceWorkitem.ApprovalProcessApprove",
  rdc_approve_btn_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  delete_btn_api: "FJ_RequiredDocument__c.Fj_RequirdDocmentFileDeleter",
  verify_docu_accept_api: "FJ_Verification__c.Fj_Verification_Accept",

  // New BTN
  new_ba_btn: "sfdc:StandardButton.clcommon__Bank_Account__c.New",

  // DDP
  ddp_status_label: "同一人照会ステータス",
  ddp_status_value: "自動OK",

  // INI
  aml_etc_check_linkage_status_label: "AML等チェック連携ステータス",
  customer_aml_check_federation_status_label: "顧客AMLチェック連携ステータス",
  ini2_linkage_status_label: "クレジットカード情報連携ステータス",
  jurisdiction_confirmation_result_label: "所管部確認結果",
  jurisdiction_confirmation_result_value: "該当しない",
  linkage_status_value: "連携済み",
  other_label: "その他1",
  other_correction: "その他1補正",
  other_correction_value: "0.50",
  review_information_linkage_status_label: "審査情報連携ステータス",
  scoring_information_linkage_status_label: "スコアリング情報連携ステータス",

  // EXS
  approval_comment_input_lbl: "決裁コメント",
  approval_comment_value: "approve test",
  exam_approval_collab_status_edit_btn: "審査決裁連携ステータス の編集",
  exam_approval_collab_status_lbl: "審査決裁連携ステータス",
  pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  pscore_limit_value: 10,
  scoring_result_section: "スコアリング結果",

  // GUA/GUD
  accept_or_reject_label: "諾否判定",
  accept_or_reject_val: "応諾",
  approve_status: "承認済み",
  guarantee_approval_date_lbl: "通知日",
  guarantee_approval_date: "2023/04/20",
  guarantee_amount_lbl: "保証額",
  guarantee_amount_val: 100000,
  guarantee_chk_result_label: "保証審査結果",
  guarantee_chk_result_val: "条件付承認",
  guarantee_condition_lbl: "保証条件",
  guarantee_condition_val: "12",
  guarantee_exp_date_lbl: "保証有効期限",
  guarantee_exp_date_val: "2024/10/31",
  guarantee_no_lbl: "保証番号",
  guarantee_no_val: "00100001",
  process_approval_comment: "承認中請が面から承認します",

  // ASC
  asc_results_value: "◎",
  anti_social_inquiry_result_label: "反社照会結果",
  anti_social_inquiry_status_label: "反社照会ステータス",
  completed_status_value: "連携完了",

  // APP
  annual_income_label: "年収（万円）_登録",
  annual_income_value: "400",
  borrowing_status_edit_btn: "借入ステータスを編集",
  borrowing_status_label: "借入ステータス",
  borrowing_status_dropdown: "実行済み",
  handling_number_label: "取扱番号(口座番号)",
  handling_number_value: "0010003",
  cust_att_data: "顧客属性データ",
  customer_number_reacquisition_linkage_status_label:
    "顧客番号再取得連携ステータス",
  customer_number_reacquisition_linkage_status_value: "手動照会済み",
  edit_store_wide_customer_number: "全店顧客番号を編集",
  edit_pencil_button_label: "第一電話番号_登録を編集",
  kana_work_place_registration_label: "カナ勤務先_登録",
  kana_work_place_registration_value: "シナリオキンムサキ",
  kanji_work_place_registration_label: "漢字勤務先_登録",
  kanji_work_place_registration_value: "シナリオ動務先",
  loan_completion_text: "お借入中",
  primary_phone_number_registration_label: "第一電話番号_登録",
  primary_phone_number_registration_value: "08000000000",
  second_phone_number_registration_label: "第二電話番号_登録",
  second_phone_number_registration_value: "08000000001",
  third_phone_number_registration_label: "第三電話番号_登録",
  third_phone_number_registration_value: "08000000002",
  store_wide_customer_number_label: "全店顧客番号",
  store_wide_customer_number_value: "0100001",

  // BA
  ba_status_edit_btn: "確認ステータス の編集",
  comment_label: "コメント",
  report_comment_label: "帳票コメント",
  flag_management: "フラグ管理",
  applicant_information: "申込人情報",
  bank_account_display_flag: "銀行口座表示フラグ",
  edit_bank_account_display_flag: "銀行口座表示フラグを編集",
  has_bank_display_flag: "",
  financial_institution_name_optional_label: "金融機関名(選択)",
  branch_name_label: "支店名",
  institution_code_label: "金融機関コード",
  deposit_type_label: "預金種類",
  account_number_label: "口座番号",
  recipient_name_label: "お受取人お名前",
  recipient_katakana_label: "お受取人カタカナ",
  transfer_amount_label: "振込金額(円)",
  new_account_fee_label: "手数料額(円)", // ★ 新環境適用' New Env Implementation
  new_account_amount_value: "1500000", // ★ 新環境適用' New Env Implementation
  confirmation_status_label: "確認ステータス",
  confirmation_status_value: "確認済",
  branch_code_label: "支店コード",
  branch_code_value: "00",
  edit_branch_name_value: "成田支店",
  edit_account_number_value: "0010003",

  // 1st record BA values
  financial_institution_name_optional_value1: "当行",
  branch_name_value1: "本店営業部",
  deposit_type_value1: "普通預金",
  account_number_value1: "0010001",
  recipient_name_value1: "富士通太郎",
  recipient_katakana_value1: "フジツウタロウ",
  transfer_amount_value1: "5000000",

  // 2nd record BA values
  financial_institution_name_optional_value2: "当行",
  branch_name_value2: "パリ 支店",
  deposit_type_value2: "当座預金",
  account_number_value2: "0010002",
  recipient_name_value2: "富士通次郎",
  recipient_katakana_value2: "フジツウジロウ",
  transfer_amount_value2: "4000000",

  // New BA record
  ba_payee_flag_label: "振込先フラグ",
  ba_confirmation_status_label: "確認ステータス",
  ba_confirmation_status_value: "未確認",
  ba_deposit_type_label: "預金種類",
  ba_deposit_type_value: "当座預金",
  ba_recipient_name_value: "受取",
  ba_institution_name_opt_label: "金融機関名(選択)",
  ba_institution_name_opt_value: "当行",
  ba_recipient_name_kana_value: "ウケトリ",
  ba_recipient_name_kana_label: "お受取人カタカナ",
  ba_bank_code_value: "0000",
  ba_bank_name_label: "金融機関名",
  ba_fin_inst_name_value: "当行",
  ba_branch_code_value: "001",
  ba_branch_name_value: "店名",
  ba_branch_name_value2: "支店",
  ba_account_no_value: "0010003",
  ba_amount_value: "4,000,000",
  ba_amount_label: "振込金額(円)",
  ba_fee_amount_value: "550",

  // BA error
  error_edit_account_number_value: "0010004",

  // CSV/Excel
  viewall_notif_link: "すべての お知らせ を参照",
  slip_output_btn: "伝票出力",
  return_btn: "戻る",

  // Forgot Password
  email_password_reset_label: "Sandbox: マイページパスワード変更のお知らせ",
  reset_password_btn: "パスワードのリセット",
  new_password: "newpassword",
  confirm_password: "confirmpassword",
  new_password_save_btn: "save",
};
