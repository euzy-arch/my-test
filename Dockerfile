# Используйте официальный Node.js образ
FROM node:18

# Установите рабочую директорию
WORKDIR /app

# Копируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Установите необходимые пакеты для Chrome и ChromeDriver
RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    libnss3 \
    libgconf-2-4 \
    libxi6 \
    libxss1 \
    libxrender1 \
    libfontconfig1 \
    && rm -rf /var/lib/apt/lists/*

# Установите Google Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg -i google-chrome-stable_current_amd64.deb; apt-get -y -f install

# Установите ChromeDriver
RUN CHROME_DRIVER_VERSION=114.0.5735.90 && \
    wget https://chromedriver.storage.googleapis.com/$CHROME_DRIVER_VERSION/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip && \
    mv chromedriver /usr/local/bin/ && \
    chmod +x /usr/local/bin/chromedriver && \
    rm chromedriver_linux64.zip

# Копируйте остальной код приложения
COPY . .

# Установите WebdriverIO и драйверы браузеров, если необходимо
RUN npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/sync

# Откройте порты для доступа к тестам
EXPOSE 4444 9515

# Запустите ChromeDriver и тесты
CMD ["sh", "-c", "chromedriver --port=9515 & npx wdio run wdio.conf.js"]
