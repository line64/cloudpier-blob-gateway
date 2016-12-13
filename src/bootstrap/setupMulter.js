import multer from 'multer';
import multerS3 from 'multer-s3';
import { buildBlobKey, buildBlobMetadata } from '../conventions';

export default function(state) {

  const {
    config: {
      S3_BUCKET
    },
    s3
  } = state;

  const multerMiddleware = multer({
    storage: multerS3({
      s3: s3,
      bucket: S3_BUCKET,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      metadata: (req, file, cb) => {

        try {
          let metatdata = buildBlobMetadata(req.user, req.body, file);
          cb(null, metatdata);
        } catch (err) {
          cb(err);
        }

      },
      key: function (req, file, cb) {

        try {
          let key = buildBlobKey(req.user, req.body, file);
          cb(null, key);
        } catch (err) {
          cb(err);
        }

      }
    })
  });

  return {
    ...state,
    multerMiddleware
  };

}
