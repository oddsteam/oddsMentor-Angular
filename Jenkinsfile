pipeline{
    
    agent any

    environment{

        ORGANIZATION = "odds-booking"
        REGISTRY = "swr.ap-southeast-2.myhuaweicloud.com"
        TAG = "web-mentor:${BRANCH_NAME}"
        NGINXTAG = "nginx-web-mentor:${BRANCH_NAME}"
        WEB_BUILD_TAG = "${REGISTRY}/${ORGANIZATION}/${TAG}"
        NGINX_BUILD_TAG = "${REGISTRY}/${ORGANIZATION}/${NGINXTAG}"
    }

    stages{
        stage("install dependency") {
            steps{
                sh "docker build --build-arg environment=${BRANCH_NAME} -t ${WEB_BUILD_TAG} --target base ."
                sh "docker build --build-arg environment=${BRANCH_NAME} -t ${NGINX_BUILD_TAG} --target base /nginx"
            }
        }
        stage("build image and test karma") {
            steps{
                sh "docker build --rm --build-arg environment=${BRANCH_NAME} -t ${WEB_BUILD_TAG} ."
                sh "docker build --rm --build-arg environment=${BRANCH_NAME} -t ${NGINX_BUILD_TAG} /nginx"
                
            }
        }
        stage("push docker image") {
            steps{
                sh """
                    docker login -u ap-southeast-2@OA4R6SQSJDS6O5TPXWUJ -p 092929273c8458b0141bdca0a6475a3f3103eb3f4fa57b4a5405635828bc4c9a ${REGISTRY}
                    docker push ${WEB_BUILD_TAG}
                    docker push ${NGINX_BUILD_TAG}
                """
            }
        }
        stage("deploy") {
            steps{
                withCredentials([string(credentialsId: 'SENDINBLUE_TOKEN', variable: 'SENDINBLUE_TOKEN_JENKINS'),
                    string(credentialsId: 'MONGO_HOST', variable: 'MONGO_HOST_JENKINS')]) {
                    sh """
                       ssh -oStrictHostKeyChecking=no -t oddsbooking@159.138.240.167 \"
                           chmod +x ./Mentor/deploy-script.sh
                           REGISTRY=${REGISTRY} \
                           SENDINBLUE_TOKEN=${SENDINBLUE_TOKEN_JENKINS} \
                           MONGO_DB=${MONGO_HOST_JENKINS} \
                           BRANCH_NAME=${BRANCH_NAME} \
                           ./Mentor/deploy-script.sh
                       \"
                    """
                }
            }
        }
    }
}