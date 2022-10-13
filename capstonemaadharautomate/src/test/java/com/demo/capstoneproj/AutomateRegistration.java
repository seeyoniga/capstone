package com.demo.capstoneproj;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class AutomateRegistration {
	String path= "/Users/seeyo/Downloads/chromedriver";
	public WebDriver driver;
  @Test
  public void f() {
	    WebDriverWait wait = new WebDriverWait(driver, 10);
		driver.get("http://localhost:4200/signup");
		//name
		WebElement name= wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("name")));
		name.sendKeys("Leahnega");
		//date of birth
		WebElement dob= driver.findElement(By.name("dob"));
		dob.sendKeys("17-09-2011");	
		//address
		WebElement address= driver.findElement(By.name("address"));
		address.sendKeys("158 A 9th Link , Taramani");
		//emailid
		WebElement emailid= driver.findElement(By.name("emailid"));
		emailid.sendKeys("Leahnega@gmail.com");
		//mobileno
		WebElement mobilenumber= driver.findElement(By.name("mobileno"));
		mobilenumber.sendKeys("9940616400");
		//gender
		WebElement gender = driver.findElement(By.name("gender"));
		gender.sendKeys("Female");
		//button
		WebElement register= wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("body > app-root > app-signup > div > form > button")));
		register.click();
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
