package com.qa.FB.StepDefinition;

import com.qa.FB.Util.TestBase;
import com.qa.FB.pages.LoginPage;
import com.qa.FB.pages.SignupPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

public class SignupPageSteps extends TestBase{
	SignupPage signupPage;
	LoginPage loginPage;
	
	@Then("^user enters Signup credentials$")
	public void user_enters_Signup_credentials(DataTable table) throws Throwable {
	   	signupPage = new SignupPage();
	  signupPage.SignupFields(table);
	}

	/*@Then("^user select birthday from drop down$")
	public void user_select_birthday_from_drop_down() throws Throwable {
	   signupPage.DropDown();
	    
	}

	@Then("^user check one of the radoi button$")
	public void user_check_one_of_the_radoi_button() throws Throwable {
	   signupPage.SelectRadioBtn();
	}

	@Then("^user clicks on create account button$")
	public void user_clicks_on_create_account_button() throws Throwable {
	 signupPage.ClickCreateAccount();
	}*/

	@Then("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable {
	   
	}

	@Then("^Close the browser$")
	public void close_the_browser()  {
		//driver.close();
	   
	}


	
}
