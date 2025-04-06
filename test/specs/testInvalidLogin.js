import config from '../pageobjects/config';

const invalidLoginTest = async () => {
    await browser.newWindow(config.med2des.url); // Открывает новое окно

    await browser.url(config.med2des.url);
    await $(config.med2des.usernameField).setValue('invalidUser ');
    await $(config.med2des.passwordField).setValue('wrongPassword');
    await $(config.med2des.loginButton).click();
    
    // Проверка сообщения об ошибке
    

    await browser.pause(2000);
    
};

export default invalidLoginTest;
