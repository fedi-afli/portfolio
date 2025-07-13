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

WebUI.navigateToUrl('https://automationteststore.com/')

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/input_Checkout_filter_keyword'))

WebUI.setText(findTestObject('Object Repository/Page_A place to practice your automation skills/input_Checkout_filter_keyword'), 
    'benefit')

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Page_Search/input_Search in product descriptions_description'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Page_Search/button_Search'))

WebUI.click(findTestObject('Object Repository/Page_Search/input_Search in product model_model'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Page_Search/button_Search'))

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Search/select_All CategoriesApparel  accessoriesMa_2d4a40'), 
    '0,43', true)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Page_Search/i_Search_fa fa-search'))

