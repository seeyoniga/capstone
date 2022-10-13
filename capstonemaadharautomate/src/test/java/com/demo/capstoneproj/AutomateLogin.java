package com.demo.capstoneproj;

import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AutomateLogin {
	
	String path= "/Users/seeyo/Downloads/chromedriver";
	public WebDriver driver;
  @Test
  public void f() {

		driver.get("http://localhost:4200/login");
		//login ID
		WebElement id= driver.findElement(By.cssSelector("body > app-root > app-login > div > div > div > div > form > div:nth-child(1) > input"));
		id.sendKeys("2");
		//password
		WebElement mobileno= driver.findElement(By.cssSelector("body > app-root > app-login > div > div > div > div > form > div:nth-child(2) > input"));
		mobileno.sendKeys("Admin@123");	
		//button
		WebElement login= driver.findElement(By.cssSelector("body > app-root > app-login > div > div > div > div > form > div:nth-child(4) > button"));
		login.click();
  }
  @BeforeTest
  public void beforeTest() {
	  
		System.setProperty("webdriver.chrome.driver", "/Users/seeyo/Downloads/chromedriver");
		driver= new ChromeDriver();
  
  }
  @BeforeClass
	public void beforeClass() {
		System.out.println("Before Class");
	}
  @BeforeSuite
	public void beforeSuite() {
		System.out.println("Before Suite");
	}
	
  @BeforeMethod
	public void beforeMethod() {
		System.out.println("Before Method");
	}
	
  @AfterTest
	  public void afterTest() {
		 System.out.println("After test is running");
	  }
  @AfterMethod
		public void afterMethod() {
			System.out.println("After Method");
		}
		
  @AfterClass
		public void afterClass() {
			System.out.println("After Class ");
		}
		
  @AfterSuite
		public void afterSuite() {
			System.out.println("After Suite");
		}
}

	