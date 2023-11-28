export const testData = {
  /**|================================================================================|
   * | VALUES TO UPDATE                                                               |
   * |================================================================================|
   */
  // 0001 Application record creation
  // There are three(3) new records created for this spec, choose which record should be targeted for the testing.
  // Choices are 1, 2 or 3
  record_no: 1,

  // Record 1
  csv_value1_requesterkanji: "井井　六", // 氏名漢字
  csv_value1_requestermailaddress: "dummymail09142301@fujitsu.com", // メールアドレス
  csv_value1_systemacceptno: "2309140001", // システム受付番号
  csv_value1_birthday: "19790101", // 生年月日

  // Record 2
  csv_value2_requesterkanji: "井本　六", // 氏名漢字
  csv_value2_requestermailaddress: "dummymail09142302@fujitsu.com", // メールアドレス
  csv_value2_systemacceptno: "2309140002", // システム受付番号
  csv_value2_birthday: "19790102", // 生年月日

  // Record 3
  csv_value3_requesterkanji: "井田　六", // 氏名漢字
  csv_value3_requestermailaddress: "dummymail09142303@fujitsu.com", // メールアドレス
  csv_value3_systemacceptno: "2309140003", // システム受付番号
  csv_value3_birthday: "19790103", // 生年月日

  // APP Loan adjustment input values (0011 step 36)
  app_preferred_loan_date_value: "12/29/2023", // ご融資希望日 **NOTE: date format will be affected by client locale settings || JP - YYYYYY/MM/dd || PH - MM/DD/YYYY or DD/MM/YYYY***

  /**|================================================================================|
   * | APPLICATION CREATION                                                           |
   * |================================================================================|
   */
  // File name
  application_csv_filename: "CSV連携データ(申込)_62-1-(01).csv",

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
  csv_head_workplacecapital: "fj_Workplace_Capital__c", // ★ 新環境適用' New Env Implementation

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
  csv_value1_workplacecapital: "01", // 資本金 // ★ 新環境適用' New Env Implementation

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
  csv_value2_workplacecapital: "01", // 資本金 // ★ 新環境適用' New Env Implementation

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
  csv_value3_workplacecapital: "01", // 資本金 // ★ 新環境適用' New Env Implementation

  /**|================================================================================|
   * | URLs                                                                           |
   * |================================================================================|
   */
  httpurl01: "o/FJ_MuCooperationApp__c/list?filterName=", // CSV連携データ(申込)
  httpurl02: "o/genesis__Applications__c/list?filterName=", // 申込
  httpurl03: "o/Account/list?filterName=", // 取引先
  httpurl04: "o/Contact/list?filterName=", // 取引先責任者

  /**|================================================================================|
   * | RECORD VALUES (INPUT/OUTPUT)                                                   |
   * |================================================================================|
   */

  // Record Types
  acceptance_rectype: "申込受付",
  borrowing_rectype: "お借入中",
  condition_check_rectype: "条件確認",
  contract_agreement_rectype: "契約同意",
  contract_conclusion_rectype: "契約成立",
  ddp_cifline_rectype: "CIF明細選択",
  exam_result_acceptance_rectype: "審査結果(応諾)",
  gud3_rectype: "保証審査③",
  ini2_rectype: "銀行審査②（取引情報取得）",
  ini3_rectype: "銀行審査③（外形チェック）",
  payee_account_registration_rectype: "払込先口座登録",
  pending_agreement_approval_rectype: "契約同意承認待ち",
  ver_document_confirmation1_rectype: "①申込受付後",
  ver_document_confirmation2_rectype: "②契約手続き前",

  // DDP (CIF明細選択) value - 0003
  ddp_completioninquiry_value: "取引有無照会完了", // 同一人照会ステータス
  ddp_inquirycomplete_value: "同一人照会完了", //同一人照会ステータス

  // INI (銀行審査②（取引情報取得）) input value - 0004
  ini2_linked_value: "連携済み", // クレジットカード情報連携ステータス

  // INI (銀行審査③（外形チェック）) input values - 0004
  ini3_aml_status_value: "連携済み", // AML等チェック連携ステータス
  ini3_bank_scoring_status_value: "連携済み", // スコアリング情報連携ステータス
  ini3_cooperation_exam_status_value: "連携済み", // 審査情報連携ステータス
  ini3_customer_aml_check_status_value: "連携済み", // 顧客AMLチェック連携ステータス
  ini3_fixed_comment_value: "OKです。", // 定型コメント
  ini3_notapplicable_value: "該当しない", // 所管部確認結果

  // EXS input values - 0006
  exs_approval_comment_value: "承認します。子画面のレイアウトが気になります。", // 決裁コメント
  exs_exam_cooperation_status_value: "連携済み", // 審査決裁連携ステータス
  exs_pscore_limit_value: "90000", //  Pスコア限度額（単位：万円）

  // GUD input values - 0007
  gud_acceptance_judgement_value: "応諾", // 諾否判定
  gud_approve_comment_value: "審査役です。承認します。", // コメント
  gud_guarantee_amount_value: "", // 保証額
  gud_guarantee_approval_date_value: "2022/10/04", // 通知日
  gud_guarantee_condition_value: "条件はありません。", // 保証条件
  gud_guarantee_exp_date_value: "2023/05/21", // 保証有効期限
  gud_guarantee_number_value: "12800001", // 保証番号
  gud_guarantee_result_value: "承認", // 保証審査結果

  // ASC input values - 0008
  asc_antisocial_inquiry_status_value: "連携完了", // 反社照会ステータス
  asc_antisocial_results_value: "◎", // 反社照会結果
  asc_giving_result_value: "正常", // 授受結果

  // BA output values - 0010
  // ★ 新環境適用' New Env Implementation
  ba_status_code: "0", // 未確認

  // APP input values - 0010
  app_execution_method_value: "自動実行", // 実行方法
  app_cif_no_value: "1234567ABC", // 全店顧客番号
  app_cif_linkage_status_value: "手動照会済み", // 顧客番号再取得連携ステータス
  app_loan_acct_no_value: "6380001", // 融資基本口座番号

  // BA input values - 0011
  ba_confirmation_status_value: "確認済", // 確認ステータス
  ba_deposit_type_value: "当座預金", // 預金種類
  ba_recipient_name_value: "丹次郎", // お受取人お名前
  ba_institution_name_opt_value: "当行", // 金融機関名(選択)
  ba_recipient_kana_value: "タンジロ", // お受取人カタカナ
  ba_fin_institution_name_value: "大阪銀行", // 金融機関名
  ba_branch_code_value: "004", // 支店コード
  ba_branch_name_value: "大阪城", // 支店名
  ba_account_number_value1: "4560017", // 口座番号
  ba_account_number_value2: "7890016", // 口座番号
  ba_account_number_value_err: "9999999", // 口座番号
  ba_transfer_amount_value1: "550000", // 振込金額(円)
  ba_transfer_amount_value2: "340000", // 振込金額(円)
  ba_fee_amount_value1: "1500000", // 手数料額(円)
  ba_fee_amount_value2: "1600000", // 手数料額(円)

  // AGR input values - 0011
  agr_approve_comment_value: "審査役が承認します。", // コメント

  // Exec result output values - 0012
  exec_result_err_message_actual: "", // 処理エラーメッセージ
  exec_result_err_message_expected: "Callout error: Argument 2 cannot be null", // 処理エラーメッセージ
  exec_result_processing_status_actual: "", // 処理ステータス
  exec_result_processing_status_expected: "自動実行連携失敗", // 処理ステータス

  // Exec result input values - 0012
  batch_compiled: "",
  batch_executed: "",
  exec_result_handling_no_value: "0000001", // 取扱番号
  exec_result_loan_acct_no_value: "1234567", // 融資基本口座番号/カードローン口座番号
  exec_result_processing_status_value: "自動実行完了", //処理ステータス
  exec_result_status_value: "00000000", // 実行結果処理ステータス

  /**|================================================================================|
   * | TEXT/LABELS/BUTTONS                                                            |
   * |================================================================================|
   */
  // Headers
  approval_history_header: "承認履歴",
  asc_header: "反社照会",
  ba_header: "銀行口座",
  submission_data_section: "実行依頼データ",
  rdc_header: "徴求書類", // ★ 新環境適用' New Env Implementation
  sec_header: "外信照会", // ★ 新環境適用' New Env Implementation

  // Labels
  agr_contract_acceptance_flag_lbl: "契約同意フラグ",
  agr_contract_agreement_datetime_lbl: "契約同意確認日時",
  agr_date_lbl: "日付",
  agr_time_lbl: "時間",
  app_execution_method_lbl: "実行方法",
  app_cif_linkage_status_lbl: "顧客番号再取得連携ステータス",
  app_requested_start_date_lbl: "ご融資希望日",
  asc_antisocial_inquiry_status_lbl: "反社照会ステータス",
  asc_antisocial_results_lbl: "反社照会結果",
  asc_giving_result_lbl: "授受結果",
  ba_acct_label: "取引先",
  ba_account_number_label: "口座番号",
  ba_branch_code_label: "支店コード",
  ba_branch_name_label: "支店名",
  ba_confirmation_status_label: "確認ステータス",
  ba_deposit_type_label: "預金種類",
  ba_fin_institution_name_label: "金融機関名",
  ba_institution_name_opt_label: "金融機関名(選択)",
  ba_recipient_kana_label: "お受取人カタカナ",
  ba_recipient_name_label: "お受取人お名前",
  ba_transfer_amount_label: "振込金額(円)",
  ba_payee_flag_label: "振込先フラグ",
  exec_result_processing_status_lbl: "処理ステータス",
  exs_exam_cooperation_status_lbl: "審査決裁連携ステータス",
  exs_pscore_limit_lbl: "Pスコア限度額（単位：万円）",
  gud_acceptance_judgement_lbl: "諾否判定",
  gud_guarantee_result_lbl: "保証審査結果",
  ini_aml_status_lbl: "AML等チェック連携ステータス",
  ini_bank_scoring_status_lbl: "スコアリング情報連携ステータス",
  ini_child_lbl: "子育て家庭",
  ini_cooperation_exam_status_lbl: "審査情報連携ステータス",
  ini_creditcard_info_linkage_status_lbl: "クレジットカード情報連携ステータス",
  ini_creditcard_lbl: "クレジットカード",
  ini_customer_aml_check_status_lbl: "顧客AMLチェック連携ステータス",
  ini_executive_confirmation_lbl: "所管部確認結果",
  ini_subsidy_pension_lbl: "給振・年金",
  pro_pref_interest_rate2_lbl: "優遇利率(その他2)",
  pro_card_loan_interest_flag_lbl: "カードローン金利利用フラグ",
  doc_required_max_amount_lbl: "書類不要上限金額(未満)",
  bank_review2_flag_lbl: "銀行審査②フラグ",
  housewife_husband_app_flg_lbl: "主婦/主夫申込可能フラグ",
  pref_interest_rates_other_lbl: "優遇利率(他ローン取引)",
  base_rate_lbl: "ベースレート",
  cloan_interest_rate_usage_flag_lbl: "カードローン金利利用フラグ",
  second_phone_ledger_lbl: "第二電話番号_元帳",
  ini3_comment_lbl: "定型コメント",
  gud_guarantee_approval_date_lbl: "通知日",
  gud_guarantee_number_lbl: "保証番号",
  gud_guarantee_condition_lbl: "保証条件",
  gud_guarantee_amount_lbl: "保証額",
  gud_guarantee_exp_date_lbl: "保証有効期限",
  cif_no_lbl: "全店顧客番号",
  basic_loan_acc_no_lbl: "融資基本口座番号",
  ba_fee_amount_lbl: "手数料額(円)",
  er_handling_no_label: "取扱番号",
  er_loan_account_no_label: "融資基本口座番号/カードローン口座番号",
  er_result_status_label: "実行結果処理ステータス",
  exs_approval_comment_lbl: "決裁コメント",

  // Buttons
  approve_btn: "承認",
  cancel_btn: "キャンセル",
  confirm_btn: "確認",
  save_btn: "保存",
  sf_clone_btn: "Clone",
  sf_saveedit_btn: "SaveEdit",
  submit_type_btn: "submit",
  completion_btn: "完了",
  parent_div_rdc_confirm: "cFj_DocumentManager",
  rdc_confirm_radio_btn: "_confirmOK",
  rdc_reject_radio_btn: "_confirmNG",
  rdc_deficiency_reason_btn: "_deficiencyReason",
  rdc_confirm_btn: "確定",

  // Record Buttons
  agr_contract_acceptance_flag_edit_btn: "契約同意フラグ の編集",
  app_cif_no_edit_btn: "全店顧客番号を編集",
  app_execution_method_edit_btn: "実行方法を編集",
  app_requested_start_date_edit_btn: "ご融資希望日を編集",
  asc_antisocial_results_edit_btn: "反社照会結果 の編集",
  ba_status_edit_btn: "確認ステータス の編集",
  ddp_samepersoninqstatus_edit_btn: "同一人照会ステータス の編集",
  exec_result_processing_status_edit_btn: "処理ステータス の編集",
  exs_exam_cooperation_status_edit_btn: "審査決裁連携ステータス の編集",
  ini_cooperation_edit_btn: "審査情報連携ステータス の編集",
  gud_acceptance_judgement_edit_btn: "諾否判定 の編集",
  gud_actions_btn: "さらに 4 個のアクションを表示",
  ini_creditcard_info_linkage_edit_btn:
    "クレジットカード情報連携ステータス の編集",
  ini_executive_confirmation_edit_btn: "所管部確認結果 の編集",
  ini_subsidypension_edit_btn: "給振・年金 の編集",

  // Text
  approved_text: "承認済み",
  logged_status: "",

  // Sort
  sort_create_date_header: "作成日",
  sort_desc: "降順に並び替え済み",
  sort_app_id_header: "申込ID",
  sort_control_no_header: "管理番号",

  // LISTVIEW
  // ★ 新環境適用' New Env Implementation
  all_mu_listview: "★すべて選択",
  all_account_listview: "すべての取引先",
  all_contact_listview: "All Contacts",
  all_app_listview: "すべて選択",

  /**|================================================================================|
   * | APIs                                                                        |
   * |================================================================================|
   */
  // Buttons
  api_ba_new_btn: "sfdc:StandardButton.clcommon__Bank_Account__c.New",
  api_creditapproval_accept_btn:
    "FJ_CreditApproval__c.Fj_CreditApproval_Accept",
  api_externalscoring_accept_btn:
    "FJ_ExternalScoring__c.Fj_ExternalScoringAccept",
  api_gud_confirm_btn: "FJ_GuaranteeChkDetail__c.FJ_GuaranteeChkDetailConfirm",
  api_ini_accept_btn: "FJ_InitialChk__c.Fj_InitialChkAccept",
  api_rdc_accept_btn: "FJ_RequiredDocument__c.Fj_RequiredDocument_Accept",
  api_ver_accept_btn: "FJ_Verification__c.Fj_Verification_Accept",

  /**|================================================================================|
   * | COMMON CODE VARIABLES                                                          |
   * |================================================================================|
   */
  // Select app from App Launcher
  originate_app: "Q2 Origination",
  recycle_bin_app: "ごみ箱",

  /**|================================================================================|
   * | QUERIES                                                                        |
   * |================================================================================|
   */
  query_0006_03:
    "SELECT fj_Interest_Rate_Approved__c, fj_Interest_Rate_Calculated__c, " +
    "fj_Interest_Rate_Changed__c, fj_Interest_Rate_Contracted__c, fj_Interest_Rate_GuaranteeChk__c, " +
    "fj_Interest_Rate_Requested__c, fj_InterestRate_InitialChk__c, genesis__Interest_Rate__c, " +
    "genesis__Rate_Ceiling__c, genesis__Rate_Discount__c, genesis__Rate_Floor__c FROM genesis__Applications__c WHERE name=",
  query_0006_36:
    "SELECT Id, Name, fj_ApplicationAmount__c FROM FJ_ExternalScoring__c WHERE Name=",
  query_0007_02:
    "SELECT fj_Credit_Limit_Calculated__c, fj_Draw_Term_Calculated__c, fj_Interest_Rate_Calculated__c, " +
    "fj_Loan_Amount_Calculated__c, fj_Loan_Credit_Limit_Calculated__c, fj_Term_Calculated__c FROM genesis__Applications__c WHERE name=",
  query_0009_04:
    "SELECT fj_GuaranteeChk_Status__c, fj_GuaranteeChkResult_MU__c, fj_GuaranteeChkResult_Orico__c, " +
    "fj_GuaranteeChkResult_SIS__c, fj_Interest_Rate_GuaranteeChk__c, fj_LastGuaranteeChk__c, fj_Loan_Amount_GuaranteeChk__c, " +
    "fj_RefGuaranteeChk__c, fj_Term_GuaranteeChk__c FROM genesis__Applications__c WHERE name=",
  query_0011_41:
    "SELECT fj_AgreementProcess2Flg__c, fj_Interest_Rate_Changed__c, fj_LastGuaranteeCondition__c, " +
    "fj_Loan_Amount_Changed__c, fj_RefAgreementProcess2__c, fj_Term_Changed__c FROM genesis__Applications__c WHERE name=",
  query_0012_24_1:
    "SELECT Id, CronJobDetail.Name FROM CronTrigger WHERE CronJobDetail.Name =",
  query_0012_24_2:
    "SELECT Id, ApexClass.Name, Status, ExtendedStatus, NumberOfErrors, CreatedDate, " +
    "JobType, CronTriggerId FROM AsyncApexJob WHERE Crontriggerid =",

  /**|================================================================================|
   * | IDENTIFIERS/LOGICAL VALUES                                                     |
   * |================================================================================|
   */
  // ★ 新環境適用' New Env Implementation
  // LOGICAL VALUES
  isTrue: true,
  isFalse: false,
  isUndefined: undefined,

  // Screenshot
  // ★ 新環境適用' New Env Implementation
  spec62: "62-1-(01)",
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
  agr_id: "",
  agr_name: "",
  app_id: "",
  app_name: "", // カードローン（保証会社あり）
  asc_id: "",
  asc_name: "",
  account_id: "",
  account_name: "",
  ba_id: "",
  ba_name: "",
  ba_id_arr: [],
  ba_name_arr: [],
  cnt_id: "",
  cnt_name: "",
  cre_id: "",
  cre_name: "",
  contact_id: "",
  cron_id: "",
  cron_name: "自動実行バッチテスト", // DO NOT EDIT - value is automatically updated
  ddp_id: "",
  ddp_name: "",
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
  ini_id: "",
  ini_name: "",
  listview1_id: "",
  listview2_id: "",
  listview3_id: "",
  listview4_id: "",
  mnt_id: "",
  mnt_name: "",
  mnt_id2: "",
  mnt_name2: "",
  mu_id: "",
  mu_name: "",
  pro_id: "",
  pro_name: "",
  rdc_id: "",
  rdc_name: "",
  stt_id: "",
  stt_name: "",
  trr_id: "",
  trr_name: "",
  ver_id: "",
  ver_name: "",
  ver_id2: "",
  ver_name2: "",
  wnt_id: "",
  wnt_name: "",
};
