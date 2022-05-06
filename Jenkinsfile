pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-cred-anupk')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t anup10/nodeapp:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push anup10/nodeapp:latest'
			}
		}

        stage('Deploy'){
            steps{
                sh 'docker run -d anup10/nodeapp:latest'
            }
        }
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}