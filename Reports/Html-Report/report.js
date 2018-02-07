$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8140627232,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given user is already on Login Page"
    }
  ],
  "line": 6,
  "name": "title of login page is Facebook - Log In or Sign Up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"email\" and \"Pwd\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on TriangleButton",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on LogOut Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is on the LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.title_of_login_page_is_Facebook_Log_In_or_Sign_Up()"
});
formatter.result({
  "duration": 267952280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 13
    },
    {
      "val": "Pwd",
      "offset": 25
    }
  ],
  "location": "LoginPageSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 527563166,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 1729501466,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_TriangleButton()"
});
formatter.result({
  "duration": 3651182165,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.click_on_LogOut_Button()"
});
formatter.result({
  "duration": 544474324,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_the_LoginPage()"
});
formatter.result({
  "duration": 3225652151,
  "status": "passed"
});
formatter.after({
  "duration": 244587395,
  "status": "passed"
});
formatter.uri("ReadDataExcelSignup.feature");
formatter.feature({
  "line": 1,
  "name": "Fill a simple form with excel data",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Data driven with excel and data sets",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is  on Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters Signup Credentials with excel row \"\u003crow_index\u003e\" dataset",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;",
  "rows": [
    {
      "cells": [
        "row_index"
      ],
      "line": 7,
      "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 8,
      "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 9,
      "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6052107095,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Data driven with excel and data sets",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is  on Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters Signup Credentials with excel row \"1\" dataset",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReadDataExcelSignupPageSteps.user_is_on_Main_Page()"
});
formatter.result({
  "duration": 422950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "ReadDataExcelSignupPageSteps.user_enters_Signup_Credentials_with_excel_row_dataset(String)"
});
formatter.result({
  "duration": 8994779198,
  "status": "passed"
});
formatter.after({
  "duration": 185322652,
  "status": "passed"
});
formatter.before({
  "duration": 6175883897,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Data driven with excel and data sets",
  "description": "",
  "id": "fill-a-simple-form-with-excel-data;data-driven-with-excel-and-data-sets;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is  on Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters Signup Credentials with excel row \"2\" dataset",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReadDataExcelSignupPageSteps.user_is_on_Main_Page()"
});
formatter.result({
  "duration": 369920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "ReadDataExcelSignupPageSteps.user_enters_Signup_Credentials_with_excel_row_dataset(String)"
});
formatter.result({
  "duration": 8428727583,
  "status": "passed"
});
formatter.after({
  "duration": 191399618,
  "status": "passed"
});
formatter.uri("Signup.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Signup",
  "description": "",
  "id": "facebook-signup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6059128749,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Facebook Create a new Account scenario",
  "description": "",
  "id": "facebook-signup;facebook-create-a-new-account-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given user is already on Login Page"
    }
  ],
  "line": 6,
  "name": "title of login page is Facebook - Log In or Sign Up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters Signup credentials",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "EmailId",
        "ReEmail",
        "Pwd"
      ],
      "line": 8
    },
    {
      "cells": [
        "def",
        "def",
        "def@gmail.com",
        "def@gmail.com",
        "test123"
      ],
      "line": 9
    },
    {
      "cells": [
        "abdc",
        "abdc",
        "abdc@gmail.com",
        "abdc@gmail.com",
        "test123"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then user select birthday from drop down"
    },
    {
      "line": 12,
      "value": "#Then user check one of the radoi button"
    },
    {
      "line": 13,
      "value": "#Then user clicks on create account button"
    }
  ],
  "line": 14,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.title_of_login_page_is_Facebook_Log_In_or_Sign_Up()"
});
formatter.result({
  "duration": 8799840,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.user_enters_Signup_credentials(DataTable)"
});
formatter.result({
  "duration": 14509129989,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.user_is_on_homepage()"
});
formatter.result({
  "duration": 70563,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.close_the_browser()"
});
formatter.result({
  "duration": 43193,
  "status": "passed"
});
formatter.after({
  "duration": 179852100,
  "status": "passed"
});
formatter.uri("UnSuccessfulSignup.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook UnSuccessfulSignup",
  "description": "",
  "id": "facebook-unsuccessfulsignup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6010145668,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create a new Account with blank FirstName",
  "description": "",
  "id": "facebook-unsuccessfulsignup;create-a-new-account-with-blank-firstname",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user enters inputs without FirstName",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "EmailId",
        "ReEmail",
        "Pwd"
      ],
      "line": 6
    },
    {
      "cells": [
        "",
        "Ten",
        "Ten@yahoo.com",
        "Ten@yahoo.com",
        "Test12345"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify the FirstName ErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.user_enters_inputs_without_FirstName(DataTable)"
});
formatter.result({
  "duration": 8233863539,
  "status": "passed"
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.verify_the_FirstName_ErrorMessage()"
});
formatter.result({
  "duration": 83156070,
  "status": "passed"
});
formatter.after({
  "duration": 150898630,
  "status": "passed"
});
formatter.before({
  "duration": 6402065484,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create Account with blank EmailId",
  "description": "",
  "id": "facebook-unsuccessfulsignup;create-account-with-blank-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user enters inputs without BlankEmailId",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "EmailId",
        "ReEmail",
        "Pwd"
      ],
      "line": 13
    },
    {
      "cells": [
        "Net",
        "Net",
        "Net@yahoo.com",
        "",
        "Test12345"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the BlankEmailId ErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.user_enters_inputs_without_BlankEmailId(DataTable)"
});
formatter.result({
  "duration": 7723900907,
  "status": "passed"
});
formatter.match({
  "location": "UnSuccessfulSignUpSteps.verify_the_BlankEmailId_ErrorMessage()"
});
formatter.result({
  "duration": 106894298,
  "status": "passed"
});
formatter.after({
  "duration": 150027071,
  "status": "passed"
});
});