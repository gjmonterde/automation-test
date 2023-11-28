// ★ 新環境適用' New Env Implementation
export const environmentLinks = {
  salesforce_sandbox: "https://clstdstch--clstdstch.sandbox.my.salesforce.com",
  mypage_link: "https://clstdstch--clstdstch.sandbox.my.site.com",
  app_form_link: "https://clstdstch--clstdstch.sandbox.my.salesforce-sites.com",
  sandbox_env: "clstdstch", // STCH - clstdstch, DHL - clstddhl
};

export const userInformation = {
  // urls to access
  var_sf_sfurl: environmentLinks.salesforce_sandbox + "/lightning/", // ★ 新環境適用' New Env Implementation
  var_sf_siteurl: environmentLinks.mypage_link,
  var_outlook_url: "https://outlook.live.com/owa/?nlp=1",
  var_outlook_url_logout: "https://outlook.live.com/owa/logoff.owa",
  var_sf_loginurl: "https://test.salesforce.com",

  // ★ 新環境適用' New Env Implementation
  var_sf_dev_console:
    environmentLinks.salesforce_sandbox + "/_ui/common/apex/debug/ApexCSIPage",
  var_sf_userpage:
    environmentLinks.salesforce_sandbox + "/lightning/setup/ManageUsers/home",
  var_sf_recent_list_view:
    environmentLinks.salesforce_sandbox +
    "/lightning/o/genesis__Applications__c/list?filterName=Recent",
  var_sf_mypage_loginurl: environmentLinks.mypage_link + "/s/login/",
  var_sf_mypage_hl_loginurl: environmentLinks.mypage_link + "/hs/s/login/",
  var_sf_mypage_forgot_password:
    environmentLinks.mypage_link + "/s/login/ForgotPassword",
  var_sf_mypage_forgot_password_outlook_url:
    environmentLinks.mypage_link + "/login?c",
  exec_result_data_error_list_url:
    environmentLinks.salesforce_sandbox +
    "/lightning/r/Report/00O0T000000VUSQUA4/view?queryScope=userFolders",
  scheduled_jobs_url:
    environmentLinks.salesforce_sandbox +
    "/lightning/setup/ScheduledJobs/page?address=%2F08e%3FappLayout%3Dsetup%26ltn_app_id%3D06m0T0000000iyYQAQ%26rowsperpage%3D35%26sfdcIFrameHost%3Dweb%26clc%3D1%26sfdcIFrameOrigin%3Dhttps%253A%252F%252Fclstdfes--clstdfes.sandbox.lightning.force.com%26nonce%3D15fd6fdda14f5e823332ead4b6349e052659e210103b59984e63b1dad81ab360%26tour%3D%26retURL%3D%252Fsetup%252Fhome",
  async_apex_jobs_url:
    environmentLinks.salesforce_sandbox + "/lightning/setup/AsyncApexJobs/home",
  var_sf_logouturl: environmentLinks.salesforce_sandbox + "/secur/logout.jsp",

  // Salesforce user credentials
  var_sf_loginuser_user_in_charge:
    "tantou1@cloudlendinginc.com." + environmentLinks.sandbox_env,
  var_sf_loginuser_user_in_charge_hl:
    "tantou1hl@cloudlendinginc.com." + environmentLinks.sandbox_env,
  var_sf_loginpwd_user_in_charge: "WelcomeFujitsu3",
  var_sf_loginuser_admin:
    "gdc@cloudlendinginc.com." + environmentLinks.sandbox_env,
  var_sf_loginpwd_admin: "WelcomeFujitsu3",
  var_sf_loginuser_auditor:
    "shinsa1@cloudlendinginc.com." + environmentLinks.sandbox_env,
  var_sf_loginuser_auditor_hl:
    "shinsa1hl@cloudlendinginc.com." + environmentLinks.sandbox_env,
  var_sf_loginpwd_auditor: "WelcomeFujitsu3",

  // Salesforce community old user credentials
  var_sf_comminuty_loginuser: "phgdc_newcl1@outlook.com",
  var_sf_comminuty_loginpwd: "gdcFujitsu123",

  // Salesforce community new user credentials
  var_sf_comminuty_loginuser2: "phgdc_newcl1@outlook.com",
  var_sf_comminuty_loginpwd2: "gdcFujitsu123",

  // Salesforce community forgot password test new user credentials-0015
  var_sf_comminuty_loginuser3: "phgdc_newcl1@outlook.com",
  var_sf_comminuty_loginpwd3: "gdcFujitsu123",

  // Outlook mail old test user credentials
  var_email_testEmailAddress: "phgdc_newcl1@outlook.com",
  var_email_testEmailPwd: "gdcFujitsu123",

  // Outlook mail new test user credentials
  var_email_testEmailAddress2: "phgdc_newcl1@outlook.com",
  var_email_testEmailPwd2: "gdcFujitsu123",

  // Outlook forgot password test new user credentials-0015
  var_email_testEmailAddress3: "phgdc_newcl1@outlook.com",
  var_email_testEmailPwd3: "gdcFujitsu123",

  // Salesforce community vendor user credentials
  var_sf_comminuty_vendor_loginuser: "phgdc_vndr_clstddhl2@outlook.com",
  var_sf_comminuty_vendor_loginpwd: "gdcFujitsu123",

  // Outlook mail vendor test user credentials
  var_email_vendor_testEmailAddress: "phgdc_vndr_clstddhl2@outlook.com",
  var_email_vendor_testEmailPwd: "gdcFujitsu123",

  // Others
  csv_path: "./test-csv/",
  screenshot: "./fj_OutputScreenPict/fj_OutputScreenPict/",
  var_file_Path1: "./test-image/id_front.jpg",
  var_file_Path2: "./test-image/id_back.jpg",
};

export const object = {
  // Main obj
  account_obj: "Account",
  agr_obj: "FJ_AgreementProcess__c",
  amlsc_obj: "FJ_AMLSCheck__c",
  app_obj: "genesis__Applications__c",
  asc_obj: "FJ_AntiSocial__c",
  ba_obj: "clcommon__Bank_Account__c",
  bla_obj: "FJ_BasicLoanAccount__c",
  cabi_obj: "FJ_CAB_Intermediary__c",
  cabf_obj: "FJ_CAB_FCD__c",
  cdd_obj: "FJ_NameDedupe_Candidate__c",
  chi_obj: "FJ_CheckInfo__c",
  cif_obj: "FJ_CIF_Infomation__c",
  cla_obj: "FJ_CardLoanAccountInfo__c",
  cli_obj: "FJ_CustomerLedgerInquiry__c",
  cnt_obj: "FJ_Contracting__c",
  crc_obj: "FJ_CreditCard__c",
  cre_obj: "FJ_CreditApproval__c",
  contact_obj: "Contact",
  ddp_obj: "FJ_NameDeduplication__c",
  exm_obj: "FJ_Examination__c",
  exs_obj: "FJ_ExternalScoring__c",
  execrequest_obj: "FJ_ExecutionRequest__c",
  execresult_obj: "FJ_ExecutionResult__c",
  gua_obj: "FJ_GuaranteeChk__c",
  gud_obj: "FJ_GuaranteeChkDetail__c",
  ini_obj: "FJ_InitialChk__c",
  jia_obj: "FJ_JICC_InquiryResult_AM__c",
  jib_obj: "FJ_JICC_InquiryResult_Debt__c",
  jid_obj: "FJ_JICC_InquiryDetail__c",
  jim_obj: "FJ_JICC_InquiryResult_M__c",
  jio_obj: "FJ_JICC_InquiryDetail_Other__c",
  kic_obj: "FJ_KSC_InquiryResult_CIC__c",
  kid_obj: "FJ_KSC_InquiryDetail__c",
  kij_obj: "FJ_KSC_InquiryResult_JICC__c",
  kil_obj: "FJ_KSC_InquiryResult_Decl__c",
  kio_obj: "FJ_KSC_InquiryResult_Official__c",
  kit_obj: "FJ_KSC_InquiryResult_Tran__c",
  lcd_obj: "FJ_LoanCommonDetail__c",
  listview_obj: "ListView",
  mnt_obj: "FJ_MailNotification__c",
  mu_obj: "FJ_MuCooperationApp__c",
  pc_master_obj: "FJ_ProductCodeMaster__c",
  pro_obj: "clcommon__CL_Product__c",
  rdc_obj: "FJ_RequiredDocument__c",
  sec_obj: "FJ_SecondaryChk__c",
  sci_obj: "FJ_ScoringInfo__c",
  stt_obj: "FJ_Statement__c",
  trr_obj: "FJ_TotalRepaymentRate__c",
  ver_obj: "FJ_Verification__c",
  wnt_obj: "FJ_WebNotification__c",

  // Related list
  application_app_rel: "FJ_Application__r",
  application_da_rel: "FJ_DeduplicationAccount_Application__r",
  account_app_rel: "genesis__Applications_account__r",
  account_cif_rel: "FJ_CIF_Infomation_Account__r",
  app_ba_rel: "fj_BankAccount_Application__r",
  app_execrequest_rel: "FJ_ExecutionRequest__r",
  app_mnt_rel: "FJ_MailNotification_Application__r",
  app_wnt_rel: "FJ_WebNotification_Application__r",
  ini_aml_rel: "FJ_AMLSCheckDetail__r",
  ini_bla_rel: "FJ_BasicLoanAccount__r",
  ini_cabi_rel: "FJ_CAB_Intermediary__r",
  ini_cabf_rel: "FJ_CAB_FCD__r",
  ini_chi_rel: "FJ_CheckInfoDetail__r",
  ini_cla_rel: "FJ_CardLoanAccountInfo__r",
  ini_lcd_rel: "FJ_LoanCommonDetail__r",
  ini_sci_rel: "FJ_ScoringInfoDetail__r",
  pro_pcmaster_rel: "fj_RefCLProduct_W7o3__r",
  pro_cardloaninterest_rel: "fj_CardLoanInterestTable_CLProduct__r",
  rdc_ver_rel: "FJ_Verification__r",
};

export const HL_objects = {
  aga_obj: "FJHL_AgentApplication__c",
  agr_obj: "FJHL_AgreementProcess__c",
  app_obj: "FJHL_Applications__c",
  as_obj: "FJHL_ApplicantStatus__c",
  asc_obj: "FJHL_AntiSocial__c",
  ba_obj: "FJHL_Bank_Account__c",
  cnt_obj: "FJHL_Contracting__c",
  cre_obj: "FJHL_CreditApproval__c",
  exm_obj: "FJHL_Examination__c",
  exs_obj: "FJHL_ExternalScoring__c",
  gua_obj: "FJHL_GuaranteeChk__c",
  gud_obj: "FJHL_GuaranteeChkDetail__c",
  ini_obj: "FJHL_InitialChk__c",
  mnt_obj: "FJHL_MailNotification__c",
  pc_master_obj: "FJHL_ProductCodeMaster__c",
  prop_obj: "FJHL_Proposal__c",
  rdc_obj: "FJHL_RequiredDocument__c",
  stt_obj: "FJHL_Statement__c",
  trr_obj: "FJHL_TotalRepaymentRate__c",
  ver_obj: "FJHL_Verification__c",
  wnt_obj: "FJHL_WebNotification__c",

  // Related list
  app_ba_rel: "FJHL_BankAccount_Application__r",
  app_cnt_rel: "FJHL_Contracting_Application__r",
  app_cre_rel: "FJHL_CreditApproval_Application__r",
  app_exs_rel: "FJHL_ExternalScoring_Application__r",
  app_gua_rel: "FJHL_Guarantee_Application__r",
  app_mnt_rel: "FJHL_MailNotification_Application__r",
  app_trr_rel: "FJHL_TotalRepaymentRate_Application__r",
  app_wnt_rel: "FJHL_WebNotification_Application__r",
  cnt_ver_rel: "FJHL_Verification_Contracting__r",
  exm_app_rel: "FJHL_Examination_Application__r",
  ddp_exm_rel: "FJHL_NameDeduplication_Examination__r",
  ini_exm_rel: "FJHL_InitialChk_Examination__r",
  prop_app_rel: "fjHL_RefProposal_Application__r",
  ver_rdc_rel: "FJHL_Verification__r",
};
