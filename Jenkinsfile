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
                    // Вывод информации о Node.js и npm
                    sh 'node -v'
                    sh 'npm -v'
                    // Добавьте здесь команды для сборки вашей машины
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
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

