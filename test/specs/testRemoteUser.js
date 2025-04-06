import config from '../pageobjects/config';

const remoteUser  = async () => {
    await browser.newWindow(config.med2des.url); // Открывает новое окно

    await browser.url(config.med2des.url);
    await $(config.med2des.usernameField).setValue('remoteUser ');
    await $(config.med2des.passwordField).setValue('remotePassword');
    await $(config.med2des.loginButton).click();
    
    // Проверка успешного входа для удаленного пользователя
    

    await browser.pause(2000);
    
};

export default remoteUser ;
