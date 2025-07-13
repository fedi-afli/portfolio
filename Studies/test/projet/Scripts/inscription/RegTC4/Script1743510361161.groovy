import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://automationteststore.com/index.php?rt=account/create')

WebUI.setText(findTestObject('Object Repository/Page_Create Account/input_First Name_firstname'), 'yesser')

WebUI.setText(findTestObject('Object Repository/Page_Create Account/input_Last Name_lastname'), 'saidani')

WebUI.setText(findTestObject('Object Repository/Page_Create Account/input_E-Mail_email'), 'saidaniyeser550@gmail.com')

WebUI.setText(findTestObject('Object Repository/Page_Create Account/input_Address 1_address_1'), 'tunisia')

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Create Account/select_--- Please Select --- AfghanistanAlb_4cf296'), 
    '214', true)

WebUI.setText(findTestObject('Object Repository/Page_Create Account/input_City_city'), 'tunis')

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Create Account/select_--- Please Select --- ArianaBejaBen _15aa10'), 
    '3294', true)

WebUI.setText(findTestObject('Object Repository/Page_Create Account/input_ZIP Code_postcode'), '1478')

WebUI.setText(findTestObject('Object Repository/Page_Create Account/input_Login name_loginname'), 'y14')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_Create Account/input_Password_password'), 'f4sYFTf5F9sv0D4stEOgrA==')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_Create Account/input_Password Confirm_confirm'), 'f4sYFTf5F9sv0D4stEOgrA==')

WebUI.click(findTestObject('Object Repository/Page_Create Account/input_Privacy Policy_agree'))

WebUI.click(findTestObject('Object Repository/Page_Create Account/button_Continue'))

WebUI.delay(2)

WebUI.verifyTextPresent('Login name must be alphanumeric only and between 5 and 64 characters', false)

WebUI.closeBrowser()

