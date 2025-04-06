import config from '../pageobjects/config';

const authorizedUser  = async () => {
    // Открытие новой вкладки или нового окна
    await browser.newWindow(config.med2des.url); // Открывает новое окно

    await $(config.med2des.usernameField).waitForDisplayed({ timeout: 5000 });
    await $(config.med2des.usernameField).setValue('BARSCM4[SSOFT999]');
    await $(config.med2des.passwordField).waitForDisplayed({ timeout: 5000 });
    await $(config.med2des.passwordField).setValue('testcm4');
    await $(config.med2des.loginButton).waitForDisplayed({ timeout: 5000 });
    await $(config.med2des.loginButton).click();
    
    // Добавьте небольшую паузу перед нажатием на кнопку "Выбор"
    await browser.pause(2000); // Подождите 2 секунды для загрузки страницы

    // Нажатие на кнопку "Выбор" с использованием XPath
    const selectButton = await browser.$('//div[contains(@class, "ctrl_button") and .//div[text()="Выбор"]]');
    await selectButton.waitForDisplayed({ timeout: 7000 }); // Убедитесь, что кнопка отображается

    // Логирование для отладки
    console.log("Проверка доступности кнопки 'Выбор'");
    console.log("Отображается:", await selectButton.isDisplayed());
    console.log("Включена:", await selectButton.isEnabled());

    // Попробуйте нажать на кнопку
    if (await selectButton.isDisplayed() && await selectButton.isEnabled()) {
        await selectButton.click(); // Нажмите на кнопку
    } else {
        console.log("Кнопка 'Выбор' не доступна для нажатия.");
    }

    // Добавьте дополнительные проверки или действия, если необходимо
    await browser.pause(4000); // Подождите для выполнения проверок

    // Закрытие сессии браузера после теста
    // await browser.deleteSession();

    const logoutButton = await browser.$('a.header_ex_a'); // Используем селектор по классу
    await logoutButton.waitForDisplayed({ timeout: 5000 }); // Убедитесь, что кнопка отображается

    // Логирование для отладки
    console.log("Проверка доступности кнопки 'Выход'");
    console.log("Отображается:", await logoutButton.isDisplayed());
    console.log("Включена:", await logoutButton.isEnabled());

    // Попробуйте нажать на кнопку "Выход"
    if (await logoutButton.isDisplayed() && await logoutButton.isEnabled()) {
        await logoutButton.click(); // Нажмите на кнопку "Выход"
    } else {
        console.log("Кнопка 'Выход' не доступна для нажатия.");
    }
};

export default authorizedUser ;
