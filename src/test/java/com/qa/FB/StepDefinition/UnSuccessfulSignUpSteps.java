package com.qa.FB.StepDefinition;

import com.qa.FB.Util.TestBase;
import com.qa.FB.pages.LoginPage;
import com.qa.FB.pages.SignupPage;
import com.qa.FB.pages.UnSuccessfulSignUpPage;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UnSuccessfulSignUpSteps extends TestBase {
	UnSuccessfulSignUpPage  unSuccessfulSignUpPage;
	
	@Before
	public void SetUp() {
		TestBase.initialization();
		}
	
	@After
	public void teardown() {
		driver.close();
	}
	
	@When("^user enters inputs without FirstName$")
	public void user_enters_inputs_without_FirstName(DataTable table) {
		unSuccessfulSignUpPage = new UnSuccessfulSignUpPage();
		unSuccessfulSignUpPage.SignupFields(table);
		
	}		
	@Then("^verify the FirstName ErrorMessage$")
	public void verify_the_FirstName_ErrorMessage() {
		unSuccessfulSignUpPage.VerifyBlankFNameErrorMsg();
	}

	@When("^user enters inputs without BlankEmailId$")
	public void user_enters_inputs_without_BlankEmailId(DataTable table) {
		unSuccessfulSignUpPage = new UnSuccessfulSignUpPage();
		unSuccessfulSignUpPage.SignupFields(table);
	}		

	@Then("^verify the BlankEmailId ErrorMessage$")
	public void verify_the_BlankEmailId_ErrorMessage() {
		
		unSuccessfulSignUpPage.VerifyBlankEmailIdErrorMsg();
	}



}
