import config from '../pageobjects/config';

const multiSessionTest = async () => {
    // Первая сессия
    await browser.url(config.med2des.url);
    await $(config.med2des.usernameField).setValue('user1');
    await $(config.med2des.passwordField).setValue('password1');
    await $(config.med2des.loginButton).click();
    
    // Проверка успешного входа для первого пользователя
    const welcomeMessage1 = await $(config.med2des.welcomeMessage).getText();
    expect(welcomeMessage1).toContain('Добро пожаловать, user1');

    // Вторая сессия
    await browser.newWindow(config.med2des.url);
    await $(config.med2des.usernameField).setValue('user2');
    await $(config.med2des.passwordField).setValue('password2');
    await $(config.med2des.loginButton).click();
    
    // Проверка успешного входа для второго пользователя
    const welcomeMessage2 = await $(config.med2des.welcomeMessage).getText();
    expect(welcomeMessage2).toContain('Добро пожаловать, user2');

    // Закрытие обеих сессий
    await browser.closeWindow();
    await browser.switchToWindow(await browser.getWindowHandles()[0]);
    await browser.closeWindow();
};

export default multiSessionTest;

