import config from '../pageobjects/config';

const blockedUser   = async () => {
    await browser.url(config.med2des.url);
    await $(config.med2des.usernameField).waitForDisplayed({ timeout: 5000 });
    await $(config.med2des.usernameField).setValue('blocked');
    await $(config.med2des.passwordField).waitForDisplayed({ timeout: 5000 });
    await $(config.med2des.passwordField).setValue('123');
    await $(config.med2des.loginButton).waitForDisplayed({ timeout: 5000 });
    await $(config.med2des.loginButton).click();
    
    await browser.pause(2000); // Подождите, чтобы сообщение об ошибке успело появиться
    
    // Здесь убираем закрытие сессии
    // await browser.deleteSession(); // Удалите или закомментируйте эту строку
};

export default blockedUser ;
