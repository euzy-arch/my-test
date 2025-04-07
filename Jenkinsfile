pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing Yarn...'
                    // Убедитесь, что Yarn установлен, если нет, установите его
                    sh 'npm install --global yarn' // Устанавливаем Yarn, если он еще не установлен

                    echo 'Installing project dependencies...'
                    // Устанавливаем зависимости проекта
                    sh 'yarn install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
                    // Запускаем тесты
                    sh 'yarn test' // Замените на вашу команду для запуска тестов
                }
            }
        }

        stage('Build Machine') {
            steps {
                script {
                    echo 'Building the machine...'
                    // Здесь вы можете добавить команды для сборки вашей машины
                    // Например, если вы используете Docker:
                    // sh 'docker build -t my-image .'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Machine built successfully!'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
