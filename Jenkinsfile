pipeline {
    agent {
        docker {
            image 'webdriverio-test' // Используйте имя вашего Docker-образа
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Доступ к Docker-сокету
        }
    }
    stages {
        stage('Build') {
            steps {
                script {
                    // Сборка Docker-образа
                    sh 'docker build -t webdriverio-test .' // Убедитесь, что вы находитесь в правильной директории
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Запуск тестов
                    sh 'docker run --rm webdriverio-test' // Запуск тестов в контейнере
                }
            }
        }
    }
    post {
        always {
            // Шаги, которые выполняются всегда после завершения pipeline
            echo 'Тесты завершены.'
        }
    }
}
