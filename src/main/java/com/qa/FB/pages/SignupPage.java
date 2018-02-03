package com.qa.FB.pages;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.FB.Util.TestBase;

import cucumber.api.DataTable;

public class SignupPage extends TestBase{
	
	//Page Factory - OR:
		@FindBy(xpath = "//input[@name='firstname']")
		WebElement FirstName;
		
		@FindBy(xpath = "//input[@name='lastname']")
		WebElement LastName;
		
		@FindBy(xpath = "//input[@name='reg_email__']")
		WebElement Email;
		
		@FindBy(xpath = "//input[@name='reg_email_confirmation__']")
		WebElement ReEnterEmail;
		
		@FindBy(xpath = "//input[@name='reg_passwd__']")
		WebElement NewPassword;
		
		@FindBy(xpath = "//select[@id='month']")
		WebElement Month;
		
		@FindBy(xpath = "//select[@id='day']")
		WebElement Day;
		
		@FindBy(xpath = "//select[@id='year']")
		WebElement Year;
		
		@FindBy(xpath = "//input[contains(@name,'sex') and contains(@value,'1')]")
		WebElement Female;
		
		@FindBy(xpath = "//input[contains(@name,'sex') and contains(@value,'2')]")
		WebElement Male;
		
		@FindBy(xpath = "//button[@name='websubmit']")
		WebElement CreateAcct;

//Initializing the Page Objects:
		public SignupPage(){
			PageFactory.initElements(driver, this);
		}
		
		
			
			public void SignupFields(DataTable table){
				//Write the code to handle Data Table
				for (Map<String, String> data : table.asMaps(String.class, String.class)) {
					FirstName.clear();
					FirstName.sendKeys(data.get("FName"));
					LastName.clear();
					LastName.sendKeys(data.get("LName"));
					Email.clear();
					Email.sendKeys(data.get("EmailId"));
					ReEnterEmail.clear();
					ReEnterEmail.sendKeys(data.get("ReEmail"));
					NewPassword.clear();
					NewPassword.sendKeys(data.get("Pwd"));
					Select SMonth = new Select(Month);
					SMonth.selectByVisibleText("Feb");
					Select SDay = new Select(Day);
					SDay.selectByIndex(12);
					Select SYear = new Select(Year);
					SYear.selectByIndex(5);
					Female.click();
					WebDriverWait wait = new WebDriverWait(driver,40);
					wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@name='websubmit']")));					
							 CreateAcct.click();
							 try {
								Thread.sleep(5000);
							} catch (InterruptedException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
				}
			}
			
}
			