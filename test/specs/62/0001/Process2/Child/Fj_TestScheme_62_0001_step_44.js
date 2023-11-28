var jsforce = require("jsforce");
var fs = require("fs");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0001-2");

export default async function suite() {
  it("Fj_TestScheme_62_0001_step_44: An 申込 application is made", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "44";

    // Create CSV file
    const rows = [
      [
        // Headers
        test_data.testData.csv_head_requesterkanji,
        test_data.testData.csv_head_requestermailaddress,
        test_data.testData.csv_head_systemacceptno,
        test_data.testData.csv_head_storeno,
        test_data.testData.csv_head_accountno,
        test_data.testData.csv_head_requestdate,
        test_data.testData.csv_head_requesterkana,
        test_data.testData.csv_head_sextype,
        test_data.testData.csv_head_birthday,
        test_data.testData.csv_head_postcode,
        test_data.testData.csv_head_homeaddress,
        test_data.testData.csv_head_homekanaaddress,
        test_data.testData.csv_head_homephoneno,
        test_data.testData.csv_head_mobilephoneno,
        test_data.testData.csv_head_familystructure,
        test_data.testData.csv_head_dependentcount,
        test_data.testData.csv_head_noofchildren, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_head_residentialtype,
        test_data.testData.csv_head_residentialcopayment,
        test_data.testData.csv_head_residentialyears,
        test_data.testData.csv_head_cardinsurancetype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_head_incometype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_head_companykana,
        test_data.testData.csv_head_companykanji,
        test_data.testData.csv_head_department,
        test_data.testData.csv_head_businesscode,
        test_data.testData.csv_head_employeecount,
        test_data.testData.csv_head_companypostcode,
        test_data.testData.csv_head_workaddress,
        test_data.testData.csv_head_workphone,
        test_data.testData.csv_head_workcode,
        test_data.testData.csv_head_workplacecapital, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_head_managerialposition,
        test_data.testData.csv_head_employmentformats,
        test_data.testData.csv_head_companykind,
        test_data.testData.csv_head_fyincome,
        test_data.testData.csv_head_workyears,
        test_data.testData.csv_head_insurancetype,
        test_data.testData.csv_head_residentialmonthlymoney,
        test_data.testData.csv_head_residentioalbonusmoney,
        test_data.testData.csv_head_maidenkana,
        test_data.testData.csv_head_maidenkanji,
        test_data.testData.csv_head_productcode,
        test_data.testData.csv_head_requesttype,
        test_data.testData.csv_head_requestprice,
        test_data.testData.csv_head_term,
        test_data.testData.csv_head_usepurpose,
        test_data.testData.csv_head_mediatype,
        test_data.testData.csv_head_applicationtype,
        test_data.testData.csv_head_preferredcontact, // ★ 新環境適用' New Env Implementation
      ],
      [
        // Record 1
        test_data.testData.csv_value1_requesterkanji,
        test_data.testData.csv_value1_requestermailaddress,
        test_data.testData.csv_value1_systemacceptno,
        test_data.testData.csv_value1_storeno,
        test_data.testData.csv_value1_accountno,
        test_data.testData.csv_value1_requestdate,
        test_data.testData.csv_value1_requesterkana,
        test_data.testData.csv_value1_sextype,
        test_data.testData.csv_value1_birthday,
        test_data.testData.csv_value1_postcode,
        test_data.testData.csv_value1_homeaddress,
        test_data.testData.csv_value1_homekanaaddress,
        test_data.testData.csv_value1_homephoneno,
        test_data.testData.csv_value1_mobilephoneno,
        test_data.testData.csv_value1_familystructure,
        test_data.testData.csv_value1_dependentcount,
        test_data.testData.csv_value1_noofchildren, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value1_residentialtype,
        test_data.testData.csv_value1_residentialcopayment,
        test_data.testData.csv_value1_residentialyears,
        test_data.testData.csv_value1_cardinsurancetype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value1_incometype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value1_companykana,
        test_data.testData.csv_value1_companykanji,
        test_data.testData.csv_value1_department,
        test_data.testData.csv_value1_businesscode,
        test_data.testData.csv_value1_employeecount,
        test_data.testData.csv_value1_companypostcode,
        test_data.testData.csv_value1_workaddress,
        test_data.testData.csv_value1_workphone,
        test_data.testData.csv_value1_workcode,
        test_data.testData.csv_value1_workplacecapital, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value1_managerialposition,
        test_data.testData.csv_value1_employmentformats,
        test_data.testData.csv_value1_companykind,
        test_data.testData.csv_value1_fyincome,
        test_data.testData.csv_value1_workyears,
        test_data.testData.csv_value1_insurancetype,
        test_data.testData.csv_value1_residentialmonthlymoney,
        test_data.testData.csv_value1_residentioalbonusmoney,
        test_data.testData.csv_value1_maidenkana,
        test_data.testData.csv_value1_maidenkanji,
        test_data.testData.csv_value1_productcode,
        test_data.testData.csv_value1_requesttype,
        test_data.testData.csv_value1_requestprice,
        test_data.testData.csv_value1_term,
        test_data.testData.csv_value1_usepurpose,
        test_data.testData.csv_value1_mediatype,
        test_data.testData.csv_value1_applicationtype,
        test_data.testData.csv_value1_preferredcontact, // ★ 新環境適用' New Env Implementation
      ],
      [
        // Record 2
        test_data.testData.csv_value2_requesterkanji,
        test_data.testData.csv_value2_requestermailaddress,
        test_data.testData.csv_value2_systemacceptno,
        test_data.testData.csv_value2_storeno,
        test_data.testData.csv_value2_accountno,
        test_data.testData.csv_value2_requestdate,
        test_data.testData.csv_value2_requesterkana,
        test_data.testData.csv_value2_sextype,
        test_data.testData.csv_value2_birthday,
        test_data.testData.csv_value2_postcode,
        test_data.testData.csv_value2_homeaddress,
        test_data.testData.csv_value2_homekanaaddress,
        test_data.testData.csv_value2_homephoneno,
        test_data.testData.csv_value2_mobilephoneno,
        test_data.testData.csv_value2_familystructure,
        test_data.testData.csv_value2_dependentcount,
        test_data.testData.csv_value2_noofchildren, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value2_residentialtype,
        test_data.testData.csv_value2_residentialcopayment,
        test_data.testData.csv_value2_residentialyears,
        test_data.testData.csv_value2_cardinsurancetype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value2_incometype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value2_companykana,
        test_data.testData.csv_value2_companykanji,
        test_data.testData.csv_value2_department,
        test_data.testData.csv_value2_businesscode,
        test_data.testData.csv_value2_employeecount,
        test_data.testData.csv_value2_companypostcode,
        test_data.testData.csv_value2_workaddress,
        test_data.testData.csv_value2_workphone,
        test_data.testData.csv_value2_workcode,
        test_data.testData.csv_value2_workplacecapital, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value2_managerialposition,
        test_data.testData.csv_value2_employmentformats,
        test_data.testData.csv_value2_companykind,
        test_data.testData.csv_value2_fyincome,
        test_data.testData.csv_value2_workyears,
        test_data.testData.csv_value2_insurancetype,
        test_data.testData.csv_value2_residentialmonthlymoney,
        test_data.testData.csv_value2_residentioalbonusmoney,
        test_data.testData.csv_value2_maidenkana,
        test_data.testData.csv_value2_maidenkanji,
        test_data.testData.csv_value2_productcode,
        test_data.testData.csv_value2_requesttype,
        test_data.testData.csv_value2_requestprice,
        test_data.testData.csv_value2_term,
        test_data.testData.csv_value2_usepurpose,
        test_data.testData.csv_value2_mediatype,
        test_data.testData.csv_value2_applicationtype,
        test_data.testData.csv_value2_preferredcontact, // ★ 新環境適用' New Env Implementation
      ],
      [
        // Record 3
        test_data.testData.csv_value3_requesterkanji,
        test_data.testData.csv_value3_requestermailaddress,
        test_data.testData.csv_value3_systemacceptno,
        test_data.testData.csv_value3_storeno,
        test_data.testData.csv_value3_accountno,
        test_data.testData.csv_value3_requestdate,
        test_data.testData.csv_value3_requesterkana,
        test_data.testData.csv_value3_sextype,
        test_data.testData.csv_value3_birthday,
        test_data.testData.csv_value3_postcode,
        test_data.testData.csv_value3_homeaddress,
        test_data.testData.csv_value3_homekanaaddress,
        test_data.testData.csv_value3_homephoneno,
        test_data.testData.csv_value3_mobilephoneno,
        test_data.testData.csv_value3_familystructure,
        test_data.testData.csv_value3_dependentcount,
        test_data.testData.csv_value3_noofchildren, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value3_residentialtype,
        test_data.testData.csv_value3_residentialcopayment,
        test_data.testData.csv_value3_residentialyears,
        test_data.testData.csv_value3_cardinsurancetype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value3_incometype, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value3_companykana,
        test_data.testData.csv_value3_companykanji,
        test_data.testData.csv_value3_department,
        test_data.testData.csv_value3_businesscode,
        test_data.testData.csv_value3_employeecount,
        test_data.testData.csv_value3_companypostcode,
        test_data.testData.csv_value3_workaddress,
        test_data.testData.csv_value3_workphone,
        test_data.testData.csv_value3_workcode,
        test_data.testData.csv_value3_workplacecapital, // ★ 新環境適用' New Env Implementation
        test_data.testData.csv_value3_managerialposition,
        test_data.testData.csv_value3_employmentformats,
        test_data.testData.csv_value3_companykind,
        test_data.testData.csv_value3_fyincome,
        test_data.testData.csv_value3_workyears,
        test_data.testData.csv_value3_insurancetype,
        test_data.testData.csv_value3_residentialmonthlymoney,
        test_data.testData.csv_value3_residentioalbonusmoney,
        test_data.testData.csv_value3_maidenkana,
        test_data.testData.csv_value3_maidenkanji,
        test_data.testData.csv_value3_productcode,
        test_data.testData.csv_value3_requesttype,
        test_data.testData.csv_value3_requestprice,
        test_data.testData.csv_value3_term,
        test_data.testData.csv_value3_usepurpose,
        test_data.testData.csv_value3_mediatype,
        test_data.testData.csv_value3_applicationtype,
        test_data.testData.csv_value3_preferredcontact, // ★ 新環境適用' New Env Implementation
      ],
    ];
    // Save CSV file
    let csvContent = rows.map((e) => e.join(",")).join("\n");
    fs.writeFile(
      user_info.userInformation.csv_path +
        test_data.testData.application_csv_filename,
      csvContent,
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    // Connect to salesforce
    var conn = new jsforce.Connection({
      loginUrl: user_info.userInformation.var_sf_loginurl,
    });
    await conn.login(
      user_info.userInformation.var_sf_loginuser_admin,
      user_info.userInformation.var_sf_loginpwd_admin,
      function (err, res) {
        if (err) {
          return console.log(err);
        }
      }
    );
    // Set Polling Time out
    conn.bulk.pollTimeout = 180000; // 3 min

    // Insert records
    var csvFileIn = fs.createReadStream(
      user_info.userInformation.csv_path +
        test_data.testData.application_csv_filename
    );
    await conn.bulk.load(
      "FJ_MuCooperationApp__c",
      "insert",
      csvFileIn,
      function (err, rets) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < rets.length; i++) {
          if (rets[i].success) {
            console.log(
              "##########" +
                (i + 1) +
                " loaded successfully, id = " +
                rets[i].id
            );
          } else {
            console.log(
              "##########" +
                (i + 1) +
                " error occurred, message = " +
                rets[i].errors.join(", ")
            );
          }
          expect(rets[i].success).toEqual(test_data.testData.isTrue);
        }
      }
    );

    // Login as tantou
    await parent.Login_as_tantou();

    // Get Listview
    await parent.Get_Listview();

    // ★ 新環境適用' New Env Implementation
    // Go to MU Cooperation List View
    await parent.Go_to_MUlist();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to Application list
    await parent.Go_to_AppList();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to Account List View
    await parent.Go_to_Accountlist();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // ★ 新環境適用' New Env Implementation
    // Go to Contact List View
    await parent.Go_to_Contactlist();

    // Screenshot - Contact list view
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
