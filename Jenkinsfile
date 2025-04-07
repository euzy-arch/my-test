pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'npx wdio run ./wdio.conf.js'
                }
            }
        }
    }

    post {
        always {
            // Действия, которые выполняются всегда после завершения сборки
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
