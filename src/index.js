import bootstrap from './bootstrap';

require('dotenv').config({silent: true});

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL,
  LOG_STREAM: process.stdout,
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESSKEYID: process.env.AWS_ACCESSKEYID,
  AWS_SECRETACCESSKEY: process.env.AWS_SECRETACCESSKEY,
  S3_BUCKET: process.env.S3_BUCKET,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT
};

bootstrap(config);
