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
                sh 'docker rm --force nodeapp'
                sh 'docker rmi anup10/nodeapp:latest'
                sh 'docker run -d -p 3000:3000 anup10/nodeapp:latest'
            }
        }
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}