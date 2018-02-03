package com.qa.FB.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.FB.Util.TestBase;

public class LoginPage extends TestBase{
	
	//Page Factory - OR:
		@FindBy(xpath="//*[@id='email']")
		WebElement email;
		
		@FindBy(xpath="//*[@id='pass']")
		WebElement Password;
		
		@FindBy(xpath="//*[@id='loginbutton']")
		WebElement loginBtn;
		
		@FindBy(xpath="//button[contains(text(),'Sign Up')]")
		WebElement signUpBtn;
		
		@FindBy(xpath="//*[@id='navItem_100002487912489']/a/div")
		WebElement FaceBookOriginalName;
		
		@FindBy(xpath="//div[contains(@id, 'userNavigationLabel')]")
		WebElement TriangleBtn;
		
		@FindBy(xpath = "//a[contains(@data-gt,'menu_logout')]")
		WebElement LogOut;
		
		@FindBy(xpath = "//*[@id=\"blueBarDOMInspector\"]/div/div/div/div[1]/h1/a/i")
		WebElement ApplicationName;
		
		//Initializing the Page Objects:
		public LoginPage(){
			PageFactory.initElements(driver, this);
		}
		
		//Actions:
		public String validateLoginPageTitle(){
			return driver.getTitle();
		}
		
		public void validateFaceBookOriginalName(){
			String FacebookText = FaceBookOriginalName.getText();
			  Assert.assertEquals("Sudha Chitti", FacebookText);
			  
		}
		
		public HomePage login(String UserName, String Pwd){
			email.sendKeys(UserName);
			Password.sendKeys(Pwd);
			//loginBtn.click();
			    	JavascriptExecutor js = (JavascriptExecutor)driver;
			    	js.executeScript("arguments[0].click();", loginBtn);
			    	
			    	return  new HomePage();
		}
		
		public boolean isEnabled() {
			JavascriptExecutor js = (JavascriptExecutor)driver;
			 js.executeScript("arguments[0].click();",TriangleBtn);
			return TriangleBtn.isDisplayed();
	
		}
		
		public void ClickTraingleBtn() {
			/*JavascriptExecutor js = (JavascriptExecutor)driver;
			 js.executeScript("arguments[0].click();", TriangleBtn);
			 WebDriverWait wait = new WebDriverWait(driver, 10);
			WebElement el = wait.until(ExpectedConditions.elementToBeClickable(TriangleBtn));
			el.click();*/
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				TriangleBtn.click();
			}
			
		}
		
		public void ClickLogout() {
			/*WebDriverWait wait = new WebDriverWait(driver,40);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[@class='_54ni navSubmenu 6398 64kz __MenuItem']")));
			 LogOut.click();*/
			
			//Wait for button appear
		    WebDriverWait wait = new WebDriverWait(driver,30);
		    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(@data-gt,'menu_logout')]")));
		    //Click it by JS
		    JavascriptExecutor js = ((JavascriptExecutor)driver);
		    WebElement logout = driver.findElement(By.xpath("//a[contains(@data-gt,'menu_logout')]"));
		    js.executeScript("arguments[0].click();", logout);
			
		}
		
		public LoginPage VerifyApplicationName() {
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			WebDriverWait wait = new WebDriverWait(driver,50);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"blueBarDOMInspector\"]/div/div/div/div[1]/h1/a/i")));
			String Text = ApplicationName.getText();
			Assert.assertEquals("Facebook", Text);
			return new LoginPage();
		}

		//public void closeBrowser() {
			//driver.close();
			
	//	}
         
		}


