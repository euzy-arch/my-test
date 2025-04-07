pipeline {
    agent any

    stages {
        stage('Build Machine') {
            steps {
                script {
                    echo 'Building the machine...'
                    // Здесь добавьте команды для сборки вашей машины
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Запуск тестов
                    sh 'npx wdio run ./wdio.conf.js'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Tests ran successfully!'
        }
        failure {
            echo 'Tests failed. Please check the logs.'
        }
    }
}
