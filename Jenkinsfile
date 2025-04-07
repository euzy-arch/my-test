pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    echo 'Cloning the repository...'
                    git url: 'https://github.com/euzy-arch/my-test.git', branch: 'master'
                }
            }
        }
        stage('Build Machine') {
            steps {
                script {
                    echo 'Building the machine...'
                    // Здесь вы можете добавить команды для сборки вашей машины
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
                    // Запускаем тесты WebdriverIO
                    // Убедитесь, что Node.js и все зависимости уже установлены в вашей среде
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
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}

