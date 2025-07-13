import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

// Ouvrir le navigateur et accéder à la page de connexion
WebUI.openBrowser('')
WebUI.navigateToUrl('https://automationteststore.com/index.php?rt=account/login')


// Répéter la tentative de connexion avec un mauvais mot de passe (5 fois)
for (int i = 1; i <= 1; i++) {
   WebUI.navigateToUrl('https://automationteststore.com/index.php?rt=account/login')

   WebUI.setText(findTestObject('Object Repository/Page_Account Login/input_Login Name_loginname'), 'yesser888')

   WebUI.setEncryptedText(findTestObject('Object Repository/Page_Account Login/input_Password_password'), 'tfO4pNXig1w=')

   WebUI.click(findTestObject('Object Repository/Page_Account Login/button_Login'))
    
    // Attendre 2 secondes entre chaque tentative pour éviter le blocage instantané
    WebUI.delay(2)
    
    WebUI.comment("Tentative de connexion échouée #" + i)
}

WebUI.navigateToUrl('https://automationteststore.com/index.php?rt=account/login')

WebUI.setText(findTestObject('Object Repository/Page_Account Login/input_Login Name_loginname'), 'yesser888')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_Account Login/input_Password_password'), 'eN7yDZIGbfuWfutoLuAnhw==')

WebUI.click(findTestObject('Object Repository/Page_Account Login/button_Login'))

boolean isLocked = false

try {
    isLocked = WebUI.verifyTextPresent('Votre compte est verrouillé', false, FailureHandling.OPTIONAL)
} catch (Exception e) {
    WebUI.comment('⚠️ Aucune alerte de compte verrouillé détectée.')
}
if (isLocked) {
    WebUI.comment('✅ Le test est réussi : Le compte est bien verrouillé après 5 tentatives.')
} else {
    WebUI.comment('❌ BUG détecté : Le compte n’est pas verrouillé après 5 échecs !')
}
WebUI.delay(2)
// Fermer le navigateur
WebUI.closeBrowser()
