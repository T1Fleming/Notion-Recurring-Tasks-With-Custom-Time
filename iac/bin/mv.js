#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { MvStack } = require('../lib/mv-stack');

const app = new cdk.App();
new MvStack(app, 'MvStack');
