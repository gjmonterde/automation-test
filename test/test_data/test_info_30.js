const user_info = require("./global_info");
export const testData = {
  /**|================================================================================|
   * | VALUES TO UPDATE                                                               |
   * |================================================================================|
   */
  // App - pre-requisite before running Process 2; input value first after running 0001 Process 1 script
  app_name: "APP-0000001441", // 住宅ローン利用者限定フリーローン_表示用お申込み

  // GDC specific field values
  name_last: "前", //お名前 姓 *
  name_first: "お", //お名前 名 *
  birth_year: "1977", //生年月日 年 *
  birth_month: "1", //生年月日 月 *
  birth_day: "1", //生年月日 日 *
  contact_detail: "GDC)Gizelle Automation Test 11/16/2023 Spec30 Test 1", //ご要望事項★シナリオ番号を記載 *

  // 0011 - Loan Adjustment Screen
  mypage_loan_date_value: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***
  mypage_loan_date_value2: "12/29/2023", // **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***

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
  httpurl01: user_info.environmentLinks.app_form_link + "/loan?pc=30", // ★ 新環境適用' New Env Implementation
  httpurl02: "o/genesis__Applications__c/list?filterName=", // Applications List
  httpurl03: "o/Account/list?filterName=", // Account List
  httpurl04: "o/Contact/list?filterName=", // Contact list
  downloads_url: "chrome://downloads/",
  mypage_url: "",

  /**|================================================================================|
   * | RECORD VALUES (INPUT/OUTPUT)                                                   |
   * |================================================================================|
   */
  // 0001
  // Step 1 - Error
  name_kana_last_err: "q", //お名前　フリガナ セイ *
  name_kana_first_err: "q", //お名前　フリガナ メイ *
  contact_home_1_err: "-", //連絡先 自宅電話番号 前 *
  contact_home_2_err: "-", //連絡先 自宅電話番号 中 *
  contact_home_3_err: "-", //連絡先 自宅電話番号 後 *
  contact_mobile_1_err: "-", //連絡先 携帯電話番号 前 *
  contact_mobile_2_err: "-", //連絡先 携帯電話番号 中 *
  contact_mobile_3_err: "-", //連絡先 携帯電話番号 後 *
  contact_phone_1_err: "-", //連絡先 勤務先電話番号 前 *
  contact_phone_2_err: "-", //連絡先 勤務先電話番号 中 *
  contact_phone_3_err: "-", //連絡先 勤務先電話番号 後 *

  // Step 1 - OK
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
  loan_app_contact_to_tel_2: "2", //ご希望の連絡先 - ご自宅
  loan_app_contact_to_tel_3: "3", //ご希望の連絡先 - 携帯電話
  loan_app_identical_person: "01", //健康保険証　名義
  loan_app_insurance_card_type: "01", //健康保険証　種類

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
  payment_1: "お支払い予定先", //お支払い予定先 名称
  payment_value: "100", //お支払い予定先 金額
  bank_1: "お支払い予定先", // お借り入れ金融機関の名称
  bank_2: "お支払い予定先", // お借り入れ金融機関の名称
  borrowing_1: "100", //借入先1 お借り入れ残高
  borrowing_2: "100", //借入先1 お借り入れ残高
  repayment_1: "100", //借入先1 年間返済額
  repayment_2: "100", //借入先1 年間返済額
  introduction_branch_exist: "2", //紹介店 有無 *
  reference_form_number_1: "AA0000", //企業ＩＤ・広告番号
  question: "99", //アンケート 本ローンをお申込みいただいたきっかけを教えてください *
  app_question: "アンケート", // アンケート（その他）*

  // Step 4
  reference_form_number_2: "AA0001", //企業ＩＤ・広告番号

  // RDC - 0002
  defect_reason_val: "blurred", // 不備理由

  // DDP - 0003
  same_person_inquiry_status_value: "同一人照会完了", // 同一人照会

  // INI(2) - 0004
  card_linkage: "連携済み", // クレジットカード情報連携ステータス

  // INI(3) - 0004
  linkage1: "連携済み", // 審査情報連携ステータス
  linkage2: "連携済み", // スコアリング情報連携ステータス
  linkage3: "連携済み", // AML等チェック連携ステータス
  linkage4: "連携済み", // 顧客AMLチェック連携ステータス
  jurisdiction: "該当しない", // 所管部確認結果
  fixed_comment: "シナリオ30-1-(15)", // 定型コメント

  // JIO - 0005
  jio_overdue_value_none: "--なし--", // 支払遅延の有無（CIC交流）
  jio_overdue_value: "元本遅延なし　利息遅延なし", // 支払遅延の有無（CIC交流）

  // SEC(1) - JICC and KSC - 0005
  status_value: "回答受信完了", // JICC照会ステータス

  // SEC(1) - SecondaryChk - 0005
  secondary_chk_val: "実施済OK", // 外信照会ステータス

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

  // JIB(1) - 0005
  jib_type_transact_val1: "クレジットカード（キャッシング）", // 取引形態区分
  jib_debt_val1: "AA", // 債権分類
  jib_lend_date_val1: "2023/09/02", // 貸付日
  jib_amt_val1: 500, // 貸付金額
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
  jib_amt_val4: 500, // 貸付金額
  jib_bal_val4: 0, // 残高

  // KIT (All) - 0005
  name_kana_value: "ｱ-ｱ-ｱ-ｱ", // 氏名（カナ）

  // KIT(1) - 0005
  kit_transaction_type_val1: "カードローン", // 取引種類
  kit_guaranteeflg_val1: "3", // 担保有無
  kit_contractdate_val1: "2023/10/01", // 成約日/実行日
  kit_loanamt_val1: 200, // 限度額/当初貸出額
  kit_bal_val1: 100, // 残債額
  kit_completiontype_val1: "01", // 完了区分
  kit_loanamt_card_val1: 200, // 内カードローン限度額
  kit_last_repayment_val1: "2023/01/02", // 最終返済日

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
  loanamt_val: 100, // 限度額/当初貸出額

  // KIL - 0005
  attrib_changedate_val: "2023/01/03", // 本人属性変更日
  declare_category_val: "B", // 本人申告区分
  declare_date_val: "2023/03/01", // 申告日

  // KIO - 0005
  official_report_val: "更正手続開始", // 官報公示項目

  // EXS - 0006 - input
  exam_approval_collab_status_val: "連携済み", // 審査決裁連携ステータス
  pscore_limit_val: 400, // Pスコア限度額（単位：万円）
  approval_comment_value: "approve test", // 決裁コメント

  // TRR - 0006 - inpu
  detail_type_val: "融資", // 種類
  kana_name_val: "ｱ-ｱ", // 氏名カナ
  lending_date_val: "2023/09/01", // 融資実行日
  loan_amount_val: 500, // 融資金額
  balance_val: 1000000, // 残債額
  annual_repayment_val: 800000, // 年間返済額
  collateral_classify_val: "有担保", // 担保区分
  row_flag_1: "7",
  row_flag_2: "8",

  // 0008
  asc_results_value: "◎", // 反社照会結果
  completed_status_value: "連携完了", // 反社照会ステータス

  // 0009
  msg_value1: "審査宿果ご駐資条件を入力しました", // 審査結果ご融資条件
  msg_value2: "金額・期間ともに減らします。追記しました。", // 条件確認ご融資条件

  // RDC - 0010
  new_document_category_value: "その他", // 書類カテゴリ
  new_req_document_status_value: "書類追加", // 徴求書類ステータス
  new_document_master_value: "その他", // 書類マスタ
  defect_reason_val2: "blurred", // 不備理由
  defect_reason_no_val: "", // 不備理由

  // APP - 0010
  execution_method_val: "自動実行", // 実行方法
  cif_no_value: "0010001", // 全店顧客番号
  basic_loan_acc_no_value: "0010001", // 融資基本口座番号
  cust_num_reacq_linkage_status_value: "手動照会済み", // 顧客番号再取得連携ステータス

  // BA - 0010
  new_confirmation_status_value: "確認済", // 確認ステータス
  new_deposit_type_value: "普通預金", // 預金種類
  new_financial_inst_name_optional_value: "当行", // 金融機関名(選択)
  new_financial_inst_type_value: "銀行", //  金融機関種類
  new_financial_inst_code_value: "0001", // 金融機関コード
  new_financial_inst_name_value: "サンプル銀行", // 金融機関名
  new_branch_code_value: "001", // 支店コード
  new_branch_name_value: "本店営業部", // 支店名
  new_account_number1_value: "4870011", // 口座番号
  new_deposit_type_ordinary_bank_value: "普通預金", // 預金種類（普通銀行）
  new_financial_inst_code_ordinary_bank_value: "0001", // 金融機関コード(普通銀行)
  new_financial_inst_name_ordinary_bank_value: "サンプル銀行", // 金融機関名(普通銀行)
  new_branch_code_ordinary_value: "001", // 支店コード(普通銀行)
  new_branch_name_ordinary_bank_value: "本店営業部", // 支店名(普通銀行)
  new_account_number2_value: "4870011", //口座番号(普通銀行)

  // BA - 0011
  ba_transferdate_value: "2023/02/24", // 口座振替登録完了予定日
  ba_confirmation_status_value: "確認済", // 確認ステータス
  ba_deposit_type_value: "当座預金", // 預金種類
  ba_recipient_name_value: "受取", // お受取人おなまえ
  ba_institution_name_opt_value: "当行", // 金融機関名(選択)
  ba_recipient_name_kana_value: "ウケトリ", // お受取人カタカナ
  ba_institution_type_value: "当行", // 金融機関種類
  ba_bank_code_value: "0000", // 金融機関コード
  ba_fin_inst_name_value: "融機", // 金融機関名
  ba_branch_code_value: "001", // 支店コード
  ba_branch_name_value: "店名", // 支店名
  ba_branch_name_value2: "支店", // 支店名
  ba_account_no_value: "3476982", // 口座番号
  ba_amount_value: "450,200", // 振込金額(円)
  ba_fee_amount_value: "1500000", // 手数料額(円)

  // MyPage - 0011
  mypage_borrow_amount_value: "",
  mypage_repayment_date_value: "28",
  mypage_repayment_month_value: "30",
  mypage_repayment_ratio_value: "15",
  mypage_borrow_amount_value2: "",
  mypage_repayment_date_value2: "16",
  mypage_repayment_month_value2: "50",
  mypage_repayment_ratio_value2: "25",

  // AGR - 0011
  approve_comment_value: "OKです。",

  // ExecResult - 0012 Output
  expected_status_value_before_editing: "自動実行連携失敗", // 処理ステータス
  expected_status_value: "", // 処理ステータス

  // ExecResult - 0012 Input
  processing_status_value: "自動実行完了", // 処理ステータス
  handling_no_value: "0010001", // 取扱番号
  loan_account_no_value: "0010001", //融資基本口座番号/カードローン口座番号
  result_status_value: "00000000", // 実行結果処理ステータス

  // RECORD TYPES
  acceptance_text: "申込受付",
  agreement_text: "契約同意",
  awaiting_approval_text: "契約同意承認待ち",
  bankacct_text: "払込先口座登録",
  conclusion_text: "契約成立",
  condition_text: "条件確認",
  ddp_rectype: "CIF明細選択", // ★ 新環境適用' New Env Implementation
  exam_result_compliance_rectype: "審査結果(応諾)", // ★ 新環境適用' New Env Implementation
  ini2_rectype: "銀行審査②（取引情報取得）", // ★ 新環境適用' New Env Implementation
  ini3_rectype: "銀行審査③（外形チェック）", // ★ 新環境適用' New Env Implementation
  loan_type: "お借入中",
  rdc1_rectype: "勤続年数確認資料", // ★ 新環境適用' New Env Implementation
  rdc3_rectype: "その他", // ★ 新環境適用' New Env Implementation
  reconfirmation_text: "再条件確認",
  sec1_rectype: "外信照会①", // ★ 新環境適用' New Env Implementation
  stt_type_text: "反社照会申込書",
  ver1_rectype: "①申込受付後", // ★ 新環境適用' New Env Implementation
  ver2_rectype: "②契約手続き前", // ★ 新環境適用' New Env Implementation

  // MAIL
  mail_time: "",

  /**|================================================================================|
   * | TEXT/LABELS/BUTTONS                                                            |
   * |================================================================================|
   */
  // Application form accordion
  acc1: "注意事項",
  acc2: "銀行に対する個人情報の取扱いに関する同意条項",
  acc3: "契約規定",
  acc4: "お手続きマイページ利用規約",

  // Application form pdf
  // ★ 新環境適用' New Env Implementation
  download_link: "PDFファイルをダウンロード",
  pdf_link1: "agree_PersonalInfoConsentClause_Gogin",
  pdf_link2: "agree_ContractTerms",
  pdf_link3: "agree_TermsOfUsage_MyPage",
  pdf1_name: "TermsOfUsage_MyPage.pdf",
  pdf2_name: "ContractTerms_HouseFreeLoan.pdf",
  pdf3_name: "PersonalInfoConsentClause_Gogin.pdf",

  // Buttons/Links
  edit_title: "編集",
  close_btn_img: "閉じる",
  back_btn: "　戻る　",
  accept_confirm_btn: "確認",
  reject_confirm_btn: "不備",
  addrow_submit_btn: "登録",
  recalculate_btn_label: "再計算",
  save_edit_btn: "SaveEdit",
  next_btn: "次へ",
  save_btn: "保存",
  approve_btn: "承認",
  submit_type_btn: "submit",
  app_new_ba_record_btn: "新規銀行口座",
  sf_canceledit_btn: "CancelEdit",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // LABELS
  defect_reason_lbl: "不備理由",
  same_person_inquiry_status_label: "同一人照会ステータス",
  linkage_status1: "審査情報連携ステータス",
  linkage_status2: "スコアリング情報連携ステータス",
  linkage_status3: "AML等チェック連携ステータス",
  federation_status: "顧客AMLチェック連携ステータス",
  jio_overdue_label: "支払遅延の有無（CIC交流）", // 支払遅延の有無（CIC交流）field
  jicc_status_label: "JICC照会ステータス",
  ksc_status_label: "KSC照会ステータス",
  secondary_chk_label: "外信照会ステータス",
  type_transact_lbl: "取引形態区分", // 取引形態区分 field label (also used in JIB records)
  jia_code_label: "注意コード ( 新ファイルM )",
  official_report_lbl: "官報公示項目",
  include_sum_lbl: "合算対象フラグ",
  exam_approval_collab_status_lbl: "審査決裁連携ステータス",
  addline_btn_lbl: "行追加",
  collateral_classify_lbl: "担保区分",
  new_document_category_label: "書類カテゴリ",
  new_req_document_status_label: "徴求書類ステータス",
  new_document_master_label: "書類マスタ",
  new_app_label: "申込",
  execution_method_lbl: "実行方法",
  repayment_bank_account_label: "返済用銀行口座",
  new_repayment_flag_label: "返済用フラグ",
  new_financial_inst_code_label: "金融機関コード",
  new_branch_code_label: "支店コード",
  new_branch_name_label: "支店名",
  new_account_number1_label: "口座番号",
  new_deposit_type_ordinary_bank_label: "預金種類（普通銀行）",
  new_financial_inst_code_ordinary_bank_label: "金融機関コード(普通銀行)",
  new_financial_inst_name_ordinary_bank_label: "金融機関名(普通銀行)",
  new_branch_code_ordinary_label: "支店コード(普通銀行)",
  new_branch_name_ordinary_bank_label: "支店名(普通銀行)",
  new_account_number2_label: "口座番号(普通銀行)",
  cust_num_reacq_linkage_status_lbl: "顧客番号再取得連携ステータス",
  acct_label: "取引先",
  ba_payee_flag_label: "振込先フラグ",
  ba_confirmation_status_label: "確認ステータス",
  ba_deposit_type_label: "預金種類",
  ba_institution_name_opt_label: "金融機関名(選択)",
  ba_institution_type_label: "金融機関種類",
  ba_recipient_name_kana_label: "お受取人カタカナ",
  ba_bank_name_label: "金融機関名",
  ba_amount_label: "振込金額(円)",
  mypage_bonus_use_label: "半年ごと増額返済(ボーナス返済)",

  // ★ 新環境適用' New Env Implementation
  contact_label: "取引先責任者",
  ini2_linkage_lbl: "クレジットカード情報連携ステータス",
  ini3_comment_lbl: "定型コメント",
  subsidy_pension: "給振・年金",
  jid_kana_lbl: "カナ氏名",
  trr_lbl: "借入明細情報一覧",
  debt_lbl: "債権分類",
  total_bal_lbl: "トータル残高金額",
  loan_amt_lbl: "契約額/極度額",
  guarantee_amt_lbl: "保証額",
  used_date_lbl: "利用日",
  balance_lbl: "残高",
  lendingdate_lbl: "貸付日",
  kit_kana_lbl: "氏名（カナ）",
  transaction_type_lbl: "取引種類",
  guaranteeflg_lbl: "担保有無",
  kit_balance_lbl: "残債額",
  kit_loanamt_lbl: "限度額/当初貸出額",
  kit_contractdate_lbl: "成約日/実行日",
  kit_last_repayment_date_lbl: "最終返済日",
  kit_completion_lbl: "完了区分",
  kit_loanamtcard_lbl: "内カードローン限度額",
  kil_attribchangedate_lbl: "本人属性変更日",
  kil_declarecategory_lbl: "本人申告区分",
  kil_declaredate_lbl: "申告日",
  jib_loan_amt_lbl: "貸付金額",
  pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  trr_detail_type_lbl: "種類",
  trr_kana_name_lbl: "氏名カナ",
  trr_lending_date_lbl: "融資実行日",
  trr_loan_amount_lbl: "融資金額",
  trr_balance_lbl: "残債額",
  trr_annual_repayment_lbl: "年間返済額",
  approval_comment_input_label: "決裁コメント",
  cif_no_lbl: "全店顧客番号",
  handling_no_label: "取扱番号",
  basic_loan_acc_no_lbl: "融資基本口座番号",
  asc_result_lbl: "反社照会結果",
  asc_status_lbl: "反社照会ステータス",
  cre_loan_terms_lbl: "条件確認ご融資条件",
  cre_result_condition: "審査結果ご融資条件",
  ba_registrationdate_lbl: "口座振替登録完了予定日",
  ba_recipient_name_label: "お受取人お名前",
  ba_fee_amount_lbl: "手数料額(円)",
  app_requested_start_date_lbl: "ご融資希望日",
  execresultdata_process_status_label: "処理ステータス",
  loan_account_no_label: "融資基本口座番号/カードローン口座番号",
  result_status_label: "実行結果処理ステータス",

  // RECORD BUTTONS
  defect_reason_edit_btn: "不備理由 の編集",
  jicc_edit_pencil: "JICC照会ステータス の編集",
  ksc_edit_pencil: "KSC照会ステータス の編集",
  secondary_chk_pencil: "外信照会ステータス の編集",
  include_sum_edit_pencil: "合算対象フラグ の編集",
  exam_approval_collab_status_edit_btn: "審査決裁連携ステータス の編集",
  pscore_edit_btn: "Pスコア限度額（単位：万円） の編集",
  execution_method_edit_btn: "実行方法を編集",
  repayment_bank_account_edit_btn: "返済用銀行口座を編集",
  store_wide_customer_number_edit_btn: "全店顧客番号を編集",
  ini2_edit_btn: "クレジットカード情報連携ステータス の編集",
  ini3_subsidy_pension_edit_btn: "給振・年金 の編集",
  ini3_edit_btn: "所管部確認結果 の編集",
  ini3_linkage_edit_btn: "審査情報連携ステータス の編集",
  ddp_same_person_inquiry_edit_btn: "同一人照会ステータス の編集",
  asc_edit_btn: "反社照会結果 の編集",
  er_status_edit_btn: "処理ステータス の編集",
  app_requested_start_date_edit_btn: "ご融資希望日を編集",

  // HEADERS/SECTION
  asc_header: "反社照会",
  ba_header: "銀行口座",
  ini3_section1: "金利優遇",
  ini3_section2: "顧客AMLチェック結果情報",
  ini3_section3: "所管部確認結果",
  jid_rel_list_jib: "JICC結果(債権情報)",
  jio_rel_list_name: "JICC照会明細(他機関)",
  qa_header: "アンケート等",
  rdc_header: "徴求書類",
  scoring_result_section: "スコアリング結果",
  scroll_header: "作成者", // to go to designated header (also used in KIL/KOC records)
  sec_header: "外信照会",
  step1_section: "お客さまについて",
  step2_section: "ご家族・お住まいについて",
  submission_data_section: "実行依頼データ",

  // PLACEHOLDERS/TEXT/OTHER
  approved_text: "承認済み",
  app_created_txt: "お申し込みありがとうございました。",
  create_new_bank_action: "actionCreateNew",
  heading: "住宅ローン利用者限定フリーローン_表示用お申込み",
  jio_text: "当行",
  search_account: "すべての取引先 リストビューを検索します。",
  search_contact: "All Contacts リストビューを検索します。",

  // LISTVIEW
  // ★ 新環境適用' New Env Implementation
  all_account_listview: "すべての取引先",
  all_contact_listview: "All Contacts",
  all_app_listview: "すべて選択",

  // SORT
  applog_sort_col: "申込ログNo",
  app_list_sort_col: "申込ID",

  // MYPAGE HEADERS
  mypage_borrow_amount_header: "お借入れ金額をお決めください",
  mypage_refund_amount_header: "ご返済金額をご確認ください",
  mypage_repayment_amount_header: "ご返済金額（ご返済シミュレーション）",

  // MyPage BUTTONS
  mypage_borrowing_details_btn: "お借入れ内容調整",
  mypage_confirmation_page_btn: "内容確認へ",
  mypage_determine_btn: "確定する",
  mypage_contract_details_btn: "ご契約内容確認",
  mypage_accept_contract_btn: "契約に同意する",
  mypage_rdc_view_record_btn: "ご提出",
  viewall_notif_link: "すべての お知らせ を参照",

  // MYPAGE SORT
  mypage_notif_sort: "お知らせ番号",
  mypage_app_sort: "お申込番号",

  /**|================================================================================|
   * | API                                                                        |
   * |================================================================================|
   */
  // BUTTONS
  required_docu_accept_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  required_docu_reject_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Reject",
  verify_docu_accept_api: "FJ_Verification__c.Fj_Verification_Accept",
  jid_create: "sfdc:StandardButton.FJ_JICC_InquiryDetail__c.New",
  jio_other_create: "sfdc:StandardButton.FJ_JICC_InquiryDetail_Other__c.New",
  jim_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_M__c.New",
  jia_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_AM__c.New",
  jib_create: "sfdc:StandardButton.FJ_JICC_InquiryResult_Debt__c.New",
  kid_create: "sfdc:StandardButton.FJ_KSC_InquiryDetail__c.New",
  kit_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Tran__c.New",
  kij_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_JICC__c.New",
  kic_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_CIC__c.New",
  kil_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Decl__c.New",
  kio_create: "sfdc:StandardButton.FJ_KSC_InquiryResult_Official__c.New",
  external_scoring_approve_btn_api:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  new_rdc_btn_api: "sfdc:StandardButton.FJ_RequiredDocument__c.New",
  rdc_approve_btn_api: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  new_bank_acct_btn_api: "sfdc:StandardButton.clcommon__Bank_Account__c.New",
  ver_approve_btn_api: "FJ_Verification__c.Fj_Verification_Accept",
  api_initialcheck_accept_btn: "FJ_InitialChk__c.Fj_InitialChkAccept", // ★ 新環境適用' New Env Implementation
  api_creditapproval_accept_btn:
    "FJ_CreditApproval__c.Fj_CreditApproval_Accept", // ★ 新環境適用' New Env Implementation

  /**|================================================================================|
   * | QUERIES                                                                        |
   * |================================================================================|
   */
  query_0001_45:
    "SELECT Id,Name,genesis__loan_amount__c,fj_Loan_Amount_Requested__c,genesis__term__c," +
    "fj_Term_Requested__c,genesis__interest_rate__c,fj_Interest_Rate_Requested__c,fj_Bonus_Repayment__c," +
    "fj_Bonus_Repayment_Requested__c,fj_Bonus_Month__c,fj_Bonus_Month_Requested__c,fj_Bonus_Percent__c," +
    "fj_Bonus_Percent_Requested__c FROM genesis__applications__c WHERE Name=",
  query_0006_03:
    "SELECT Id, Name, fj_InterestRate_InitialChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name =",
  query_0006_14:
    "SELECT Id, Name, fj_RefApplication__r.Name, fj_Credit_Rank__c, fj_HasOverdue__c, fj_TransactionBanCode__c, fj_WorkDurationMonth__c, " +
    "fj_RefApplication__r.fj_JICC_KSC_NegaCount__c, fj_RefApplication__r.fj_SecondaryChk_NegaCount__c FROM FJ_ExternalScoring__c WHERE Name=",
  query_0006_36:
    "SELECT Id, Name, fj_RefApplication__r.Name, fj_ApplicationAmount__c FROM FJ_ExternalScoring__c WHERE Name=",
  query_0009_04:
    "SELECT Id, Name, fj_Loan_Amount_GuaranteeChk__c, genesis__Loan_Amount__c, fj_Term_GuaranteeChk__c, genesis__Term__c, " +
    "fj_Interest_Rate_GuaranteeChk__c, genesis__Interest_Rate__c FROM genesis__Applications__c WHERE Name = '",
  query_0009_08:
    "SELECT Id, Name, fj_Loan_Amount_Calculated__c, fj_RefApplication__r.fj_Loan_Amount_Calculated__c, fj_RefApplication__r.fj_Term_Calculated__c, " +
    "fj_RefApplication__r.fj_Interest_Rate_Calculated__c, fj_Term_Calculated__c, fj_Interest_Rate_Calculated__c  FROM fj_CreditApproval__c WHERE Name = '",
  query_0009_16:
    "SELECT Id, Name, fj_CustomerMemo__c FROM genesis__Applications__c WHERE Name = '",
  query_0011_21:
    "SELECT Id, Name, fj_LastGuaranteeCondition__c FROM genesis__Applications__c WHERE Name =",
  query_0011_65:
    "SELECT Id, Name, fj_Loan_Amount_Changed__c, fj_Term_Changed__c FROM genesis__Applications__c WHERE Name =",
  cron_query1:
    "SELECT Id, CronJobDetail.Name FROM CronTrigger WHERE CronJobDetail.Name =", // ★ 新環境適用' New Env Implementation
  cron_query2:
    "SELECT Id, ApexClass.Name, Status, ExtendedStatus, NumberOfErrors, CreatedDate, JobType, CronTriggerId FROM AsyncApexJob WHERE Crontriggerid =", // ★ 新環境適用' New Env Implementation

  /**|================================================================================|
   * | IDENTIFIERS/LOGICAL VALUES                                                     |
   * |================================================================================|
   */
  // ★ 新環境適用' New Env Implementation
  // IDENTIFIERS
  logged_status: "",
  three_no_of_records: 3,
  four_no_of_records: 4,
  two_no_of_records: 2,

  // LOGICAL VALUES
  isTrue: true, // ★ 新環境適用' New Env Implementation

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec30: "30-1-(15)",
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
  app_id: "",
  account_id: "",
  account_name: "",
  contact_id: "",
  contact_name: "",
  wnt_id: "",
  wnt_name: "",
  mnt_id: "",
  mnt_name: "",
  cnt_id: "",
  cnt_name: "",
  rdc1_id_of_ver1: "",
  rdc1_name_of_ver1: "",
  rdc1_id_of_ver2: "",
  rdc1_name_of_ver2: "",
  rdc3_id_of_ver2: "",
  rdc3_name_of_ver2: "",

  ver1_id: "",
  ver1_name: "",
  ver2_id: "",
  ver2_name: "",
  exm_id: "",
  exm_name: "",
  ddp_id: "",
  ddp_name: "",
  ini2_id: "",
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
  sec1_id: "",
  sec1_name: "",
  trr_id: "",
  trr_name: "",
  exs_id: "",
  exs_name: "",
  ini3_id: "",
  ini3_name: "",
  asc_name: "",
  asc_id: "",
  stt_name: "",
  stt_id: "",
  cre_name: "",
  cre_id: "",
  dm_name: "",
  dm_id: "",
  ba_id: "",
  ba_name: "",
  wnt2_id: "",
  wnt2_name: "",
  mnt2_id: "",
  mnt2_name: "",
  agr1_id: "",
  agr1_name: "",
  agr2_id: "",
  agr2_name: "",
  exec_result_name: "",
  exec_result_id: "",
  pc_master: "",
  listview_id: "",
  listview2_id: "",
  listview3_id: "",

  // ★ 新環境適用' New Env Implementation
  // Arrays
  kit_id_arr: [],
  kit_name_arr: [],
  jim_id_arr: [],
  jim_name_arr: [],
  jib_id_arr: [],
  jib_name_arr: [],
  rdc_id_arr: [],
  rdc_name_arr: [],

  // CRON
  cron_name: "自動実行バッチテスト", // DO NOT EDIT - value will be updated automatically
  cron_id: "", // ★ 新環境適用' New Env Implementation
  res_results: new Array(),
};
