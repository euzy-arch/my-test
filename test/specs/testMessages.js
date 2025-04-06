import config from '../pageobjects/config';

const messagesTest = async () => {
    await browser.newWindow(config.med2des.url); // Открывает новое окно
    
    await browser.url(config.med2des.url);
    await $(config.med2des.usernameField).setValue('BARSCM4[SSOFT999]');
    await $(config.med2des.passwordField).setValue('testcm4');
    await $(config.med2des.loginButton).click();
    // Добавьте выбор и проверку сообщений
    await browser.deleteSession();
};

export default messagesTest;
