pipeline {
    agent any // Или используйте label, если у вас есть конкретный узел

    stages {
        stage('Build') {
            steps {
                script {
                    // Сборка Docker-образа
                    sh '/usr/local/bin/docker build -t webdriverio-test .' // Убедитесь, что вы находитесь в правильной директории
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Запуск тестов в Docker-контейнере
                    docker.image('webdriverio-test').inside {
                        // Убедитесь, что зависимости установлены
                        sh 'npm install' // Установите зависимости, если это необходимо
                        // Запуск тестов
                        sh 'npm test' // Замените на вашу команду для запуска тестов
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'Тесты завершены.'
        }
        success {
            echo 'Все тесты прошли успешно!'
        }
        failure {
            echo 'Некоторые тесты не прошли.'
        }
    }
}
