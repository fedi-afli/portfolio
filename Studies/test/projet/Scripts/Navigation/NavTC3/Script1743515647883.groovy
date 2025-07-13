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

WebUI.maximizeWindow()

// Faire défiler la page vers le bas
WebUI.scrollToPosition(0, 1000 // Descend de 1000 pixels
    )

WebUI.delay(2 // Attendre que le bouton apparaisse
    )

boolean isVisible = WebUI.verifyElementVisible(findTestObject('Object Repository/Page_A place to practice your automation skills/a_Back to top'))

if (isVisible) {
    // Cliquer sur le bouton
    WebUI.click(findTestObject('Object Repository/Page_A place to practice your automation skills/a_Back to top'))

    // Attendre le défilement vers le haut
    WebUI.delay(2)

    // Vérifier si la page est revenue en haut
    boolean isAtTop = WebUI.verifyElementPresent(findTestObject('Object Repository/Page_A place to practice your automation skills/i_Checkout_fa fa-search'), 
        5)

    if (isAtTop) {
        WebUI.comment('✅ Test réussi : Le bouton "Retour en haut" fonctionne correctement.')
    } else {
        WebUI.comment('❌ BUG détecté : La page ne remonte pas après avoir cliqué sur le bouton.')
    }
} else {
    WebUI.comment('⚠️ Le bouton "Retour en haut" n’est pas visible après le défilement.')
}

// Fermer le navigateur
WebUI.closeBrowser()

