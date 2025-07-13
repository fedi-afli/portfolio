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

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Benefit', false)

WebUI.click(findTestObject('Object Repository/Page_Benefit/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Pantene', false)

WebUI.click(findTestObject('Object Repository/Page_Pantene/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('M·A·C', false)

WebUI.click(findTestObject('Object Repository/Page_MAC/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2_3'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Lancôme', false)

WebUI.click(findTestObject('Object Repository/Page_Lancme/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2_3_4'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Gucci', false)

WebUI.click(findTestObject('Object Repository/Page_Gucci/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2_3_4_5'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Giorgio Armani', false)

WebUI.click(findTestObject('Object Repository/Page_Giorgio Armani/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2_3_4_5_6'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Dove', false)

WebUI.click(findTestObject('Object Repository/Page_Dove/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2_3_4_5_6_7'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Calvin Klein', false)

WebUI.click(findTestObject('Object Repository/Page_Calvin Klein/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2_3_4_5_6_7_8'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Bvlgari', false)

WebUI.click(findTestObject('Object Repository/Page_Bvlgari/a_Home'))

WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/img_Brands Scrolling List_internal_1_2_3_4_5_6_7_8_9'))

WebUI.delay(0.5)

WebUI.verifyTextPresent('Sephora', false)

WebUI.click(findTestObject('Object Repository/Page_Sephora/a_Home'))

WebUI.closeBrowser()

