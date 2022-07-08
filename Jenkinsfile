pipeline{
    
    agent any

    environment{

        ORGANIZATION = "odds-booking"
        REGISTRY = "swr.ap-southeast-2.myhuaweicloud.com"
        TAG = "web-mentor:${BRANCH_NAME}"
        WEB_BUILD_TAG = "${REGISTRY}/${ORGANIZATION}/${TAG}"
    }

    stages{
        stage("install dependency") {
            steps{
                sh "docker build --build-arg environment=${BRANCH_NAME} -t ${WEB_BUILD_TAG} --target base ."
            }
        }
        stage("build image and test karma") {
            steps{
                sh "docker build --rm --build-arg environment=${BRANCH_NAME} -t ${WEB_BUILD_TAG} ."
            }
        }
        stage("push docker image") {
            steps{
                sh """
                    docker login -u ap-southeast-2@OA4R6SQSJDS6O5TPXWUJ -p 092929273c8458b0141bdca0a6475a3f3103eb3f4fa57b4a5405635828bc4c9a ${REGISTRY}
                    docker push ${WEB_BUILD_TAG}
                """
            }
        }
        stage("deploy") {
            steps{
                sh  """
                    ssh -oStrictHostKeyChecking=no -t oddsbooking@159.138.240.167 \"
                            REGISTRY=${REGISTRY} \
                            BRANCH_NAME=${BRANCH_NAME} \
                            ./Mentor/deploy-script-web.sh
                  \"
                """
            }
        }
    }
}
