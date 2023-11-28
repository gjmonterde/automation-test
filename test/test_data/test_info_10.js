// ★ 新環境適用' New Env Implementation
const user_info = require("../test_data/global_info");
export const testData = {
  /**
   * CHECK FIRST BEFORE EXECUTE THE SCRIPT
   */
  app_name: "APP-0000001526", // マイカーローン - Prerequisite before running 0001 Process2
  app2_name: "APP-0000001527", // 保証付きカードローン（随弁型）- Prerequisite before running 0001 Process2
  contact_detail: "GDC)Gizelle Automation Test 09/14/2023 Spec10 Test 1", //ご要望事項 *
  input_key: "2023091421291100", // You may change the value. Else, leave blank and run step_04_data.js script (random value will be assigned).

  // GDC specific info
  user_status: 1, // 0 for existing user, 1 for new user
  // if user_status = 0 (Existing)
  name_last_old: "前", //お名前 姓 *
  name_first_old: "お", //お名前 名 *
  birth_year_old: "1977", //生年月日 年 *
  birth_month_old: "1", //生年月日 月 *
  birth_day_old: "1", //生年月日 日 *
  // if user_status = 1 (Create new user) - Please update the fields below and the community e-mail/password in global_info file
  name_last_new: "木木", //お名前 姓 *
  name_first_new: "良良", //お名前 名 *
  birth_year_new: "1981", //生年月日 年 *
  birth_month_new: "1", //生年月日 月 *
  birth_day_new: "1", //生年月日 日 *

  // ★ 新環境適用' New Env Implementation
  // 0011_Process8_step30 and 0011_Process8_step33
  mypage_loan_date_value: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***

  // Record variables
  agr_name: "",
  agr_id: "",
  asc_name: "",
  asc_id: "",
  app_id: "",
  app2_id: "",
  account_id: "",
  account_name: "",
  ba_id: "",
  ba_name: "",
  cl_product: "",
  clProd_id: "",
  clPc_id: "",
  cre_name: "",
  cre_id: "",
  contact_id: "",
  cnt_id: "",
  cnt_name: "",
  cnt1_id: "",
  cnt1_name: "",
  cnt2_id: "",
  cnt2_name: "",
  dm_id: "",
  dm_name: "",
  ddp_name: "",
  ddp_id: "",
  exec_result_name: "",
  exec_result_id: "",
  exm_name: "",
  exm_id: "",
  exs_id: "",
  exs_name: "",
  gua_name: "",
  gua_id: "",
  gud_name1: "",
  gud_id1: "",
  ini1_id: "",
  ini1_name: "",
  ini2_id: "",
  ini2_name: "",
  ini3_id: "",
  ini3_name: "",
  listview_id: "",
  mnt1_id: "",
  mnt1_name: "",
  pro_id: "",
  pro_name: "",
  pro_code: "",
  pro_code_id: "",
  rdc1_id: "",
  rdc1_name: "",
  rdc2_id: "",
  rdc2_name: "",
  rdc4_id_of_ver2: "",
  rdc4_name_of_ver2: "",
  stt_name: "",
  stt_id: "",
  trr_id: "",
  trr_name: "",
  ver1_id: "",
  ver1_name: "",
  ver2_id: "",
  ver2_name: "",
  ver3_id: "",
  ver3_name: "",
  wnt1_id: "",
  wnt1_name: "",

  // Record arrays
  ba_array: new Array(),
  er_array: new Array(),
  res_results: new Array(),

  ba_nameArr: [],
  ba_idArr: [],
  lcd_id_arr: [],
  lcd_name_arr: [],
  rdc_name_arr: [],
  rdc_id_arr: [],

  // App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec10: "10-1-(01)",
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

  // Logged status
  logged_status: "",

  // URLs
  // ★ 新環境適用' New Env Implementation
  httpurl01: user_info.environmentLinks.app_form_link + "/auth?sid=10",
  httpurl02: user_info.environmentLinks.app_form_link + "/loan?pc=10&cli=",
  httpurl03: user_info.environmentLinks.app_form_link + "/loan?pc=10",
  httpurl04: "o/FJ_ApplicationAccessLog__c/list?filterName=", // Application Log page
  // 申込.審査ステータスの項目定義画面
  obj_manager:
    "setup/ObjectManager/01I7F0000010Mqz/FieldsAndRelationships/00N7F00000SZvKb/view",
  examination_objectManager_url:
    user_info.environmentLinks.salesforce_sandbox +
    "/lightning/setup/ObjectManager/01I7F000002I87s/FieldsAndRelationships/00N7F00000SZvBM/view",
  recycle_bin_url: "o/DeleteEvent/list",

  // 0001_step_03-data
  acct_name_last: "あああ",
  acct_name_first: "ああ",
  loan_app_birth: "20000101",
  loan_app_acct_no: "4516023",
  loan_app_pinword: "1472",

  // 0001_step_04-data - CLI record creation
  cust_no: "1981010100",
  kana_name: "アアア アア",
  kanji_name: "鈴木　咲良",
  gender: "男",
  kana_add1: "ｼﾏﾈｹﾝﾏﾂｴｼｿﾃﾞｼﾁｮｳ40",
  kana_add_code: "32201056000",
  postal_code: "690-0049",
  kanji_add1: "島根県松江市袖師町４０",
  phone_no1: "0000-00-0001",
  annual_income: "500",
  current_pref_code: "32",
  input_key_suffix: "01",
  input_kana_name: "ｱｱｱ ｱｱ",
  input_birthdate: "19810101",
  input_bra_no: "001",
  input_acct_type: "01",
  input_acct_no: "1234567",
  input_m_pin: "1234",

  // Accordions
  accordion1: "注意事項",
  accordion2: "銀行に対する個人情報の取扱いに関する同意条項",
  accordion3: "保証会社に対する個人情報の取扱いに関する同意条項",
  accordion4: "契約規定・保証委託約款",
  accordion5: "お手続きマイページ利用規約",

  // PDF
  pdf1: "c_acc js_acc agree_ContractTerms",
  pdf_select: "PDFファイルをダウンロード",

  // 可変項目②
  loan_app_select_branch: "001", //（取引店番）支店名
  amount: "500", //お借り入れ希望額 *

  name_kana_last: "アアア", //お名前　フリガナ セイ *
  name_kana_first: "アア", //お名前　フリガナ メイ *
  sex: "1", //性別 *
  zip_code_1: "060", //住所 郵便番号 前 *
  zip_code_2: "0000", //住所 郵便番号 後 *
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

  rent: "48000", //家賃 *
  annual_income: "48000", //前年個人年収(税込) *
  office_name: "あああああ", //お勤め先名称 *
  office_kana: "アアアアア", //お勤め先名称フリガナ（全角カナ）*
  office_zip_code_1: "064", //お勤め先住所 郵便番号 前 *
  office_zip_code_2: "0941", //お勤め先住所 郵便番号 後 *
  office_phone2_1: "0000", //お勤め先電話番号 前 *
  office_phone2_2: "00", //お勤め先電話番号 中 *
  office_phone2_3: "0000", //お勤め先電話番号 後 *
  office_address_city: "島根県1番地", //市町村以下（全角）*
  office_address_detail: "アアアアア", //ビル名など （全角）*
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
  working_style: "01", //職業
  business_type: "04", //お勤め先の種類
  work_contents: "01", //お仕事の内容
  enter_company_month: "1", //入社（営業開始）月
  employee_division: "01", //従業員数
  capital: "01", //資本金
  industry: "01", //事業内容（業種）
  repayment_year: "1", //ご返済希望 返済期間 年
  repayment_month: "0", //ご返済希望 返済期間 ヵ月
  bonus_ratio: "10", //ご返済希望 ボーナス返済の割合
  use_detail: "01", //お使いみち
  introduction_branch_exist: "1", //紹介店 有無
  select_introduction_branch: "023", //紹介店
  question: "01", //アンケート 本ローンをお申込みいただいたきっかけを教えてください
  prefecture_code: "01", //住所 都道府県
  prefecture_code2: "32",
  residence_year: "2000", //現在のお住まいに住み始めた時期 年
  enter_company_year: "2000", //入社（営業開始）年
  combination: "1", //当行保証付きカードローン（随弁型）同時申込
  attached_skip: "0", //後でお手続きマイページから登録する
  loan_app_contact_to_tel_: "1", //ご希望の連絡先
  office_dept: "営業部",
  position: "営業課長",

  // App Form
  back_btn_form: "　戻る　",
  app_success_msg: "お申し込みありがとうございました。",

  // List view
  all_aal_listview: "すべて選択",

  // Sort Name and Filter
  sort_app: "降順に並び替え済み",
  sort_desc: "お知らせ番号",
  app_log_col: "申込ログNo",
  app_id_col: "申込ID",
  sort_app_mypage: "お申込番号",

  // Queries
  query_0001_17:
    "SELECT Id, LastName, FirstName, Name, Email, Birthdate FROM Contact where Email = ",
  query_0001_31:
    "SELECT Id, Name, CreatedDate, clcommon__Email__c FROM Account where clcommon__Email__c = ",
  query_0001_44:
    "SELECT Id,Name,fj_Interest_Rate_Requested__c,genesis__Interest_Rate__c,fj_Bonus_Repayment_Requested__c," +
    "fj_Bonus_Repayment__c,fj_Bonus_Month_Requested__c,fj_Bonus_Month__c,fj_Bonus_Percent_Requested__c," +
    "fj_Bonus_Percent__c FROM genesis__Applications__c where name = ",
  query_0003_05:
    "Select Id, Name, fj_Examination_Status__c FROM genesis__Applications__c where name = ",
  query_0004_01:
    "SELECT Id, Name, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name =",
  query_0004_27:
    "SELECT Id, Name, fj_HasLoanTransaction__c, fj_HasOrdinaryDepositOverDraftService__c FROM FJ_InitialChk__c WHERE Name =",
  query_0004_32:
    "SELECT Id, Name, fj_Examination_Status__c FROM genesis__Applications__c WHERE Name =",
  query_0004_42:
    "SELECT Id, Name, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0006_03:
    "SELECT Id, Name, genesis__Interest_Rate__c, fj_InterestRate_InitialChk__c FROM genesis__Applications__c WHERE Name =",
  query_0006_14:
    "SELECT Id, Name, fj_RefApplication__r.Name, fj_HasOverdue__c, fj_Credit_Rank__c, fj_TransactionBanCode__c," +
    "fj_WorkDurationMonth__c from FJ_ExternalScoring__c  WHERE Name =",
  query_0007_02:
    "SELECT Id, genesis__Interest_Rate__c, genesis__Loan_Amount__c, genesis__Term__c, fj_Interest_Rate_Calculated__c, " +
    "fj_Loan_Amount_Calculated__c, fj_Term_Calculated__c FROM genesis__Applications__c WHERE Name = '",
  query_0009_04:
    "SELECT Id, Name, fj_Loan_Amount_GuaranteeChk__c, fj_Term_GuaranteeChk__c, fj_Interest_Rate_GuaranteeChk__c," +
    "genesis__Loan_Amount__c, genesis__Term__c, genesis__Interest_Rate__c from genesis__Applications__c where Name=",
  query_0012_24_1:
    "SELECT Id, CronJobDetail.Name FROM CronTrigger WHERE CronJobDetail.Name =", // ★ 新環境適用' New Env Implementation
  query_0012_24_2:
    "SELECT Id, ApexClass.Name, Status, ExtendedStatus, NumberOfErrors, CreatedDate, " +
    "JobType, CronTriggerId FROM AsyncApexJob WHERE Crontriggerid =", // ★ 新環境適用' New Env Implementation

  // MyPage
  mypage_url: "",
  home_mypage: "ホーム",
  see_wnt: "すべての お知らせ を参照",
  see_app: "すべて表示",
  mark_read: "既読にする",
  mark_comp: "完了",
  mypage_next_btn: "決定", // ★ 新環境適用' New Env Implementation
  new_btn: "登録", // ★ 新環境適用' New Env Implementation
  mypage_back_btn: "戻る", // ★ 新環境適用' New Env Implementation
  mypage_td: "以下をご融資の条件とさせていただきます",
  mypage_rdc_view_record_btn: "ご提出",

  // logic values
  isTrue: true,

  // Record types/filter
  // ★ 新環境適用' New Env Implementation
  acceptance_text: "申込受付",
  document_confirmation1_record_type: "①申込受付後",
  document_confirmation2_record_type: "②契約手続き前",
  cif_record_type: "CIF明細選択",
  ini2_record_type: "銀行審査②（取引情報取得）",
  ini3_record_type: "銀行審査③（外形チェック）",
  gud_record_type: "保証審査①",
  ver2_record_type: "②契約手続き前",
  rdc1_record_type: "資金使途確認資料（マイカー）",
  rdc2_record_type: "勤続年数確認資料",
  rdc3_record_type: "所得確認資料",
  rdc4_record_type: "その他",
  agr_condition_confirmation_record_type: "条件確認",
  agr_contract_agreement_record_type: "契約同意",
  er1_record_type: "23_振込伝票",

  // Scroll view
  exm_scroll: "外信照会",
  exm_scroll2: "システム情報",
  flag_mng_scroll: "フラグ管理",
  pro_scroll: "選択可能増額返済割合コード",
  pro_scroll2: "最大利率",
  ini_scroll: "商品",
  pro_view: "金利優遇対象下限額(超)",
  gud_scroll: "詳細",
  cnt_scroll: "反社照会",
  ver_rdc_scroll: "徴求書類",

  // Values
  auto_ok_value: "自動OK",
  linkage_status_value: "連携済み",

  // API
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  adj_loanamt_edit: "fj_Loan_Amount_UpperLimit__c",
  credit_accept_btn: "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  rdc_approve_btn_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  ver_approve_btn_api: "FJ_Verification__c.Fj_Verification_Accept",
  new_rdc_btn_api: "sfdc:StandardButton.FJ_RequiredDocument__c.New",
  ini3_approve_api: "FJ_InitialChk__c.Fj_InitialChkAccept",
  ba_delete_button_api: "clcommon__Bank_Account__c.Fj_BankAccountDeleter",
  delete_btn_api: "FJ_RequiredDocument__c.Fj_RequirdDocmentFileDeleter",
  api_app_customeledgerstatus_field:
    "sfdc:RecordField.genesis__Applications__c.fj_CustomerLedgerStatus__c",
  new_bank_acct_btn_api: "sfdc:StandardButton.clcommon__Bank_Account__c.New",

  // Edit
  app_adj_loanamt: "融資額(調整上限)を編集",
  ddp_edit: "同一人照会ステータス の編集",
  ini2_edit_field: "クレジットカード情報連携ステータス",
  ini3_edit_field: "所管部確認結果",
  gud_edit_field: "保証審査連携ステータス",
  execution_method_edit_btn: "実行方法を編集",
  start_date_edit: "ご融資希望日を編集",
  exec_edit: "処理ステータス",
  edit_cre: "条件確認ご融資条件 の編集",

  // Fields
  loan_upper_field: "融資額(調整上限)",
  first_phone_field: "第一電話番号_登録",
  second_phone_field: "第二電話番号_登録",
  third_phone_field: "第三電話番号_登録",
  kana_office_field: "カナ勤務先_登録",
  annual_income_field: "年収（万円）_登録",
  office_name_field: "漢字勤務先_登録",
  result_status_field: "実行結果処理ステータス",
  handling_no_field: "取扱番号",
  accept_or_reject_field: "諾否判定",
  guarantee_chk_res_field: "保証審査結果",

  // Buttons
  save_btn: "SaveEdit",
  submit_btn: "submit",
  save_edit_btn: "保存",
  approve_confirm: "承認",
  confirm_btn: "確認",
  cancel_btn: "キャンセル", // ★Dev環境にて追加した画面
  cre_save: "保存",
  edit_btn: "Edit",
  cancel_edit_btn: "CancelEdit",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // INI record
  review_information_linkage_status_label: "審査情報連携ステータス",
  scoring_information_linkage_status_label: "スコアリング情報連携ステータス",
  aml_etc_check_linkage_status_label: "AML等チェック連携ステータス",
  customer_aml_check_federation_status_label: "顧客AMLチェック連携ステータス",
  confirmation_result_value: "該当しない",
  subsidy_pension_label: "給振・年金", // ★ 新環境適用' New Env Implementation

  // WNT Types
  wnt_type: "W009",

  // Headers
  rdc_header: "徴求書類",
  history_header: "承認履歴",

  // 0006--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  approval_comment_input_label: "決裁コメント", // ★ 新環境適用' New Env Implementation
  approval_comment_value: "approve test",
  scoring_result_section: "スコアリング結果",
  pscore_edit_btn: "Pスコア限度額（単位：万円） の編集",
  pscore_limit_textbox: "Pスコア限度額（単位：万円）",
  pscore_limit_credit: "Pスコア限度額(修正)（単位：万円）",
  pscore_limit_value: 500,
  pscore_limit_credit_value: 400,

  //0007--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  guarantee_amount_textbox: "保証額",
  guarantee_term_textbox: "保証期間",
  clProd_name: "マイカーローン", //商品名
  review_decision: "自動応諾",
  guarantee_amount: 5000000, // 融資額（後の審査に影響）
  approved_amount: "",
  loan_amount_term: "",
  decision: "応諾",
  guarantee_result: "条件付承認",
  gua_number: "013300000001", // 保証番号
  gua_amount: "200000", // 融資額（後の審査に影響）
  amount_reduction: "選択を選択済みに移動",
  reason_code1: "基準金利10.0％(保証会社②用)",
  reason_code2: "選択を選択済みに移動",
  gua_date: "2022/12/25",
  gua_condition: "金額・期間ともに減らします",
  gua_term: "108", // 期間（後の審査に影響）
  orico: "001",
  approval_msg: "審査役が承認します。",

  //0008--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  edit_asc: "反社照会結果 の編集",
  asc_result: "反社照会結果",
  asc_top: "反社照会番号",
  asc_res_val: "◎",
  rec_status: "授受結果",
  picklist_label: "反社照会ステータス",
  asc_value: "連携完了",
  stt_type_text: "反社照会申込書",

  //0009--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  guarantee_company: "",
  app_adj_value: "10",
  cre_mypage1: "審査結果ご融資条件", // ★ 新環境適用' New Env Implementation
  cre_fillout:
    "ああああああああああああああああああああああああああああああああああああああああああああああああ" +
    "ああああああああああああああああああああああああああああああああああああああああああああああああ" +
    "ああああああああああああああああああああああああああああああああああああああああああああああああ" +
    "ああああああああああああああああああああああああああああああああああああああああああああああああ" +
    "ああああああああああああああああああああああああああああああああああああああああああああああああ" +
    "あああああああああああああああ",

  //0010 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Fj_TestScheme_10_0010_step_34
  execution_method_picklist_lbl: "実行方法, 伝票出力",
  execution_method_picklist_value: "自動実行",

  //Fj_TestScheme_10_0010_step_08
  next_btn: "次へ",
  new_document_category_label: "書類カテゴリ",
  new_document_category_value: "その他",
  new_acct_label: "取引先",
  new_acct_value: "シナリオに 単独事前", // ★申込の取引先名とするべき。
  new_req_document_status_label: "徴求書類ステータス",
  new_req_document_status_value: "書類追加",
  new_document_master_label: "書類マスタ",
  new_document_master_value: "その他", // 書類マスタ
  new_app_label: "申込",

  //Fj_TestScheme_10_0010_step_17
  defect_reason_val2: "不鮮明のため読み取れない",

  //Fj_TestScheme_10_0010_step_33
  execution_method_lbl: "実行方法",
  execution_method_val: "自動実行",

  //Fj_TestScheme_10_0010_step_29
  loan_amount_value: "3500000", // ★用途？→融資額調整上限の入力値

  // Fj_TestScheme_10_0010_step_34
  execution_method_value: "自動実行",

  // Fj_TestScheme_10_0010_step_36
  submission_data_section: "実行依頼データ", // ★ 新環境適用' New Env Implementation
  repayment_bank_account_label: "返済用銀行口座",
  repayment_bank_account_edit_btn: "返済用銀行口座を編集",
  bank_placeholder: "銀行口座を検索中...",
  create_new_bank_action: "actionCreateNew",
  ba_header: "銀行口座",

  // BA Records
  new_repayment_flag_label: "返済用フラグ",
  new_confirmation_status_label: "確認ステータス", // ★ 新環境適用' New Env Implementation
  new_confirmation_status_value: "確認済", // ★ 新環境適用' New Env Implementation
  new_deposit_type_label: "預金種類", // ★ 新環境適用' New Env Implementation
  new_deposit_type_value: "普通預金",
  new_financial_inst_name_optional_label: "金融機関名(選択)",
  new_financial_inst_name_optional_value: "当行",
  new_financial_inst_type_actual_label: "金融機関種類",
  new_financial_inst_type_value: "銀行",
  new_financial_inst_code_label: "金融機関コード",
  new_financial_inst_code_value: "0001",
  new_financial_inst_name_label: "金融機関名",
  new_financial_inst_name_value: "サンプル銀行",
  new_branch_code_label: "支店コード",
  new_branch_code_value: "001",
  new_branch_name_label: "支店名",
  new_branch_name_value: "本店営業部",
  new_account_number1_label: "口座番号",
  new_account_number1_value: "4870011",
  new_acct_name_value: "", // ★ 新環境適用' New Env Implementation
  new_acct_id_value: "", // ★ 新環境適用' New Env Implementation
  new_account_fee_label: "手数料額(円)", // ★ 新環境適用' New Env Implementation
  new_account_fee_value: "100", // ★ 新環境適用' New Env Implementation
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

  //Fj_TestScheme_10_0010_step_38
  execution_result_section: "実行登録",
  cif_no_label: "全店顧客番号",
  basic_loan_acc_no_value: "4870000",
  fj_CifNo_value: "001",
  app_cif_no_edit_btn: "全店顧客番号を編集",
  app_cif_linkage_status_lbl: "顧客番号再取得連携ステータス",
  app_cif_linkage_status_val: "手動照会済み", // 顧客番号再取得連携ステータス

  //0011 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ba_display_label: "銀行口座表示フラグ",
  ba_edit_btn: "銀行口座表示フラグを編集",
  confirmation_btn: "確認画面へ",
  ba_submit_btn: "確定する",
  my_bin_listview: "私のごみ箱",
  org_bin_listview: "組織のごみ箱",

  // Create bank account
  ba_new_record_no_value: 4,
  ba_input_fin_inst_lbl: "金融機関名(選択)",
  ba_input_fin_inst_name_lbl: "金融機関名", //dups
  ba_input_acct_type_lbl: "預金種類",
  ba_input_rcp_name_lbl: "お受取人お名前",
  ba_input_rcp_name_kana_lbl: "お受取人カタカナ",

  // Bank Acct 1
  // ★ 新環境適用' New Env Implementation - renamed variables
  ba_fin_inst_1: "当行",
  ba_branch_name_1: "ああ",
  ba_deposit_type_1: "普通預金",
  ba_acct_no_1: "1200000",
  ba_recipient_name_1: "ええ",
  ba_recipient_name_kana_1: "エエ",
  ba_transfer_amount_1: "100000",

  // Bank Acct 2
  // ★ 新環境適用' New Env Implementation - renamed variables
  ba_fin_inst_2: "当行",
  ba_branch_name_2: "ああ",
  ba_deposit_type_2: "当座預金",
  ba_acct_no_2: "1200001",
  ba_recipient_name_2: "ええ",
  ba_recipient_name_kana_2: "エエ",
  ba_transfer_amount_2: "110000",

  // Bank Acct 3
  // ★ 新環境適用' New Env Implementation - renamed variables
  ba_fin_inst_3: "当行以外",
  ba_branch_name_3: "あああ",
  ba_deposit_type_3: "その他",
  ba_acct_no_3: "1200002",
  ba_recipient_name_3: "えええ",
  ba_recipient_name_kana_3: "エエエ",
  ba_transfer_amount_3: "120000",
  ba_fin_inst_name_3: "おおお",

  // Bank Acct 4
  // ★ 新環境適用' New Env Implementation - renamed variables
  ba_fin_inst_4: "当行",
  ba_branch_name_4: "ああああ",
  ba_deposit_type_4: "貯蓄預金",
  ba_acct_no_4: "1200003",
  ba_recipient_name_4: "ええええ",
  ba_recipient_name_kana_4: "エエエエ",
  ba_transfer_amount_4: "130000",

  // Bank Account Edit
  ba_status_edit_title: "確認ステータス",
  ba_status_value: "確認済",
  ba_branch_code_value: "101",
  ba_branch_name_value: "ああああああ",
  ba_branch_name_value2: "ああああああいい",
  ba_account_no_value: "2100000",
  ba_fee_amount_value: "1500000",
  ba_status_code: "0", // 未確認

  // Change Loan Amt - Process7
  upper_limit_value: "2900000",

  // MyPage
  mypage_url: "",
  mypage_borrow_amount_header: "お借入れ金額をお決めください",
  mypage_repayment_date_value: "28",
  mypage_repayment_month_value: "30",
  mypage_repayment_ratio_value: "15",
  mypage_refund_amount_header: "ご返済金額をご確認ください",
  mypage_confirmation_page_btn: "内容確認へ",
  mypage_determine_btn: "確定する",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_accept_contract_btn: "契約に同意する",

  // Notification text
  condition_text: "条件確認",
  agreement_text: "契約同意",
  awaiting_text: "契約同意承認待ち",
  conclusion_text: "契約成立",

  // 10_0011_96
  app_first_phone_value1: "070-1234-5678",
  app_second_phone_value1: "070-1234-9101",
  app_third_phone_value1: "070-1234-1121",
  app_kana_office_name_value1: "アアアアイ",
  app_annual_income_value1: "12000",
  app_office_name_value1: "あああああいい",

  // 10_0011_97
  app_first_phone_value2: "070-1234-3141",
  app_second_phone_value2: "070-1234-5161",
  app_third_phone_value2: "070-1234-7181",
  app_kana_office_name_value2: "アアアアエエ",
  app_annual_income_value2: "15000",
  app_office_name_value2: "あああああええ",

  // AGR approve
  approve_comment_value: "OKです。",

  // RDC record
  rdc_doc_category1: "資金使途確認資料（マイカー）",

  //0012 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  cron_name: "自動実行バッチテスト", // DO NOT EDIT, cron_name is automatically updated (app name is automatically appended to the current value)
  app_requested_start_date_lbl: "ご融資希望日", // ★ 新環境適用' New Env Implementation
  expected_status_value: "",
  expected_status_value_before_editing: "自動実行連携失敗",
  processing_status_value: "自動実行完了",
  handling_no: "0000001",
  result_status: "00000000",
  loan_completion_text: "お借入中",
};
