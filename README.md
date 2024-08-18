Simple blog app made with **Gatsby**.  

- Blog articles are completely generated from markdown files.
- News data are received from a third-party API (SSG).
- Currency page are served different content for each request for this page (SSR).
- The application are deployed on AWS S3 and AWS Cloudfront per using the AWS CDK.
- The application also are deployed to Netlify and AWS Amplify.
- Full CI/CD using Github Actions

## Hosting

Netlify: https://blog11111.netlify.app/  
AWS CloudFront: https://d16tnwmd5nxnrh.cloudfront.net/ (**Currency** page doesn\`t work)  
AWS Amplify: https://homework.d30ykqhphozwql.amplifyapp.com/ (**Currency** page doesn`t work)

## Run app

1. go to app folder `cd app`
2. install dependencies `npm i`
3. run `npm start`

## Setup AWS

1. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
2. Run `aws configure` in terminal and paste AWS Keys (Access Key ID, Secret Access Key) that you had created before with [IAM console -> User -> Security credentials -> Access keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html?icmpid=docs_iam_console#Using_CreateAccessKey)
3. Add these keys to repository settings -> Security (Security and Variables) -> Repository secrets. They will be used by ci/cd.

## Manually Deployment Instructions to AWS

1. go to infrastructure folder `cd infrastructure`
2. install dependencies `npm i`
3. provise specific AWS resources in your environment that are used by the AWS CDK `npm run bootstrap` (this step is required only once)
4. generate the CloudFormation template for your stack `npm run synth`
5. deploy your stack to AWS `npm run deploy`
