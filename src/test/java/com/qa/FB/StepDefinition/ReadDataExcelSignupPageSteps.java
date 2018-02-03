package com.qa.FB.StepDefinition;

import com.qa.FB.Util.TestBase;
import com.qa.FB.pages.ReadDataExcelSinupPage;
import com.qa.FB.pages.LoginPage;
import com.qa.FB.pages.SignupPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ReadDataExcelSignupPageSteps extends TestBase {
	ReadDataExcelSinupPage invalidSignupPage;
	
	@Given("^user is  on Main Page$")
	public void user_is_on_Main_Page() throws Throwable {
		//TestBase.initialization();
	   
	}

	@Then("^user enters Signup Credentials with excel row \"([^\"]*)\" dataset$")
	public void user_enters_Signup_Credentials_with_excel_row_dataset(String arg1) throws Throwable {
		invalidSignupPage = new ReadDataExcelSinupPage();
	    invalidSignupPage.InvalidSignupPageFields(arg1);
	}



}
