package com.qa.FB.Util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.qa.FB.Util.TestUtil;

public class TestBase {
	
	public static WebDriver driver;
	public static Properties prop;
	
	
	public TestBase(){
		
	
	try {
			prop = new Properties();
		//FileInputStream ip = new FileInputStream("/Users/naveenkhunteta/Documents/workspace/FreeCRMTest/src/main/java/com/crm"
		FileInputStream ip = new FileInputStream(System.getProperty("user.dir")+ "/src/main/java/com/qa/FB/config/config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
              e.printStackTrace();
		}catch(IOException e) {
			e.printStackTrace();
			
         }
	}
	public static void initialization(){
		String browserName = prop.getProperty("Browser");
		
		if(browserName.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\Murali\\Desktop\\selenium\\FBBDDFramework\\src\\Browsers\\chromedriver.exe");	
			driver = new ChromeDriver(); 
		}
		else if(browserName.equals("FF")){
			System.setProperty("webdriver.gecko.driver","C:\\Users\\Murali\\Desktop\\selenium\\FBBDDFramework\\src\\Browsers\\geckodriver.exe");	
			driver = new FirefoxDriver();
		}
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
	driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
	
	driver.get(prop.getProperty("URL"));
}
}

