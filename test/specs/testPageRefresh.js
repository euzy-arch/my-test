import config from '../pageobjects/config';

const pageRefreshTest = async () => {
    await browser.newWindow(config.med2des.url); // Открывает новое окно

    await browser.url(config.med2des.url);
    await $(config.med2des.usernameField).setValue('BARSCM4[SSOFT999]');
    await $(config.med2des.passwordField).setValue('testcm4');
    await $(config.med2des.loginButton).click();
    
    // Обновление страницы
    await browser.refresh();
    
    // Проверка, что пользователь все еще авторизован
    const userName = await $(config.med2des.userNameDisplay).getText();
    expect(userName).toBe('BARSCM4[SSOFT999]');
    
    await browser.deleteSession();
};

export default pageRefreshTest;
