package com.qa.FB.TestRunner;


	
	import org.junit.runner.RunWith;

	import cucumber.api.CucumberOptions;
	import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(		
		    
			features = "C:\\Users\\Murali\\Desktop\\selenium\\FBBDDFramework\\src\\main\\java\\com\\qa\\FB\\Features\\UnSuccessfulSignup.feature", //the path of the feature files
			glue={"com/qa/FB/StepDefinition"}, //the path of the step definition files
		//	format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
					format = { "pretty:STDOUT", "html:C:\\Users\\Murali\\Desktop\\selenium\\FBBDDFramework\\Reports\\Html-Report",
			                "json:C:\\Users\\Murali\\Desktop\\selenium\\FBBDDFramework\\Reports\\Json-Report\\cucumber.json",
			                "junit:C:\\Users\\Murali\\Desktop\\selenium\\FBBDDFramework\\Reports\\Junit_xml_Report\\cucumber.xml",
			                "com.cucumber.listener.ExtentCucumberFormatter:C:\\Users\\Murali\\Desktop\\selenium\\FBBDDFramework\\Reports\\Cucumber_Extent_Report\\report.html" },
			monochrome = true, //display the console output in a proper readable format
			strict = true, //it will check if any step is not defined in step definition file
			dryRun =false//seleniumhq.org/exceptions/no_such_element.html //to check the mapping is proper between feature file and step def file
			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)

	public class UnSuccessfulSignUpTestRunner {

	}


