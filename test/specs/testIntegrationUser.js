import config from '../pageobjects/config';

const integrationUser  = async () => {
    await browser.newWindow(config.med2des.url); // Открывает новое окно

    await browser.url(config.med2des.url);
    await $(config.med2des.usernameField).setValue('integ');
    await $(config.med2des.passwordField).setValue('123');
    await $(config.med2des.loginButton).click();
    
    // Проверка успешного входа для интеграционного пользователя
    

    await browser.pause(2000);
    
};

export default integrationUser ;
