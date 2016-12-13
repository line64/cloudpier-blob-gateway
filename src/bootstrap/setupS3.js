import aws from 'aws-sdk';

export default function (state) {

  const {
    config: {
      AWS_REGION,
      AWS_ACCESSKEYID,
      AWS_SECRETACCESSKEY
    },
    bunyanLog
  } = state;

  bunyanLog.info('setting up s3', { AWS_ACCESSKEYID, AWS_SECRETACCESSKEY, AWS_REGION });

  const s3 = new aws.S3({
    accessKeyId: AWS_ACCESSKEYID,
    secretAccessKey: AWS_SECRETACCESSKEY,
    region: AWS_REGION
  });

  return {
    ...state,
    s3
  };

}
