# These mimic the variables that would be set by github

export AWS_PROFILE=default
export DEPLOY_ENVIRONMENT=prod

cd iac
npm i
cdk deploy --context deployEnv=$DEPLOY_ENVIRONMENT