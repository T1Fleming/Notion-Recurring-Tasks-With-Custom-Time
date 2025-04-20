const cdk = require('aws-cdk-lib');
const sns = require('aws-cdk-lib/aws-sns');
const subs = require('aws-cdk-lib/aws-sns-subscriptions');
const sqs = require('aws-cdk-lib/aws-sqs');

class MvStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // Retrieve the DEPLOY_ENVIRONMENT context variable
    const deployEnvironment = this.node.tryGetContext('deployEnv') || 'default';

    // Prefix resource names with the deploy environment
    const queue = new sqs.Queue(this, `${deployEnvironment}-MvQueue`, {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, `${deployEnvironment}-MvTopic`);

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}

module.exports = { MvStack };
