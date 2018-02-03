package com.qa.FB.StepDefinition;



import com.qa.FB.Util.TestBase;
import com.qa.FB.pages.HomePage;
import com.qa.FB.pages.LoginPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginPageSteps extends TestBase {
	LoginPage loginPage ;
	//HomePage homepage;
	

	/*@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
		//TestBase.initialization();
	}*/

	@When("^title of login page is Facebook - Log In or Sign Up$")
	public void title_of_login_page_is_Facebook_Log_In_or_Sign_Up() throws Throwable {
		//TestBase.initialization();
		 loginPage =new LoginPage();
		String title = loginPage.validateLoginPageTitle();
		Assert.assertEquals("Facebook - Log In or Sign Up",title);
	 }
	   
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2) throws Throwable {
		 loginPage.login(prop.getProperty("UserName"),prop.getProperty("Pwd"));
	}

	
	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	 loginPage.validateFaceBookOriginalName();
	}
	
	
	
	

	@Then("^user click on TriangleButton$")
	public void user_click_on_TriangleButton() throws Throwable {
		loginPage.isEnabled();
	   loginPage.ClickTraingleBtn();
	}

	@Then("^click on LogOut Button$")
	public void click_on_LogOut_Button() throws Throwable {
		loginPage.ClickLogout();
	   
	}
	@Then("^user is on the LoginPage$")
	public void user_is_on_the_LoginPage() throws Throwable {
		loginPage.VerifyApplicationName();
	   
	}
	
	@Then("^close Brower$")
	public void close_Brower() throws Throwable {
    // driver.close();
	}
}
