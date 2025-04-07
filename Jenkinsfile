pipeline {
    agent any

    stages {
        stage('Build Machine') {
            steps {
                script {
                    // Здесь вы можете добавить команды для сборки вашей машины
                    echo 'Building the machine...'
                    // Например, если вы используете Docker:
                    // sh 'docker build -t my-image .'
                }
            }
        }
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
