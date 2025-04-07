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
                    // Инициализируем nvm
                    sh '''
                        echo "Checking NVM_DIR..."
                        export NVM_DIR="$HOME/.nvm"
                        echo "NVM_DIR: $NVM_DIR"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        echo "Node version:"
                        node -v  # Вывод версии Node.js
                        echo "NPM version:"
                        npm -v   # Вывод версии npm
                    '''
                    // Добавьте здесь команды для сборки вашей машины
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh '''
                        echo "Checking NVM_DIR..."
                        export NVM_DIR="$HOME/.nvm"
                        echo "NVM_DIR: $NVM_DIR"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        echo "Installing npm packages..."
                        npm install
                    '''
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
                    sh '''
                        echo "Checking NVM_DIR..."
                        export NVM_DIR="$HOME/.nvm"
                        echo "NVM_DIR: $NVM_DIR"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        echo "Running tests..."
                        npx wdio run ./wdio.conf.js
                    '''
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
