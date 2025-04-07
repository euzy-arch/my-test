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
