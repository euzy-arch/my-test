FROM node:18

# Установка зависимостей
WORKDIR /app
COPY package.json ./
RUN npm install

# Копирование тестов и конфигурации
COPY . .

# Запуск тестов
CMD ["npx", "wdio", "run", "./wdio.conf.js"]